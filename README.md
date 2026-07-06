# PrettyPoly

A shadcn-compatible polymorphic grid system for React. PrettyPoly is distributed as source through the public GitHub registry at `pretty-poly/react-pretty-poly`; it is not intended to be installed as an npm package.

> Alpha release `v0.4.1`: grid mode is the primary supported path. Responsive modes, tabs, and primitives are still stabilizing.

## Install

Initialize shadcn in the consuming project if needed:

```bash
npx shadcn@latest init
```

Install the core grid system from the tagged GitHub registry:

```bash
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-system#v0.4.1
```

Optional items:

```bash
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-sidebar#v0.4.1
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-primitives#v0.4.1
npx shadcn@latest add pretty-poly/react-pretty-poly/grid-tabs#v0.4.1
```

GitHub registry installs copy source into your project using your `components.json` aliases. PrettyPoly assumes a normal shadcn setup with `@/components`, `@/hooks`, `@/lib`, and an existing `@/lib/utils` `cn` helper.

## Usage

```tsx
import { Grid } from "@/components/grid/grid"
import { Block } from "@/components/grid/block"
import type { BlockConfig } from "@/lib/grid-types"

const layout: BlockConfig[] = [
  { id: "root", type: "group", direction: "row", order: 0 },
  {
    id: "sidebar",
    type: "block",
    defaultSize: 300,
    minSize: 200,
    maxSize: 500,
    sizeUnit: "px",
    parentId: "root",
    order: 0,
  },
  {
    id: "main",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 1,
  },
]

export function App() {
  return (
    <Grid defaultLayout={layout} dividers="auto" persist="localStorage">
      <Block id="sidebar" className="p-4">
        Sidebar
      </Block>
      <Block id="main" className="p-6">
        Main content
      </Block>
    </Grid>
  )
}
```

Divider behavior is explicit:

- `dividers="auto"` is the default and generates overlay dividers from adjacent blocks.
- `dividers="manual"` renders only explicit `<Divider>` children.
- `dividers="none"` suppresses both generated and explicit dividers.

## Registry Items

- `grid-system`: core grid, block, divider, hooks, and grid utilities.
- `grid-sidebar`: optional sidebar components.
- `grid-primitives`: ViewRegistry, CommandService, and LayoutService primitives.
- `grid-tabs`: optional tab components plus ViewRegistry tab helpers.

## Development

The installable source lives in top-level `components/`, `hooks/`, and `lib/`. The root `registry.json` is the source registry entrypoint.

```bash
npm run registry:validate
npm run sync:demo
npm test -- --run
npm run type-check
npm run lint
npm --prefix examples/demo run type-check
npm --prefix examples/demo run build
```

There is no registry build step. Do not commit generated `public/r` or `dist/r` files.
