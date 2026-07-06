# AGENTS.md

This repository publishes PrettyPoly as a shadcn source registry, not as an npm package.

## Current State

- Package status: private alpha, currently versioned as `v0.4.1`.
- Public install path: `pretty-poly/react-pretty-poly/<item>#<tag>`.
- Canonical installable source: top-level `components/`, `hooks/`, and `lib/`.
- Registry entrypoint: root `registry.json`.
- Demo mirror: `examples/demo/src`, synchronized from `registry.json`.
- Test harness: `src/components/__tests__`, `src/hooks/__tests__`, `src/utils/__tests__`.

Do not reintroduce an npm package build, `dist/` publishing flow, generated registry JSON payloads, or `public/r` / `dist/r` artifacts unless the distribution strategy changes explicitly.

## Commands

```bash
npm install
npm run registry:validate
npm run type-check
npm run lint
npm test -- --run
```

Demo workflow:

```bash
npm run sync:demo          # copy registry files into examples/demo/src
npm run update:demo        # sync plus demo lint
npm --prefix examples/demo run type-check
npm --prefix examples/demo run lint
npm --prefix examples/demo run build
npm --prefix examples/demo run test:e2e:chromium
```

`examples/demo/package.json` keeps `update:grid` as an alias for the local sync script. It should not install from the remote release tag during local development.

## Registry Items

- `grid-system`: core grid, block, divider, grid hooks, and grid utilities.
- `grid-sidebar`: optional block sidebar components; depends on `grid-system`.
- `grid-primitives`: ViewRegistry, CommandService, and LayoutService.
- `grid-tabs`: optional tab components plus ViewRegistry tab helpers; depends on `grid-system` and `grid-primitives`.

Use full GitHub registry dependency names in `registry.json`, for example:

```json
"pretty-poly/react-pretty-poly/grid-system#v0.4.1"
```

Bare item names resolve against the built-in shadcn registry, not this repository.

## Architecture

PrettyPoly uses React context plus a reducer:

- `components/grid/grid-provider.tsx`: state, reducer, public context actions.
- `components/grid/grid.tsx`: root grid, CSS grid style generation, divider overlay mounting.
- `components/grid/block.tsx`: block wrapper and mode-specific block props.
- `components/divider/divider.tsx`: absolute overlay divider handle.
- `components/divider/divider-overlay.tsx`: auto-generates overlay dividers from block config.
- `hooks/use-grid-resize-operations.ts`: resize calculation and drag lifecycle.
- `lib/grid-types.ts`: public API types.
- `lib/grid-calculations.ts`: testable grid math.
- `lib/grid-storage.ts`: persistence reconciliation.

The demo intentionally copies these files instead of importing from the repository root. Run `npm run sync:demo` whenever installable source changes.

## Divider Semantics

`Grid` accepts `dividers="auto" | "manual" | "none"`.

- `auto`: default. `DividerOverlay` generates dividers from sibling block configuration.
- `manual`: no generated dividers; explicit `<Divider>` children may render.
- `none`: generated and explicit dividers are suppressed.

Dividers are absolutely positioned overlays. They do not contribute gap space to CSS grid templates or resize math.

## Development Rules

When changing public behavior:

1. Update `lib/grid-types.ts` first.
2. Update `gridStateReducer` and context methods in `components/grid/grid-provider.tsx`.
3. Keep resize calculations in `hooks/use-grid-resize-operations.ts` or `lib/grid-calculations.ts`.
4. Add or update Vitest coverage under `src/**/__tests__`.
5. Run `npm run sync:demo` after touching registry files.
6. Validate root and demo commands before release.

Common gotchas:

- Blocks need correct `parentId` and `order`.
- Nested regular groups need a DOM node with `data-block-id` so CSS selectors and divider measurement can target them.
- `defaultSize` is mutable runtime layout state; `initialDefaultSize` preserves reset-to-configured-layout behavior.
- `row` parents use horizontal movement and vertical dividers; `column` parents use vertical movement and horizontal dividers.
- Boopbup currently uses manual dividers in copied source, so consumers should pass `dividers="manual"` when they render explicit `<Divider>` children.

## Release Checklist

1. Update source in `components/`, `hooks/`, and `lib/`.
2. Update `registry.json` if item file boundaries or release dependencies change.
3. Run root validation: `registry:validate`, `type-check`, `lint`, `test`.
4. Run demo validation: `sync:demo`, demo `type-check`, `lint`, `build`, and e2e where browsers are installed.
5. Verify shadcn can read the tagged registry item after tagging:

```bash
npx shadcn@latest view pretty-poly/react-pretty-poly/grid-system#v0.4.1
```

Use the actual release tag for the verification command.
