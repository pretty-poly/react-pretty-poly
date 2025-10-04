# Layout Modes in Pretty Poly

Pretty Poly supports three primary **grid-level layout modes** that transform the entire layout based on viewport size. The mode switching is handled primarily through CSS, using inline style generation and Tailwind's `group-data-*` variant system.

## Grid-level Layout Modes

### 1. Grid Mode (Desktop)
**Default breakpoint:** 1024px+

Full resizable grid layout with:
- CSS Grid with draggable dividers
- Zero-sum fractional unit calculations
- Collapse/expand functionality
- Keyboard navigation

### 2. Dock Mode (Mobile)
**Default breakpoint:** 0-767px

Bottom navigation bar with icon-based switching:
- Flex row layout at bottom of viewport
- Icons and labels for each block
- Order controlled via `dockOrder` property
- No dividers or resizing

**Block configuration example:**
```tsx
import { FileIcon, SearchIcon, SettingsIcon } from 'lucide-react'

<Grid
  defaultLayout={[
    { id: 'root', type: 'group', direction: 'row' },
    { id: 'editor', type: 'block', parentId: 'root', order: 0, defaultSize: 1, sizeUnit: 'fr' },
    { id: 'sidebar', type: 'block', parentId: 'root', order: 1, defaultSize: 300, sizeUnit: 'px' },
    { id: 'terminal', type: 'block', parentId: 'root', order: 2, defaultSize: 1, sizeUnit: 'fr' }
  ]}
>
  <Block
    id="editor"
    mobile={{ icon: FileIcon, label: "Editor", dockOrder: 1 }}
    dock={{ icon: FileIcon, label: "Editor", dockOrder: 1 }}
  >
    {/* Editor content */}
  </Block>

  <Block
    id="sidebar"
    mobile={{ icon: SearchIcon, label: "Search", dockOrder: 2 }}
    dock={{ icon: SearchIcon, label: "Search", dockOrder: 2 }}
  >
    {/* Sidebar content */}
  </Block>

  <Block
    id="terminal"
    mobile={{ icon: SettingsIcon, label: "Settings", dockOrder: 3 }}
    dock={{ icon: SettingsIcon, label: "Settings", dockOrder: 3 }}
  >
    {/* Terminal content */}
  </Block>
</Grid>
```

**Important:** Blocks must have mode-specific configuration with icons and labels for dock mode to work properly.

### 3. Tabs Mode (Tablet)
**Default breakpoint:** 768-1023px

Traditional tabbed interface:
- Flex column layout with tabs at top
- Tab labels configured per block
- Only active tab panel visible
- No dividers or resizing

**Block configuration example:**
```tsx
<Block
  id="editor"
  tabs={{
    tabLabel: "Editor",
    closable: true
  }}
>
  {/* Block content */}
</Block>
```

## How Mode Switching Works

### CSS-First Approach

The mode switching uses a CSS-first approach with minimal React branching:

1. **Grid container** sets `data-active-mode` attribute
2. **Inline CSS** is generated in `Grid.tsx` to transform layout
3. **Tailwind classes** on Block component use `group-data-*` variants
4. **Single render path** for all modes with conditional content

### Generated CSS Example

```css
/* Dock mode layout */
[data-grid-id="root"][data-active-mode="dock"] {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  height: 64px;
  background: hsl(var(--background));
  border-top: 1px solid hsl(var(--border));
}

/* Tabs mode layout */
[data-grid-id="root"][data-active-mode="tabs"] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
```

### Tailwind Integration

Block components use Tailwind's `group-data-*` variants:

```tsx
className={cn(
  // Base styles (grid mode)
  'overflow-hidden',

  // Dock mode styles
  'group-data-[active-mode=dock]:flex',
  'group-data-[active-mode=dock]:flex-col',
  'group-data-[active-mode=dock]:items-center',

  // Tabs mode styles
  'group-data-[active-mode=tabs]:flex-1',
  'group-data-[active-mode=tabs]:overflow-auto',
)}
```

## Block Sub-layouts

These are **NOT grid-level modes** but rather structured content within individual blocks:

### Stack Layout
Vertical sections within a block:
```tsx
<Block id="editor">
  <Block.Header>Title Bar</Block.Header>
  <Block.Content>Main Content</Block.Content>
  <Block.Footer>Status Bar</Block.Footer>
</Block>
```

### Sidebar Layout
Side navigation within a block:
```tsx
<Block id="editor">
  <Block.Sidebar position="left">
    <Block.Sidebar.Item icon={FileIcon} />
    <Block.Sidebar.Item icon={SearchIcon} />
  </Block.Sidebar>
  <Block.Content>Main Content</Block.Content>
</Block>
```

### Tabs Layout
Tabbed content within a block:
```tsx
<Block id="editor">
  <Block.Tabs
    tabs={[
      { id: 'file1', label: 'index.tsx' },
      { id: 'file2', label: 'App.tsx' }
    ]}
    activeTab="file1"
    onTabChange={setActiveTab}
  />
  <Block.Content>{/* Tab panel content */}</Block.Content>
</Block>
```

## Customizing Modes

You can customize the responsive breakpoints:

```tsx
<Grid
  defaultLayout={[...]}
  modes={{
    mobile: {
      type: 'dock',
      maxWidth: 640
    },
    tablet: {
      type: 'tabs',
      minWidth: 641,
      maxWidth: 1280
    },
    desktop: {
      type: 'grid',
      minWidth: 1281
    }
  }}
>
  {/* Blocks */}
</Grid>
```

Or use a custom matcher function:

```tsx
modes={{
  compact: {
    type: 'dock',
    matcher: (viewport) => viewport.width < 768 || viewport.orientation === 'portrait'
  },
  full: {
    type: 'grid',
    matcher: (viewport) => viewport.width >= 768 && viewport.orientation === 'landscape'
  }
}}
```

## Performance Benefits

This CSS-first approach provides:

1. **Smaller bundle size** - No separate React components per mode
2. **Faster mode switching** - CSS transforms without re-mounting
3. **Better animations** - Smooth CSS transitions between modes
4. **Less JavaScript** - Mode logic in CSS where possible
5. **Progressive enhancement** - Works with or without JS

## Implementation Files

- `src/components/Grid/Grid.tsx` - Inline CSS generation for modes (lines 143-190)
- `src/components/Block/Block.tsx` - Unified render path with Tailwind (lines 153-239)
- `src/hooks/useGridMode.ts` - Mode detection and breakpoints
- `src/types/index.ts` - LayoutMode type definition
