# Pretty Poly 2.0: Primitive-Based Architecture

## Research Synthesis

After studying multiple polymorphic UI systems, here are the key patterns discovered:

### System Comparison

| System | Core Primitive | Key Insight |
|--------|---------------|-------------|
| **Blender** | **Area** (container that can display any editor type) | Most general-purpose - no assumptions about content |
| **Obsidian** | Pane/Tab (splittable containers) | Plugin architecture for registering new pane types |
| **Adobe** | Panel (dockable, stackable, groupable) | Visual docking with clear affordances |
| **React Mosaic** | Binary tree node | Tile management with drag & drop |
| **VS Code** | ViewPart (opinionated regions) | Service architecture, but tied to editor concept |

### Universal Patterns Across All Systems

1. ✅ **Content Registry**: All systems let you register "what can be displayed"
2. ✅ **Container Switching**: Ability to change what a container displays
3. ✅ **Layout Persistence**: Save/restore layout configurations
4. ✅ **Binary Tree Structure**: Recursive splitting of space
5. ✅ **Command System**: Declarative actions for UI operations

### The Winning Pattern: Blender's "Area" Concept

**Blender Areas** are the most general-purpose primitive:
- An Area is just a rectangular region of screen space
- Each Area has an "editor type" (3D View, Timeline, Graph Editor, etc.)
- You can change an Area's type at any time via dropdown
- Areas can be split horizontally or vertically
- **No assumptions** about sidebar/editor/panel structure
- Works for modeling, animation, compositing, scripting - ANY workflow

This is PERFECT for pretty_poly's vision!

## Pretty Poly 2.0 Architecture

### Core Primitives (Week 1-3)

#### 1. Block (Already Exists - Enhance It!)

Current: Static content container
```typescript
<Block id="main">
  <MyContent />
</Block>
```

**Evolution**: Make it content-agnostic
```typescript
// Block doesn't care what it displays
<Block
  id="main"
  viewType="video-timeline"  // Can be changed at runtime!
/>
```

**Key Enhancement**: Add `viewType` prop that looks up registered views

#### 2. ViewRegistry (New Primitive)

Register **types of views** that can appear in blocks:

```typescript
interface ViewDescriptor {
  id: string                    // Unique view type ID
  title: string                 // Display name
  icon?: React.ComponentType    // Icon for view switcher
  component: React.ComponentType<ViewProps>
  category?: string             // For organization
  defaultSize?: number          // Preferred size when created
}

// Usage - register view types
registry.registerViewType({
  id: 'video-timeline',
  title: 'Timeline',
  icon: TimelineIcon,
  component: VideoTimelineView
})

registry.registerViewType({
  id: 'checkout-cart',
  title: 'Shopping Cart',
  icon: ShoppingCartIcon,
  component: CheckoutCartView
})
```

**Philosophy**: Views are **types**, not instances. A block can display any view type.

#### 3. CommandService (New Primitive)

Register **actions** that can be triggered anywhere:

```typescript
interface Command {
  id: string
  handler: (...args: any[]) => any
  title?: string
  category?: string
  icon?: React.ComponentType
  keybinding?: string
}

// Usage - register commands
commands.register({
  id: 'block.changeViewType',
  title: 'Change View Type',
  handler: (blockId: string, newType: string) => {
    layoutService.setBlockViewType(blockId, newType)
  }
})

commands.register({
  id: 'block.split',
  title: 'Split Block',
  keybinding: 'Ctrl+\\',
  handler: (blockId: string, direction: 'horizontal' | 'vertical') => {
    layoutService.splitBlock(blockId, direction)
  }
})

// Execute anywhere
commands.execute('block.split', 'main', 'vertical')
```

#### 4. LayoutService (New Primitive)

Manages **which blocks exist and what they display**:

```typescript
interface LayoutService {
  // Block management
  getBlocks(): BlockConfig[]
  setBlockViewType(blockId: string, viewType: string): void
  splitBlock(blockId: string, direction: 'horizontal' | 'vertical'): void
  removeBlock(blockId: string): void

  // View type management
  getBlockViewType(blockId: string): string | undefined
  canDisplayViewType(blockId: string, viewType: string): boolean

  // Layout snapshots
  saveLayout(name: string): void
  loadLayout(name: string): void
  getLayouts(): SavedLayout[]

  // Events
  onLayoutChange: Event<LayoutChange>
}
```

### Optional UI Components (Week 4-6)

These are **helpers** built on top of primitives - users can use them or build their own:

#### 1. ViewSwitcher Component

Blender-style dropdown to change a block's view type:

```typescript
<ViewSwitcher
  blockId="main"
  currentType="video-timeline"
  availableTypes={['video-timeline', 'audio-mixer', 'effects-panel']}
  onTypeChange={(newType) => commands.execute('block.changeViewType', 'main', newType)}
/>
```

#### 2. BlockToolbar Component

Helper for common block actions:

```typescript
<BlockToolbar blockId="main">
  <ViewSwitcher blockId="main" />
  <SplitButton blockId="main" />
  <MaximizeButton blockId="main" />
</BlockToolbar>
```

#### 3. LayoutPresets Component

UI for saving/loading layouts:

```typescript
<LayoutPresets
  onSave={(name) => layoutService.saveLayout(name)}
  onLoad={(name) => layoutService.loadLayout(name)}
  presets={layoutService.getLayouts()}
/>
```

#### 4. ActivityBar Component (Optional)

If users want VS Code-style navigation:

```typescript
<ActivityBar
  items={[
    { id: 'files', icon: FilesIcon, onClick: () => setMainViewType('file-explorer') },
    { id: 'video', icon: VideoIcon, onClick: () => setMainViewType('video-timeline') }
  ]}
/>
```

**But this is just ONE way to use the primitives!** Users could build:
- Tab bars
- Breadcrumb navigation
- Custom toolbars
- Whatever makes sense for their app

### Advanced Primitives (Week 7+)

#### 1. WorkspaceService (Optional)

Save entire application states:

```typescript
interface Workspace {
  id: string
  name: string
  layout: BlockConfig[]          // Block structure
  viewTypes: Record<string, string>  // Which view in each block
  additionalState?: any          // App-specific state
}

workspaces.save('video-editing-layout')
workspaces.load('color-grading-layout')
```

#### 2. ContextService (Optional)

Enable context-aware UI (like VS Code's "when" clauses):

```typescript
// Register context provider
context.set('videoSelected', true)
context.set('canApplyEffects', hasSelection && !isRendering)

// Use in commands
commands.register({
  id: 'video.applyEffect',
  title: 'Apply Effect',
  when: 'videoSelected && canApplyEffects'  // Only available when true
})
```

#### 3. EventBus (Optional)

Global communication between views:

```typescript
// Video timeline emits event
eventBus.emit('playhead.moved', { time: 5.2 })

// Audio mixer listens
eventBus.on('playhead.moved', ({ time }) => {
  syncAudioToTime(time)
})
```

## Example Use Cases

### 1. Video Editor

```typescript
// Register view types
registry.registerViewType({ id: 'timeline', title: 'Timeline', component: Timeline })
registry.registerViewType({ id: 'preview', title: 'Preview', component: VideoPreview })
registry.registerViewType({ id: 'effects', title: 'Effects', component: EffectsPanel })
registry.registerViewType({ id: 'media-bin', title: 'Media', component: MediaBin })

// Define initial layout (3 blocks)
const blocks = [
  { id: 'root', type: 'group', direction: 'column', children: ['top', 'bottom'] },
  { id: 'top', type: 'group', direction: 'row', parentId: 'root', children: ['media', 'preview'] },
  { id: 'media', type: 'block', parentId: 'top', defaultSize: 300, sizeUnit: 'px' },
  { id: 'preview', type: 'block', parentId: 'top', defaultSize: 1, sizeUnit: 'fr' },
  { id: 'bottom', type: 'block', parentId: 'root', defaultSize: 200, sizeUnit: 'px' }
]

// Assign view types to blocks
const viewAssignments = {
  'media': 'media-bin',
  'preview': 'preview',
  'bottom': 'timeline'
}

<Grid blocks={blocks} viewTypes={viewAssignments}>
  {/* Blocks auto-render based on viewTypes */}
</Grid>

// User can change any block's view via ViewSwitcher
// User can split any block to add more panels
// User can save this as "Editing Workspace" and create "Color Grading Workspace" with different types
```

### 2. E-commerce Checkout Flow

```typescript
// Register view types
registry.registerViewType({ id: 'cart-summary', title: 'Cart', component: CartSummary })
registry.registerViewType({ id: 'shipping-form', title: 'Shipping', component: ShippingForm })
registry.registerViewType({ id: 'payment-form', title: 'Payment', component: PaymentForm })
registry.registerViewType({ id: 'order-review', title: 'Review', component: OrderReview })
registry.registerViewType({ id: 'recommendations', title: 'You May Like', component: Recommendations })

// Layout: main content + sidebar
const blocks = [
  { id: 'root', type: 'group', direction: 'row', children: ['main', 'sidebar'] },
  { id: 'main', type: 'block', parentId: 'root', defaultSize: 1, sizeUnit: 'fr' },
  { id: 'sidebar', type: 'block', parentId: 'root', defaultSize: 300, sizeUnit: 'px' }
]

// Start on step 1
const [viewTypes, setViewTypes] = useState({
  'main': 'shipping-form',
  'sidebar': 'cart-summary'
})

// Progress through steps via commands
commands.register({
  id: 'checkout.nextStep',
  handler: () => {
    const steps = ['shipping-form', 'payment-form', 'order-review']
    const currentIndex = steps.indexOf(viewTypes.main)
    if (currentIndex < steps.length - 1) {
      setViewTypes({ ...viewTypes, main: steps[currentIndex + 1] })
    }
  }
})

// User sees cart summary in sidebar the whole time (polymorphic!)
// Main area changes through steps
// Could add recommendations at any step by splitting
```

### 3. Data Dashboard

```typescript
// Register view types
registry.registerViewType({ id: 'chart-line', title: 'Line Chart', component: LineChart })
registry.registerViewType({ id: 'chart-bar', title: 'Bar Chart', component: BarChart })
registry.registerViewType({ id: 'data-table', title: 'Table', component: DataTable })
registry.registerViewType({ id: 'filters', title: 'Filters', component: FilterPanel })
registry.registerViewType({ id: 'kpi-cards', title: 'KPIs', component: KPICards })

// User can arrange however they want!
// No assumption about "this is the sidebar" or "this is the main area"
// Everything is just blocks that can show any registered view type

// Example: User wants 2x2 grid of charts with filter bar on left
const blocks = [
  { id: 'root', type: 'group', direction: 'row', children: ['filters', 'charts'] },
  { id: 'filters', type: 'block', parentId: 'root', defaultSize: 250, sizeUnit: 'px' },
  { id: 'charts', type: 'group', direction: 'column', parentId: 'root', children: ['top-row', 'bottom-row'] },
  { id: 'top-row', type: 'group', direction: 'row', parentId: 'charts', children: ['tl', 'tr'] },
  { id: 'bottom-row', type: 'group', direction: 'row', parentId: 'charts', children: ['bl', 'br'] },
  { id: 'tl', type: 'block', parentId: 'top-row' },
  { id: 'tr', type: 'block', parentId: 'top-row' },
  { id: 'bl', type: 'block', parentId: 'bottom-row' },
  { id: 'br', type: 'block', parentId: 'bottom-row' }
]

const viewTypes = {
  'filters': 'filters',
  'tl': 'kpi-cards',
  'tr': 'chart-line',
  'bl': 'chart-bar',
  'br': 'data-table'
}

// User can click ViewSwitcher on any block to change chart type
// Can split a block to add more charts
// Can save as workspace and create multiple dashboard layouts
```

## API Comparison: Before vs After

### Current API (1.x)

```typescript
// Static structure, content baked in
<Grid id="app" blocks={blockConfigs}>
  <Block id="sidebar">
    <MySidebarContent />
  </Block>
  <Block id="main">
    <MyMainContent />
  </Block>
</Grid>
```

**Limitations**:
- Content is hardcoded per block
- Can't change what a block displays
- Can't save/load different layouts
- No standardized way to add commands/actions

### New API (2.0) - Primitive-Based

```typescript
// Register view types once
registry.registerViewType({ id: 'sidebar-content', component: MySidebarContent })
registry.registerViewType({ id: 'main-content', component: MyMainContent })

// Define layout structure
const blocks = [/* block tree */]

// Assign view types to blocks
const viewTypes = {
  'sidebar': 'sidebar-content',
  'main': 'main-content'
}

// Render
<Grid id="app" blocks={blocks} viewTypes={viewTypes}>
  {/* Content auto-renders based on viewTypes */}
</Grid>

// Later: Change what a block displays
layoutService.setBlockViewType('main', 'alternative-view')

// Save this layout
workspaceService.save('my-preferred-layout')
```

**Benefits**:
- Separation of structure (blocks) from content (view types)
- Runtime view switching
- Workspace persistence
- Extensible via registry
- Commands work across entire app

### Hybrid API (Backwards Compatible)

```typescript
// Still support inline content for simple cases
<Grid id="app" blocks={blocks}>
  <Block id="legacy">
    <InlineContent />  {/* Works like 1.x */}
  </Block>

  <Block id="modern" viewType="registered-view" />  {/* Uses registry */}
</Grid>
```

## Architecture Principles

### 1. **No Opinions About Structure**

Unlike VS Code (sidebar/editor/panel), pretty_poly makes **zero assumptions**:
- No "workbench" concept
- No predefined regions
- Just blocks that can display any registered view type

### 2. **Primitives, Not Patterns**

**Primitives** (ViewRegistry, Commands, LayoutService):
- Core building blocks
- Minimal API
- Maximum flexibility

**Patterns** (ActivityBar, Workbench, Wizard):
- Optional compositions of primitives
- Provided as examples/recipes
- Users can build their own

### 3. **Progressive Enhancement**

Start simple, add complexity as needed:

**Level 1**: Just use Grid + Blocks (current behavior)
```typescript
<Grid blocks={blocks}><Block id="main"><Content /></Block></Grid>
```

**Level 2**: Add view registry
```typescript
<ViewRegistryProvider>
  <Grid blocks={blocks} viewTypes={types} />
</ViewRegistryProvider>
```

**Level 3**: Add commands
```typescript
<ServiceContainer>
  <Grid blocks={blocks} viewTypes={types} />
</ServiceContainer>
```

**Level 4**: Add workspaces, context, advanced features
```typescript
<ServiceContainer>
  <WorkspaceManager>
    <Grid blocks={blocks} viewTypes={types} />
  </WorkspaceManager>
</ServiceContainer>
```

### 4. **Keep What Works**

Don't break the excellent systems already in place:
- ✅ Keep overlay divider system (best-in-class!)
- ✅ Keep zero-sum resize calculations
- ✅ Keep responsive modes (grid/dock/tabs)
- ✅ Keep block tree structure
- ✅ Keep size unit system (px/fr/auto)

Just **enhance** with view type switching and primitives.

## Implementation Phases

### Phase 1: Core Primitives (Weeks 1-2)

1. Create `ViewRegistry` service
2. Create `CommandService` service
3. Create `LayoutService` service
4. Add `viewType` prop to Block component
5. Wire up view resolution (Block looks up view type in registry)

**Deliverable**: Can register view types and assign them to blocks

### Phase 2: View Switching (Week 3)

1. Build `ViewSwitcher` component
2. Add `layoutService.setBlockViewType()`
3. Add command: `block.changeViewType`
4. Test view switching in example app

**Deliverable**: Can change what a block displays at runtime

### Phase 3: Commands & Shortcuts (Week 4)

1. Add keyboard shortcut system to CommandService
2. Build `CommandPalette` component (optional)
3. Add common commands (split, maximize, etc.)
4. Add command execution to toolbar buttons

**Deliverable**: Keyboard shortcuts and command palette working

### Phase 4: Workspaces (Week 5)

1. Create `WorkspaceService`
2. Add save/load layout functionality
3. Build `LayoutPresets` UI component
4. Add persistence to storage adapters

**Deliverable**: Can save and restore named layouts

### Phase 5: Polish & Examples (Week 6+)

1. Create example apps (video editor, checkout, dashboard)
2. Build optional patterns (ActivityBar, etc.)
3. Write migration guide
4. Update documentation

**Deliverable**: Production-ready with comprehensive examples

## Migration Strategy

### For Existing Users (Pretty Poly 1.x → 2.0)

**Option 1: Keep using inline content (no migration needed)**
```typescript
// This still works in 2.0!
<Grid blocks={blocks}>
  <Block id="main"><MyContent /></Block>
</Grid>
```

**Option 2: Gradually adopt view registry**
```typescript
// Step 1: Register your views
registry.registerViewType({ id: 'my-content', component: MyContent })

// Step 2: Use viewType instead of children
<Grid blocks={blocks} viewTypes={{ main: 'my-content' }} />

// Step 3: Enjoy new features (view switching, workspaces, etc.)
```

**No breaking changes** - new features are purely additive.

### For New Users

Start with the primitive-based approach from day one:
1. Register view types
2. Define block structure
3. Assign view types to blocks
4. Use commands for actions
5. Save/load workspaces

## Success Metrics

**For Developers**:
- ✅ Register new view type in <5 lines
- ✅ Change block's view type in 1 line
- ✅ Add keyboard shortcut in 1 line
- ✅ Save workspace in 1 line

**For End Users**:
- ✅ Switch block content without code changes
- ✅ Save preferred layouts
- ✅ Use keyboard shortcuts for common actions
- ✅ Build custom workflows

**Technical Quality**:
- ✅ Bundle size increase <15KB
- ✅ Zero breaking changes from 1.x
- ✅ 100% TypeScript type safety
- ✅ Same performance as 1.x

## Comparison: Primitives vs Patterns

### What We're Building (Primitives)

```typescript
// Core primitives - minimal and flexible
- ViewRegistry: "What types of content exist?"
- CommandService: "What actions are available?"
- LayoutService: "Which content is where?"
- Grid + Blocks: "How is space divided?"
```

Users compose these however they want:
- Video editor: Timeline + preview + effects
- Checkout: Steps + cart + recommendations
- Dashboard: Charts + filters + tables
- IDE: Editor + terminal + file tree
- **Anything**: User decides!

### What We're NOT Building (Opinionated Patterns)

```typescript
// Hardcoded assumptions - inflexible
❌ Workbench with predefined regions
❌ "Sidebar must contain X"
❌ "Editor area must be in center"
❌ "Panel must be at bottom"
```

We provide **examples** of patterns, but they're optional:
- "Here's how you COULD build a VS Code-like layout"
- "Here's how you COULD build a checkout wizard"
- "Here's how you COULD build a video studio"

But users can ignore these and build whatever they want!

## Conclusion

Pretty Poly 2.0 will be a **primitive-based layout system** inspired by Blender's area concept:

**Core Philosophy**:
- Blocks are containers that can display **any registered view type**
- View types are registered in a **ViewRegistry**
- Actions are declared in a **CommandService**
- Layout state is managed by **LayoutService**
- Users compose primitives into **any layout they need**

**Key Differentiators**:
- More general-purpose than VS Code (no editor assumptions)
- More primitive than React Mosaic (not just tiles)
- More flexible than Adobe panels (not just docking)
- More hackable than Figma (full programmatic access)

**What Makes It Special**:
- Keeps pretty_poly's excellent grid system and dividers
- Adds view switching and workspace management
- Enables keyboard shortcuts and commands
- Works for ANY polymorphic UI use case
- Progressive adoption path from simple to advanced

This transforms pretty_poly from a "grid layout library" into a **polymorphic UI toolkit** that can power video editors, checkout flows, dashboards, IDEs, and anything else that needs flexible, multi-context interfaces.