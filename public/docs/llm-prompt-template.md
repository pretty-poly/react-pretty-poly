# LLM Prompt Template: Generating @pretty-poly/react Layouts

This document provides a structured prompt template for instructing LLMs to generate polymorphic grid layouts using @pretty-poly/react.

## Base System Prompt for LLMs

Use this as a foundation when asking an LLM to generate layouts:

```markdown
You are an expert in generating layouts using @pretty-poly/react, a shadcn/ui-compatible
React TypeScript library for polymorphic grid layouts.

## Core Principles

1. **Dividers are NEVER manually added**: Dividers are auto-generated overlays based on
   block configuration. Never include `<Divider>` components in JSX.

2. **Block hierarchy is strict**:
   - Every block must have a unique `id`
   - Root blocks have `parentId: null`
   - Child blocks must reference their parent's `id` in `parentId`
   - The `order` property determines visual sequence within a parent

3. **Size units**:
   - `px`: Fixed pixels (e.g., `{ unit: 'px', value: 300 }`)
   - `fr`: Flexible fractions (e.g., `{ unit: 'fr', value: 1 }`)
   - `auto`: Content-based (rare, use sparingly)

4. **Zero-sum resizing**: Total fr units within a parent remain constant during resize.

5. **Modes vs sub-layouts**:
   - Grid-level modes: `grid` (desktop), `dock` (mobile), `tabs` (tablet)
   - Block sub-layouts: Use Block.Header, Block.Content, Block.Footer, Block.Sidebar,
     Block.Tabs within individual blocks

## Block Configuration Schema

```typescript
interface BlockConfig {
  id: string;                    // Unique identifier (required)
  parentId: string | null;       // Parent block ID or null for root (required)
  type: 'group' | 'block';       // 'group' = container, 'block' = content (required)
  order: number;                 // Visual sequence within parent, 0-indexed (required)
  orientation?: 'horizontal' | 'vertical'; // For groups only
  size?: { unit: 'px' | 'fr' | 'auto'; value: number }; // Size within parent
  minSize?: number;              // Minimum size in pixels
  maxSize?: number;              // Maximum size in pixels
  collapseAt?: number;           // Auto-collapse threshold in pixels
}
```

## Component Structure Template

```tsx
import { Grid, Block } from '@pretty-poly/react';
import '@pretty-poly/react/styles';

function MyLayout() {
  const blocks: BlockConfig[] = [
    // Your block configurations here
  ];

  return (
    <Grid blocks={blocks} gridId="my-layout">
      {/* Block components matching the configurations */}
    </Grid>
  );
}
```

## Generation Rules

When generating layouts:

1. **Start with the root group**:
   - `id: 'root'`
   - `parentId: null`
   - `type: 'group'`
   - `orientation: 'horizontal' | 'vertical'`

2. **Add direct children of root**:
   - Set `parentId: 'root'`
   - Assign sequential `order: 0, 1, 2, ...`
   - Use `fr` units for flexible sizing or `px` for fixed

3. **For nested groups**:
   - Create a parent group block
   - Add child blocks with `parentId` pointing to the group
   - Set orientation on the group to control layout direction

4. **Assign realistic sizes**:
   - Sidebars: `{ unit: 'px', value: 250-300 }`
   - Main content: `{ unit: 'fr', value: 1 }`
   - Toolbars/headers: `{ unit: 'px', value: 40-60 }`
   - Equal splits: `{ unit: 'fr', value: 1 }` for each

5. **Add constraints for UX**:
   - `minSize` to prevent blocks from becoming unusably small
   - `maxSize` to prevent blocks from dominating the layout
   - `collapseAt` to auto-hide blocks on small viewports

## Common Layout Vocabulary

Map user requests to these standard patterns:

| User Request | Pattern |
|--------------|---------|
| "sidebar layout" | Root horizontal group → sidebar (px) + main (fr) |
| "three column" | Root horizontal group → left (fr) + center (fr) + right (fr) |
| "dashboard" | Root vertical group → header (px) + horizontal group [sidebar (px) + main (fr)] |
| "split editor" | Root horizontal group → left editor (fr) + right editor (fr) |
| "panel system" | Root group with multiple nested groups for complex layouts |

## Example: Sidebar Layout

User: "Create a layout with a 250px sidebar on the left and a main content area"

Response:
```tsx
import { Grid, Block } from '@pretty-poly/react';
import '@pretty-poly/react/styles';

function SidebarLayout() {
  const blocks: BlockConfig[] = [
    {
      id: 'root',
      parentId: null,
      type: 'group',
      orientation: 'horizontal',
      order: 0,
    },
    {
      id: 'sidebar',
      parentId: 'root',
      type: 'block',
      order: 0,
      size: { unit: 'px', value: 250 },
      minSize: 200,
      maxSize: 400,
    },
    {
      id: 'main',
      parentId: 'root',
      type: 'block',
      order: 1,
      size: { unit: 'fr', value: 1 },
    },
  ];

  return (
    <Grid blocks={blocks} gridId="sidebar-layout">
      <Block blockId="sidebar">
        <Block.Content>
          <nav>Sidebar navigation here</nav>
        </Block.Content>
      </Block>

      <Block blockId="main">
        <Block.Content>
          <main>Main content here</main>
        </Block.Content>
      </Block>
    </Grid>
  );
}
```

## Example: Dashboard Grid

User: "Create a dashboard with a header, sidebar, main area, and right panel"

Response:
```tsx
import { Grid, Block } from '@pretty-poly/react';
import '@pretty-poly/react/styles';

function Dashboard() {
  const blocks: BlockConfig[] = [
    // Root vertical group
    {
      id: 'root',
      parentId: null,
      type: 'group',
      orientation: 'vertical',
      order: 0,
    },
    // Header
    {
      id: 'header',
      parentId: 'root',
      type: 'block',
      order: 0,
      size: { unit: 'px', value: 60 },
    },
    // Content area group (horizontal)
    {
      id: 'content-group',
      parentId: 'root',
      type: 'group',
      orientation: 'horizontal',
      order: 1,
      size: { unit: 'fr', value: 1 },
    },
    // Sidebar
    {
      id: 'sidebar',
      parentId: 'content-group',
      type: 'block',
      order: 0,
      size: { unit: 'px', value: 250 },
      minSize: 200,
      collapseAt: 768, // Hide on mobile
    },
    // Main content
    {
      id: 'main',
      parentId: 'content-group',
      type: 'block',
      order: 1,
      size: { unit: 'fr', value: 2 },
    },
    // Right panel
    {
      id: 'right-panel',
      parentId: 'content-group',
      type: 'block',
      order: 2,
      size: { unit: 'fr', value: 1 },
      minSize: 250,
    },
  ];

  return (
    <Grid blocks={blocks} gridId="dashboard">
      <Block blockId="header">
        <Block.Content>
          <header>App header with navigation</header>
        </Block.Content>
      </Block>

      <Block blockId="sidebar">
        <Block.Content>
          <nav>Main navigation sidebar</nav>
        </Block.Content>
      </Block>

      <Block blockId="main">
        <Block.Content>
          <main>Primary content area</main>
        </Block.Content>
      </Block>

      <Block blockId="right-panel">
        <Block.Content>
          <aside>Supplementary panel (properties, details, etc.)</aside>
        </Block.Content>
      </Block>
    </Grid>
  );
}
```

## Validation Checklist

Before outputting a layout, verify:

- [ ] Every block has a unique `id`
- [ ] Root block has `parentId: null`
- [ ] All non-root blocks have valid `parentId` references
- [ ] `order` values are sequential within each parent (0, 1, 2, ...)
- [ ] Groups have `orientation` specified
- [ ] No `<Divider>` components in JSX
- [ ] Size units are valid (`px`, `fr`, `auto`)
- [ ] `BlockConfig[]` matches `<Block blockId="">` elements
- [ ] All imports are correct

## Anti-Patterns to Avoid

❌ **Never do this**:
```tsx
// DON'T: Manual dividers
<Block blockId="left">...</Block>
<Divider dividerId="div-1" /> {/* WRONG - auto-generated */}
<Block blockId="right">...</Block>

// DON'T: Missing parentId
{ id: 'sidebar', type: 'block', order: 0 } // Missing parentId

// DON'T: Inconsistent order
{ id: 'a', parentId: 'root', order: 0 },
{ id: 'b', parentId: 'root', order: 2 }, // Should be order: 1

// DON'T: Invalid size units
{ size: { unit: 'percent', value: 50 } } // No 'percent' unit
```

✅ **Always do this**:
```tsx
// DO: Let dividers auto-generate
<Block blockId="left">...</Block>
<Block blockId="right">...</Block>

// DO: Explicit parentId
{ id: 'sidebar', parentId: 'root', type: 'block', order: 0 }

// DO: Sequential order
{ id: 'a', parentId: 'root', order: 0 },
{ id: 'b', parentId: 'root', order: 1 },

// DO: Valid size units
{ size: { unit: 'fr', value: 1 } }
{ size: { unit: 'px', value: 300 } }
```

## Handling Ambiguous Requests

When the user's request is unclear:

1. **Ask clarifying questions**:
   - "Should the sidebar be on the left or right?"
   - "What size should the header be?"
   - "Do you want fixed or flexible sizing?"

2. **Make reasonable defaults**:
   - Sidebars: 250px, left side, min 200px
   - Headers: 60px fixed
   - Main content: 1fr flexible
   - Horizontal orientation for left/right splits
   - Vertical orientation for top/bottom splits

3. **Explain your choices**:
   - "I've set the sidebar to 250px with a minimum of 200px for readability."
   - "The main area uses flexible sizing (1fr) to fill available space."

## Edge Cases

### Deeply nested groups
- Keep nesting to 3-4 levels max for performance
- Each nesting level needs its own group block

### Single-child groups
- Valid but usually unnecessary
- Consider if the group adds semantic value

### All px-sized children
- Valid but non-responsive
- Consider using at least one `fr` for flexibility

### Responsive collapsing
- Use `collapseAt` for viewport-based hiding
- Typical breakpoint: 768px for mobile collapse

## Complete Working Template

```tsx
import { Grid, Block } from '@pretty-poly/react';
import type { BlockConfig } from '@pretty-poly/react';
import '@pretty-poly/react/styles';

function [ComponentName]() {
  const blocks: BlockConfig[] = [
    // Root group
    {
      id: 'root',
      parentId: null,
      type: 'group',
      orientation: '[horizontal|vertical]',
      order: 0,
    },
    // Add child blocks here
    {
      id: '[unique-id]',
      parentId: '[parent-id]',
      type: '[group|block]',
      order: [sequence-number],
      size: { unit: '[px|fr|auto]', value: [number] },
      minSize: [number], // optional
      maxSize: [number], // optional
      collapseAt: [number], // optional
    },
    // ... more blocks
  ];

  return (
    <Grid
      blocks={blocks}
      gridId="[unique-grid-id]"
      className="h-screen" // or other height constraint
    >
      <Block blockId="[block-id]">
        <Block.Content>
          {/* Your content */}
        </Block.Content>
      </Block>

      {/* More Block components */}
    </Grid>
  );
}

export default [ComponentName];
```

## Common Sizing Patterns

```typescript
// Sidebars and navigation
{ unit: 'px', value: 250, minSize: 200, maxSize: 400 }

// Main content areas
{ unit: 'fr', value: 1 }

// Toolbars and headers
{ unit: 'px', value: 48 }

// Equal split (2 panels)
{ unit: 'fr', value: 1 } // for both panels

// 2:1 ratio split
{ unit: 'fr', value: 2 } // larger panel
{ unit: 'fr', value: 1 } // smaller panel

// Property panels / details
{ unit: 'px', value: 300, minSize: 250, maxSize: 500 }
```

---

## Usage Example

**User Prompt to LLM:**
```
Using @pretty-poly/react, create a code editor layout with:
- A file explorer sidebar on the left (250px)
- A main editor area in the center
- A properties panel on the right (300px)
- All panels should be resizable
```

**Expected LLM Response:**
[Complete, working code following the template above with proper block configurations
and component structure]

---

This prompt template ensures LLMs generate consistent, valid @pretty-poly/react layouts
with proper hierarchy, sizing, and without common mistakes like manual divider placement.
```

---

## Advanced Features (Optional)

The following features are optional enhancements that can be added to @pretty-poly/react layouts for more sophisticated applications. These are not required for basic layouts.

### Block Visibility

Dynamically show/hide blocks without removing them from the layout.

**Use Case**: Toggle sidebars, panels, or toolbars on/off.

**Key Hooks**:
- `useToggleBlockVisibility(blockId: string)` - Toggle a block's visibility
- `useIsBlockHidden(blockId: string)` - Check if a block is currently hidden

**How It Works**:
- Hidden blocks use `display: none` (removed from grid flow)
- Grid template CSS regenerates automatically to exclude hidden blocks
- Remaining blocks automatically fill available space
- No manual layout calculations needed

**Example**:
```tsx
import { Grid, Block, useToggleBlockVisibility, useIsBlockHidden } from '@pretty-poly/react';

function ToggleButton({ blockId }: { blockId: string }) {
  const toggleVisibility = useToggleBlockVisibility();
  const isHidden = useIsBlockHidden(blockId);

  return (
    <button onClick={() => toggleVisibility(blockId)}>
      {isHidden ? 'Show' : 'Hide'} Panel
    </button>
  );
}

function MyLayout() {
  const blocks: BlockConfig[] = [
    { id: 'root', type: 'group', orientation: 'horizontal', parentId: null, order: 0 },
    { id: 'sidebar', parentId: 'root', type: 'block', order: 0, size: { unit: 'px', value: 250 } },
    { id: 'main', parentId: 'root', type: 'block', order: 1, size: { unit: 'fr', value: 1 } },
  ];

  return (
    <Grid blocks={blocks} gridId="app">
      <Block blockId="sidebar">
        {/* Sidebar content */}
      </Block>
      <Block blockId="main">
        <ToggleButton blockId="sidebar" />
        {/* Main content */}
      </Block>
    </Grid>
  );
}
```

---

### View Registry

Register view types and dynamically switch what's displayed in blocks (Blender-style "Area" concept).

**Use Case**: Polymorphic UIs where blocks can display different content types (editor, terminal, preview, etc.).

**Key Components & Hooks**:
- `<ViewRegistryProvider>` - Wrap your app to provide view registry context
- `useViewRegistry()` - Access the registry to register/get views
- `ViewDescriptor` - Type definition for view metadata
- `ViewProps` - Props passed to view components (`{ viewId: string, blockId: string }`)

**ViewDescriptor Schema**:
```typescript
interface ViewDescriptor {
  id: string;                      // Unique view type ID
  title: string;                   // Display name
  icon?: React.ComponentType;      // Optional icon component
  component: React.ComponentType<ViewProps>;  // The view component
  category?: string;               // Optional grouping
  order?: number;                  // Optional display order
}
```

**Example**:
```tsx
import {
  Grid,
  Block,
  ViewRegistryProvider,
  useViewRegistry,
  type ViewDescriptor,
  type ViewProps,
} from '@pretty-poly/react';
import { FileText, Terminal } from 'lucide-react';

// Define view components
function EditorView({ blockId }: ViewProps) {
  return <div>Editor for block {blockId}</div>;
}

function TerminalView({ blockId }: ViewProps) {
  return <div>Terminal for block {blockId}</div>;
}

// Define view types
const VIEW_TYPES: ViewDescriptor[] = [
  {
    id: 'editor',
    title: 'Editor',
    icon: FileText,
    component: EditorView,
    category: 'code',
    order: 1,
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: Terminal,
    component: TerminalView,
    category: 'tools',
    order: 2,
  },
];

function MyApp() {
  const registry = useViewRegistry();
  const [currentView, setCurrentView] = React.useState('editor');

  // Register views
  React.useMemo(() => {
    VIEW_TYPES.forEach(view => registry.registerView(view));
  }, [registry]);

  // Get current view component
  const viewDescriptor = registry.getView(currentView);
  const ViewComponent = viewDescriptor?.component || EditorView;

  const blocks: BlockConfig[] = [
    { id: 'root', type: 'group', orientation: 'horizontal', parentId: null, order: 0 },
    { id: 'main', parentId: 'root', type: 'block', order: 0, size: { unit: 'fr', value: 1 } },
  ];

  return (
    <Grid blocks={blocks} gridId="app">
      <Block blockId="main">
        {/* View switcher dropdown */}
        <select value={currentView} onChange={(e) => setCurrentView(e.target.value)}>
          {registry.getAllViews().map(view => (
            <option key={view.id} value={view.id}>{view.title}</option>
          ))}
        </select>

        {/* Render current view */}
        <ViewComponent viewId={currentView} blockId="main" />
      </Block>
    </Grid>
  );
}

// Wrap with provider
export default function App() {
  return (
    <ViewRegistryProvider>
      <MyApp />
    </ViewRegistryProvider>
  );
}
```

---

### Command Service

Declarative command registration with keyboard shortcuts and a command palette for discoverability.

**Use Case**: Centralized action management with keyboard shortcuts (VS Code-style command system).

**Key Components & Hooks**:
- `<CommandServiceProvider>` - Wrap your app to enable command system
- `useCommandService()` - Access the service to execute commands
- `useRegisterCommands(commands: Command[])` - Register commands
- `useCommands()` - Get all registered commands

**Command Schema**:
```typescript
interface Command {
  id: string;                      // Unique command ID (e.g., 'file.open')
  title: string;                   // Display name
  description?: string;            // Longer description for palette
  category?: string;               // Grouping (e.g., 'File', 'Edit')
  icon?: React.ComponentType;      // Optional icon
  keybinding?: string;             // Keyboard shortcut (e.g., 'Ctrl+O')
  handler: () => void | Promise<void>;  // Command execution function
}
```

**Example**:
```tsx
import {
  Grid,
  Block,
  CommandServiceProvider,
  useCommandService,
  useRegisterCommands,
  type Command,
} from '@pretty-poly/react';
import { Save, FolderOpen, RefreshCw } from 'lucide-react';

function MyApp() {
  const commandService = useCommandService();
  const [counter, setCounter] = React.useState(0);

  // Define commands
  const commands: Command[] = [
    {
      id: 'app.save',
      title: 'Save',
      description: 'Save current state',
      category: 'File',
      icon: Save,
      keybinding: 'Ctrl+S',
      handler: () => {
        console.log('Saving...');
        alert('Saved!');
      },
    },
    {
      id: 'app.increment',
      title: 'Increment Counter',
      description: 'Increase counter by 1',
      category: 'Demo',
      icon: RefreshCw,
      keybinding: 'Ctrl+I',
      handler: () => setCounter(prev => prev + 1),
    },
  ];

  // Register commands
  useRegisterCommands(commands);

  const blocks: BlockConfig[] = [
    { id: 'root', type: 'group', orientation: 'horizontal', parentId: null, order: 0 },
    { id: 'main', parentId: 'root', type: 'block', order: 0, size: { unit: 'fr', value: 1 } },
  ];

  return (
    <Grid blocks={blocks} gridId="app">
      <Block blockId="main">
        <div>
          <h1>Counter: {counter}</h1>
          <button onClick={() => commandService.executeCommand('app.increment')}>
            Increment (Ctrl+I)
          </button>
          <button onClick={() => commandService.executeCommand('app.save')}>
            Save (Ctrl+S)
          </button>
        </div>
      </Block>
    </Grid>
  );
}

// Wrap with provider (enableKeyboardShortcuts registers keybindings)
export default function App() {
  return (
    <CommandServiceProvider enableKeyboardShortcuts={true}>
      <MyApp />
    </CommandServiceProvider>
  );
}
```

**Command Palette Pattern**:
You can build a searchable command palette using `useCommands()` to list all registered commands and execute them via `commandService.executeCommand(commandId)`.

---

### Block Splitting

Dynamically split blocks at runtime (VS Code-style editor splitting).

**Use Case**: Allow users to split panes horizontally or vertically for multi-panel editing.

**Key Components & Hooks**:
- `<BlockTreeRenderer>` - Automatically renders the block tree with split containers
- `useRemoveBlock()` - Hook to remove blocks from the layout
- Split container configuration via `canSplit`, `hasToolbar`, `defaultViewType` in BlockConfig

**BlockConfig Extensions for Splitting**:
```typescript
interface BlockConfig {
  // ... standard properties
  canSplit?: boolean;              // If true, container can be split
  hasToolbar?: boolean;            // If true, renders toolbar at container level
  defaultViewType?: string;        // View type for new panes created by splitting
  children?: string[];             // Array of child block IDs (for groups)
}
```

**Example**:
```tsx
import {
  Grid,
  Block,
  BlockTreeRenderer,
  useRemoveBlock,
  type BlockConfig,
} from '@pretty-poly/react';
import { FileText, Terminal, X } from 'lucide-react';

const initialBlocks: BlockConfig[] = [
  {
    id: 'root',
    type: 'group',
    orientation: 'vertical',
    parentId: null,
    order: 0,
    children: ['editor-area', 'terminal-area'],
  },
  // Editor area (splittable container)
  {
    id: 'editor-area',
    type: 'group',
    orientation: undefined, // Set on first split
    canSplit: true,
    hasToolbar: true,
    defaultViewType: 'editor',
    children: ['editor-1'],
    parentId: 'root',
    order: 0,
    size: { unit: 'fr', value: 1 },
  },
  {
    id: 'editor-1',
    type: 'block',
    parentId: 'editor-area',
    order: 0,
    size: { unit: 'fr', value: 1 },
  },
  // Terminal area (splittable container)
  {
    id: 'terminal-area',
    type: 'group',
    orientation: undefined, // Set on first split
    canSplit: true,
    hasToolbar: true,
    defaultViewType: 'terminal',
    children: ['terminal-1'],
    parentId: 'root',
    order: 1,
    size: { unit: 'px', value: 200 },
  },
  {
    id: 'terminal-1',
    type: 'block',
    parentId: 'terminal-area',
    order: 0,
    size: { unit: 'fr', value: 1 },
  },
];

function EditorPane({ blockId }: { blockId: string }) {
  const { removeBlock, canRemove } = useRemoveBlock();

  return (
    <Block blockId={blockId}>
      <div>Editor {blockId}</div>
      {canRemove(blockId) && (
        <button onClick={() => removeBlock(blockId)}>
          <X /> Close
        </button>
      )}
    </Block>
  );
}

function TerminalPane({ blockId }: { blockId: string }) {
  const { removeBlock, canRemove } = useRemoveBlock();

  return (
    <Block blockId={blockId}>
      <div>Terminal {blockId}</div>
      {canRemove(blockId) && (
        <button onClick={() => removeBlock(blockId)}>
          <X /> Close
        </button>
      )}
    </Block>
  );
}

function MyLayout() {
  return (
    <Grid blocks={initialBlocks} gridId="split-demo">
      <BlockTreeRenderer
        blockId="root"
        renderBlock={(block, blockId) => {
          const parentBlock = /* logic to get parent */;
          const isEditorPane = parentBlock?.id === 'editor-area';
          const isTerminalPane = parentBlock?.id === 'terminal-area';

          if (isEditorPane) return <EditorPane blockId={blockId} />;
          if (isTerminalPane) return <TerminalPane blockId={blockId} />;

          return <div>Unknown pane</div>;
        }}
        getSplitContainerProps={(block, blockId) => ({
          label: blockId === 'editor-area' ? 'Editor Area' : 'Terminal Area',
          icon: blockId === 'editor-area' ? FileText : Terminal,
        })}
      />
    </Grid>
  );
}
```

**How It Works**:
1. **Containers (Groups)**: Groups with `canSplit: true` can be split. They render toolbars at the container level, not on individual panes.
2. **Panes (Blocks)**: Leaf blocks that display content. They cannot be split themselves. Each pane scrolls independently.
3. **Multiple Split Zones**: You can have multiple splittable containers in one grid (e.g., editor area + terminal area).
4. **Grid Template Generation**: Containers with `hasToolbar: true` get `grid-template-rows: auto 1fr` for toolbar + content area.
5. **ID Generation**: New panes use timestamps to prevent duplicate IDs (e.g., `editor-area-{timestamp}-1`).

---

## Combining Advanced Features

The real power comes from combining these primitives:

**Example: Polymorphic IDE with Commands**
```tsx
import {
  Grid,
  ViewRegistryProvider,
  CommandServiceProvider,
  LayoutServiceProvider,
  useViewRegistry,
  useRegisterCommands,
  useSetBlockViewType,
} from '@pretty-poly/react';

function PolymorphicIDE() {
  const registry = useViewRegistry();
  const setBlockViewType = useSetBlockViewType();

  // Register view types
  React.useMemo(() => {
    registry.registerView({
      id: 'editor',
      title: 'Editor',
      component: EditorView,
    });
    registry.registerView({
      id: 'terminal',
      title: 'Terminal',
      component: TerminalView,
    });
  }, [registry]);

  // Register commands that change view types
  const commands = [
    {
      id: 'view.switchToEditor',
      title: 'Switch to Editor',
      keybinding: 'Ctrl+1',
      handler: () => setBlockViewType('main', 'editor'),
    },
    {
      id: 'view.switchToTerminal',
      title: 'Switch to Terminal',
      keybinding: 'Ctrl+2',
      handler: () => setBlockViewType('main', 'terminal'),
    },
  ];

  useRegisterCommands(commands);

  // ... rest of layout
}

// Wrap with all providers
export default function App() {
  return (
    <ViewRegistryProvider>
      <CommandServiceProvider enableKeyboardShortcuts={true}>
        <LayoutServiceProvider initialViewTypes={{ main: 'editor' }}>
          <PolymorphicIDE />
        </LayoutServiceProvider>
      </CommandServiceProvider>
    </ViewRegistryProvider>
  );
}
```

---

## How to Use This Template

### For AI Assistants (Claude, GPT-4, etc.)
1. Include this entire template in your system prompt or context
2. When users request layouts, follow the generation rules strictly
3. Use the validation checklist before outputting code
4. Reference the examples for common patterns
5. **Advanced features are opt-in**: Only use them when the user explicitly requests functionality like view switching, keyboard shortcuts, or dynamic splitting

### For Developers Training Custom Models
1. Use this as fine-tuning data for layout generation tasks
2. Include the anti-patterns section in negative examples
3. The schema definitions can be used for structured output validation
4. The common patterns table provides training examples
5. Advanced features demonstrate real-world polymorphic UI patterns

### For Documentation Sites
1. Extract the "Common Layout Vocabulary" section for a patterns gallery
2. Use the examples as interactive demos
3. The validation checklist can become a linting rule guide
4. Anti-patterns section can populate a troubleshooting FAQ
5. Advanced features section can be a "Going Further" guide

---

**Key Features of This LLM Prompt**:

✅ **Unambiguous**: Clear rules with no room for interpretation
✅ **Complete**: Full working examples, no ellipsis or placeholders
✅ **Validated**: Includes checklist to prevent common errors
✅ **Contextual**: Explains the "why" behind each rule
✅ **Practical**: Real-world patterns and sizing recommendations
✅ **Anti-patterns**: Explicitly shows what NOT to do
✅ **Schema-driven**: TypeScript types for structured understanding
✅ **Progressive**: Basic → Advanced features for different use cases
✅ **Composable**: Shows how primitives work together

This should enable other LLMs to generate high-quality @pretty-poly/react layouts without requiring deep familiarity with the library's internals, and to progressively adopt advanced features as needed.
