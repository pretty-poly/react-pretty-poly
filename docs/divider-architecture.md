# Divider Architecture Documentation

## Current Architecture (v1 - Manual Placement)

### How It Works Today

The current implementation uses manual placement of `<Divider>` components between blocks:

```tsx
<Grid>
  <Block id="sidebar" />
  <Divider />  // Manually placed between blocks
  <Block id="main" />
  <Divider />
  <Block id="activity" />
</Grid>
```

### Key Components

1. **Divider Component** (`src/components/Divider/Divider.tsx`)
   - Uses DOM traversal to detect adjacent blocks
   - Auto-detects position ("start" or "end") based on target block
   - Implements smart fr/px detection to prefer px blocks

2. **Auto-Detection Logic**
   - `detectTargetAndPosition()` function scans DOM siblings
   - Smart preference: px blocks over fr blocks in mixed adjacency
   - Group handling: finds resizable blocks within groups

3. **Resize Logic** (`src/components/Grid/GridProvider.tsx`)
   - Uses detected position to determine resize direction
   - Handles zero-sum constraints for fr blocks
   - Inverts delta for position="start"

### Problems Discovered

#### 1. CSS Grid Containment Violations

The fundamental issue: **dividers can only resize blocks within their parent grid container**.

Example of violation in `shadcn-dashboard.tsx`:
```tsx
<Grid>  // Root grid container
  <Block id="sidebar" />
  <Divider />                     ← Correctly scoped to root

  <BlockGroup id="main-container"> ← Creates new grid container
    <BlockGroup id="top-section">
      <Block id="main" />
      <Divider />                 ← Correctly scoped within top-section
      <Block id="analytics" />
    </BlockGroup>
    <Divider />                   ← Correctly scoped within main-container
    <BlockGroup id="bottom-group">
      <Block id="bottom-section" />
    </BlockGroup>
  </BlockGroup>

  <Divider />                     ← ❌ VIOLATION: In root but targeting activity
  <Block id="activity" />         ← Should be inside main-container
</Grid>
```

#### 2. Fragile DOM Detection

- Relies on DOM structure matching the logical grid hierarchy
- `compareDocumentPosition` can give incorrect results if JSX doesn't match CSS Grid
- React hydration timing issues with DOM queries

#### 3. Performance Issues

- DOM traversal on every render/resize
- Multiple `querySelector` calls for position detection
- Re-detection triggers on block changes

#### 4. Configuration Complexity

- Manual placement is error-prone
- Users must understand CSS Grid containment rules
- Difficult to style consistently across layouts

## CSS Grid Containment Rules

### Core Principle
Each `BlockGroup` (with `type: "group"`) creates its own CSS grid container with `display: grid`. Dividers can ONLY resize blocks that are direct children of the same grid container.

### Grid Template Generation
```typescript
const template = generateGridTemplate(sortedBlocks.map(block => ({
  id: block.id,
  sizeUnit: block.sizeUnit,
  size: block.size,
  dividerPosition: block.dividerPosition,
  dividerSize: block.dividerSize
})))

// Generates: "var(--sidebar-size, 250px) 8px var(--main-size, 1fr)"
```

### Container Hierarchy
```
Root Grid:           [sidebar] [8px] [main-container] [8px] [activity]
  Main Container:    [top-section] [8px] [bottom-group]
    Top Section:     [main] [8px] [analytics]
    Bottom Group:    [bottom-section]
```

A divider in the root grid can only resize `sidebar`, `main-container`, or `activity` - it cannot reach into nested containers.

## Fr/Px Constraint Insights

### The Fundamental Rule
When fr and px blocks are adjacent, **only the px block can be meaningfully resized**:

- **fr block**: Always takes available space after px blocks are sized
- **px block**: Has fixed size that can be changed

### Auto-Detection Logic
```typescript
// Smart selection: prefer px blocks over fr blocks
if (prevBlock.sizeUnit === 'fr' && nextBlock.sizeUnit === 'px') {
  resolvedTargetId = nextBlockId!
  resolvedPosition = 'start' // Resize px block from start
} else if (prevBlock.sizeUnit === 'px' && nextBlock.sizeUnit === 'fr') {
  resolvedTargetId = prevBlockId!
  resolvedPosition = 'end'   // Resize px block from end
}
```

### Why This Matters
- Trying to resize an fr block adjacent to px blocks has no effect
- The fr block automatically adjusts to fill remaining space
- Dividers MUST target the px block to be functional

## Current Implementation Strengths

1. **Smart Fr/Px Detection** - Automatically handles mixed unit adjacency
2. **Flexible Styling** - Full control over divider appearance and behavior
3. **Group Traversal** - Handles nested group structures
4. **Zero-Sum Resize** - Maintains total size constraints for fr blocks

## Next Steps

See `divider-migration-plan.md` for the proposed automatic divider system that addresses these architectural issues.