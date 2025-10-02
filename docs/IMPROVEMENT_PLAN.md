# Pretty Poly Improvement Plan

## Executive Summary

Comprehensive plan to fix issues and enhance the @pretty-poly/react library. This plan addresses test failures, adds missing tooling, improves code quality, and implements performance optimizations.

---

## Priority 1: Critical Fixes (1-2 hours) ⚡

### Task 1: Add ESLint Configuration
**Status:** Pending
**Effort:** 15 minutes

Install and configure ESLint with TypeScript support:

```bash
npm install -D eslint@latest @eslint/js typescript-eslint
```

Create `eslint.config.js`:
```js
import js from '@eslint/js'
import typescript from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
    }
  }
]
```

**Expected outcome:** Zero lint errors, enforced code quality

---

### Task 2: Fix Test - Update CSS Variable Naming
**Status:** Pending
**Effort:** 30 minutes

**Issue:** Tests expect old unscoped variable names (`--sidebar-size`) but implementation now uses grid-scoped names (`--root-sidebar-size`)

**Files to fix:**
- `src/components/__tests__/Grid.simple.test.tsx`
- `src/components/__tests__/Grid.integration.test.tsx`
- `src/utils/__tests__/calculations.test.ts`

**Changes:**
```ts
// Before
expect(cssVars).toContain('--sidebar-size: 300px')

// After
expect(cssVars).toContain('--root-sidebar-size: 300px')

// calculations.test.ts
// Before
expect(template).toBe('200px 8px var(--block2-size, 1fr)')

// After
expect(template).toBe('var(--root-block1-size, 200px) 8px var(--root-block2-size, 1fr)')
```

**Expected outcome:** 2 tests fixed

---

### Task 3: Fix Test - Cursor Cleanup Timing
**Status:** Pending
**Effort:** 20 minutes

**Issue:** Cursor cleanup is async but tests expect synchronous behavior

**Files to fix:**
- `src/components/__tests__/Divider.test.tsx` (2 failing tests)

**Changes:**
```ts
// Before
fireEvent.mouseUp(divider)
expect(document.body.style.cursor).toBe('')

// After
fireEvent.mouseUp(divider)
await waitFor(() => {
  expect(document.body.style.cursor).toBe('')
}, { timeout: 100 })
```

**Expected outcome:** 2 tests fixed

---

### Task 4: Fix Test - Remove Outdated Divider Warning Test
**Status:** Pending
**Effort:** 10 minutes

**Issue:** Test expects `null` when target block missing, but component now auto-detects from DOM siblings (improved behavior)

**Files to fix:**
- `src/components/__tests__/Divider.test.tsx`

**Changes:**
```ts
// Remove this test entirely (line ~45)
it('warns when target block is not found', () => {
  // This test assumes old behavior where missing target = null
  // New behavior: auto-detects from DOM siblings
})
```

**Expected outcome:** 1 test removed, no regression (feature improved)

---

### Task 5: Fix Test - Resize Constraint Assertion
**Status:** Pending
**Effort:** 15 minutes

**Issue:** Test has invalid argument combination for assertion

**Files to fix:**
- `src/components/__tests__/Grid.integration.test.tsx`

**Changes:**
```ts
// Find the assertion error and fix the test structure
// Likely needs to check actual DOM attributes or state
```

**Expected outcome:** 1 test fixed

**Summary:** All 58 tests passing ✅

---

## Priority 2: Code Quality Improvements (3-4 hours) 🔧

### Task 6: Extract Resize Logic to Hook
**Status:** Pending
**Effort:** 2 hours

**Goal:** Reduce `GridProvider.tsx` complexity from 641 lines to ~450 lines

Create `src/hooks/useGridResizeOperations.ts`:

```ts
import { useCallback } from 'react'
import type { GridState, GridAction } from '../types'

export function useGridResizeOperations(
  state: GridState,
  dispatch: React.Dispatch<GridAction>
) {
  const getEventPosition = useCallback((
    event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent
  ): { x: number; y: number } => {
    if ("touches" in event) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY }
    }
    return { x: event.clientX, y: event.clientY }
  }, [])

  const startResize = useCallback((
    blockId: string,
    dividerId: string,
    event: React.MouseEvent | React.TouchEvent
  ) => {
    // Move 150+ lines of startResize logic from GridProvider here
  }, [state.blocks, dispatch])

  const updateResize = useCallback((event: MouseEvent | TouchEvent) => {
    // Move 150+ lines of updateResize logic from GridProvider here
  }, [state.resize, state.blocks, dispatch])

  const endResize = useCallback(() => {
    dispatch({ type: "END_RESIZE" })
    document.body.style.userSelect = ""
    document.body.style.cursor = ""
  }, [dispatch])

  return { startResize, updateResize, endResize }
}
```

Update `GridProvider.tsx`:
```ts
// Replace inline resize logic with:
const { startResize, updateResize, endResize } = useGridResizeOperations(state, dispatch)
```

**Benefits:**
- Easier to test resize logic in isolation
- Better separation of concerns
- Reduced cognitive load when reading GridProvider

---

### Task 7: Add Bundle Size Budgets
**Status:** Pending
**Effort:** 1 hour

Install tools:
```bash
npm install -D rollup-plugin-visualizer size-limit @size-limit/preset-small-lib
```

Update `vite.config.ts`:
```ts
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        }
      }
    },
    chunkSizeWarningLimit: 150,
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({ insertTypesEntry: true }),
    visualizer({
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  ]
})
```

Create `.size-limit.json`:
```json
[
  {
    "name": "Main Bundle (ESM)",
    "path": "dist/index.js",
    "limit": "150 KB"
  },
  {
    "name": "Main Bundle (Gzipped)",
    "path": "dist/index.js",
    "limit": "32 KB",
    "gzip": true
  },
  {
    "name": "Styles",
    "path": "dist/style.css",
    "limit": "25 KB"
  }
]
```

Add to `package.json`:
```json
{
  "scripts": {
    "build:analyze": "vite build && open dist/stats.html",
    "size": "size-limit",
    "size:why": "size-limit --why"
  }
}
```

**Benefits:**
- Visual bundle analysis
- CI fails if bundle grows unexpectedly
- Track size over time

---

### Task 8: Implement Code Splitting (Option 3 - Hybrid) ⭐
**Status:** Deferred
**Effort:** 4-6 hours
**Blocker:** Stack and Dock modes need fleshing out first

**Note:** This task is postponed until stack and dock views are fully implemented and tested. Once they're mature, we'll implement:

1. **Default export** - all modes bundled (backward compatible)
2. **Automatic detection** - Grid only loads configured modes
3. **Named exports** - advanced users can import specific modes

**Placeholder structure:**
```
src/components/Block/modes/
├── GridBlock.tsx      # Desktop resizable grid (exists)
├── DockBlock.tsx      # Mobile bottom nav (needs work)
├── TabsBlock.tsx      # Tablet tabs (exists)
├── StackBlock.tsx     # Mobile full-screen (needs work)
├── SidebarBlock.tsx   # Collapsible sidebar (exists)
└── AccordionBlock.tsx # Vertical sections (needs work)
```

**Expected outcome (when implemented):**
- Main bundle: 143 KB → ~100 KB (30% reduction)
- Mode chunks: 10-15 KB each, loaded on demand
- No breaking changes

---

## Priority 3: Documentation (4-6 hours) 📚

### Task 9: Add JSDoc Comments
**Status:** Pending
**Effort:** 2 hours

Add comprehensive JSDoc to all exported utilities:

**Files to document:**
- `src/utils/calculations.ts` (all 10+ exported functions)
- `src/utils/constraints.ts`
- `src/utils/storage.ts`
- `src/hooks/*.ts`

**Example:**
```ts
/**
 * Calculate available flex space in pixels after accounting for fixed tracks and gaps.
 *
 * Used by the grid resize system to determine how much space is available for
 * fractional (fr) units after fixed pixel tracks and gaps are subtracted.
 *
 * @param containerPx - Total container size in pixels
 * @param fixedTrackPx - Sum of all fixed (px) track sizes
 * @param gapsPx - Sum of all gap sizes between tracks
 * @returns Available space for fr units, minimum 0
 *
 * @example
 * ```ts
 * // Container is 1000px, has 300px sidebar, 16px total gaps
 * const flexSpace = getFlexSpacePx(1000, 300, 16)
 * // Returns: 684px available for fractional units
 * ```
 */
export function getFlexSpacePx(
  containerPx: number,
  fixedTrackPx: number,
  gapsPx: number
): number {
  return Math.max(0, containerPx - fixedTrackPx - gapsPx)
}
```

**Benefits:**
- Better IDE autocomplete
- Generated API documentation
- Easier onboarding for contributors

---

### Task 10: Create Example Demos
**Status:** Pending
**Effort:** 3 hours

Create `examples/` directory:

```
examples/
├── 01-basic-layout/
│   ├── index.html
│   ├── app.tsx
│   └── README.md
├── 02-responsive/
│   ├── index.html
│   ├── app.tsx
│   └── README.md
├── 03-vscode-clone/
│   ├── index.html
│   ├── app.tsx
│   └── README.md
├── 04-shadcn-integration/
│   ├── index.html
│   ├── app.tsx
│   └── README.md
└── 05-custom-modes/
    ├── index.html
    ├── app.tsx
    └── README.md
```

Each example should:
- Be a standalone working demo
- Include clear README with explanation
- Show best practices
- Be deployable to GitHub Pages

---

### Task 11: Add Storybook Stories
**Status:** Pending
**Effort:** 2 hours

Create stories for all components:

```
src/
├── components/
│   ├── Grid/
│   │   └── Grid.stories.tsx
│   ├── Block/
│   │   └── Block.stories.tsx
│   └── Divider/
│       └── Divider.stories.tsx
```

**Example story:**
```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Grid, Block, Divider } from '../..'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Grid>

export const BasicLayout: Story = {
  args: {
    defaultLayout: [
      { id: 'root', type: 'group', direction: 'row', order: 0 },
      {
        id: 'sidebar',
        type: 'block',
        defaultSize: 300,
        minSize: 200,
        maxSize: 500,
        sizeUnit: 'px',
        dividerPosition: 'end',
        parentId: 'root',
        order: 0
      },
      {
        id: 'main',
        type: 'block',
        defaultSize: 1,
        sizeUnit: 'fr',
        parentId: 'root',
        order: 1
      },
    ]
  },
  render: (args) => (
    <Grid {...args}>
      <Block id="sidebar" className="bg-muted p-4">
        <h2 className="font-semibold mb-2">Sidebar</h2>
        <p className="text-sm text-muted-foreground">Resizable sidebar content</p>
      </Block>
      <Divider targetId="sidebar" position="end" />
      <Block id="main" className="p-6">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>Drag the divider to resize the sidebar.</p>
      </Block>
    </Grid>
  )
}

export const CollapsibleSidebar: Story = {
  // ... more stories
}

export const NestedGrids: Story = {
  // ... more stories
}
```

**Benefits:**
- Interactive component playground
- Visual regression testing
- Living documentation

---

## Implementation Timeline

### Week 1: Stabilization
- [x] Task 1: ESLint config (Day 1)
- [x] Tasks 2-5: Fix all tests (Day 1-2)
- [x] Verify CI/CD green (Day 2)

### Week 2: Code Quality
- [ ] Task 6: Extract resize hook (Day 3-4)
- [ ] Task 7: Bundle budgets (Day 5)

### Week 3: Documentation
- [ ] Task 9: JSDoc comments (Day 6-7)
- [ ] Task 10: Example demos (Day 8-9)
- [ ] Task 11: Storybook stories (Day 10)

### Future: Performance (after stack/dock mature)
- [ ] Task 8: Code splitting implementation

---

## Success Metrics

| Metric | Before | Target | Improvement |
|--------|--------|--------|-------------|
| Test pass rate | 91% (53/58) | 100% (58/58) | +9% |
| ESLint errors | Unknown | 0 | ✓ |
| Bundle size (gzip) | 31 KB | 22-28 KB | -10-29% |
| Documentation coverage | ~0% | 80%+ | +80% |
| Code maintainability (lines/file avg) | ~200 | ~150 | -25% |

---

## Notes

### Code Splitting Strategy (Option 3 - Hybrid)

**Deferred until stack and dock modes are fully implemented.**

The hybrid approach provides:
1. **Backward compatibility** - existing apps keep working
2. **Automatic optimization** - Grid detects which modes are configured
3. **Progressive enhancement** - advanced users opt into deeper optimizations

**Current mode maturity:**
- ✅ Grid mode - fully functional
- ✅ Tabs mode - fully functional
- ✅ Sidebar mode - fully functional
- ⚠️ Dock mode - needs fleshing out
- ⚠️ Stack mode - needs fleshing out
- ⚠️ Accordion mode - needs implementation

Once dock and stack modes are production-ready, we can split them into separate chunks without worrying about shipping incomplete features.

---

## Open Questions

1. Should we add Playwright E2E tests for resize interactions?
2. Do we need a11y testing with axe-core?
3. Should bundle budgets be enforced in CI or just warnings?
4. Deploy Storybook to GitHub Pages or Chromatic?

---

## Maintenance

This plan should be reviewed and updated:
- After each completed task
- When new issues are discovered
- When library requirements change
- Quarterly for relevance

**Last Updated:** 2025-10-02
