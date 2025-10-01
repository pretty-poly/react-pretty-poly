# Divider Position and Delta Inversion Logic

## Overview

This document explains the critical relationship between divider position, target blocks, and delta inversion in the Pretty Poly resize system. Understanding this logic is essential for correctly implementing automatic divider positioning.

## Key Concept: Resizing px Blocks with fr Blocks

When a `px` block is adjacent to an `fr` block, **only the px block can be resized**. The fr block automatically takes up whatever space remains. This creates a counter-intuitive situation where the visual appearance doesn't match what's actually being resized.

## The Two Cases

### Case 1: px | divider | fr

**Visual Layout:**
```
[Sidebar: 300px] | [divider] | [Main: 1fr]
```

**Configuration:**
- Target block: `Sidebar` (px block)
- Divider position: `end` (divider is AFTER the sidebar)

**Resize Behavior:**
- Drag divider RIGHT (+100px delta) → sidebar grows to 400px → main shrinks
- Drag divider LEFT (-100px delta) → sidebar shrinks to 200px → main grows

**Delta Inversion Needed?** **NO** - The drag direction matches the resize direction naturally.

---

### Case 2: fr | divider | px

**Visual Layout:**
```
[Main: 1fr] | [divider] | [Panel: 250px]
```

**Configuration:**
- Target block: `Panel` (px block)
- Divider position: `start` (divider is BEFORE the panel)

**Resize Behavior WITHOUT Inversion (WRONG):**
- Drag divider RIGHT (+100px delta) → panel grows to 350px → main shrinks ❌
- This feels backwards! Visually you're "shrinking" the main area but the panel grows

**Resize Behavior WITH Inversion (CORRECT):**
- Drag divider RIGHT (+100px delta) → **inverted to -100px** → panel shrinks to 150px → main grows ✓
- Drag divider LEFT (-100px delta) → **inverted to +100px** → panel grows to 350px → main shrinks ✓
- This feels natural! The divider appears to be "pushing" the fr block's edge

**Delta Inversion Needed?** **YES** - Without inversion, the behavior feels backwards to users.

## Why Inversion is Necessary

The inversion compensates for the fact that:
1. We're resizing the **px block** (the only one that can resize)
2. But visually, it appears we're dragging the **fr block's edge**
3. The px block is on the **opposite side** of the divider from where it visually appears

When position is `start`, the divider is geometrically before the block we're resizing, so the drag direction is opposite to the growth direction.

## Implementation Rules

### Auto-Detection Rules (divider-auto-detection.ts)

```typescript
// Case: fr block | divider | px block
if (currentUnit === 'fr' && nextUnit === 'px') {
  return {
    targetId: nextBlock.id,  // Target the px block
    position: 'start'         // Divider is BEFORE the px block
  }
}

// Case: px block | divider | fr block
if (currentUnit === 'px' && nextUnit === 'fr') {
  return {
    targetId: currentBlock.id, // Target the px block
    position: 'end'            // Divider is AFTER the px block
  }
}
```

### Resize Logic (GridProvider.tsx)

```typescript
// Get position from divider's data attribute
const dividerPosition = dividerEl?.getAttribute('data-block-divider-position') || 'end';

// Apply inversion when position is 'start'
const shouldInvertDelta = dividerPosition === "start";

const newSize = calculateConstrainedSize(
  deltaPx,
  state.resize.initialSize,
  block.minSize,
  block.maxSize,
  shouldInvertDelta  // Invert delta for 'start' position
);
```

## Visual Examples

### Example Layout: Sidebar | Main | Panel

```
[Sidebar: px 300] | [divider1] | [Main: fr 1] | [divider2] | [Panel: px 250]
```

**Divider 1** (between Sidebar and Main):
- Target: Sidebar (px)
- Position: `end` (after sidebar)
- Inversion: NO
- Drag right → sidebar grows, main shrinks ✓

**Divider 2** (between Main and Panel):
- Target: Panel (px)
- Position: `start` (before panel)
- Inversion: YES
- Drag right → inverted → panel shrinks, main grows ✓

## Common Pitfalls

❌ **Don't use position='end' for fr+px case** - This breaks the inversion logic and causes backwards behavior

❌ **Don't remove inversion logic entirely** - Position='start' requires inversion for natural feel

❌ **Don't target the fr block** - Only px blocks can be resized

✓ **Do use position='start' for fr+px** - This correctly identifies geometric position

✓ **Do apply inversion when position='start'** - This makes the behavior feel natural

✓ **Do target the px block in mixed cases** - The fr block auto-adjusts

## Testing Checklist

When testing divider behavior, verify:

1. **px | fr layout**:
   - [ ] Drag right grows px block
   - [ ] Drag left shrinks px block
   - [ ] Behavior feels natural

2. **fr | px layout**:
   - [ ] Drag right grows fr block (shrinks px)
   - [ ] Drag left shrinks fr block (grows px)
   - [ ] Behavior feels natural (not inverted)

3. **Multiple dividers**:
   - [ ] Each divider behaves independently
   - [ ] No interference between dividers

## Related Files

- `/src/utils/divider-auto-detection.ts` - Position detection logic
- `/src/components/Grid/GridProvider.tsx` - Resize logic with inversion
- `/src/components/Divider/Divider.tsx` - Divider component with auto-detection
- `/src/utils/calculations.ts` - `calculateConstrainedSize` with inversion parameter
