---
name: mkt-ui-mockup
description: Use when the MKT team needs a lightweight, icon-free UI mockup image for a social post (LinkedIn, etc.) depicting an Anduin product screen. Produces a single self-contained HTML file (and a rendered PNG) using standalone tokens — no npm package, no component library, no external font CDN.
---

# MKT UI Mockup

## Overview

A "product screenshot" style mockup generator for MKT's social posts. Built entirely from plain HTML/CSS + inline SVG — no `acl-web-components` bundle inlined, no icon set used by default. Every color, spacing, radius, and shadow value comes from a fixed token set defined in this skill (see `tokens.css`), pixel-sampled from real MKT reference mockups, not guessed. A copy of `@duyluonganduin/acl-web-components` is vendored in `vendor/acl-web-components/` for the rare case a mockup needs one real icon — see "Using a real icon or component" — but it is not part of the default workflow.

**Why not just use `acl-prototype`?** That skill targets live, interactive product prototypes and depends on inlining the ~600KB `acl-web-components` bundle. MKT mockups are static images for social media — they need zero dependencies, a fixed visual identity that doesn't drift between machines, and a lighter, icon-free feel distinct from the full product UI.

## When to use

- "Mock up a screenshot of [feature] for the LinkedIn post"
- "Make an MKT-style UI mockup for social"
- Any request for a marketing image depicting Anduin product UI, explicitly for external/social use — not for engineering prototyping (use `acl-prototype` for that)

## Tokens

Load `tokens.css` in this skill folder for the full list. Key values — pixel-sampled from real MKT mockups, not eyeballed:

| Token | Value | Role |
|---|---|---|
| `--mkt-blue` | `#1075DC` | primary accent — buttons, links, active states, checkboxes |
| `--mkt-blue-tint` | `#e6f1fc` | primary tint — pill backgrounds, highlighted rows |
| `--mkt-green` | `#4cae72` | success — "Joined"/"Submitted"/verified states |
| `--mkt-green-tint` | `#e9f7ef` | success tint |
| `--mkt-amber` | `#e0a030` | warning — "Pending" states |
| `--mkt-amber-tint` | `#fdf3e2` | warning tint |
| `--mkt-coral` | `#e85c5c` | danger/flag — **warm coral, not a cold red**. This is a deliberate MKT trait, don't substitute a cooler red. |
| `--mkt-coral-tint` | `#fdeaea` | danger tint |
| `--mkt-purple` | `#8650bd` | secondary accent, used sparingly (second avatar/identity color) |
| `--mkt-ink` | `#1a2233` | primary text |
| `--mkt-muted` | `#64748b` | secondary text |
| `--mkt-border` | `#edeff2` | hairline borders |
| `--mkt-tooltip-bg` | `#141414` | tooltip/callout background — **neutral black, not blue-tinted charcoal** |
| `--mkt-gray-neutral` | `#a8adb5` | pure neutral gray — **not blue-tinted like `--mkt-muted`**. Use only for an "Other"/misc chart slice or the 6th+ avatar slot, never as a general text color. |
| `--mkt-gray-neutral-tint` | `#eef0f2` | neutral tint, pairs with `--mkt-gray-neutral` |

**Avatar palette — fixed cycle order.** When a mockup needs colored initial-letter avatars for more than one person, assign colors in this order so it's consistent across mockups: `--mkt-blue` → `--mkt-green` → `--mkt-amber` → `--mkt-coral` → `--mkt-purple` → `--mkt-gray-neutral`. Wrap back to the start if there are more than 6 people. The same rule applies to multi-series chart colors (line/donut/bar).

Spacing / radius / shadow / type scale: reuse the same numeric scale as `acl-web-components` (4/8/12/16/24/32/40/48 spacing; 4/8/12/16/24/full radius; a 4-step shadow scale; a 9–26px type scale) — same proportions, but defined as standalone `--mkt-*` variables in `tokens.css`, not `var(--color-...)`.

## Font

**Use SF Pro directly via `-apple-system`** — this was tested against embedded alternatives (Inter, Onest, Golos Text) and confirmed to be the desired look; no other option matched closely enough.

```css
body { font-family: -apple-system, "SF Pro Text", system-ui, "Segoe UI", Roboto, sans-serif; }
```

SF Pro itself can't be bundled as a font file (Apple's license restricts it to Apple platforms), so this relies on `-apple-system` resolving to the real SF Pro on the rendering machine rather than an embedded copy.

**Known tradeoff — accepted:** because nothing is embedded, the exact glyphs depend on the OS doing the rendering: real SF Pro on macOS, Segoe UI on Windows, Roboto/DejaVu Sans on Linux/CI. If mockups for the same campaign are ever rendered on a non-Mac machine, re-render everything from one Mac to keep a set of social posts visually consistent with each other.

**Weight is decided by role, not by font size.** It's tempting to reach for "small text = lighter weight, big text = bolder" but the reference set contradicts that directly: a table column header and an eyebrow label can be the *same* 11px, and still be two different weights, because they play different roles. Verified roles, heaviest to lightest:

| Role | Weight | Example | Class |
|---|---|---|---|
| Page/panel title | 700 | "Create group", "Comments", "Meridian Capital Fund I" | (plain `<h1>`/`<h2>`, no class needed) |
| Eyebrow / all-caps status tag | 700 | "COMPLETED", "SUBSCRIBER INFORMATION" | `.mkt-eyebrow` |
| Status pill / solid pill / segment / avatar initial / annotation badge | 600 | "Invited", "6/20 pages", avatar "A" | `.mkt-pill`, `.mkt-pill-solid-*`, `.mkt-segment`, `.mkt-avatar`, `.mkt-badge-annotation` |
| Emphasized body text (a row's primary name/value) | 600 | "Andrew Cohen" in a table row | — |
| **Table column header** | **500** | "Group", "Joining date", "Access" | `.mkt-table th` |
| Body / regular text, sub-labels with an inline mark | 400–500 | dates, percentages, "Upcoming opportunities" | — |

The counterintuitive one to remember: **a table header is one of the *lightest* weights on the page**, visibly lighter than the pills and row-name text sitting right below it — despite being the same size as an eyebrow label, which is the *heaviest*. Don't default table headers to 600 just because they're bold-ish gray caps-adjacent text; they aren't bold at all.

Numeric values in tables: `font-variant-numeric: tabular-nums`.

`inter-font-face.css` / `fonts/` remain in this skill folder as a fallback path if a non-Mac render environment ever needs a pinned substitute — not used by default.

## No icons (default)

**Do not use any icon, glyph, or pictogram in MKT mockups** — this is a deliberate stylistic choice for a lighter feel, distinct from the real product UI. Note this is a genuine departure from the reference files: the actual MKT mockups this skill was derived from *do* use icons heavily (folders, envelopes, chat bubbles, hourglasses, warning triangles, file-type icons). When adapting a reference composition that relied on an icon, replace it with one of:
- A colored initial-letter avatar (circle + first letter, per the avatar palette)
- A plain shape (dot, small square, short rule) for status/grouping
- Typography and color alone (weight, size, tint) to carry the hierarchy an icon would have

This stays the default even after the exception below exists — "we now have icons available" is not a reason to start adding them everywhere.

## Using a real icon or component (rare, opt-in)

`vendor/acl-web-components/acl-web-components.iife.js` in this skill folder is the compiled `@duyluonganduin/acl-web-components` bundle (icons included) — kept as just that one file, not the full npm package tree, since nothing here needs to `npm install` or run the component library live. It exists for the occasional case where a mockup is based on a **real screenshot** and an icon in that screenshot carries real information the mockup would lose without it (e.g. a distinct file-type icon that's the whole point of a row, not a decorative flourish next to a label). It is not a general invitation to decorate. (`vendor/acl-web-components/acl-tokens-reference.css` is that package's own token values, kept only for reference/comparison — this skill's own `tokens.css` is still what every mockup actually uses.)

When this comes up:
1. **Look at the actual reference screenshot first** — decide from what's really there which icon(s), if any, are load-bearing. Most icons in a real screenshot are decorative labeling (a bell next to "Notifications") and should still become plain text per "No icons" above — only reach for a real icon when leaving it out would make the mockup harder to read, not just less decorated.
2. **Stay sparse.** A mockup with one carefully-chosen icon reads as intentional; a mockup with an icon on every row reads like the reference files this skill deliberately diverges from. If more than one or two icons feel needed, that's a signal to reconsider rather than add more.
3. **Extract only that icon's SVG**, not the whole bundle. Grep the icon name in `acl-web-components.iife.js` first to confirm it's real (same discipline `acl-prototype` uses) — never guess a name. Inline just that `<svg>` path, sized/colored with `--mkt-*` tokens, not the 334-icon set or the custom-element registration.
4. **Never inline the full bundle** into an MKT mockup for this — that reintroduces the ~600KB dependency this skill exists to avoid. If a mockup seems to need several real components (not just one icon), that mockup has outgrown this skill — use `acl-prototype` for it instead.
5. Run `verify.py` as usual afterward — extracting one icon's markup doesn't change the color-token rule.

## Composition patterns

These are the recurring techniques found across real MKT mockups (verified against the reference set). Each has a fixed-dimension CSS class in `patterns.css` — **use the class, don't hand-roll a new one.** That's what keeps a connector line/tooltip/badge the same size across every mockup instead of drifting slightly each time.

1. **Overlap + shadow** — `.mkt-card` (or `.mkt-card-soft` for a lighter panel). Two or three cards stacked, no border, to show layered UI moments.
2. **Connector line + dot** — `.mkt-connector` (add `.mkt-connector-vertical` for a vertical line). Links a trigger to the panel it opens. No icon inside — a plain dot only (see "No icons").
3. **Border highlight** — `.mkt-highlight-blue` / `.mkt-highlight-coral`. Draws the eye to the part of the UI the post is actually about. 2px solid, radius 16 (rounder than a plain card — verified from the reference set, not the default 12). **Never combine with `--mkt-shadow-4`** on the same card; the reference set always uses border *or* heavy shadow, not both. One reference file used an off-palette client-brand orange for this border instead of coral — that belongs to that fictional client's own branding (a different, unrelated design language), not the MKT token set. Always use coral for this pattern; never introduce that orange.
4. **Cursor overlay** — `.mkt-cursor` (position it, put an arrow-shape SVG inside). Implies an in-progress click.
5. **Annotation badge** — `.mkt-badge-annotation`. A small numbered circle pinned to the corner of a changed element.
6. **Tooltip callout** — `.mkt-tooltip` (add `.mkt-tooltip-top` to point the triangle upward instead of leftward). Contextual guidance bubble.
7. **Colored input state** — `.mkt-input-verified` / `.mkt-input-linked` / `.mkt-input-flagged`. Real convention from MKT's fund-subscription mockups.

Also in `patterns.css`: `.mkt-pill-{blue,green,amber,coral,purple,neutral,gray}` for status pills, `.mkt-avatar` + `.mkt-avatar-{1..6}` for the fixed avatar-palette cycle (see Tokens section above), and `.mkt-eyebrow` (+ `-green`/`-blue`/`-amber`/`-coral`) for a small ALL-CAPS status/section tag — see Font section for why this is weight 700 despite being small text.

`.mkt-switch`/`.mkt-switch-on` (toggle) and `.mkt-button`/`.mkt-button-primary` — **not yet cross-verified against the 21-file corpus** like the other patterns; added from a real product screenshot (Email Notification settings) because the skill had no toggle/button pattern at all yet. Dimensions follow the established spacing/radius scale rather than a fresh pixel-sample. Treat as provisional until checked against more reference material.

## Tables

Verified against 4 reference tables (data-room engagement-tracking, fund-subscription GP-view, engagement-hub granular-permission-controls, investor-portal vehicles-overview documents list). Use `.mkt-table` from `patterns.css` as the base — don't hand-roll table CSS.

**The table itself never has an outer border, `border-radius`, or its own box-shadow.** It sits flush on whatever card/page background holds it — separation from surrounding content comes only from the header divider and row dividers, never from a frame around the whole table. This matches the "tables sit flat" principle already established for the acl side of things, and it holds just as true here.

**Two header styles are both real — pick by density, don't mix within one table:**
- **Flat** (default `.mkt-table`) — white background, just a 1px bottom divider. Use for short, simple lists (e.g. a 5-row "New users" list).
- **Tinted** (`.mkt-table.mkt-table-tinted`) — header row gets a light `--mkt-border-soft` background bar. Use for dense/wide data tables with several columns — this was the more common choice in the reference set (2 of 3 data-dense tables used it).

**Row structure:**
- 1px hairline divider (`--mkt-border-soft`) between every row, none after the last row.
- Header text: `--mkt-muted`, weight 500 (the lightest weight on the page — see Font section), `--mkt-text-11`.
- Body text: `--mkt-ink`, `--mkt-text-13`.
- A sortable column header can carry `.mkt-sort-caret` (a plain CSS triangle, not an icon — this doesn't violate the no-icons rule). Gray by default; add `.mkt-sort-active` to turn it blue for the currently-sorted column.
- Optional: `.mkt-col-divider` on a `<th>`/`<td>` adds a vertical rule to separate logical column groups on a wide table (seen in the granular-permission-controls reference).
- Row-selection checkboxes use `.mkt-checkbox` (plain square, not a custom-drawn one each time).
- Trailing row affordances are typographic, not icons: a `›` character for "view row" or `···` for a row menu — both are text glyphs, not pictograms, so they're fine under the no-icons rule.

**Cell content — two distinct pill styles, don't conflate them:**
- **Status** → the existing light-tint `.mkt-pill-*` (tinted background, colored text). Use for state like "Invited"/"Pending review".
- **Emphasized count/metric** → the solid-fill `.mkt-pill-solid-*` (solid color background, white text). Use for something like "5/20 pages" or a K1/Annual-Report type tag that should read as more prominent than a status pill. These are visually distinct in the reference set — don't use the tint style for both.
- **Breakdown of several counts side-by-side** → `.mkt-segment-strip` of `.mkt-segment-*` blocks (e.g. a "3 submitted · 1 pending · 1 flagged · 5 open" strip as one fused bar of colored blocks, each with a white number). This is a real, distinct pattern from a single pill — don't approximate it with several separate pills next to each other.

## Build steps

1. Copy `template.html` (in this skill folder) as the starting point — it already has `tokens.css` and `patterns.css` inlined, transparent background, and a content wrapper that sizes itself to whatever's inside it. Don't reassemble the `<style>` block from scratch.
2. Replace the placeholder `.content` div with the requested screen, built from the pattern classes above and real content (real fund/investor names in the style of the reference set — e.g. "Emmerich Corporation", "Nucleus Partners Fund" — never lorem ipsum).
3. **Output size is not fixed.** These mockups are raw material composited into other assets later (decks, ads, other designs), not a finished social-post image at a locked canvas — let the content (one card, or several) size itself naturally. Only build to a specific fixed canvas if the user explicitly asks for one (e.g. "make it exactly 1200×627 for LinkedIn").
4. **Run the verification script before rendering:**
   ```bash
   python3 /path/to/mkt-ui-mockup/verify.py path/to/your-mockup.html
   ```
   Fix any reported stray hex color (use an existing token instead) before moving on. This is the mechanical check that catches color drift — don't skip it.
5. Render **on a transparent background**, at 2x, with a viewport comfortably larger than the expected content (extra transparent margin gets trimmed in the next step — err large, not tight):
   ```bash
   python3 /path/to/mkt-ui-mockup/render.py path/to/mockup.html out.png \
     --width 1800 --height 1200 --scale 2
   ```
   This tries Playwright's Python API first (finds its own managed Chromium automatically — no PATH or install-location assumptions, so it works in sandboxed environments like Cowork where Chrome isn't a `google-chrome` command on PATH), then falls back to a `google-chrome`/`chromium`/`chromium-browser` CLI binary on PATH if Playwright isn't installed. Either path produces a transparent PNG — don't call the Chrome CLI directly and don't drop the transparency flag if you ever do.
6. **Trim to the actual content bounding box:**
   ```bash
   python3 /path/to/mkt-ui-mockup/trim.py out.png
   ```
   This crops away the empty transparent margin from the oversized render window, keeping a small buffer so a card's soft shadow doesn't get cut off at its faint edge. This is what makes the final size match the content instead of a fixed canvas.
7. Deliver both the `.html` source and the trimmed, transparent `.png`.

## Anti-patterns

- ❌ Embedding Inter/Onest/Golos Text (or any other substitute font) by default — SF Pro via `-apple-system` is the confirmed choice; only fall back to an embedded font if a render must happen on a non-Mac machine.
- ❌ Any icon, glyph, or emoji standing in for one — unless it's the rare, deliberate exception in "Using a real icon or component" above, extracted one icon at a time from a real screenshot's actual need.
- ❌ Decorating a mockup with several icons just because `vendor/acl-web-components` makes them available — the bar stays "load-bearing and sparse," not "why not."
- ❌ Inlining the full `acl-web-components` bundle into an MKT mockup — this skill has zero such dependency by design; extract a single icon's SVG when truly needed, never the whole package.
- ❌ Inventing a color outside `tokens.css` (e.g. a cold red instead of the verified warm coral, or a blue-tinted dark instead of the verified neutral-black tooltip bg) — including reaching for an ad-hoc gray when a chart/avatar needs a 6th color. Use `--mkt-gray-neutral` for that, not a one-off hex.
- ❌ Dark-mode / theme-switching support — these are single fixed-light-theme static images, not a UI users interact with.
- ❌ Rendering at 1x and calling it done — always export at 2x.
- ❌ Rendering with a solid/white background instead of `--default-background-color=00000000` — the delivered PNG must be transparent.
- ❌ Delivering the raw oversized render without running `trim.py` — the output should be sized to its content, not stay at the big browser-window canvas it was rendered on.
- ❌ Forcing a fixed 1200×627 (or any other locked canvas) by default — that was the old social-post-image assumption; these are composited raw assets now. Only lock a size when the user explicitly asks for one.
- ❌ Hand-rolling a new connector/tooltip/pill/avatar instead of using the matching class in `patterns.css` — that's exactly the drift this file exists to prevent.
- ❌ Skipping `verify.py` before rendering — it's the one automated check this skill has; running it takes seconds.
- ❌ Putting a border, `border-radius`, or box-shadow directly on a `<table>` — tables sit flat; use `.mkt-table` and let the surrounding card provide any framing.
- ❌ Using a highlight border (`.mkt-highlight-*`) together with `--mkt-shadow-4` on the same card — pick one, not both.
- ❌ Using the light-tint `.mkt-pill-*` where the reference set uses a solid `.mkt-pill-solid-*` (emphasized counts/metrics) — they read as different levels of emphasis, don't conflate them.
