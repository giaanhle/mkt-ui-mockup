#!/usr/bin/env python3
"""
sync-plugin.py — copies the canonical skill files at repo root into the
plugin's nested skills/mkt-ui-mockup/ folder, so the two copies this repo
intentionally maintains never drift apart.

Why two copies exist at all (see plugins/mkt-ui-mockup/README.md):
  - Repo root: the standalone skill — what you get from `git clone` straight
    into ~/.claude/skills/mkt-ui-mockup, or Cowork's synced/ cache.
  - plugins/mkt-ui-mockup/skills/mkt-ui-mockup/: the plugin package installed
    via the marketplace. Deliberately excludes fonts/, inter-font-face.css,
    and vendor/ — the skill's own documented "not used by default" fallback
    path — to keep the plugin package smaller.

This script is the mechanical fix for a real bug: template.html drifted
between the two copies within a day of the plugin structure being created
(the nested copy was missing the corner-clipping padding fix), so anyone
installing the plugin got a bug already fixed in the standalone skill.

Usage:
    python3 sync-plugin.py

Run this before every commit that touches a synced file, and always
before bumping the plugin's version.
"""
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent
PLUGIN_SKILL_DIR = REPO_ROOT / "plugins" / "mkt-ui-mockup" / "skills" / "mkt-ui-mockup"

# Everything that should be identical in both copies. Deliberately excludes
# fonts/, inter-font-face.css, vendor/ — see the "why" note above.
SYNCED_FILES = [
    "SKILL.md",
    "patterns.css",
    "tokens.css",
    "template.html",
    "verify.py",
    "render.py",
    "trim.py",
]


def main():
    if not PLUGIN_SKILL_DIR.exists():
        print(f"error: {PLUGIN_SKILL_DIR} does not exist", file=sys.stderr)
        sys.exit(1)

    changed = []
    for name in SYNCED_FILES:
        src = REPO_ROOT / name
        dst = PLUGIN_SKILL_DIR / name
        if not src.exists():
            print(f"warning: {src} does not exist, skipping", file=sys.stderr)
            continue
        was_different = not dst.exists() or src.read_bytes() != dst.read_bytes()
        shutil.copyfile(src, dst)
        if was_different:
            changed.append(name)

    if changed:
        print(f"synced {len(changed)} file(s) into the plugin copy: {', '.join(changed)}")
    else:
        print("already in sync — nothing to do")


if __name__ == "__main__":
    main()
