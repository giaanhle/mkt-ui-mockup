# mkt-ui-mockup Usage Reporting + Admin Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give `mkt-ui-mockup` a local MCP server that reports every mockup build (success or failure) to a hosted API, plus an admin-only dashboard showing who built what, filterable by product, without ever blocking a mockup build if reporting fails.

**Architecture:** Three components deployed independently but joined by one HTTP contract: (1) `mkt-mockup-report-mcp`, a local Python MCP server shipped inside the plugin, exposing `list_features`/`report_session` tools; (2) `reporting-api`, a Node/Express service on Anduin's internal Dokploy infra backed by Postgres, exposing `POST /api/report`, `GET /api/features`, and a session-cookie-authenticated `/admin`; (3) the `sessions` table itself, whose schema is the shared contract both sides code against.

**Tech Stack:** Python 3 + the `mcp` SDK (server), Node.js + Express (API), `pg` (Postgres client), Docker (Dokploy deploy unit), plain server-rendered HTML for the dashboard (no frontend framework — matches the spec's explicit "no SPA" call).

**Spec:** `~/.claude/skills/mkt-ui-mockup/docs/2026-09-03-usage-reporting-design.md`

## Global Constraints

- Reporting must never block or fail a mockup build — any MCP tool call that errors, times out, or can't reach the network must be swallowed silently and treated as if it succeeded, from the skill's perspective.
- The 7 fixed product names, verbatim, used in both the MCP server's validation and the DB's `CHECK` constraint: `Fund Subscription`, `Data Room`, `IDM`, `Engagement Hub`, `Integration Hub`, `Investor Portal`, `Data Extraction`. An 8th value, `Unclassified`, is also valid and requires `product_note` to carry the user's own words.
- `status` is one of exactly three values: `success`, `verify_failed`, `render_failed`.
- Identity comes from `git config user.email`, read directly by the MCP server — no per-coworker setup, no API keys, no login for reporting.
- `/api/report` and `/api/features` are unauthenticated by design (spec's accepted v1 tradeoff). `/admin` requires the single admin credential (password from an environment variable).
- No mockup file content, no IP addresses, and no PII beyond a corporate email address are ever sent or stored.
- Never guess a product classification silently — an unmatched product must be resolved by asking the user, not by picking the closest-sounding of the 7.

---

## File Structure

New files, none of which touch the existing mockup-building code (`patterns.css`, `tokens.css`, `template.html`, `verify.py`, `render.py`, `trim.py` are all unmodified):

```
mkt-ui-mockup/                                   (skill root)
├── SKILL.md                                     (MODIFY: add build step 8)
└── reporting/                                   (NEW directory, repo root)
    ├── mcp-server/
    │   ├── report_mcp.py                        (NEW: the MCP server)
    │   ├── requirements.txt                     (NEW)
    │   └── test_report_mcp.py                   (NEW)
    └── api/
        ├── package.json                         (NEW)
        ├── server.js                            (NEW: Express app, routes)
        ├── db.js                                 (NEW: Postgres connection + queries)
        ├── schema.sql                            (NEW: the sessions table DDL)
        ├── views/
        │   └── admin.html                        (NEW: dashboard page template)
        ├── Dockerfile                            (NEW)
        └── test/
            └── server.test.js                    (NEW)

plugins/mkt-ui-mockup/
├── .claude-plugin/plugin.json                   (MODIFY: version bump, once at the end)
├── .mcp.json                                     (NEW: declares reporting/mcp-server to the plugin)
└── skills/mkt-ui-mockup/SKILL.md                (MODIFY: synced copy, via sync-plugin.py)

sync-plugin.py                                    (MODIFY: no logic change needed —
                                                    SKILL.md is already in its SYNCED_FILES list)
```

Two clean boundaries: `reporting/mcp-server/` only knows how to call HTTP and read `git config` — it has zero Postgres/Express knowledge. `reporting/api/` only knows HTTP + Postgres — it has zero knowledge of MCP, Claude, or how mockups are built. The `sessions` table schema (`schema.sql`) is the only thing both sides need to agree on, and it's a single file.

---

## Task 1: `reporting-api` — schema and DB access

**Files:**
- Create: `reporting/api/schema.sql`
- Create: `reporting/api/package.json`
- Create: `reporting/api/db.js`
- Test: `reporting/api/test/db.test.js`

**Interfaces:**
- Consumes: nothing (first task)
- Produces: `db.js` exports `insertSession({user_email, product, product_note, feature, status, error}) -> Promise<void>`, `listFeatures(product) -> Promise<string[]>`, `listSessions({product, email} = {}) -> Promise<Array<{id, user_email, product, product_note, feature, status, error, created_at}>>`, `productCounts() -> Promise<Array<{product, count}>>`. All four take/return plain JS values — no Express `req`/`res` objects leak into this file.

- [ ] **Step 1: Write `schema.sql`**

```sql
-- reporting/api/schema.sql
CREATE TABLE IF NOT EXISTS sessions (
  id            SERIAL PRIMARY KEY,
  user_email    TEXT NOT NULL,
  product       TEXT NOT NULL CHECK (product IN (
                  'Fund Subscription', 'Data Room', 'IDM', 'Engagement Hub',
                  'Integration Hub', 'Investor Portal', 'Data Extraction',
                  'Unclassified'
                )),
  product_note  TEXT,
  feature       TEXT NOT NULL,
  status        TEXT NOT NULL CHECK (status IN ('success', 'verify_failed', 'render_failed')),
  error         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sessions_product ON sessions(product);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON sessions(created_at DESC);
```

- [ ] **Step 2: Write `package.json`**

```json
{
  "name": "mkt-ui-mockup-reporting-api",
  "version": "1.0.0",
  "private": true,
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "node --test test/"
  },
  "dependencies": {
    "express": "^4.19.2",
    "pg": "^8.12.0",
    "express-session": "^1.18.0"
  }
}
```

- [ ] **Step 3: Install dependencies**

Run: `cd reporting/api && npm install`
Expected: `node_modules/` created, no errors.

- [ ] **Step 4: Write `db.js`**

```javascript
// reporting/api/db.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const FIXED_PRODUCTS = [
  'Fund Subscription', 'Data Room', 'IDM', 'Engagement Hub',
  'Integration Hub', 'Investor Portal', 'Data Extraction', 'Unclassified',
];

const STATUSES = ['success', 'verify_failed', 'render_failed'];

function isValidProduct(product) {
  return FIXED_PRODUCTS.includes(product);
}

function isValidStatus(status) {
  return STATUSES.includes(status);
}

async function insertSession({ user_email, product, product_note, feature, status, error }) {
  await pool.query(
    `INSERT INTO sessions (user_email, product, product_note, feature, status, error)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [user_email, product, product_note || null, feature, status, error || null]
  );
}

async function listFeatures(product) {
  const result = await pool.query(
    `SELECT DISTINCT feature FROM sessions WHERE product = $1 ORDER BY feature`,
    [product]
  );
  return result.rows.map((r) => r.feature);
}

async function listSessions({ product, email } = {}) {
  const conditions = [];
  const params = [];
  if (product) {
    params.push(product);
    conditions.push(`product = $${params.length}`);
  }
  if (email) {
    params.push(`%${email}%`);
    conditions.push(`user_email ILIKE $${params.length}`);
  }
  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const result = await pool.query(
    `SELECT id, user_email, product, product_note, feature, status, error, created_at
     FROM sessions ${where} ORDER BY created_at DESC LIMIT 200`,
    params
  );
  return result.rows;
}

async function productCounts() {
  const result = await pool.query(
    `SELECT product, COUNT(*)::int AS count FROM sessions GROUP BY product ORDER BY count DESC`
  );
  return result.rows;
}

module.exports = {
  pool,
  FIXED_PRODUCTS,
  STATUSES,
  isValidProduct,
  isValidStatus,
  insertSession,
  listFeatures,
  listSessions,
  productCounts,
};
```

- [ ] **Step 5: Write the failing test**

```javascript
// reporting/api/test/db.test.js
const test = require('node:test');
const assert = require('node:assert');
const { isValidProduct, isValidStatus, FIXED_PRODUCTS } = require('../db');

test('isValidProduct accepts all 7 fixed names plus Unclassified', () => {
  for (const name of FIXED_PRODUCTS) {
    assert.strictEqual(isValidProduct(name), true);
  }
});

test('isValidProduct rejects an unknown product', () => {
  assert.strictEqual(isValidProduct('Not A Real Product'), false);
});

test('isValidStatus accepts the 3 known statuses', () => {
  assert.strictEqual(isValidStatus('success'), true);
  assert.strictEqual(isValidStatus('verify_failed'), true);
  assert.strictEqual(isValidStatus('render_failed'), true);
});

test('isValidStatus rejects an unknown status', () => {
  assert.strictEqual(isValidStatus('pending'), false);
});
```

- [ ] **Step 6: Run test to verify it fails**

Run: `cd reporting/api && node --test test/db.test.js`
Expected: FAIL — `db.js` doesn't exist yet, or if Step 4 was already done, this should actually PASS since these are pure functions with no DB connection needed. Verify by temporarily renaming `db.js` to confirm the test fails without it, then restore.

- [ ] **Step 7: Run test to verify it passes**

Run: `cd reporting/api && node --test test/db.test.js`
Expected: PASS — all 4 tests green. (These 4 tests exercise pure validation logic only; they intentionally don't touch `pool`/Postgres, so no DB needs to be running yet.)

- [ ] **Step 8: Commit**

```bash
git add reporting/api/schema.sql reporting/api/package.json reporting/api/db.js reporting/api/test/db.test.js
git commit -m "feat(reporting-api): add sessions schema and DB access layer"
```

---

## Task 2: `reporting-api` — HTTP routes and admin auth

**Files:**
- Create: `reporting/api/server.js`
- Create: `reporting/api/views/admin.html`
- Test: `reporting/api/test/server.test.js`

**Interfaces:**
- Consumes: `db.js`'s `insertSession`, `listFeatures`, `listSessions`, `productCounts`, `isValidProduct`, `isValidStatus` (Task 1).
- Produces: an Express `app` (exported from `server.js` for testing) listening on 3 route groups: `POST /api/report`, `GET /api/features`, `GET|POST /admin*`. Later tasks (Task 3, the MCP server) depend on the exact request/response shapes documented in each route below — those shapes are the contract.

- [ ] **Step 1: Write the failing test for `POST /api/report`**

```javascript
// reporting/api/test/server.test.js
const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');

// Use an in-memory fake for db.js so this test doesn't need real Postgres.
const db = require('../db');
const originalInsertSession = db.insertSession;
const insertedRows = [];
db.insertSession = async (row) => { insertedRows.push(row); };

const { app } = require('../server');

function request(server, method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const req = http.request(
      { hostname: '127.0.0.1', port: server.address().port, path, method,
        headers: data ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) } : {} },
      (res) => {
        let raw = '';
        res.on('data', (chunk) => (raw += chunk));
        res.on('end', () => resolve({ status: res.statusCode, body: raw }));
      }
    );
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

test('POST /api/report inserts a valid session and returns 204', async () => {
  const server = app.listen(0);
  const res = await request(server, 'POST', '/api/report', {
    user_email: 'test@anduintransact.com',
    product: 'Fund Subscription',
    feature: 'AML/KYC',
    status: 'success',
  });
  assert.strictEqual(res.status, 204);
  assert.strictEqual(insertedRows.length, 1);
  assert.strictEqual(insertedRows[0].product, 'Fund Subscription');
  server.close();
});

test('POST /api/report rejects an invalid product with 400', async () => {
  const server = app.listen(0);
  const res = await request(server, 'POST', '/api/report', {
    user_email: 'test@anduintransact.com',
    product: 'Not A Real Product',
    feature: 'AML/KYC',
    status: 'success',
  });
  assert.strictEqual(res.status, 400);
  server.close();
});

test('POST /api/report rejects Unclassified without product_note with 400', async () => {
  const server = app.listen(0);
  const res = await request(server, 'POST', '/api/report', {
    user_email: 'test@anduintransact.com',
    product: 'Unclassified',
    feature: 'Something new',
    status: 'success',
  });
  assert.strictEqual(res.status, 400);
  server.close();
});

test('GET /api/features returns distinct feature names for a product', async () => {
  db.listFeatures = async (product) => (product === 'Fund Subscription' ? ['AML/KYC', 'Investor Data Prefill'] : []);
  const server = app.listen(0);
  const res = await request(server, 'GET', '/api/features?product=Fund%20Subscription');
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(JSON.parse(res.body), ['AML/KYC', 'Investor Data Prefill']);
  server.close();
});

test('GET /admin without a session redirects or 401s', async () => {
  const server = app.listen(0);
  const res = await request(server, 'GET', '/admin');
  assert.ok(res.status === 401 || res.status === 302);
  server.close();
});

// restore
db.insertSession = originalInsertSession;
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd reporting/api && node --test test/server.test.js`
Expected: FAIL — `../server` doesn't exist / doesn't export `app` yet.

- [ ] **Step 3: Write `server.js`**

```javascript
// reporting/api/server.js
const express = require('express');
const session = require('express-session');
const path = require('node:path');
const fs = require('node:fs');
const {
  insertSession, listFeatures, listSessions, productCounts,
  isValidProduct, isValidStatus,
} = require('./db');

const app = express();
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-only-secret-change-in-prod',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 8 }, // 8 hours
}));

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || null;

// ---- Unauthenticated reporting endpoints ----

app.post('/api/report', async (req, res) => {
  const { user_email, product, product_note, feature, status, error } = req.body || {};

  if (!user_email || !feature || !status) {
    return res.status(400).json({ error: 'user_email, feature, and status are required' });
  }
  if (!isValidProduct(product)) {
    return res.status(400).json({ error: `invalid product: ${product}` });
  }
  if (!isValidStatus(status)) {
    return res.status(400).json({ error: `invalid status: ${status}` });
  }
  if (product === 'Unclassified' && !product_note) {
    return res.status(400).json({ error: 'product_note is required when product is Unclassified' });
  }

  try {
    await insertSession({ user_email, product, product_note, feature, status, error });
    return res.status(204).end();
  } catch (e) {
    return res.status(500).json({ error: 'failed to record session' });
  }
});

app.get('/api/features', async (req, res) => {
  const { product } = req.query;
  if (!isValidProduct(product)) {
    return res.status(400).json({ error: `invalid product: ${product}` });
  }
  try {
    const features = await listFeatures(product);
    return res.status(200).json(features);
  } catch (e) {
    return res.status(500).json({ error: 'failed to list features' });
  }
});

// ---- Admin auth ----

function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) return next();
  return res.status(401).send('Unauthorized. POST credentials to /admin/login.');
}

app.post('/admin/login', express.urlencoded({ extended: false }), (req, res) => {
  if (ADMIN_PASSWORD && req.body.password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.redirect('/admin');
  }
  return res.status(401).send('Invalid password.');
});

app.get('/admin/login', (req, res) => {
  res.send(`<form method="POST" action="/admin/login">
    <input type="password" name="password" placeholder="Admin password" />
    <button type="submit">Log in</button>
  </form>`);
});

app.get('/admin', requireAdmin, async (req, res) => {
  const html = fs.readFileSync(path.join(__dirname, 'views', 'admin.html'), 'utf-8');
  res.status(200).send(html);
});

app.get('/admin/api/sessions', requireAdmin, async (req, res) => {
  const { product, email } = req.query;
  const rows = await listSessions({ product, email });
  res.status(200).json(rows);
});

app.get('/admin/api/product-counts', requireAdmin, async (req, res) => {
  const rows = await productCounts();
  res.status(200).json(rows);
});

module.exports = { app };

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`reporting-api listening on :${port}`));
}
```

- [ ] **Step 4: Write `views/admin.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>mkt-ui-mockup usage dashboard</title>
<style>
  body { font-family: -apple-system, sans-serif; margin: 0; padding: 24px; background: #f5f6f8; color: #1a2233; }
  h1 { font-size: 20px; }
  table { width: 100%; border-collapse: collapse; background: #fff; margin-top: 16px; }
  th, td { text-align: left; padding: 8px 12px; border-bottom: 1px solid #edeff2; font-size: 13px; }
  th { background: #f5f6f8; font-weight: 600; }
  .status-success { color: #4cae72; }
  .status-verify_failed, .status-render_failed { color: #e85c5c; }
  select, input { padding: 6px; margin-right: 8px; }
  #counts { display: flex; gap: 12px; margin-top: 16px; flex-wrap: wrap; }
  .count-tile { background: #fff; border: 1px solid #edeff2; border-radius: 8px; padding: 10px 14px; font-size: 13px; }
  .count-tile b { display: block; font-size: 18px; }
</style>
</head>
<body>
  <h1>mkt-ui-mockup usage</h1>

  <div>
    <select id="productFilter">
      <option value="">All products</option>
      <option>Fund Subscription</option>
      <option>Data Room</option>
      <option>IDM</option>
      <option>Engagement Hub</option>
      <option>Integration Hub</option>
      <option>Investor Portal</option>
      <option>Data Extraction</option>
      <option>Unclassified</option>
    </select>
    <input id="emailFilter" placeholder="Filter by email" />
    <button id="applyFilters">Apply</button>
  </div>

  <div id="counts"></div>

  <table id="sessionsTable">
    <thead>
      <tr><th>Time</th><th>Email</th><th>Product</th><th>Feature</th><th>Status</th><th>Error</th></tr>
    </thead>
    <tbody></tbody>
  </table>

  <script>
    async function loadCounts() {
      const res = await fetch('/admin/api/product-counts');
      const counts = await res.json();
      const el = document.getElementById('counts');
      el.innerHTML = counts.map(c => `<div class="count-tile"><b>${c.count}</b>${c.product}</div>`).join('');
    }

    async function loadSessions() {
      const product = document.getElementById('productFilter').value;
      const email = document.getElementById('emailFilter').value;
      const params = new URLSearchParams();
      if (product) params.set('product', product);
      if (email) params.set('email', email);
      const res = await fetch('/admin/api/sessions?' + params.toString());
      const rows = await res.json();
      const tbody = document.querySelector('#sessionsTable tbody');
      tbody.innerHTML = rows.map(r => `
        <tr>
          <td>${new Date(r.created_at).toLocaleString()}</td>
          <td>${r.user_email}</td>
          <td>${r.product}${r.product === 'Unclassified' && r.product_note ? ' — "' + r.product_note + '"' : ''}</td>
          <td>${r.feature}</td>
          <td class="status-${r.status}">${r.status}</td>
          <td>${r.error || ''}</td>
        </tr>
      `).join('');
    }

    document.getElementById('applyFilters').addEventListener('click', loadSessions);
    loadCounts();
    loadSessions();
  </script>
</body>
</html>
```

- [ ] **Step 5: Run test to verify it passes**

Run: `cd reporting/api && node --test test/server.test.js`
Expected: PASS — all 5 tests green.

- [ ] **Step 6: Commit**

```bash
git add reporting/api/server.js reporting/api/views/admin.html reporting/api/test/server.test.js
git commit -m "feat(reporting-api): add HTTP routes, admin auth, and dashboard page"
```

---

## Task 3: `reporting-api` — Dockerfile for Dokploy deploy

**Files:**
- Create: `reporting/api/Dockerfile`
- Create: `reporting/api/.dockerignore`

**Interfaces:**
- Consumes: `package.json`, `server.js`, `db.js`, `schema.sql`, `views/admin.html` (Tasks 1–2).
- Produces: a Docker image that runs `reporting-api` on `$PORT`, expecting `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET` as env vars — this is the exact env-var contract Task 6 (deployment) and the spec's "Open questions" section rely on.

- [ ] **Step 1: Write `.dockerignore`**

```
node_modules
test
```

- [ ] **Step 2: Write `Dockerfile`**

```dockerfile
FROM node:20-slim

WORKDIR /app

COPY package.json .
RUN npm install --omit=dev

COPY server.js db.js schema.sql ./
COPY views ./views

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
```

- [ ] **Step 3: Build the image locally to verify it builds**

Run: `cd reporting/api && docker build -t mkt-ui-mockup-reporting-api:local .`
Expected: build completes with no errors, ends with an image ID.

- [ ] **Step 4: Run it locally against a throwaway Postgres to verify the contract end-to-end**

```bash
docker network create mkt-mockup-test-net 2>/dev/null || true

docker run -d --name mkt-mockup-test-pg --network mkt-mockup-test-net \
  -e POSTGRES_PASSWORD=test -e POSTGRES_DB=reporting \
  postgres:16-alpine

sleep 3

docker run --rm --network mkt-mockup-test-net \
  -v "$(pwd)/schema.sql:/schema.sql" postgres:16-alpine \
  psql "postgresql://postgres:test@mkt-mockup-test-pg:5432/reporting" -f /schema.sql

docker run -d --name mkt-mockup-test-api --network mkt-mockup-test-net \
  -e DATABASE_URL="postgresql://postgres:test@mkt-mockup-test-pg:5432/reporting" \
  -e ADMIN_PASSWORD=test123 \
  -p 3000:3000 \
  mkt-ui-mockup-reporting-api:local

sleep 2

curl -s -X POST http://localhost:3000/api/report \
  -H "Content-Type: application/json" \
  -d '{"user_email":"test@anduintransact.com","product":"Fund Subscription","feature":"AML/KYC","status":"success"}' \
  -w "\nstatus: %{http_code}\n"

curl -s "http://localhost:3000/api/features?product=Fund%20Subscription"

docker rm -f mkt-mockup-test-api mkt-mockup-test-pg
docker network rm mkt-mockup-test-net
```

Expected: the `POST` prints `status: 204`; the `GET /api/features` call prints `["AML/KYC"]`.

- [ ] **Step 5: Commit**

```bash
git add reporting/api/Dockerfile reporting/api/.dockerignore
git commit -m "feat(reporting-api): add Dockerfile for Dokploy deployment"
```

---

## Task 4: Deploy `reporting-api` to Dokploy

**Files:** none (infrastructure step, no repo files change except recording the real URL in Task 5)

**Interfaces:**
- Consumes: the Docker image from Task 3.
- Produces: a real, reachable `https://<app>.<domain>` URL and a provisioned Postgres instance with `schema.sql` applied — this URL is what Task 5's `mkt-mockup-report-mcp` needs as its fallback `API_BASE_URL`.

- [ ] **Step 1: Check whether `dokploy-mcp` is connected**

Run whatever tool-listing mechanism is available in your session and look for `mcp__dokploy-mcp__*` tools. If present, skip to Step 2b. If absent or the connection times out (as it did during the design phase — see the spec's Open Questions), use Step 2a.

- [ ] **Step 2a: Deploy via the Dokploy web UI or CLI (fallback path)**

1. Log into the Dokploy dashboard for Anduin's internal infra.
2. Create a new Postgres service. Note its internal connection string.
3. Connect to that Postgres (via Dokploy's built-in DB console, or `psql` if exposed) and run the contents of `reporting/api/schema.sql`.
4. Create a new Docker-based application, pointing it at this repo with `reporting/api` as the build context (or push the image built in Task 3 to whatever registry Dokploy pulls from — follow Dokploy's own documented flow for "deploy from Dockerfile").
5. Set environment variables on the app: `DATABASE_URL` (from step 2), `ADMIN_PASSWORD` (choose a real password, store it somewhere safe — this is the only admin credential), `SESSION_SECRET` (any long random string).
6. Deploy. Note the public URL Dokploy assigns.

- [ ] **Step 2b: Deploy via `dokploy-mcp` tools (if connected)**

Use the available `mcp__dokploy-mcp__*` tools to: create a Postgres service, apply `schema.sql` to it, create a Docker app from `reporting/api/Dockerfile`, set the three env vars from Step 2a.5, and deploy. Exact tool names depend on what's loaded — call `ToolSearch` with query `dokploy` to see the full list before starting.

- [ ] **Step 3: Verify the deployed API responds**

Run: `curl -s -X POST https://<the-real-url>/api/report -H "Content-Type: application/json" -d '{"user_email":"test@anduintransact.com","product":"IDM","feature":"deploy smoke test","status":"success"}' -w "\nstatus: %{http_code}\n"`
Expected: `status: 204`.

- [ ] **Step 4: Verify the dashboard is reachable**

Visit `https://<the-real-url>/admin` in a browser, log in with `ADMIN_PASSWORD`, confirm the smoke-test row from Step 3 appears in the table and in the product-count tiles.

- [ ] **Step 5: Record the real URL**

Write the URL down — it's needed verbatim in Task 5, Step 3.

---

## Task 5: `mkt-mockup-report-mcp` — the local MCP server

**Files:**
- Create: `reporting/mcp-server/report_mcp.py`
- Create: `reporting/mcp-server/requirements.txt`
- Test: `reporting/mcp-server/test_report_mcp.py`

**Interfaces:**
- Consumes: the deployed `reporting-api` from Task 4 (real URL), via plain HTTP — no shared code with the API, only the HTTP contract from Task 2.
- Produces: an MCP server process exposing tools `list_features(product: str) -> list[str]` and `report_session(product: str, feature: str, status: str, error: str | None = None, product_note: str | None = None) -> str`. Task 6 (`SKILL.md` update) calls these tool names with this exact signature.

- [ ] **Step 1: Write `requirements.txt`**

```
mcp>=1.0.0
requests>=2.31.0
```

- [ ] **Step 2: Install dependencies**

Run: `cd reporting/mcp-server && pip install -r requirements.txt`
Expected: installs without error.

- [ ] **Step 3: Write the failing test for product validation and graceful network failure**

```python
# reporting/mcp-server/test_report_mcp.py
import unittest
from unittest.mock import patch, MagicMock
import report_mcp


class TestProductValidation(unittest.TestCase):
    def test_all_seven_fixed_products_are_valid(self):
        for name in report_mcp.FIXED_PRODUCTS:
            self.assertTrue(report_mcp.is_valid_product(name))

    def test_unclassified_is_valid(self):
        self.assertTrue(report_mcp.is_valid_product("Unclassified"))

    def test_unknown_product_is_invalid(self):
        self.assertFalse(report_mcp.is_valid_product("Not A Real Product"))


class TestListFeatures(unittest.TestCase):
    @patch("report_mcp.requests.get")
    def test_returns_features_on_success(self, mock_get):
        mock_get.return_value = MagicMock(status_code=200, json=lambda: ["AML/KYC", "Prefill"])
        result = report_mcp.list_features("Fund Subscription")
        self.assertEqual(result, ["AML/KYC", "Prefill"])

    @patch("report_mcp.requests.get", side_effect=ConnectionError("network down"))
    def test_returns_empty_list_on_network_failure(self, mock_get):
        result = report_mcp.list_features("Fund Subscription")
        self.assertEqual(result, [])

    def test_rejects_invalid_product_before_any_network_call(self):
        with self.assertRaises(ValueError):
            report_mcp.list_features("Not A Real Product")


class TestReportSession(unittest.TestCase):
    @patch("report_mcp.get_user_email", return_value="test@anduintransact.com")
    @patch("report_mcp.requests.post")
    def test_posts_expected_payload_on_success(self, mock_post, mock_email):
        mock_post.return_value = MagicMock(status_code=204)
        report_mcp.report_session(
            product="Fund Subscription", feature="AML/KYC", status="success"
        )
        _, kwargs = mock_post.call_args
        payload = kwargs["json"]
        self.assertEqual(payload["user_email"], "test@anduintransact.com")
        self.assertEqual(payload["product"], "Fund Subscription")
        self.assertEqual(payload["feature"], "AML/KYC")
        self.assertEqual(payload["status"], "success")
        self.assertIn("timestamp", payload)

    @patch("report_mcp.get_user_email", return_value="test@anduintransact.com")
    @patch("report_mcp.requests.post", side_effect=ConnectionError("network down"))
    def test_never_raises_on_network_failure(self, mock_post, mock_email):
        # must not raise — this is the hard non-goal from the spec
        try:
            report_mcp.report_session(product="IDM", feature="X", status="render_failed", error="boom")
        except Exception as e:
            self.fail(f"report_session raised on network failure: {e}")

    @patch("report_mcp.get_user_email", return_value="test@anduintransact.com")
    @patch("report_mcp.requests.post")
    def test_never_raises_on_non_2xx_response(self, mock_post, mock_email):
        mock_post.return_value = MagicMock(status_code=500)
        try:
            report_mcp.report_session(product="IDM", feature="X", status="success")
        except Exception as e:
            self.fail(f"report_session raised on 500 response: {e}")

    def test_rejects_invalid_product_before_any_network_call(self):
        with self.assertRaises(ValueError):
            report_mcp.report_session(product="Not A Real Product", feature="X", status="success")

    def test_rejects_unclassified_without_product_note(self):
        with self.assertRaises(ValueError):
            report_mcp.report_session(product="Unclassified", feature="X", status="success")


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 4: Run test to verify it fails**

Run: `cd reporting/mcp-server && python3 -m unittest test_report_mcp -v`
Expected: FAIL — `report_mcp` module doesn't exist yet (`ModuleNotFoundError`).

- [ ] **Step 5: Write `report_mcp.py`**

```python
#!/usr/bin/env python3
"""
report_mcp.py — MCP server for mkt-ui-mockup usage reporting.

Exposes two tools:
  - list_features(product): distinct feature names already reported for
    a product, so Claude can reuse an existing name instead of inventing
    a near-duplicate.
  - report_session(product, feature, status, error, product_note):
    reports one completed (or failed) mockup build.

Hard requirement (see the spec's Global Constraints): a reporting
failure of any kind — network error, timeout, non-2xx response — must
never raise. report_session always returns normally; the caller (Claude,
via the skill's build steps) never sees a reporting failure block a
mockup delivery.
"""
import os
import subprocess
from datetime import datetime, timezone

import requests
from mcp.server.fastmcp import FastMCP

FIXED_PRODUCTS = [
    "Fund Subscription", "Data Room", "IDM", "Engagement Hub",
    "Integration Hub", "Investor Portal", "Data Extraction", "Unclassified",
]

DEFAULT_API_BASE_URL = "https://REPLACE_WITH_REAL_DOKPLOY_URL"  # set in Task 4/6
API_BASE_URL = os.environ.get("MKT_MOCKUP_REPORT_API_URL", DEFAULT_API_BASE_URL)

mcp = FastMCP("mkt-mockup-report")


def is_valid_product(product):
    return product in FIXED_PRODUCTS


def get_user_email():
    try:
        result = subprocess.run(
            ["git", "config", "user.email"],
            capture_output=True, text=True, timeout=2,
        )
        email = result.stdout.strip()
        return email if email else "unknown@unknown"
    except Exception:
        return "unknown@unknown"


@mcp.tool()
def list_features(product: str) -> list[str]:
    """List feature names already reported for a product, so a new mockup
    build can reuse an existing name instead of inventing a near-duplicate."""
    if not is_valid_product(product):
        raise ValueError(f"invalid product: {product}")
    try:
        resp = requests.get(f"{API_BASE_URL}/api/features", params={"product": product}, timeout=5)
        if resp.status_code == 200:
            return resp.json()
        return []
    except Exception:
        return []


@mcp.tool()
def report_session(
    product: str,
    feature: str,
    status: str,
    error: str | None = None,
    product_note: str | None = None,
) -> str:
    """Report one completed mkt-ui-mockup build. Never raises — a reporting
    failure must never block delivery of the mockup itself."""
    if not is_valid_product(product):
        raise ValueError(f"invalid product: {product}")
    if product == "Unclassified" and not product_note:
        raise ValueError("product_note is required when product is Unclassified")

    payload = {
        "user_email": get_user_email(),
        "product": product,
        "product_note": product_note,
        "feature": feature,
        "status": status,
        "error": error,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }

    try:
        requests.post(f"{API_BASE_URL}/api/report", json=payload, timeout=5)
    except Exception:
        pass  # swallow — reporting must never block the build

    return "reported"


if __name__ == "__main__":
    mcp.run()
```

- [ ] **Step 6: Run test to verify it passes**

Run: `cd reporting/mcp-server && python3 -m unittest test_report_mcp -v`
Expected: PASS — all 9 tests green.

- [ ] **Step 7: Commit**

```bash
git add reporting/mcp-server/report_mcp.py reporting/mcp-server/requirements.txt reporting/mcp-server/test_report_mcp.py
git commit -m "feat(mcp-server): add list_features/report_session MCP tools"
```

---

## Task 6: Wire the real deployment URL, declare the MCP server in the plugin, update `SKILL.md`

**Files:**
- Modify: `reporting/mcp-server/report_mcp.py:18` (the `DEFAULT_API_BASE_URL` placeholder)
- Create: `plugins/mkt-ui-mockup/.mcp.json`
- Modify: `SKILL.md` (add build step 8)
- Modify: `plugins/mkt-ui-mockup/.claude-plugin/plugin.json` (version bump)
- Modify: `.claude-plugin/marketplace.json` (matching version bump)

**Interfaces:**
- Consumes: the real URL from Task 4, Step 5; `report_mcp.py`'s tool names from Task 5.
- Produces: nothing further consumes this — this is the integration task that makes the skill actually call the MCP tools.

- [ ] **Step 1: Replace the placeholder URL**

In `reporting/mcp-server/report_mcp.py`, replace:
```python
DEFAULT_API_BASE_URL = "https://REPLACE_WITH_REAL_DOKPLOY_URL"
```
with the real URL recorded in Task 4, Step 5, e.g.:
```python
DEFAULT_API_BASE_URL = "https://mkt-mockup-reporting.<real-dokploy-domain>"
```

- [ ] **Step 2: Declare the MCP server in the plugin manifest**

Create `plugins/mkt-ui-mockup/.mcp.json`:
```json
{
  "mcpServers": {
    "mkt-mockup-report": {
      "command": "python3",
      "args": ["${CLAUDE_PLUGIN_ROOT}/reporting/mcp-server/report_mcp.py"]
    }
  }
}
```

Copy the `reporting/` directory into the plugin package (it needs to ship with the plugin, same as the skill files do):
```bash
mkdir -p plugins/mkt-ui-mockup/reporting
cp -r reporting/mcp-server plugins/mkt-ui-mockup/reporting/
```

- [ ] **Step 3: Add the build step to `SKILL.md`**

Find the existing numbered step "7. Deliver both the `.html` source and the trimmed, transparent `.png`." in the Build steps section, and add immediately after it:

```markdown
8. **Report the completed build.** Determine `product` by matching the user's request against the 7 fixed product names: Fund Subscription, Data Room, IDM, Engagement Hub, Integration Hub, Investor Portal, Data Extraction. If no confident match exists, **ask the user directly** which product this is (present the 7 names plus an "other" option) rather than guessing — if their answer still isn't one of the 7, use `product = "Unclassified"` and set `product_note` to exactly what they typed. Once `product` is settled, call the `list_features` MCP tool with that product and check whether an existing feature name already describes this request closely enough to reuse verbatim — prefer reuse over inventing a near-duplicate (e.g. don't create "Email Notifications" if "Email Notification" already exists). Only if nothing fits, name a new one: short, Title Case, no stray punctuation. Then call `report_session` with `status` reflecting whether `verify.py` and `render.py` actually succeeded (`"success"`, `"verify_failed"`, or `"render_failed"`) and `error` set to whatever error message they produced, if any. **This step never blocks delivery of the mockup** — if the MCP tools are unavailable or error, proceed and deliver the `.html`/`.png` anyway.
```

- [ ] **Step 4: Sync the SKILL.md change into the plugin copy**

Run: `cd /Users/anduinemployee/.claude/skills/mkt-ui-mockup && python3 sync-plugin.py`
Expected: output includes `SKILL.md` in the list of synced files.

- [ ] **Step 5: Bump the plugin version**

In `plugins/mkt-ui-mockup/.claude-plugin/plugin.json`, change `"version": "0.1.0"` to `"version": "0.2.0"`.

In `.claude-plugin/marketplace.json`, change the matching entry's `"version": "0.1.0"` to `"version": "0.2.0"`.

- [ ] **Step 6: Validate the plugin structure**

Run: `claude plugin validate` (from the repo root, if the `claude` CLI is available in this environment)
Expected: no errors reported. If the command isn't available in this environment, skip this step and note it — it's a nice-to-have check, not a blocker, since the plugin already worked before this task.

- [ ] **Step 7: Commit**

```bash
git add reporting/mcp-server/report_mcp.py plugins/mkt-ui-mockup/.mcp.json plugins/mkt-ui-mockup/reporting SKILL.md plugins/mkt-ui-mockup/skills/mkt-ui-mockup/SKILL.md plugins/mkt-ui-mockup/.claude-plugin/plugin.json .claude-plugin/marketplace.json
git commit -m "feat: wire mkt-mockup-report MCP server into the plugin and SKILL.md build steps"
```

---

## Task 7: End-to-end verification

**Files:** none (verification only, per the spec's Testing section)

**Interfaces:**
- Consumes: everything from Tasks 1–6.
- Produces: confidence that the one behavior the spec calls non-negotiable — reporting failures never block a mockup build — actually holds against the real deployment, not just mocks.

- [ ] **Step 1: Build one real mockup through the actual skill and confirm it reports successfully**

Using the `mkt-ui-mockup` skill normally (per its own `SKILL.md` build steps), build any small test mockup end-to-end (through `verify.py`/`render.py`/`trim.py` as usual), then let step 8 run: confirm `report_session` gets called with a real product/feature and `status: "success"`.

- [ ] **Step 2: Confirm the row is visible in the real dashboard**

Visit `https://<the-real-url>/admin`, log in, and confirm the row from Step 1 appears in the sessions table with the correct email (your own `git config user.email`), product, feature, and a `success` status styled distinctly from failure states.

- [ ] **Step 3: Confirm the "ask the user" path for an unmatched product**

Deliberately give the skill a request that doesn't obviously match any of the 7 products (e.g. ask for a mockup of something generic with no product context). Confirm Claude asks you directly which product it is, rather than silently guessing one of the 7.

- [ ] **Step 4: Confirm the Unclassified path reports correctly**

In that same flow, if you answer "other" with free text (e.g. "Deal Room"), confirm the resulting dashboard row shows `Unclassified — "Deal Room"` per the admin.html template's rendering.

- [ ] **Step 5: Confirm a broken network path never blocks a mockup build — this is the non-negotiable check**

Temporarily set `MKT_MOCKUP_REPORT_API_URL` to an unreachable address (e.g. `http://127.0.0.1:1`) in the environment the skill runs in, then build another test mockup end-to-end. Confirm:
- The `.html` and `.png` are still delivered normally.
- No error about reporting is surfaced to you.
- Restore the correct `MKT_MOCKUP_REPORT_API_URL` (or unset the override) afterward.

- [ ] **Step 6: Confirm `product_counts` reflects reality**

On the dashboard, confirm the count tiles at the top match a manual `SELECT product, COUNT(*) FROM sessions GROUP BY product` run directly against the Dokploy-hosted Postgres (via whatever DB console Dokploy exposes, or `psql` if reachable) — this checks Task 1's `productCounts()` query against real data, not just the mocked test from Task 2.
