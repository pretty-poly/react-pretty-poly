# @pretty-poly/react

A polymorphic React component library for creating resizable, responsive grid layouts that adapt to any context.

## Features

🎯 **Polymorphic Design** - Handle multiple tasks or contexts within a single view
📱 **Responsive Modes** - Automatically switch between grid, dock, tabs, and other layouts
🎛️ **Resizable Components** - CSS Grid-powered with fractional and pixel units
💾 **State Persistence** - localStorage, sessionStorage, or custom persistence
⌨️ **Keyboard Navigation** - Full accessibility support with keyboard controls
🎨 **Shadcn/UI Compatible** - Works seamlessly with modern design systems
🔧 **TypeScript First** - Comprehensive type safety and IntelliSense

## Installation

```bash
npm install @pretty-poly/react
```

## Quick Start

```tsx
import { Grid, Block, Divider } from '@pretty-poly/react'
import '@pretty-poly/react/styles'

const layout = [
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0
  },
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
  }
]

function App() {
  return (
    <Grid defaultLayout={layout} persist="localStorage">
      <Block id="sidebar" className="bg-gray-100 p-4">
        <h2>Sidebar</h2>
        <nav>...</nav>
      </Block>

      <Divider targetId="sidebar" position="end" />

      <Block id="main" className="p-6">
        <h1>Main Content</h1>
        <p>Resizable content area</p>
      </Block>
    </Grid>
  )
}
```

## Responsive Design

PrettyPoly automatically adapts to different screen sizes and interaction patterns:

```tsx
const responsiveModes = {
  mobile: { type: 'dock', maxWidth: 767 },
  tablet: { type: 'tabs', minWidth: 768, maxWidth: 1023 },
  desktop: { type: 'grid', minWidth: 1024 }
}

<Grid modes={responsiveModes}>
  <Block
    id="sidebar"
    desktop={{ defaultSize: 300, collapsible: true }}
    mobile={{ icon: MenuIcon, label: "Menu", dockOrder: 1 }}
    tablet={{ tabLabel: "Navigation" }}
  >
    Content adapts automatically
  </Block>
</Grid>
```

## Core Components

### Grid
Root container that manages layout state and responsive behavior.

```tsx
<Grid
  defaultLayout={blocks}
  modes={responsiveModes}
  persist="localStorage"
  onLayoutChange={handleChange}
  onModeChange={handleModeChange}
/>
```

### Block
Content containers that can be resized, collapsed, and configured per mode.

```tsx
<Block
  id="unique-id"
  type="block" // or "group"
  desktop={{ defaultSize: 300, minSize: 200 }}
  mobile={{ icon: Icon, label: "Label" }}
>
  Content
</Block>
```

### Divider
Draggable handles for resizing between blocks.

```tsx
<Divider
  targetId="block-to-resize"
  position="end" // or "start"
  size={8}
  className="hover:bg-blue-200"
/>
```

## Layout Modes

### Grid Mode (Desktop)
Full resizable grid with draggable dividers, collapse/expand, and keyboard navigation.

### Dock Mode (Mobile)
Bottom navigation with icon-based panel switching, similar to mobile apps.

### Tabs Mode (Tablet)
Traditional tabbed interface for medium-sized screens.

### Stack Mode
Full-screen panels with swipe navigation for mobile interfaces.

### Sidebar Mode
Collapsible sidebar with main content area.

### Accordion Mode
Expandable vertical sections for content hierarchy.

## Persistence

Save and restore layout state across sessions:

```tsx
// localStorage
<Grid persist="localStorage" persistKey="my-layout" />

// sessionStorage
<Grid persist="sessionStorage" />

// Custom function
<Grid persist={(state) => saveToDatabase(state)} />
```

## Keyboard Navigation

- **Arrow Keys**: Navigate between blocks
- **Ctrl + Arrow Keys**: Resize focused block
- **Ctrl + Plus/Minus**: Expand/collapse block
- **Enter/Space**: Toggle collapse state
- **Escape**: Remove focus

## TypeScript

Full TypeScript support with comprehensive type definitions:

```tsx
import type {
  BlockConfig,
  GridProps,
  ResponsiveModes,
  LayoutMode
} from '@pretty-poly/react'
```

## Styling

### CSS Variables (Shadcn/UI Compatible)
```css
:root {
  --pretty-poly-border: hsl(214.3 31.8% 91.4%);
  --pretty-poly-foreground: hsl(222.2 84% 4.9%);
  --pretty-poly-background: hsl(0 0% 100%);
  /* ... */
}
```

### Custom Components
```tsx
<Divider
  handle={({ className }) => (
    <div className={`custom-handle ${className}`} />
  )}
/>
```

## Examples

See the `/examples` directory for:
- Basic resizable layout
- Comprehensive responsive demo
- VS Code-style interface
- Shadcn/UI integration
- Custom mode examples

## API Reference

### Grid Props
| Prop | Type | Description |
|------|------|-------------|
| `defaultLayout` | `BlockConfig[]` | Initial layout configuration |
| `modes` | `ResponsiveModes` | Responsive mode definitions |
| `persist` | `boolean \| string \| function` | State persistence options |
| `onLayoutChange` | `function` | Layout change callback |
| `onModeChange` | `function` | Mode change callback |

### Block Props
| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique block identifier |
| `type` | `'block' \| 'group'` | Block type |
| `[mode]` | `ModeConfig` | Mode-specific configuration |

### Hooks

- `useGridResize()` - Handle resize operations
- `useGridMode()` - Manage responsive modes
- `useGridPersistence()` - State persistence
- `useGridKeyboard()` - Keyboard navigation

## Contributing

This library was extracted from the grid_panes Phoenix LiveView implementation and modernized for React. See the original implementation at `/path/to/grid_panes`.

## License

MIT © Amazing Team

---

**PrettyPoly** - Where layouts adapt to every context 🎭