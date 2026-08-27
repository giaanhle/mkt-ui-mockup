# mkt-ui-mockup

A Cowork/Claude Code plugin wrapping the mkt-ui-mockup skill.

## Not included here

fonts/*.woff2, inter-font-face.css, and vendor/acl-web-components/* are
left out of this plugin package - they're the skill's own documented
"not used by default" fallback path (embedded-font substitute, rare icon
extraction). Copy them in under skills/mkt-ui-mockup/ if you ever need them
in the plugin, not just the standalone skill.

## Updating

Bump "version" in this plugin's .claude-plugin/plugin.json AND in the
matching entry of the root .claude-plugin/marketplace.json on every
release - installs only pick up a new version when both are bumped.
