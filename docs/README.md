# PrettyPoly Docs

PrettyPoly is currently maintained as a shadcn source registry package.

Current docs:

- [README](../README.md): install, usage, registry items, and development commands.
- [Registry notes](../registry/README.md): how the GitHub registry works.
- [Installation guide](./INSTALLATION.md): consumer setup and verification.
- [Agent guide](../AGENTS.md): contributor workflow, source layout, and release checklist.
- [Demo guide](../examples/demo/README.md): local demo sync and validation.

Historical docs:

The other markdown files in this directory and the architecture notes in the repository root are retained as design history. They may mention old paths like `src/components/Grid`, npm package builds, generated registry JSON, `dist/`, or obsolete manual-divider-only behavior. Treat those references as historical unless a current doc above confirms them.

Current source layout:

- Installable source: `components/`, `hooks/`, `lib/`.
- Registry manifest: `registry.json`.
- Demo mirror: `examples/demo/src`, generated with `npm run sync:demo`.
- Tests: `src/**/__tests__`.
