# PrettyPoly Docs

PrettyPoly is currently maintained as a shadcn source registry package.

Current docs:

- [README](../README.md): install, usage, registry items, and development commands.
- [Product direction](./PRODUCT_DIRECTION.md): intended use cases, design principles, and non-goals.
- [Current state review](./CURRENT_STATE_REVIEW.md): what is core, under review, likely overreach, and cleanup work.
- [Registry notes](../registry/README.md): how the GitHub registry works.
- [Installation guide](./INSTALLATION.md): consumer setup and verification.
- [Agent guide](../AGENTS.md): contributor workflow, source layout, and release checklist.
- [Demo guide](../examples/demo/README.md): local demo sync and validation.
- [Divider position and inversion](./divider-position-and-inversion.md): resize direction notes.

Current source layout:

- Installable source: `components/`, `hooks/`, `lib/`.
- Registry manifest: `registry.json`.
- Demo mirror: `examples/demo/src`, generated with `npm run sync:demo`.
- Tests: `src/**/__tests__`.
