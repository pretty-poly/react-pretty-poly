# PrettyPoly Component Registry

This directory contains the shadcn/ui-compatible component registry for PrettyPoly. The registry enables users to install components via the shadcn CLI instead of npm.

## Structure

```
registry/
├── README.md                 # This file
├── registry.json            # Registry configuration
└── (generated files)        # Built by npm run build:registry

public/r/                    # Output directory (after build)
├── registry.json            # Copied from registry/
├── grid-system.json         # Core grid system components
├── grid-sidebar.json        # Optional sidebar components
└── grid-tabs.json           # Optional tab components
```

## Building the Registry

### Generate Registry Files

```bash
npm run build:registry
```

This command:
1. Reads `registry/registry.json` configuration
2. Processes source files from `src/`
3. Transforms import paths (`@/components/*` → user's configured paths)
4. Generates JSON files in `public/r/` with component source code

### Build Process

The build script (`scripts/build-registry.ts`):
- Maps source files to registry paths
- Transforms TypeScript/JSX imports for user projects
- Bundles all dependencies for each component group
- Outputs shadcn-compatible JSON files

## Registry Configuration

`registry.json` defines available component groups:

```json
{
  "name": "@pretty-poly/react",
  "type": "registry:ui",
  "items": [
    {
      "name": "grid-system",
      "type": "registry:ui",
      "title": "Grid System",
      "description": "Complete polymorphic grid layout system",
      "files": [
        { "path": "components/grid/grid.tsx", "type": "registry:component" },
        // ... more files
      ],
      "dependencies": [],
      "registryDependencies": [],
      "tailwind": {
        "config": {
          // Tailwind extensions needed
        }
      }
    }
  ]
}
```

## Component Groups

### `grid-system` (Required)
**Files:** 20 files
**Description:** Complete grid layout system with resizable panels

Includes:
- Core Grid components (Grid, GridProvider, Block)
- Divider system (Divider, DividerOverlay)
- All hooks (resize, mode, persistence, keyboard)
- Utilities (calculations, constraints, storage, types)
- Core styles

**Dependencies:**
- `clsx` (for className merging)
- `tailwind-merge` (for Tailwind class deduplication)

### `grid-sidebar` (Optional)
**Files:** 3 files
**Description:** Sidebar navigation components

Includes:
- BlockSidebar
- BlockSidebarItem
- BlockSidebarSpacer

**Registry Dependencies:** `grid-system`

### `grid-tabs` (Optional)
**Files:** 1 file
**Description:** Tab interface components

Includes:
- BlockTabs

**Registry Dependencies:** `grid-system`

## File Mappings

The build script maps source files to registry paths:

| Source File | Registry Path | Type |
|-------------|---------------|------|
| `src/components/Grid/Grid.tsx` | `components/grid/grid.tsx` | component |
| `src/components/Grid/GridProvider.tsx` | `components/grid/grid-provider.tsx` | component |
| `src/components/Block/Block.tsx` | `components/grid/block.tsx` | component |
| `src/hooks/useGridResize.ts` | `hooks/use-grid-resize.ts` | hook |
| `src/utils/calculations.ts` | `lib/grid-calculations.ts` | lib |
| `src/types/index.ts` | `lib/grid-types.ts` | lib |

## Import Transformations

The build process transforms imports for user projects:

```tsx
// Source (PrettyPoly internal)
import { GridProvider } from '@/components/Grid/GridProvider'
import { cn } from '@/utils/cn'
import { useGridResize } from '@/hooks/useGridResize'
import type { BlockConfig } from '@/types'

// Registry output (user project)
import { GridProvider } from '@/components/grid/grid-provider'
import { cn } from '@/lib/utils'
import { useGridResize } from '@/hooks/use-grid-resize'
import type { BlockConfig } from '@/lib/grid-types'
```

Key transformations:
- PascalCase directories → kebab-case files
- `@/components/Grid/*` → `@/components/grid/*`
- `@/components/Block/*` → `@/components/grid/*`
- `@/components/Divider/*` → `@/components/divider/*`
- `@/utils/*` → `@/lib/grid-*`
- `@/hooks/useGridX` → `@/hooks/use-grid-x`
- `@/types` → `@/lib/grid-types`

## Adding New Components

To add a new component to the registry:

### 1. Create the component

Add your component to `src/components/`:

```tsx
// src/components/Grid/NewComponent.tsx
export function NewComponent() {
  // implementation
}
```

### 2. Update registry.json

Add the component to an existing group or create a new one:

```json
{
  "name": "grid-system",
  "files": [
    // ... existing files
    {
      "path": "components/grid/new-component.tsx",
      "type": "registry:component"
    }
  ]
}
```

### 3. Update build script mappings

Add the file mapping in `scripts/build-registry.ts`:

```typescript
const FILE_MAPPINGS = {
  // ... existing mappings
  'components/grid/new-component.tsx': {
    src: 'src/components/Grid/NewComponent.tsx',
    target: 'components/grid/new-component.tsx'
  }
}
```

### 4. Rebuild registry

```bash
npm run build:registry
```

### 5. Test installation

```bash
cd examples/demo
npx shadcn@latest add ../../../public/r/grid-system
```

## Publishing the Registry

The registry files in `public/r/` should be:

1. **Hosted on a static site** (GitHub Pages, Vercel, Netlify, etc.)
2. **Served with CORS enabled**
3. **Available at a stable URL**

Example deployment:
```
https://pretty-poly.github.io/react/r/registry.json
https://pretty-poly.github.io/react/r/grid-system.json
https://pretty-poly.github.io/react/r/grid-sidebar.json
```

Then users can install with:
```bash
npx shadcn@latest add https://pretty-poly.github.io/react/r/grid-system
```

## Development Workflow

1. **Make changes** to components in `src/`
2. **Run build** to update npm package: `npm run build`
3. **Build registry** to update component registry: `npm run build:registry`
4. **Test locally** in demo app
5. **Commit** both source and registry changes
6. **Deploy** `public/r/` to static hosting

## Maintenance

### Regular Updates

When components change:
- Update source files in `src/`
- Rebuild registry: `npm run build:registry`
- Test with demo app
- Commit and deploy

### Version Compatibility

The registry should match the npm package version:
- Keep `registry.json` in sync with `package.json` version
- Document breaking changes in registry updates
- Consider versioned registry URLs for major versions

### Testing

Test the registry installation:

```bash
# In a test project
npx shadcn@latest init
npx shadcn@latest add /path/to/pretty-poly/public/r/grid-system

# Verify:
# - All files copied correctly
# - Imports resolve
# - Tailwind classes work
# - TypeScript types work
```

## Troubleshooting

### Registry build fails

Check:
- All mapped source files exist
- No circular dependencies
- TypeScript compiles without errors

### shadcn CLI errors

Ensure:
- `registry.json` schema is valid
- File paths are correct
- Component JSON is valid
- CORS headers if hosted remotely

### Import resolution issues

Verify:
- Path transformations in build script
- User's `components.json` aliases
- Import paths match shadcn conventions

## Resources

- [shadcn/ui Registry Docs](https://ui.shadcn.com/docs/registry)
- [shadcn/ui CLI Docs](https://ui.shadcn.com/docs/cli)
- [Component Registry Schema](https://ui.shadcn.com/schema.json)
