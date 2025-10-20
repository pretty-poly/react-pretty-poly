# Block Splitting Implementation Plan

## Overview

This document outlines the implementation plan for dynamic block splitting in Pretty Poly, enabling VS Code-like split views while maintaining alignment with the PRIMITIVES_ARCHITECTURE.md vision.

## Core Concept

**Splitting as a Primitive Operation**: When you split a block, you're creating a new container that can display any registered view type - not duplicating content. This aligns with the ViewRegistry concept from PRIMITIVES_ARCHITECTURE.md.

## Architecture

### 1. Split Primitives in LayoutService

```typescript
interface LayoutService {
  // Core splitting operations
  splitBlock(blockId: string, direction: 'horizontal' | 'vertical', options?: {
    initialSize?: number;        // Size of new block (default: 50% split)
    viewType?: string;           // What to display in new block
    position?: 'before' | 'after'; // Where to place new block
  }): string; // Returns new block ID

  unsplitBlock(blockId: string): void; // Remove a split
  canSplit(blockId: string): boolean;  // Check if block can be split

  // Tree manipulation primitives
  addBlock(parentId: string, block: Partial<BlockConfig>): string;
  removeBlock(blockId: string): void;
  moveBlock(blockId: string, newParentId: string, index?: number): void;

  // View type assignment (future - aligns with PRIMITIVES_ARCHITECTURE)
  setBlockViewType(blockId: string, viewType: string): void;
  getBlockViewType(blockId: string): string | undefined;
}
```

### 2. Split Algorithm: Transform Block into Group

When splitting a block, the algorithm transforms a single block into a group with two children:

```typescript
function splitBlock(targetBlockId: string, direction: 'horizontal' | 'vertical') {
  const targetBlock = state.blocks[targetBlockId];

  // Step 1: Transform target into a group
  const groupBlock: BlockConfig = {
    ...targetBlock,
    type: 'group',
    direction: direction === 'horizontal' ? 'column' : 'row',
    children: []
  };

  // Step 2: Create first child (inherits original content/viewType)
  const firstChild: BlockConfig = {
    id: `${targetBlockId}-1`,
    type: 'block',
    parentId: targetBlockId,
    order: 0,
    defaultSize: 1,
    sizeUnit: 'fr',
    viewType: targetBlock.viewType // Preserve original view
  };

  // Step 3: Create second child (new split area)
  const secondChild: BlockConfig = {
    id: `${targetBlockId}-2`,
    type: 'block',
    parentId: targetBlockId,
    order: 1,
    defaultSize: 1,
    sizeUnit: 'fr',
    viewType: undefined // Empty, user chooses what to display
  };

  // Step 4: Update state
  dispatch({
    type: 'SPLIT_BLOCK',
    payload: {
      targetBlockId,
      groupBlock,
      children: [firstChild, secondChild]
    }
  });
}
```

### 3. State Management Updates

New reducer actions needed:

```typescript
type GridAction =
  | { type: 'SPLIT_BLOCK'; payload: {
      targetBlockId: string;
      direction: 'horizontal' | 'vertical';
      initialSize?: number;
      newViewType?: string;
    }}
  | { type: 'UNSPLIT_BLOCK'; payload: { blockId: string }}
  | { type: 'ADD_BLOCK'; payload: {
      parentId: string;
      block: Partial<BlockConfig>
    }}
  | { type: 'REMOVE_BLOCK'; payload: { blockId: string }}
  | { type: 'SET_BLOCK_VIEW_TYPE'; payload: {
      blockId: string;
      viewType: string
    }}
  // ... existing actions
```

### 4. Grid Template Generation

The existing `generateGridTemplate` in `calculations.ts` already handles hidden blocks dynamically. For splits, we need to ensure:

1. Newly added blocks are included in template generation
2. Fr units are properly distributed among split children
3. CSS variables are scoped correctly to the new blocks

```typescript
// In Grid.tsx - generateGroupStyles enhancement
const generateGroupStyles = (parentId: string, visited: Set<string>): string => {
  // ... existing logic ...

  // Handle dynamically added blocks from splits
  const childBlocks = blocksByParent[parentId] || [];

  // Ensure equal distribution on initial split (both children get 1fr)
  const blocksForTemplate = childBlocks.map((block) => ({
    id: block.id,
    sizeUnit: block.sizeUnit || "fr",
    size: block.defaultSize || 1,
    dividerPosition: "none" as const,
    dividerSize: 0,
  }));

  const template = generateGridTemplate(blocksForTemplate, rootBlock.id, state.hiddenBlocks);
  // ... rest of template generation
}
```

### 5. Constraint Handling

Respect min/max sizes during splits:

```typescript
function canSplit(block: BlockConfig): boolean {
  const minChildSize = 100; // px

  if (block.sizeUnit === 'px') {
    return block.defaultSize >= minChildSize * 2;
  }

  // For fr units, check rendered size
  const renderedSize = getRenderedSize(block.id);
  return renderedSize >= minChildSize * 2;
}

function adjustSplitSizes(
  parentBlock: BlockConfig,
  children: BlockConfig[]
): BlockConfig[] {
  const totalSize = parentBlock.defaultSize || 1;

  return children.map((child) => ({
    ...child,
    defaultSize: totalSize / children.length,
    minSize: child.minSize || 50,
    maxSize: child.maxSize || undefined
  }));
}
```

## User Interface Options

### Option 1: Context Menu (Right-click) - HIGH PRIORITY
Most discoverable for power users, doesn't clutter UI:

```typescript
<BlockContextMenu blockId={blockId}>
  <MenuItem onClick={() => splitBlock(blockId, 'vertical')}>
    <SplitVertical className="w-4 h-4 mr-2" />
    Split Right
  </MenuItem>
  <MenuItem onClick={() => splitBlock(blockId, 'horizontal')}>
    <SplitHorizontal className="w-4 h-4 mr-2" />
    Split Down
  </MenuItem>
  {canUnsplit(blockId) && (
    <>
      <MenuSeparator />
      <MenuItem onClick={() => unsplitBlock(blockId)}>
        <X className="w-4 h-4 mr-2" />
        Close Split
      </MenuItem>
    </>
  )}
</BlockContextMenu>
```

### Option 2: Keyboard Shortcuts - HIGH PRIORITY
Fast for keyboard users, follows VS Code patterns:

```typescript
commands.register({
  id: 'block.split.vertical',
  title: 'Split Editor Right',
  keybinding: 'Ctrl+\\', // VS Code's split keybinding
  handler: (blockId) => layoutService.splitBlock(blockId, 'vertical')
});

commands.register({
  id: 'block.split.horizontal',
  title: 'Split Editor Down',
  keybinding: 'Ctrl+Shift+\\',
  handler: (blockId) => layoutService.splitBlock(blockId, 'horizontal')
});

commands.register({
  id: 'block.unsplit',
  title: 'Close Split',
  keybinding: 'Ctrl+W',
  when: 'blockIsSplit',
  handler: (blockId) => layoutService.unsplitBlock(blockId)
});
```

### Option 3: Block Header Split Button - MEDIUM PRIORITY
Most visible, good for discovery:

```typescript
<BlockHeader className="group">
  <BlockToolbar>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => splitBlock(blockId, 'vertical')}
        title="Split Right"
      >
        <SplitVertical className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => splitBlock(blockId, 'horizontal')}
        title="Split Down"
      >
        <SplitHorizontal className="h-3 w-3" />
      </Button>
    </div>
  </BlockToolbar>
</BlockHeader>
```

### ~~Option 4: Drag & Drop Split~~ - REJECTED
Not pursuing due to:
- Conflicts with content dragging inside blocks
- Conflicts with existing divider drag-to-resize
- Interferes with text selection and native browser drag behaviors
- Not a popular UI pattern in practice

## Implementation Phases

### Phase 1: Basic Split ✅ COMPLETED
**Timeline**: 1 week
**Goal**: Get core splitting functionality working

- [x] Create this plan document
- [x] Add `SPLIT_BLOCK`, `UNSPLIT_BLOCK`, `ADD_BLOCK`, `REMOVE_BLOCK` actions to types
- [x] Implement reducer logic for splitting operations
- [x] Add split methods to GridProvider context
- [x] Update grid template generation to handle dynamic block addition
- [x] Add basic keyboard shortcuts (Ctrl+\\ for vertical split, Ctrl+Shift+\\ for horizontal)
- [x] Create split demo example
- [x] Test splitting with TypeScript type checking and build

**Deliverables**: ✅
- ✅ Keyboard shortcut to split blocks works
- ✅ Split blocks render correctly with proper grid templates
- ✅ Simple demo showing split functionality
- ✅ TypeScript types are correct
- ✅ Build succeeds without errors

### Phase 2: View Type Support (Future)
**Timeline**: 1 week
**Dependencies**: Phase 1 complete

- [ ] Add `viewType` field to BlockConfig
- [ ] Create minimal ViewRegistry for component registration
- [ ] Support different content in split blocks via viewType
- [ ] Add view switcher dropdown to block header
- [ ] Update split logic to assign view types

**Deliverables**:
- Can register view types
- Split blocks can display different registered views
- View switcher lets users change block content

### Phase 3: Advanced UI (Future)
**Timeline**: 1 week
**Dependencies**: Phase 1 complete

- [ ] Build context menu component
- [ ] Add split options to context menu
- [ ] Add split buttons to block header (optional)
- [ ] Implement unsplit/close functionality
- [ ] Add visual feedback during split operations

**Deliverables**:
- Right-click context menu with split options
- Block header with split buttons
- Smooth split/unsplit animations

### Phase 4: Full Primitives (Future)
**Timeline**: 2 weeks
**Dependencies**: Phases 1-3 complete

- [ ] Complete LayoutService implementation
- [ ] Full CommandService integration
- [ ] Complete ViewRegistry with component registration
- [ ] Workspace save/restore with split configurations
- [ ] Context-aware command availability

**Deliverables**:
- Full PRIMITIVES_ARCHITECTURE implementation
- Workspace persistence for split layouts
- Command palette with split commands

## Technical Benefits

1. **Zero-sum preserved**: Splits using `fr` units automatically maintain zero-sum constraint
2. **CSS Grid native**: Leverages existing grid template generation
3. **Tree structure intact**: Parent-child relationships maintained correctly
4. **Primitive-based**: Aligns with ViewRegistry vision from PRIMITIVES_ARCHITECTURE.md
5. **Progressive enhancement**: Can add without breaking existing code
6. **Dynamic styling**: Builds on recent hidden blocks work (Grid.tsx dynamic style generation)

## Example Usage Scenarios

### Scenario 1: Editor Split (VS Code-like)
```typescript
const editorBlockId = 'editor';
const newEditorId = layoutService.splitBlock(editorBlockId, 'vertical');
layoutService.setBlockViewType(newEditorId, 'editor-view');
// Now you have two editor panes side by side
```

### Scenario 2: Dashboard Quadrants
```typescript
const mainBlockId = 'main';
const rightId = layoutService.splitBlock(mainBlockId, 'vertical');
const topLeftId = layoutService.splitBlock(mainBlockId, 'horizontal');
const bottomRightId = layoutService.splitBlock(rightId, 'horizontal');
// Now you have a 2x2 grid
```

### Scenario 3: Dynamic Panel Addition
```typescript
function addPanel(viewType: string, position: 'left' | 'right' | 'bottom') {
  const rootId = 'root';
  const direction = position === 'bottom' ? 'horizontal' : 'vertical';
  const newId = layoutService.splitBlock(rootId, direction, {
    initialSize: position === 'bottom' ? 200 : 300, // px
    position: position === 'left' ? 'before' : 'after',
    viewType
  });
  return newId;
}
```

## Migration Path

Splitting is **100% opt-in** and backward compatible:

```typescript
// Before: Static blocks (still works)
<Grid blocks={[
  { id: 'main', type: 'block' }
]}>
  <Block id="main"><MyContent /></Block>
</Grid>

// After: Splittable blocks (progressive enhancement)
<Grid blocks={blocks}>
  <Block id="main" canSplit><MyContent /></Block>
</Grid>

// Future: With ViewRegistry
<Grid blocks={blocks}>
  <ViewRegistryProvider>
    <Block id="main" viewType="my-content" canSplit />
  </ViewRegistryProvider>
</Grid>
```

## Testing Strategy

1. **Unit tests** for split logic in reducer
2. **Integration tests** for grid template generation with splits
3. **Visual regression tests** for split UI components
4. **Example demos** showing real-world usage patterns

## Success Metrics

- [ ] Can split a block vertically via keyboard shortcut
- [ ] Can split a block horizontally via keyboard shortcut
- [ ] Split blocks render with correct grid templates
- [ ] Split blocks can be resized independently
- [ ] Can close/unsplit a block
- [ ] Zero-sum constraint maintained across splits
- [ ] Min/max size constraints respected
- [ ] Persisted layouts include split configurations

## Notes

- Keep splitting **optional** via `canSplit` prop or similar
- Design for **ViewRegistry integration** from day one
- Leverage **existing dynamic style generation** from hidden blocks work
- Treat splits as **container operations** (creating new containers for views) not content operations
- Follow **primitive-based architecture** principles from PRIMITIVES_ARCHITECTURE.md

## Testing Results

### Manual Testing ✅
Tested on `http://localhost:5173/?example=block-split-demo`:

1. **Vertical Split (Ctrl+\\)**: ✅ Working
   - `root` → `root-1` + `root-2` (side by side)
   - Both blocks get 1fr (50/50 split)
   - Divider appears between blocks

2. **Horizontal Split (Button Click)**: ✅ Working
   - `root-2` → `root-2-1` + `root-2-2` (stacked)
   - Nested split maintains tree structure
   - Parent: root-2, Depth: 2 correctly tracked

3. **Recursive Rendering**: ✅ Working
   - Each split child can be split further
   - Tree structure maintained correctly
   - Block IDs follow pattern: `parent-1`, `parent-2`

4. **Grid Template Generation**: ✅ Working
   - Dynamic CSS variables generated for new blocks
   - Grid templates update automatically
   - Zero-sum constraint maintained

5. **Build & Type Check**: ✅ Passing
   - No TypeScript errors
   - Production build succeeds
   - Bundle size: 157.81 kB (gzipped: 34.16 kB)

### Fixed Issues ✅

1. **Group container rendering**: Initially, split groups were rendering children in a React fragment without a container div, causing grid templates to not apply. Fixed by rendering groups as `<div>` elements with `data-block-id`, `data-block-type`, and `display: grid`.

2. **Splittable block architecture**: Originally tried to start with a regular block and transform on split, but this caused grid template issues. **Solution**: Splittable blocks now start as groups with:
   - Single child block (e.g., `root` → `root-content`)
   - `direction: undefined` (set on first split, then locked)
   - Grid template: `grid-template-columns: 1fr; grid-template-rows: 1fr;`

3. **useSplitBlock hook context issue**: The `useSplitBlock()` hook was returning undefined state during component initialization, causing blank page. **Solution**: Use `useGridContext()` directly in demo components instead of the wrapper hook.

4. **Direction mismatch on nested splits**: Trying to split horizontally after a vertical split would fail because it tried to add to parent with wrong direction. **Solution**: Updated split handlers to check if parent direction matches requested direction before using parent, otherwise split the block itself.

### Architecture Insights

**Key principle discovered**: Splittable containers must be grid containers from the start, not just after being split.

```typescript
// ✅ Correct approach
const initialBlocks = [
  {
    id: "root",
    type: "group",
    direction: undefined,  // Set on first split
    children: ["root-content"],
    canSplit: true,
  },
  {
    id: "root-content",
    type: "block",
    parentId: "root",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
];

// ❌ Wrong approach (doesn't work)
const initialBlocks = [
  {
    id: "root",
    type: "block",  // Not a grid container initially
    canSplit: true,
  },
];
```

**Direction locking**: Once a group's direction is set (on first split), it's locked forever. To split in a different direction, split the child block itself (transforms it into a new group).

### Fixed Issues (Continued)

5. **root-content block persisting after split (2025-10-19)**: When splitting a group with undefined direction (Case 2), the old `root-content` child block was not being deleted from state, causing grid templates to include 3 columns when only 2 blocks existed. **Solution**:
   - Modified SPLIT_BLOCK reducer Case 2 to explicitly delete old children blocks before creating new state
   - Changed from `{ ...state.blocks, [newBlocks] }` to creating a clean `newBlocks` object, deleting old children with `delete newBlocks[childId]`, then adding updated blocks
   - Result: Grid now correctly generates 2-column template for split with only `root-1` and `root-2` blocks

6. **Demo using local component copies**: The examples demo at `/examples/demo/` has its own copies of grid components in `/examples/demo/src/components/grid/` (imported via `@/components/grid/`), separate from the main library at `/src/`. This is intentional (shadcn-style registry pattern) but meant fixes had to be applied to both locations.

### Known Issues
- None currently! All core functionality working as expected.

---

**Last Updated**: 2025-10-19
**Status**: ✅ Phase 1 Complete
**Next Milestone**: Phase 2 - View Type Support
