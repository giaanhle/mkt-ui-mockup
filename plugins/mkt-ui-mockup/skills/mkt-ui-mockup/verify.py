#!/usr/bin/env python3
"""
verify.py — checks a mkt-ui-mockup HTML file for hex colors that aren't
defined in tokens.css. Mirrors acl-prototype's "grep the icon name against
the bundle" verification step, but for color drift.

Usage:
    python3 verify.py path/to/mockup.html

Exit code 0 = clean (every hex literal found is a known token value).
Exit code 1 = at least one stray hex literal found; details printed.
"""
import re
import sys
import os

HEX_RE = re.compile(r"#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b")
TOKEN_RE = re.compile(r"--mkt-[a-z0-9-]+:\s*(#[0-9a-fA-F]{3,6})\s*;")


def load_token_hexes(tokens_css_path):
    with open(tokens_css_path) as f:
        content = f.read()
    return {m.group(1).lower() for m in TOKEN_RE.finditer(content)}


def normalize(hexval):
    h = hexval.lower()
    if len(h) == 4:  # #rgb -> #rrggbb
        h = "#" + "".join(c * 2 for c in h[1:])
    return h


def find_hex_literals(html_path):
    with open(html_path) as f:
        content = f.read()
    found = []
    for m in HEX_RE.finditer(content):
        line_no = content.count("\n", 0, m.start()) + 1
        found.append((normalize(m.group(0)), m.group(0), line_no))
    return found


def main():
    if len(sys.argv) != 2:
        print("Usage: python3 verify.py path/to/mockup.html")
        sys.exit(2)

    html_path = sys.argv[1]
    skill_dir = os.path.dirname(os.path.abspath(__file__))
    tokens_css_path = os.path.join(skill_dir, "tokens.css")

    known = load_token_hexes(tokens_css_path)
    if not known:
        print(f"warning: no --mkt-* hex tokens found in {tokens_css_path}")

    literals = find_hex_literals(html_path)
    stray = [(norm, raw, line) for (norm, raw, line) in literals if norm not in known]

    # de-duplicate by (norm, line) while preserving order
    seen = set()
    stray_unique = []
    for item in stray:
        key = (item[0], item[2])
        if key not in seen:
            seen.add(key)
            stray_unique.append(item)

    if not stray_unique:
        print(f"OK: {html_path} — all hex colors match tokens.css ({len(known)} known tokens)")
        sys.exit(0)

    print(f"FAIL: {html_path} — found {len(stray_unique)} hex color(s) not in tokens.css:")
    for norm, raw, line in stray_unique:
        print(f"  line {line}: {raw}  (not a --mkt-* token value)")
    print()
    print("Fix: either use an existing --mkt-* token/tint, or if this is a")
    print("genuinely new recurring need, add it to tokens.css first (see")
    print("SKILL.md anti-patterns — don't reach for a one-off hex).")
    sys.exit(1)


if __name__ == "__main__":
    main()
