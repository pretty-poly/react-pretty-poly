# PrettyPoly Installation Guide

PrettyPoly follows the shadcn/ui philosophy: **copy components into your project** rather than installing from npm. This gives you full control over the code and ensures Tailwind CSS can properly generate all necessary classes.

## Why Copy Instead of Install?

When you install from npm and import components, Tailwind cannot scan the component files (they're in `node_modules`), so it won't generate the CSS classes used by the components. By copying the components into your project:

1. ✅ Tailwind scans the component code and generates all needed classes
2. ✅ You have full control to customize components
3. ✅ No version conflicts or dependency issues
4. ✅ TypeScript types are included directly

## Installation Methods

### Method 1: Using shadcn CLI (Recommended)

The PrettyPoly component registry is compatible with the official shadcn CLI.

#### Step 1: Initialize your project

If you haven't already set up shadcn in your project:

```bash
npx shadcn@latest init
```

This will create a `components.json` configuration file.

#### Step 2: Add PrettyPoly components

```bash
# Add the complete Grid system
npx shadcn@latest add https://pretty-poly.github.io/react/r/grid-system

# Optional: Add sidebar components
npx shadcn@latest add https://pretty-poly.github.io/react/r/grid-sidebar

# Optional: Add tab components
npx shadcn@latest add https://pretty-poly.github.io/react/r/grid-tabs
```

The CLI will:
- Copy all component files to your `components/` directory
- Install required dependencies (`clsx`, `tailwind-merge`)
- Update your Tailwind config with necessary animations
- Create all utility files and hooks

### Method 2: Manual Copy

If you prefer manual control, you can copy files directly from the repository.

#### Required Files

**Minimum Grid System:**
```
src/
├── components/
│   ├── grid/
│   │   ├── grid.tsx
│   │   ├── grid-provider.tsx
│   │   ├── block.tsx
│   │   ├── block-content.tsx
│   │   ├── block-header.tsx
│   │   ├── block-footer.tsx
│   │   ├── block-toolbar.tsx
│   │   └── block-layout.tsx
│   └── divider/
│       ├── divider.tsx
│       └── divider-overlay.tsx
├── hooks/
│   ├── use-grid-resize.ts
│   ├── use-grid-resize-operations.ts
│   ├── use-grid-mode.ts
│   ├── use-grid-persistence.ts
│   └── use-grid-keyboard.ts
├── lib/
│   ├── utils.ts (cn function)
│   ├── grid-calculations.ts
│   ├── grid-constraints.ts
│   ├── grid-storage.ts
│   └── grid-types.ts

```

#### Import Path Updates

After copying, update imports from `@pretty-poly/react` to your local paths:

```tsx
// Before (npm package)
import { Grid, Block, BlockContent } from '@pretty-poly/react'

// After (copied components)
import { Grid } from '@/components/grid/grid'
import { Block } from '@/components/grid/block'
import { BlockContent } from '@/components/grid/block-content'
```

## Dependencies

PrettyPoly has minimal dependencies:

```bash
npm install clsx tailwind-merge
```

**Peer dependencies:**
- `react` ^18.0.0
- `react-dom` ^18.0.0
- `tailwindcss` ^4.0.0

## Tailwind Configuration

### Required Animations

Add these to your `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      animation: {
        'grid-divider-fade': 'grid-divider-fade 200ms ease-out',
        'grid-divider-slide': 'grid-divider-slide 150ms cubic-bezier(0.4, 0, 0.2, 1)'
      },
      keyframes: {
        'grid-divider-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'grid-divider-slide': {
          '0%': { transform: 'translateY(-4px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  }
}
```

### Content Paths

Ensure Tailwind scans your copied components:

```js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/grid/**/*.{js,ts,jsx,tsx}', // PrettyPoly components
    './src/components/divider/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of config
}
```

## TypeScript Configuration

Ensure your `tsconfig.json` has path aliases configured:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

For Vite projects, also configure `vite.config.ts`:

```ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

## Verification

After installation, verify everything works:

```tsx
import { Grid, Block, BlockContent, BlockHeader } from '@/components/grid'
import type { BlockConfig } from '@/lib/grid-types'

const layout: BlockConfig[] = [
  { id: 'root', type: 'group', direction: 'row', order: 0 },
  { id: 'sidebar', type: 'block', defaultSize: 250, sizeUnit: 'px', parentId: 'root', order: 0 },
  { id: 'main', type: 'block', defaultSize: 1, sizeUnit: 'fr', parentId: 'root', order: 1 },
]

function App() {
  return (
    <Grid defaultLayout={layout} dividers="auto" className="h-screen">
      <Block id="sidebar">
        <BlockHeader>Sidebar</BlockHeader>
        <BlockContent>Sidebar content</BlockContent>
      </Block>
      <Block id="main">
        <BlockHeader>Main</BlockHeader>
        <BlockContent>Main content</BlockContent>
      </Block>
    </Grid>
  )
}
```

## Component Groups

PrettyPoly components are organized into groups:

### `grid-system` (Required)
The core grid layout system with resizable panels. Includes:
- Grid container and provider
- Block components
- Divider system
- All hooks and utilities
- Core types

### `grid-sidebar` (Optional)
Sidebar navigation components for use within blocks:
- BlockSidebar
- BlockSidebarItem
- BlockSidebarSpacer

### `grid-tabs` (Optional)
Tab interface components for use within blocks:
- BlockTabs

## Next Steps

- See [USAGE.md](./USAGE.md) for API documentation
- Check out [examples/demo](../examples/demo) for complete examples
- Read [IMPROVEMENT_PLAN.md](./IMPROVEMENT_PLAN.md) for upcoming features

## Troubleshooting

### Tailwind classes not working

Make sure:
1. Component files are copied to your project (not imported from npm)
2. Tailwind `content` config includes the component directories

### Import errors

Check that:
1. Path aliases are configured in both `tsconfig.json` and `vite.config.ts`
2. Import paths use `@/` prefix consistently
3. All required files were copied

### TypeScript errors

Ensure:
1. `grid-types.ts` is in your `lib/` directory
2. Your `tsconfig.json` includes the component directories
3. Dependencies are installed (`clsx`, `tailwind-merge`)

## Support

- GitHub Issues: https://github.com/pretty-poly/react-pretty-poly/issues
- Documentation: https://github.com/pretty-poly/react-pretty-poly/tree/main/docs
