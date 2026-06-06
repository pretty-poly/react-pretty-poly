# PrettyPoly Installation Guide

PrettyPoly follows the shadcn model: copy source into your project. The public GitHub repository is the registry, so there is no npm package, registry server, or generated JSON payload to host.

## Requirements

- Public internet access to `github.com/pretty-poly/react-pretty-poly`.
- `shadcn@4.10.0` or newer.
- A `components.json` with aliases for `components`, `hooks`, `lib`, and `utils`.
- An existing shadcn `cn` helper at the configured `utils` path, usually `@/lib/utils`.

## Install

Initialize shadcn if the project has not already done so:

```bash
npx shadcn@latest init
```

Install the core grid system:

```bash
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-system#v0.3.0
```

Install optional feature sets as needed:

```bash
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-sidebar#v0.3.0
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-primitives#v0.3.0
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-tabs#v0.3.0
```

The tag is intentional. Use tagged installs for reproducibility, and update tags explicitly when adopting a newer PrettyPoly release.

## What Gets Copied

- `grid-system`: `components/grid`, `components/divider`, grid hooks, and grid utilities.
- `grid-sidebar`: optional block sidebar components.
- `grid-primitives`: ViewRegistry, CommandService, and LayoutService primitives.
- `grid-tabs`: BlockTabs, NewTabDropdown, and ViewRenderer.

Files are written through shadcn target placeholders such as `@components/`, `@hooks/`, and `@lib/`, so they land in the directories configured by the consuming project.

## Usage

```tsx
import { Grid } from "@/components/grid/grid"
import { Block } from "@/components/grid/block"
import type { BlockConfig } from "@/lib/grid-types"

const layout: BlockConfig[] = [
  { id: "root", type: "group", direction: "row", order: 0 },
  { id: "sidebar", type: "block", defaultSize: 250, sizeUnit: "px", parentId: "root", order: 0 },
  { id: "main", type: "block", defaultSize: 1, sizeUnit: "fr", parentId: "root", order: 1 },
]

export function Example() {
  return (
    <Grid defaultLayout={layout} dividers="auto" className="h-screen">
      <Block id="sidebar">Sidebar</Block>
      <Block id="main">Main</Block>
    </Grid>
  )
}
```

## Verification

After installing or updating PrettyPoly in a consuming project:

```bash
npm run type-check
npm run build
```

If imports fail, check the consuming project’s `components.json` aliases first. PrettyPoly source imports use the standard `@/components`, `@/hooks`, and `@/lib` style after installation.
