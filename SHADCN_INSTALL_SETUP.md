# Shadcn-Style Component Installation Setup

This document summarizes the shadcn/ui-compatible installation system implemented for PrettyPoly.

## What Was Implemented

### 1. Component Registry (`registry/`)

Created a shadcn/ui-compatible registry configuration that defines component groups:

- **`grid-system`**: Core grid layout system (20 files)
- **`grid-sidebar`**: Optional sidebar components (3 files)
- **`grid-tabs`**: Optional tab components (1 file)

**Files:**
- `registry/registry.json` - Main configuration
- `registry/README.md` - Registry documentation

### 2. Build System (`scripts/`)

Created a build script that generates shadcn-compatible registry files:

**Script:** `scripts/build-registry.ts`

**What it does:**
1. Reads source files from `src/`
2. Transforms import paths for user projects:
   - `@/components/Grid/*` → `@/components/grid/*`
   - `@/utils/*` → `@/lib/grid-*`
   - `@/hooks/useGridX` → `@/hooks/use-grid-x`
3. Bundles component source code into JSON files
4. Outputs to `public/r/` directory

**Build command:**
```bash
npm run build:registry
```

**Output:**
```
public/r/
├── registry.json
├── grid-system.json
├── grid-sidebar.json
└── grid-tabs.json
```

### 3. Documentation

Created comprehensive documentation:

- **`docs/INSTALLATION.md`**: User-facing installation guide
  - shadcn CLI usage
  - Manual copy instructions
  - Tailwind configuration
  - Troubleshooting

- **`registry/README.md`**: Maintainer documentation
  - Registry structure
  - Build process
  - Adding new components
  - Publishing guide

- **`README.md`**: Updated with installation methods
  - Method 1: Copy components (recommended)
  - Method 2: NPM package (fallback)

### 4. Dependencies

Added `tsx` for running TypeScript build scripts:
```json
{
  "devDependencies": {
    "tsx": "^4.20.6"
  }
}
```

## How It Works

### For End Users

Users can now install PrettyPoly components like any shadcn component:

```bash
# Step 1: Initialize shadcn in their project
npx shadcn@latest init

# Step 2: Add PrettyPoly components
npx shadcn@latest add https://pretty-poly.github.io/react/r/grid-system
```

The shadcn CLI will:
1. Read the registry JSON
2. Copy component files to their `src/components/` directory
3. Install dependencies (`clsx`, `tailwind-merge`)
4. Update Tailwind config with required animations
5. Create all utility files and hooks

### Why This Solves the Tailwind Problem

**The Problem:**
- When importing from npm (`import { Grid } from '@pretty-poly/react'`), Tailwind can't scan the component files in `node_modules`
- Result: CSS classes used by components aren't generated
- UI breaks with missing styles

**The Solution:**
- Components are **copied into the user's project** (not in `node_modules`)
- Tailwind scans these copied files and generates all needed classes
- Result: All styles work correctly

### Architecture

```
PrettyPoly Project
├── src/                          # Source components (PascalCase, @/ imports)
│   ├── components/
│   │   ├── Grid/
│   │   ├── Block/
│   │   └── Divider/
│   ├── hooks/
│   ├── utils/
│   └── types/
│
├── registry/                     # Registry configuration
│   ├── registry.json
│   └── README.md
│
├── scripts/
│   └── build-registry.ts        # Build script
│
└── public/r/                     # Generated registry files (after build)
    ├── registry.json
    ├── grid-system.json         # Contains all component source code
    ├── grid-sidebar.json
    └── grid-tabs.json

User Project (after install)
├── src/
│   ├── components/
│   │   ├── grid/                # Copied from PrettyPoly (kebab-case)
│   │   │   ├── grid.tsx
│   │   │   ├── grid-provider.tsx
│   │   │   ├── block.tsx
│   │   │   └── ...
│   │   └── divider/
│   │       ├── divider.tsx
│   │       └── divider-overlay.tsx
│   ├── hooks/                   # Copied hooks (kebab-case)
│   │   ├── use-grid-resize.ts
│   │   └── ...
│   └── lib/                     # Copied utilities
│       ├── utils.ts
│       ├── grid-calculations.ts
│       └── grid-types.ts
│
└── tailwind.config.js           # Updated with required animations
```

## Component Groups Explained

### Why Groups?

PrettyPoly components are tightly coupled:
- `Grid` needs `GridProvider` (context)
- `Block` needs grid context
- Multiple hooks and utilities are interdependent

Unlike shadcn's atomic components (Button, Card), PrettyPoly is a **system** that requires all pieces together.

### `grid-system` (Required)

The complete grid layout system. Includes:
- **Components**: Grid, GridProvider, Block, Divider, etc.
- **Hooks**: Resize, mode, persistence, keyboard
- **Utilities**: Calculations, constraints, storage, types
- **Styles**: Core CSS for dynamic grids

**Files**: 20 files
**Dependencies**: `clsx`, `tailwind-merge`

### `grid-sidebar` (Optional)

Sidebar navigation components for use within blocks:
- BlockSidebar
- BlockSidebarItem
- BlockSidebarSpacer

**Files**: 3 files
**Requires**: `grid-system`

### `grid-tabs` (Optional)

Tab interface components for use within blocks:
- BlockTabs

**Files**: 1 file
**Requires**: `grid-system`

## Import Path Transformations

The build script transforms imports from PrettyPoly's internal structure to user project structure:

| PrettyPoly (Internal) | User Project (After Copy) |
|-----------------------|---------------------------|
| `@/components/Grid/Grid.tsx` | `@/components/grid/grid.tsx` |
| `@/components/Block/Block.tsx` | `@/components/grid/block.tsx` |
| `@/hooks/useGridResize.ts` | `@/hooks/use-grid-resize.ts` |
| `@/utils/calculations.ts` | `@/lib/grid-calculations.ts` |
| `@/types/index.ts` | `@/lib/grid-types.ts` |

All imports within files are automatically transformed to match.

## Next Steps for Deployment

To make this available to users:

### 1. Host the Registry

Deploy `public/r/` to a static host:

**Options:**
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

**URL structure:**
```
https://pretty-poly.github.io/react/r/registry.json
https://pretty-poly.github.io/react/r/grid-system.json
```

**Important:** Enable CORS headers for cross-origin access.

### 2. Update Documentation

Add the registry URL to docs:
```bash
npx shadcn@latest add https://pretty-poly.github.io/react/r/grid-system
```

### 3. CI/CD Integration

Add registry build to CI:
```yaml
# .github/workflows/deploy.yml
- name: Build Registry
  run: npm run build:registry

- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    publish_dir: ./public/r
```

### 4. Version Management

- Keep registry in sync with npm package version
- Consider versioned URLs for breaking changes:
  - `v1/registry.json`
  - `v2/registry.json`

## Maintenance Workflow

### When Components Change

1. **Update source**: Edit files in `src/`
2. **Build package**: `npm run build` (for npm package)
3. **Build registry**: `npm run build:registry` (for shadcn install)
4. **Test**: Install in demo app to verify
5. **Commit**: Both source and generated registry files
6. **Deploy**: Push to static host

### Adding New Components

1. Create component in `src/components/`
2. Update `registry/registry.json` with new file
3. Update `scripts/build-registry.ts` with file mapping
4. Run `npm run build:registry`
5. Test installation
6. Document in INSTALLATION.md

## Benefits

### For Users

- ✅ **Tailwind classes work** - Components scanned by Tailwind
- ✅ **Full control** - Can customize copied components
- ✅ **No version conflicts** - Components in your codebase
- ✅ **TypeScript support** - Types included with components
- ✅ **Familiar workflow** - Same as shadcn/ui

### For Maintainers

- ✅ **Automated build** - Registry generated from source
- ✅ **Single source of truth** - Source in `src/`, registry auto-generated
- ✅ **Easy updates** - Change source, rebuild registry
- ✅ **Version control** - Registry files tracked in git
- ✅ **Standard tooling** - Uses shadcn CLI (widely adopted)

## Comparison: Before vs After

### Before (NPM Only)

```bash
npm install @pretty-poly/react
```

**Problems:**
- Tailwind can't scan node_modules
- Classes not generated
- Need safelist or JIT workarounds
- Limited customization

### After (Shadcn-Style)

```bash
npx shadcn@latest add https://pretty-poly.github.io/react/r/grid-system
```

**Benefits:**
- Tailwind scans copied components
- All classes generated automatically
- Full customization possible
- Standard shadcn workflow

## Testing the Setup

Test the complete workflow:

```bash
# In a test project
mkdir test-project && cd test-project
npm create vite@latest . -- --template react-ts
npm install

# Initialize shadcn
npx shadcn@latest init

# Test local registry (before deploying)
npx shadcn@latest add ../pretty-poly/public/r/grid-system

# Verify:
# ✓ Files copied to src/components/grid/
# ✓ Hooks copied to src/hooks/
# ✓ Utils copied to src/lib/
# ✓ Styles copied to src/styles/
# ✓ Imports resolve
# ✓ TypeScript compiles
# ✓ Tailwind classes work
```

## Files Created

```
pretty_poly/
├── registry/
│   ├── registry.json                    # NEW: Registry configuration
│   └── README.md                        # NEW: Registry docs
├── scripts/
│   └── build-registry.ts                # NEW: Build script
├── docs/
│   ├── INSTALLATION.md                  # NEW: Installation guide
│   └── SHADCN_INSTALL_SETUP.md         # NEW: This file
├── public/r/                            # NEW: Generated files
│   ├── registry.json
│   ├── grid-system.json
│   ├── grid-sidebar.json
│   └── grid-tabs.json
├── package.json                         # UPDATED: Added build:registry script
└── README.md                            # UPDATED: Installation methods
```

## Summary

You now have a complete shadcn-style component installation system for PrettyPoly that:

1. ✅ Solves the Tailwind class generation problem
2. ✅ Provides a familiar installation workflow
3. ✅ Gives users full control over components
4. ✅ Maintains the npm package as an alternative
5. ✅ Uses standard tooling (shadcn CLI)
6. ✅ Is fully documented
7. ✅ Has automated builds

The system is ready to use and deploy!
