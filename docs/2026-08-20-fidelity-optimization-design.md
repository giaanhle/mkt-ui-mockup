# mkt-ui-mockup: closing the fidelity gap with acl-prototype

**Date:** 2026-08-20
**Status:** approved, pending implementation

## Problem

`mkt-ui-mockup` produces static social-post mockups by hand-writing HTML/CSS/SVG for every request, guided only by prose in `SKILL.md` (tokens table + a list of 7 composition patterns). Nothing mechanically enforces that a given mockup actually uses only `tokens.css` values, or that a recurring visual pattern (connector line, tooltip callout, badge, pill, avatar) comes out the same size/shape across different mockups.

This is structurally different from `acl-prototype`, where every visual element is a pre-compiled, pre-verified component (`<anduin-button>`, etc.) — fidelity there is close to automatic, and the only realistic failure mode (a wrong icon name) has a mechanical check (grep the bundle).

**Confirmed goal for this work:** optimize for fidelity to the *MKT house style already verified from the 21 reference files* — not for matching the real Anduin product UI. `mkt-ui-mockup`'s standalone/no-npm/no-icon decisions stand; this spec does not revisit them.

**Evidence this is a real problem, not hypothetical:** while building the `fund-breakdown-mockup` example in this same session, an ad-hoc gray (`#cfd6e0`) was used for a 6th chart color because no token existed for it — a direct violation of the skill's own anti-pattern list, caught only by manual review.

## Non-goals

- Do not change the tokens (`--mkt-*` values) themselves — those are already pixel-verified and were extended once already (`--mkt-gray-neutral`) in the prior round.
- Do not reconsider the no-icon / no-npm / SF-Pro-unembedded decisions.
- Do not attempt pixel-parity with `acl-web-components` real components.

## Design

Three additions to the skill folder, each targeting one identified drift source. All three are additive — existing mockups already built (`fund-breakdown-mockup.html`, etc.) are not required to be retrofitted by this work.

### 1. `patterns.css` — lock the 7 composition patterns to fixed CSS classes

Currently `SKILL.md` describes patterns like "a thin `--mkt-blue` elbow line (1.5–2px) with a small filled circle at the bend" in prose. Two different mockups built from that description can reasonably differ in the exact line width, dot size, or tooltip padding, because nothing pins the number down except whatever gets typed that day.

`patterns.css` gives each pattern a single reusable class with the dimensions fixed once:

```css
.mkt-connector { /* elbow line + dot, fixed 2px / 6px dot */ }
.mkt-connector-dot { /* ... */ }
.mkt-tooltip { /* fixed padding, radius, pointer size */ }
.mkt-tooltip::before { /* the pointer triangle */ }
.mkt-badge-annotation { /* numbered corner badge */ }
.mkt-pill { /* status pill base; combine with a color modifier class per token, e.g. .mkt-pill-blue */ }
.mkt-avatar { /* circle + initial letter; color via modifier class per the fixed avatar-palette order */ }
.mkt-border-highlight { /* 2px solid highlight border, blue or coral modifier */ }
.mkt-input-state-verified / -linked / -flagged { /* colored input border+tint states */ }
```

Each class's values are transcribed from what was actually used in the two example mockups already built and cross-checked against the original pixel-sampling notes in `SKILL.md` — not newly invented.

`SKILL.md`'s "Composition patterns" section is rewritten to reference these classes by name instead of describing them in prose, e.g.:

> 2. **Connector line + dot** — `.mkt-connector` (see `patterns.css`). Do not hand-roll a new line/dot; use the class.

### 2. `verify.py` — mechanical check before delivering a mockup

A short, dependency-free script (stdlib only, matches the project's existing Python usage) that:

1. Takes a mockup HTML file path as its argument.
2. Extracts every `#rrggbb` / `#rgb` hex literal in the file (inline `style="..."`, `<style>` block, and inline SVG `fill`/`stroke` attributes).
3. Loads the known-good hex values from `tokens.css` (parses `--mkt-*: #hex;` lines).
4. Reports any hex literal in the mockup that is **not** one of the token values (case-insensitive compare) — these are the drift candidates, exactly like the `#cfd6e0` incident.
5. Exit code 0 if clean, 1 if any stray hex found, printing the offending lines so they're easy to fix.

This is the direct equivalent of "grep the bundle for the icon name before using it" — a concrete, repeatable, automatable check rather than a memory-dependent rule. It only catches color drift (not spacing/pattern drift — `patterns.css` handles that by construction, since using the shared class makes drift structurally impossible rather than something to detect after the fact).

`SKILL.md`'s "Build steps" gets a new step between building the HTML and rendering it:

> 3.5. Run `python3 verify.py path/to/mockup.html`. Fix any reported stray color before proceeding to render.

### 3. `template.html` — a pre-wired starting point

A minimal skeleton that already has `tokens.css` and `patterns.css` inlined in a `<style>` block, the canvas `<body>` sized to 1200×627, and a comment marking where content goes. Building a new mockup becomes "copy `template.html`, fill in the content region using the pattern classes," rather than re-assembling the `<style>` block from scratch each time (which is itself a source of drift — e.g. forgetting a token or pasting an outdated tokens.css snapshot).

## Data flow / file layout after this change

```
mkt-ui-mockup/
├── SKILL.md                — updated to reference patterns.css classes, adds verify step
├── tokens.css               — unchanged
├── patterns.css             — NEW
├── template.html            — NEW
├── verify.py                 — NEW
├── inter-font-face.css / fonts/  — unchanged (fallback path, not default)
└── docs/
    └── 2026-08-20-fidelity-optimization-design.md  — this file
```

Build flow becomes: copy `template.html` → fill content with `.mkt-*` pattern classes → run `verify.py` → render at 2x → crop → deliver. Each step maps to one of the three additions plus the existing render/crop steps, so nothing here changes the render/export mechanics already in place.

## Testing

Since this is a reference-type skill (not a discipline-enforcing one), the bar is "does it have what's needed when reached for," verified by use rather than formal pressure-testing:

1. Rebuild the `fund-breakdown-mockup` example using `template.html` + `patterns.css` instead of hand-rolled CSS, confirm it renders visually equivalent to the existing version.
2. Deliberately reintroduce the `#cfd6e0` stray-gray mistake in a scratch copy and confirm `verify.py` catches it (exit 1, prints the offending line).
3. Confirm a clean file (using only token-backed colors) passes `verify.py` with exit 0.

## Open questions / risks

- `patterns.css` class dimensions are transcribed from the two mockups already built, which were themselves not cross-checked pixel-by-pixel against the 21 reference files for these specific measurements (line width, dot size, tooltip padding). They're internally consistent but not independently re-verified against the source images. Flagging this so it isn't mistaken for a third pixel-sampling pass — it isn't one.
- `verify.py` only catches hex-literal drift. A mockup could still misuse `var(--mkt-gray-neutral)` in a place the palette rule says not to (e.g. as a general text color) without the script objecting — that class of mistake still relies on `SKILL.md` being read carefully.
