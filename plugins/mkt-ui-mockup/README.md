# mkt-ui-mockup

A Cowork/Claude Code plugin wrapping the mkt-ui-mockup skill.

## Not included here

fonts/*.woff2, inter-font-face.css, and vendor/acl-web-components/* are
left out of this plugin package - they're the skill's own documented
"not used by default" fallback path (embedded-font substitute, rare icon
extraction). Copy them in under skills/mkt-ui-mockup/ if you ever need them
in the plugin, not just the standalone skill.

## Keeping this copy in sync with the standalone skill

`skills/mkt-ui-mockup/` here is a **copy**, not a symlink, of the files at
the repo root (SKILL.md, patterns.css, tokens.css, template.html,
verify.py, render.py, trim.py). They drifted apart within a day of this
plugin structure being created — the nested copy was missing a bug fix
(corner-clipping padding) that had already landed at the root — so
anyone installing the plugin got a bug already fixed in the standalone
skill.

**Always run this before committing a change to any of those files, and
before bumping the version below:**

```bash
python3 ../../sync-plugin.py   # from this directory, or python3 sync-plugin.py from repo root
```

It's a straight copy in one direction (root → plugin). Edit the root
files, never these nested ones directly — they'll just get overwritten
next sync.

## Updating

Bump "version" in this plugin's .claude-plugin/plugin.json AND in the
matching entry of the root .claude-plugin/marketplace.json on every
release - installs only pick up a new version when both are bumped.
