# PrettyPoly GitHub Registry Notes

PrettyPoly is distributed as a shadcn source registry from the public GitHub repository, not as an npm package and not as generated JSON files.

## Source Registry

The registry entrypoint is the root [`registry.json`](../registry.json). It points at real source files in the repository:

```
components/
hooks/
lib/
registry.json
```

The shadcn CLI reads those files directly from GitHub:

```bash
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-system#v0.4.1
```

Use tags for reproducible installs. Same-repository dependencies must also use full GitHub item addresses such as `pretty-poly/react-pretty-poly/grid-system#v0.4.1`; bare names resolve to the built-in shadcn registry.

## Items

- `grid-system`: core grid, block, divider, hooks, and grid utilities.
- `grid-sidebar`: optional sidebar components; depends on `grid-system`.
- `grid-primitives`: ViewRegistry, CommandService, and LayoutService.
- `grid-tabs`: optional tab, new-tab, and view-rendering components; depends on `grid-system` and `grid-primitives`.

## Maintenance

1. Edit installable source files in `components/`, `hooks/`, and `lib/`.
2. Update the root `registry.json` when files or item boundaries change.
3. Sync the demo mirror with `npm run sync:demo`.
4. Validate with `npm run registry:validate`.
5. Run tests, type checks, lint, and demo build before tagging.
6. Push `main`, then tag the release, for example `v0.4.1`.

There is no `build:registry` step. Do not commit generated `public/r` or `dist/r` registry payloads.
