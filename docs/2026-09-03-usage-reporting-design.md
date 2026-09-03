# mkt-ui-mockup: usage reporting + admin dashboard

**Date:** 2026-09-03
**Status:** approved, pending implementation

## Problem

An internal Anduin skill-review tool flagged `mkt-ui-mockup` (and, implicitly, any plugin submitted for internal use) against a checklist item: *"MCP reports each session back to an app"* — currently unmet, since the skill has no MCP server and does nothing over the network.

Separately, the skill's owner wants visibility into how the team is actually using `mkt-ui-mockup`: who's building mockups, for which product/feature, and whether their builds are succeeding — visible only to the owner (admin), not to the team itself.

This spec covers both: a minimal MCP server that reports each mockup-build session to a hosted endpoint, and an admin-only dashboard to view that activity.

## Scope

**In scope (build now):**
- A local MCP server, distributed with the plugin, that reports one event per completed mockup build (or failed attempt) to a hosted API.
- Product classification against a fixed list of 7 real Anduin products, with an explicit ask-the-user fallback (never a silent guess) plus an `Unclassified` + note path for the admin to spot real gaps in the list.
- Feature classification that self-learns over time (no fixed list to maintain) via a `list_features` lookup before reporting.
- A hosted API + Postgres database on Anduin's internal Dokploy infrastructure.
- An admin-only dashboard (single admin user — the skill's owner) showing session activity, filterable by product/email, and a "most-mocked product" breakdown.

**Explicitly out of scope for this pass (future feature, schema-compatible but not built):**
- Storing the actual mockup PNG/HTML files (a "library" of past mockups). The `sessions` table is designed so a future `mockup_files` table can reference it by `session_id` without a schema migration to the `sessions` table itself, but no file storage, no file upload path, and no file-serving UI is built now.
- Multi-admin / team-visible dashboard. Only one admin credential exists.
- Any product/feature list beyond the 7 named products below.

## Non-goals

- This does not change anything about how `mkt-ui-mockup` builds mockups (`template.html`, `patterns.css`, `tokens.css`, `verify.py`, `render.py`, `trim.py` are all unaffected). Reporting is a side effect appended to the existing build steps, not a redesign of them.
- This is not a general-purpose analytics platform for all Anduin skills — only `mkt-ui-mockup` reports to it. (A prior brainstorming turn explicitly narrowed scope to this skill only, not an org-wide system.)
- Reporting must never block or fail a mockup build. If the network call fails for any reason, the build's own success/failure is unaffected — this is a hard requirement, not a nice-to-have.

## Fixed product list

Provided directly by the skill's owner; matched by keyword against the user's request text when a mockup is built:

1. Fund Subscription
2. Data Room
3. IDM
4. Engagement Hub
5. Integration Hub
6. Investor Portal
7. Data Extraction

This list lives in exactly one place — the MCP server's source — and both `report_session` and `list_features` validate against it.

## Architecture

```
Coworker's machine                          Anduin's internal Dokploy infra
┌─────────────────────────┐                 ┌────────────────────────────────┐
│ mkt-ui-mockup skill      │                 │  reporting-api (Node/Express)   │
│  (Claude, via patterns.  │   HTTPS POST    │  ┌────────────────────────────┐ │
│  css/tokens.css/render.  │────────────────▶│  │ POST /api/report            │ │
│  py/etc — unchanged)     │                 │  │ GET  /api/features          │ │
│         │                │                 │  │ GET  /admin (session-       │ │
│         ▼                │                 │  │      cookie auth)           │ │
│ mkt-mockup-report-mcp    │◀────────────────│  └────────────────────────────┘ │
│  (new local MCP server)  │   HTTPS GET     │              │                  │
└─────────────────────────┘  (list_features) │              ▼                  │
                                              │  Postgres: sessions table       │
                                              └────────────────────────────────┘
```

### Component 1: `mkt-mockup-report-mcp` (new, local)

A small Python MCP server, distributed alongside the plugin (declared in `plugins/mkt-ui-mockup/.mcp.json` per the plugin spec's `mcpServers` mechanism), exposing two tools:

**`list_features(product: str) -> string[]`**
- `product` may be one of the 7 fixed names, or the literal `"Unclassified"` (see below).
- `GET`s `{API_BASE_URL}/api/features?product=<product>`, returns the JSON array of distinct feature names already reported for that product.
- On network failure: returns an empty list. Claude then has no prior features to match against and names a new one — this degrades gracefully rather than blocking.

**`report_session(product: str, feature: str, status: "success" | "verify_failed" | "render_failed", error: str | None, product_note: str | None) -> None`**
- `product` must be one of the 7 fixed names, or `"Unclassified"`.
- `product_note` is required (non-empty) when `product` is `"Unclassified"`, and should be omitted/`None` otherwise — this is where the user's own words for an unmatched product get captured for the admin to review.
- Reads `git config user.email` itself (no email parameter — this is the identity source decided earlier, requires no per-coworker setup).
- Adds a UTC timestamp.
- `POST`s `{API_BASE_URL}/api/report` with `{ user_email, product, product_note, feature, status, error, timestamp }`.
- **On any failure (network error, non-2xx response, timeout): catches the exception, logs nothing user-visible, returns success to the caller regardless.** This is the concrete implementation of the hard non-goal above — a reporting failure must be invisible to the mockup-building flow.

**Unmatched product → ask the user, don't guess.** If Claude cannot confidently match the request to one of the 7 fixed product names, it must not silently pick the closest-sounding one or invent a new label. Instead: ask the user directly which product this is (the 7 names as options, plus an "other" option for free text). If the user's answer is still not one of the 7 (they typed something else under "other"), proceed with the build as normal, but report with `product = "Unclassified"` and `product_note` set to exactly what the user typed. This surfaces real gaps in the fixed list to the admin (via the dashboard, see Component 4) instead of silently misclassifying or blocking the build.

`API_BASE_URL` is read from an environment variable (`MKT_MOCKUP_REPORT_API_URL`) with a hardcoded fallback to the real deployed URL once known — so the server works out of the box for coworkers who install the plugin normally, but remains overridable for testing.

### Component 2: `SKILL.md` build-steps addition

One new step appended after the existing "deliver both the `.html` source and the trimmed, transparent `.png`" step:

> 8. Report the completed build: determine `product` by matching the user's request against the 7 fixed product names (Fund Subscription, Data Room, IDM, Engagement Hub, Integration Hub, Investor Portal, Data Extraction). If no confident match exists, **ask the user directly** which product this is (present the 7 names plus an "other" option) rather than guessing — if their answer still isn't one of the 7, use `product = "Unclassified"` and set `product_note` to what they typed. Once `product` is settled, call `list_features(product)` and check whether an existing feature name already describes this request closely enough to reuse verbatim — prefer reuse over inventing a near-duplicate (e.g. don't create "Email Notifications" if "Email Notification" already exists for this product). Only if nothing fits, name a new one: short, Title Case, no stray punctuation. Then call `report_session(product, feature, status, error, product_note)` with `status` reflecting whether `verify.py` and `render.py` actually succeeded. This step never blocks delivery of the mockup — if reporting tools are unavailable or error, proceed anyway.

This keeps the classification judgment call where it already lives (with Claude, per-request, same as every other design decision in this skill) rather than pushing it into server code — consistent with the "thin server" recommendation from the earlier MCP-vs-Skill brainstorm in this same skill's history.

### Component 3: `reporting-api` (new, hosted on Dokploy)

A minimal Node/Express service (or equivalent — implementation detail, not fixed by this spec) with three routes:

- **`POST /api/report`** — validates the required fields are present, `product` is one of the 7 names or `"Unclassified"`, and `product_note` is present when (and only meaningfully used when) `product = "Unclassified"`. Inserts a row into `sessions`, returns 204. No authentication (see Security below).
- **`GET /api/features?product=X`** — returns `SELECT DISTINCT feature FROM sessions WHERE product = $1 ORDER BY feature`, as a JSON array. No authentication (read-only, non-sensitive — feature names only).
- **`GET /admin`** (and whatever sub-routes the dashboard needs, e.g. `/admin/api/sessions`) — requires an authenticated session. Single hardcoded admin credential (password from an environment variable set at Dokploy deploy time — no user table, no multi-user auth system, matching the "single admin" scope decision).

**Database schema:**

```sql
CREATE TABLE sessions (
  id            SERIAL PRIMARY KEY,
  user_email    TEXT NOT NULL,
  product       TEXT NOT NULL CHECK (product IN (
                  'Fund Subscription', 'Data Room', 'IDM', 'Engagement Hub',
                  'Integration Hub', 'Investor Portal', 'Data Extraction',
                  'Unclassified'
                )),
  product_note  TEXT,  -- the user's own words, only meaningful when product = 'Unclassified'
  feature       TEXT NOT NULL,
  status        TEXT NOT NULL CHECK (status IN ('success', 'verify_failed', 'render_failed')),
  error         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_sessions_product ON sessions(product);
CREATE INDEX idx_sessions_created_at ON sessions(created_at DESC);
```

The `product` `CHECK` constraint is the single source of truth for the fixed list plus the `'Unclassified'` escape hatch — if the 7 names ever change, this constraint and the MCP server's own list must be updated together.

This is deliberately the entire schema for this pass. The future `mockup_files` table (file library) would be `CREATE TABLE mockup_files (id SERIAL PRIMARY KEY, session_id INTEGER REFERENCES sessions(id), file_url TEXT, file_type TEXT, created_at TIMESTAMPTZ DEFAULT now())` — noted here so the `sessions.id` primary key exists for it to reference later, but that table is not created now.

Deployed on Dokploy as: one Docker app (the Express service) + one Dokploy-managed Postgres instance. Exact Dokploy project/app naming and the real `API_BASE_URL` are implementation details decided during the implementation plan, not this design.

### Component 4: Admin dashboard

Served from the same `reporting-api` service at `/admin` (simplest option — no separate deploy). After login:

- A table of recent sessions: email, product (showing `product_note` inline next to `Unclassified` rows, e.g. "Unclassified — "Deal Room""), feature, status (with a visual distinction for `success` vs the two failure states), timestamp — newest first (matches the `idx_sessions_created_at` index).
- Filters: by product (dropdown of the 7 fixed names, plus "Unclassified"), by email (text match).
- A "most-mocked product" view: a simple `GROUP BY product, COUNT(*)` bar/table — buildable now since `product` already exists on every row; no schema change needed for this specific stat. `Unclassified` appears as its own bucket, which is itself the signal that the fixed list may need a new entry.

No specific frontend framework is mandated by this spec — plain server-rendered HTML is sufficient given the single-user, low-traffic nature of this dashboard; a heavier SPA setup would be over-engineering for this scope.

## Security

- `/api/report` and `/api/features` are unauthenticated. This is an accepted tradeoff for v1 given the scope (internal tool, low sensitivity data — email + product/feature names, no mockup content, no secrets). If this becomes a concern later, a shared-secret header check is the smallest addition that wouldn't require coworker-side setup (the secret would ship in the MCP server's own code/env, not something each person configures).
- `/admin` requires the single admin credential. No OAuth, no SSO integration — deliberately minimal for a one-person-access dashboard.
- No PII beyond a corporate email address is collected. No mockup content, no file contents, no IP addresses logged by this design.

## Testing

Since this involves a real network service (unlike the file-based `verify.py`/`trim.py`/`render.py`), testing happens at two levels:

1. **MCP server, in isolation:** call `list_features`/`report_session` against a locally-run copy of `reporting-api` (e.g. `docker run` the same image that would deploy to Dokploy, pointed at a local Postgres) — confirms the HTTP contract works before touching the real deployment.
2. **End-to-end, once deployed:** build one real test mockup through the actual skill, confirm the row lands in the real Dokploy-hosted Postgres, confirm it's visible on `/admin`, and confirm a deliberately-broken network path (e.g. wrong `API_BASE_URL`) still lets the mockup build complete normally — this is the one behavior this spec treats as non-negotiable and worth explicitly verifying, not just asserting.

## Open questions / risks

- The real Dokploy deployment URL doesn't exist yet — `mkt-mockup-report-mcp`'s fallback URL is a placeholder until the implementation plan actually deploys `reporting-api` and that URL is known.
- `dokploy-mcp` (the MCP server that would let Claude manage Dokploy deployments directly) failed to connect in this session (`CONNECT_TIMEOUT`) — deployment during implementation may need to go through the Dokploy web UI or CLI manually if that MCP connection isn't restored by then.
- "Feature self-learns over time" relies on Claude's own judgment for near-duplicate matching (e.g. recognizing "Email Notification" and "email notifications for CC exclusion" describe the same feature) — there's no automated dedup, so feature-name drift is possible if Claude's matching is inconsistent across sessions. Acceptable for v1 per the owner's explicit choice of this approach over a fixed feature list.
