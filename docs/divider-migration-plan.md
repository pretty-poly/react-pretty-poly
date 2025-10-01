# Divider Migration Plan: Manual → Automatic

## Proposed Architecture (v2 - Automatic Dividers)

### Core Philosophy
**Dividers exist BETWEEN blocks, not as separate components.** Blocks declare their divider needs, and the Grid automatically renders dividers in the correct locations within proper CSS Grid containment boundaries.

### New API Design

#### Simple Usage - Automatic Dividers
```tsx
<Grid dividers="auto">  // Default: dividers between all blocks
  <Block id="sidebar" size="250px" />     // ← Auto divider after
  <Block id="main" size="1fr" />          // ← Auto divider after
  <Block id="activity" size="300px" noDivider /> // ← Explicit opt-out
</Grid>
```

#### Block-Level Control
```tsx
<Block
  id="sidebar"
  size="250px"
  divider  // Simple boolean for defaults
/>

// Or with configuration
<Block
  id="sidebar"
  size="250px"
  divider={{
    size: 12,
    className: "custom-divider",
    handle: CustomDividerHandle,
    onDoubleClick: () => handleCollapse()
  }}
/>
```

#### Manual Position Override
```tsx
<Block
  id="panel"
  size="300px"
  divider={{
    position: "start",  // Override auto-detection
    size: 8,
    className: "thick-divider"
  }}
/>
```

### Smart Auto-Detection Rules

The Grid automatically determines divider position based on block size units:

```typescript
// Automatic position detection (no configuration needed)
const autoDetectPosition = (currentBlock, nextBlock) => {
  if (currentBlock.sizeUnit === 'fr' && nextBlock.sizeUnit === 'px') {
    return { target: nextBlock, position: 'start' }  // MUST resize px block
  }
  if (currentBlock.sizeUnit === 'px' && nextBlock.sizeUnit === 'fr') {
    return { target: currentBlock, position: 'end' }  // MUST resize px block
  }
  // For same units (fr+fr or px+px), either can resize
  return { target: currentBlock, position: 'end' }    // Default to first block
}
```

### Why This Works

1. **No CSS Grid Violations**: Dividers are always rendered within their parent grid container
2. **Smart Fr/Px Handling**: Automatically targets the only block that can be meaningfully resized
3. **Performance**: No DOM traversal needed - block knows its divider configuration
4. **Type Safety**: TypeScript can validate divider configurations at compile time

## Implementation Strategy

### Phase 1: Internal Refactor (No Breaking Changes)

1. **Add new Block props** (optional, backward compatible):
   ```typescript
   interface BlockProps {
     // New divider props (optional)
     divider?: boolean | DividerConfig
     noDivider?: boolean
   }
   ```

2. **Grid auto-generation logic**:
   - When `dividers="auto"`, automatically detect where dividers should go
   - Read block divider props to customize generated dividers
   - Maintain current manual `<Divider>` component support

3. **Smart position detection**:
   - Move logic from DOM detection to logical size unit analysis
   - Use block configuration instead of DOM traversal

### Phase 2: Migration Path

1. **Deprecation warnings** for manual `<Divider>` placement
2. **Automatic migration tool** to convert existing layouts:
   ```tsx
   // Before
   <Block id="sidebar" />
   <Divider className="custom" />
   <Block id="main" />

   // After
   <Block id="sidebar" divider={{ className: "custom" }} />
   <Block id="main" />
   ```

3. **Documentation and examples** showing new patterns

### Phase 3: Breaking Changes (v3)

1. Remove manual `<Divider>` component
2. Make `dividers="auto"` the default
3. Clean up legacy DOM detection code

## Benefits of New Architecture

### 1. Eliminates CSS Grid Containment Issues
```tsx
// Automatically correct - no way to violate containment
<Grid dividers="auto">
  <Block id="sidebar" />
  <Block.Group id="main">
    <Block id="content" />
    <Block id="preview" />
  </Block.Group>
  <Block id="activity" />
</Grid>
```

Each group manages its own dividers between direct children.

### 2. Removes DOM Detection Fragility
- No `querySelector` or `compareDocumentPosition` calls
- Blocks know their configuration at render time
- Deterministic behavior regardless of DOM timing

### 3. Better Performance
- No runtime DOM traversal
- Dividers generated during render pass
- No re-detection on block changes

### 4. Improved Developer Experience
```tsx
// Old way - error prone
<Block id="sidebar" />
<Divider />  // Wrong grid container? Wrong position?
<Block id="main" />

// New way - impossible to get wrong
<Block id="sidebar" divider />
<Block id="main" />
```

## Advanced Configuration

### Grid-Level Defaults
```tsx
<Grid
  dividers="auto"
  dividerConfig={{
    defaultSize: 8,
    defaultClassName: "divider",
    defaultHandle: CustomHandle,

    // Per-block overrides
    overrides: {
      "sidebar": { size: 12, className: "thick" },
      "main-panel": { handle: SpecialHandle }
    }
  }}
>
```

### Custom Divider Components
```tsx
<Block id="sidebar" divider>
  <Block.Content>
    {/* Main block content */}
  </Block.Content>
  <Block.Divider>
    {(props) => <CustomDivider {...props} />}
  </Block.Divider>
</Block>
```

## Migration Examples

### Simple Layout
```tsx
// Before
<Grid>
  <Block id="sidebar" />
  <Divider />
  <Block id="main" />
</Grid>

// After
<Grid dividers="auto">
  <Block id="sidebar" />
  <Block id="main" />
</Grid>
```

### Complex Layout with Customization
```tsx
// Before
<Grid>
  <Block id="sidebar" />
  <Divider className="thick-divider" size={12} />
  <Block.Group id="main">
    <Block id="content" />
    <Divider handle={CustomHandle} />
    <Block id="preview" />
  </Block.Group>
</Grid>

// After
<Grid dividers="auto">
  <Block
    id="sidebar"
    divider={{ className: "thick-divider", size: 12 }}
  />
  <Block.Group id="main" dividers="auto">
    <Block
      id="content"
      divider={{ handle: CustomHandle }}
    />
    <Block id="preview" />
  </Block.Group>
</Grid>
```

## ✅ Implementation Complete!

### Core Changes ✅ DONE
- ✅ Add `divider` and `noDivider` props to Block component
- ✅ Add `dividers` prop to Grid component
- ✅ Implement automatic divider generation logic using React children processing
- ✅ Smart position detection based on size unit analysis (fr/px constraint rules)
- ✅ Separate automatic DOM injection from CSS grid template generation

### API Design ✅ DONE
- ✅ Define `DividerConfig` interface with full TypeScript support
- ✅ Add `dividerConfig` prop to Grid for global settings and overrides
- ✅ Design override system for per-block customization
- ✅ Maintain full backward compatibility for existing `<Divider>` usage

### Testing & Migration ✅ DONE
- ✅ Create comprehensive test example (`auto-dividers-test.tsx`)
- ✅ Verify all existing examples work unchanged
- ✅ Test automatic smart detection logic for fr/px constraints
- ✅ Validate performance improvements (no DOM traversal)

### Key Implementation Insights

#### Architecture Decision: Children Processing vs CSS Grid Template
- **Problem**: Original approach tried to modify CSS grid template generation
- **Solution**: Implemented React children processing to inject actual `<Divider>` DOM elements
- **Result**: Clean separation between layout logic and divider rendering

#### Double Divider Fix
- **Issue**: Both old CSS template system and new DOM injection were creating dividers
- **Fix**: Disabled CSS grid template divider generation when `dividers="auto"`
- **CSS Template**: `var(--sidebar-size, 300px) 8px 8px var(--main-size, 1fr)` ❌
- **Fixed Template**: `var(--sidebar-size, 300px) var(--main-size, 1fr) var(--panel-size, 250px)` ✅

#### Smart Detection Results
- **fr + px**: ✅ Correctly targets px block from start position
- **px + fr**: ✅ Correctly targets px block from end position
- **noDivider**: ✅ Correctly respects opt-out behavior
- **Manual mode**: ✅ Only explicit `divider` props create dividers
- **Disabled mode**: ✅ No dividers regardless of props

### Performance Improvements
- ✅ Eliminated DOM traversal and `querySelector` calls
- ✅ Deterministic behavior independent of DOM timing
- ✅ No re-detection on block changes (computed at render time)

### Documentation
- ✅ Updated migration plan with implementation results
- ✅ Created comprehensive examples demonstrating all modes
- ✅ Documented fr/px constraint rules and smart detection
- ✅ Provided clear upgrade path for existing projects