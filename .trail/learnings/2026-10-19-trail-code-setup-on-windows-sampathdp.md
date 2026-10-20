---
title: Trail-code setup on Windows
author: Sampathdp
date: 2026-10-19
branch: master
cost: { minutes: 13, tokens: 38719 }
---

## Decided
- Installed globally: `npm install -g @trailhq/trail-code --ignore-scripts`, then `trail init --agents claude` per repo. Global hooks live in ~/.claude/settings.json.

## Tried and ruled out
- Plain `npm install -g @trailhq/trail-code` fails: tree-sitter-kotlin node-gyp build needs Visual Studio build tools.
- MCP server not added; Claude Code hooks and skill already give the map.

## Watch out
- --ignore-scripts skips native builds, so some language parsers (Kotlin) may not work.
- Each new repo needs its own `trail init`.
