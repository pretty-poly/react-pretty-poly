# Dynamic Grids Design Document

This document outlines approaches for making the Pretty Poly grid system more dynamic, supporting runtime structural changes and panel management similar to VS Code.

## Current State

The Pretty Poly grid system currently:
- Defines block configurations statically at initialization
- Supports resizing blocks but not adding/removing them
- Maintains a fixed tree structure throughout the component lifecycle
- Stores all blocks in a flat map with parent/child relationships

## Requirements

### 1. Context-Based Structural Changes
- Ability to change nested grid structures based on user interactions
- Example: A 3-column layout where the third column switches from 3 rows to 1 row when clicking an item

### 2. Panel Management System
- Add new panels dynamically (like VS Code editors)
- Remove panels with close buttons
- Split panels horizontally/vertically
- Move panels between different areas
- Duplicate panels

## Proposed Solutions

## Option 1: Dynamic Block Configuration Updates

### Approach
Extend the current reducer with actions to modify block configurations at runtime.

### Implementation

```typescript
// New actions
type GridAction =
  | { type: "UPDATE_BLOCKS"; payload: { blocks: BlockConfig[] } }
  | { type: "ADD_BLOCK"; payload: { block: BlockConfig; parentId: string } }
  | { type: "REMOVE_BLOCK"; payload: { blockId: string } }
  | { type: "UPDATE_BLOCK_CHILDREN"; payload: {
      parentId: string;
      children: BlockConfig[]
    }}
  | { type: "MOVE_BLOCK"; payload: {
      blockId: string;
      newParentId: string;
      order: number
    }}
```

### Pros
- Minimal changes to existing architecture
- Direct control over block structure
- Easy to implement undo/redo
- Works with existing persistence system

### Cons
- Requires careful management of block IDs
- Parent-child relationships must be maintained manually
- Can cause layout jumps if not animated
- Need to handle orphaned blocks

### Usage Example
```tsx
const switchToDetailView = () => {
  dispatch({
    type: "UPDATE_BLOCK_CHILDREN",
    payload: {
      parentId: "column3",
      children: [
        { id: "detail-panel", type: "block", defaultSize: 1 }
      ]
    }
  });
};
```

## Option 2: Layout Template System

### Approach
Store multiple predefined layouts and switch between them based on context.

### Implementation

```typescript
interface LayoutTemplate {
  id: string;
  name: string;
  context?: string;
  blocks: BlockConfig[];
  transitions?: {
    from: string;
    to: string;
    mapping?: Record<string, string>; // Old block ID -> New block ID
  }[];
}

interface GridProviderProps {
  templates?: LayoutTemplate[];
  activeTemplate?: string;
  onTemplateChange?: (template: LayoutTemplate) => void;
}
```

### Pros
- Predictable layout changes
- Easy to test and validate
- Can predefine complex layouts
- Smooth transitions possible with ID mapping

### Cons
- Less flexible than fully dynamic approach
- Requires predefined templates
- State preservation between templates needs mapping
- May require many templates for complex UIs

### Usage Example
```tsx
const templates = {
  default: { blocks: [...] },
  detailView: { blocks: [...] },
  compareView: { blocks: [...] }
};

<Grid
  templates={templates}
  activeTemplate={currentView}
  onTemplateChange={handleTemplateChange}
/>
```

## Option 3: Conditional Block System

### Approach
Add visibility and condition properties to blocks, allowing them to show/hide based on state.

### Implementation

```typescript
interface BlockConfig {
  // Existing fields...
  visible?: boolean;
  conditions?: {
    showWhen?: (context: any) => boolean;
    hideWhen?: (context: any) => boolean;
  };
  variants?: {
    [variantName: string]: Partial<BlockConfig>;
  };
  fallback?: string; // ID of block to expand when this one hides
}
```

### Pros
- No structural changes needed
- Smooth animations possible
- Easy state preservation
- Works well with existing system

### Cons
- Hidden blocks still exist in DOM (unless unmounted)
- Complex conditions can be hard to debug
- May impact performance with many conditions
- Requires context propagation

### Usage Example
```tsx
const blocks: BlockConfig[] = [
  {
    id: "detail-rows",
    type: "group",
    direction: "column",
    conditions: {
      showWhen: (ctx) => ctx.viewMode === 'list'
    },
    children: ["row1", "row2", "row3"]
  },
  {
    id: "detail-single",
    type: "block",
    conditions: {
      showWhen: (ctx) => ctx.viewMode === 'detail'
    }
  }
];
```

## Option 4: Panel Factory System (VS Code Style)

### Approach
Create a panel management layer on top of the grid system with factories for different panel types.

### Implementation

```typescript
interface PanelType {
  id: string;
  name: string;
  icon: React.ComponentType;
  factory: () => BlockConfig;
  component: React.ComponentType<any>;
  defaultPlacement?: {
    area: string; // Parent block ID
    position?: 'before' | 'after' | 'start' | 'end';
  };
}

interface PanelManager {
  types: Map<string, PanelType>;
  instances: Map<string, PanelInstance>;

  createPanel(type: string, placement?: Placement): string;
  removePanel(id: string): void;
  movePanel(id: string, target: Placement): void;
  splitPanel(id: string, direction: Direction): string;
  duplicatePanel(id: string): string;
}

interface PanelInstance {
  id: string;
  type: string;
  blockId: string;
  state?: any;
  metadata?: {
    title?: string;
    dirty?: boolean;
    closable?: boolean;
  };
}
```

### Pros
- Separation of concerns (panels vs layout)
- Rich panel lifecycle management
- Easy to implement panel-specific features
- Can track panel state independently

### Cons
- Additional abstraction layer
- More complex state management
- Need to sync panel state with grid state
- Requires panel registry/factory setup

### Usage Example
```tsx
const panelManager = usePanelManager();

const handleAddEditor = () => {
  const panelId = panelManager.createPanel('editor', {
    area: 'main-area',
    position: 'end'
  });

  panelManager.setMetadata(panelId, {
    title: 'untitled.ts'
  });
};
```

## Option 5: Hybrid Approach (Recommended)

### Approach
Combine the best aspects of multiple options:
1. Use dynamic block updates for structural changes (Option 1)
2. Add panel factory for creating new panels (Option 4)
3. Include template system for common layouts (Option 2)
4. Support conditional visibility for responsive behavior (Option 3)

### Architecture

```typescript
interface DynamicGridSystem {
  // Core grid state (Option 1)
  blocks: Record<string, BlockConfig>;
  dispatch: (action: GridAction) => void;

  // Panel management (Option 4)
  panels: PanelManager;

  // Layout templates (Option 2)
  templates: LayoutTemplateManager;

  // Context for conditions (Option 3)
  context: any;

  // High-level operations
  operations: {
    switchLayout(template: string): void;
    addPanel(type: string, placement: Placement): string;
    removePanel(id: string): void;
    splitView(blockId: string, direction: Direction): void;
    updateContext(context: any): void;
  };
}
```

### Implementation Phases

#### Phase 1: Dynamic Block Updates
- Add UPDATE_BLOCKS, ADD_BLOCK, REMOVE_BLOCK actions
- Implement block tree validation
- Add animation support for structural changes

#### Phase 2: Panel System
- Create PanelManager class
- Define panel types and factories
- Add panel toolbar component
- Implement drag-and-drop for panels

#### Phase 3: Template System
- Create template registry
- Add template switching with transitions
- Implement state preservation between templates

#### Phase 4: Conditional System
- Add visibility conditions to blocks
- Implement context propagation
- Add variant system for block states

## API Design Examples

### Adding a Panel
```tsx
const grid = useGrid();

// Method 1: Direct block addition
grid.addBlock({
  id: 'new-editor',
  type: 'block',
  parentId: 'editor-area',
  defaultSize: 1,
  sizeUnit: 'fr'
});

// Method 2: Panel factory
const panelId = grid.panels.create('editor', {
  placement: { area: 'editor-area', position: 'end' }
});

// Method 3: Split existing
const [leftId, rightId] = grid.splitBlock('current-editor', 'horizontal');
```

### Changing Structure Based on Context
```tsx
// Method 1: Direct update
const showDetailView = (itemId: string) => {
  grid.updateBlocks([
    { id: 'sidebar', defaultSize: 200 },
    { id: 'main', children: ['detail-view'] },
    { id: 'detail-view', type: 'block' }
  ]);
};

// Method 2: Template switch
grid.switchTemplate('detail-view', { itemId });

// Method 3: Conditional visibility
grid.updateContext({ viewMode: 'detail', itemId });
```

### Panel Lifecycle
```tsx
// Create
const panelId = grid.panels.create('terminal');

// Update
grid.panels.update(panelId, {
  metadata: { title: 'npm run dev' }
});

// Move
grid.panels.move(panelId, {
  area: 'bottom-panel',
  position: 'start'
});

// Close
grid.panels.close(panelId, {
  confirmIfDirty: true
});
```

## State Management Considerations

### Block ID Strategy
- Use stable IDs for persistent blocks
- Generate temporary IDs for dynamic panels
- Maintain ID mapping for template switches
- Consider namespacing for different panel types

### State Preservation
- Store panel state separately from layout state
- Use metadata for panel-specific information
- Implement state serialization for persistence
- Handle state migration between layouts

### Performance
- Minimize re-renders with careful memoization
- Use CSS transforms for smooth transitions
- Lazy load panel contents
- Virtualize large panel lists

## UI/UX Considerations

### Visual Feedback
- Animate structural changes
- Show drop zones when dragging
- Highlight active/focused panels
- Indicate unsaved changes

### User Controls
- Tab bar with + button for new panels
- Context menu for split/close operations
- Keyboard shortcuts for common actions
- Drag handles for reordering

### Error Handling
- Prevent invalid operations (e.g., closing last panel)
- Show warnings for destructive actions
- Provide undo/redo functionality
- Handle panel creation failures gracefully

## Implementation Priority

1. **High Priority**
   - UPDATE_BLOCKS action for structural changes
   - ADD_BLOCK/REMOVE_BLOCK actions
   - Basic panel creation/removal

2. **Medium Priority**
   - Panel factory system
   - Split view functionality
   - Template switching

3. **Low Priority**
   - Drag-and-drop reordering
   - Conditional visibility system
   - Advanced animations

## Migration Path

For existing users of Pretty Poly:

1. **Backward Compatibility**
   - Keep existing static configuration working
   - Add dynamic features as optional
   - Provide migration utilities

2. **Gradual Adoption**
   - Start with simple ADD/REMOVE actions
   - Add panel system as separate module
   - Templates as configuration option

3. **Documentation**
   - Provide clear migration guide
   - Include examples for common patterns
   - Document breaking changes clearly

## Conclusion

The hybrid approach offers the most flexibility while maintaining the simplicity of the current system. By implementing it in phases, we can deliver value incrementally while maintaining backward compatibility.

Key decisions to make:
1. Should panel state be managed separately from grid state?
2. How should we handle animations for structural changes?
3. What level of panel lifecycle management is needed?
4. Should templates be configuration or code-based?

The recommended path is to start with Phase 1 (dynamic block updates) as it provides immediate value with minimal complexity, then gradually add the panel system and other features based on user needs.