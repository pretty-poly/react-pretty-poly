# Pretty Poly vs VS Code Layout System Analysis

## Executive Summary

Pretty Poly has a solid foundation with its recursive grid system and responsive modes, but lacks the sophisticated view management, service architecture, and dynamic composition capabilities that make VS Code's layout system so powerful. This document analyzes the gaps and provides a roadmap for evolution.

## Current Pretty Poly Architecture

### Strengths
1. **Recursive Grid System**: Already uses a tree-based block structure similar to VS Code
2. **Overlay Dividers**: Smart overlay-based dividers that don't consume grid space
3. **Centralized State**: Context/Reducer pattern provides good state management foundation
4. **Responsive Modes**: Grid/Dock/Tabs modes for different viewports
5. **Persistence**: Basic localStorage/sessionStorage support
6. **Component Composition**: Block.Header, Block.Content, Block.Toolbar patterns

### Limitations vs VS Code
1. **Static Blocks**: Blocks are fixed content containers, not pluggable views
2. **No View Registry**: Cannot dynamically register/swap view components
3. **Direct Component Coupling**: No service architecture or event bus
4. **No Command System**: Actions are hardcoded, not declarative
5. **Limited Dynamic Composition**: Cannot move/dock views at runtime
6. **No Activity Bar Pattern**: Missing icon-based context switching
7. **No SplitView**: Lacks 1D collapsible accordion containers

## VS Code's Key Architectural Patterns

### 1. Workbench Layout
```
┌─────────────────────────────────────────────┐
│ Activity Bar | Side Bar | Editor | Panel    │
│               |          |        |          │
│               |          |        |          │
│ Status Bar ───────────────────────────────── │
└─────────────────────────────────────────────┘
```

### 2. Service Architecture
- **IViewletService**: Manages sidebar containers
- **IPanelService**: Manages bottom/side panels
- **IEditorService**: Manages editor area
- **ICommandService**: Global command execution
- **IContextKeyService**: Dynamic context enabling

### 3. View System
- **ViewDescriptor**: Metadata for views (id, title, icon)
- **ViewContainer**: Hosts multiple views (Explorer, Search)
- **ViewPane**: Individual view instances
- **Dynamic Registration**: Views can be added/removed at runtime

### 4. Command Pattern
```typescript
registerAction({
  id: 'workbench.action.toggleSidebar',
  title: 'Toggle Sidebar',
  keybinding: 'Ctrl+B',
  handler: () => viewletService.toggle()
})
```

## Roadmap for Evolution

### Phase 1: View System Foundation (Priority: High)

#### 1.1 View Registry
```typescript
// New interfaces needed
interface ViewDescriptor {
  id: string
  title: string
  icon?: React.ComponentType
  component: React.ComponentType<ViewProps>
  when?: ContextExpression // Conditional visibility
  order?: number
  canMoveToPanel?: boolean
}

interface ViewContainer {
  id: string
  title: string
  icon: React.ComponentType
  viewDescriptors: ViewDescriptor[]
}

// View registry service
class ViewRegistry {
  private views = new Map<string, ViewDescriptor>()
  private containers = new Map<string, ViewContainer>()

  registerView(descriptor: ViewDescriptor): void
  registerContainer(container: ViewContainer): void
  getView(id: string): ViewDescriptor
  moveView(viewId: string, containerId: string): void
}
```

#### 1.2 Block as View Host
Transform blocks from content containers to view hosts:

```typescript
// Current: Block contains content directly
<Block id="editor">
  <MyEditorContent />
</Block>

// Future: Block hosts registered views
<Block id="editor" viewId="code-editor" />
```

### Phase 2: Service Architecture (Priority: High)

#### 2.1 Command Service
```typescript
interface Command {
  id: string
  handler: (...args: any[]) => any
  title?: string
  category?: string
  icon?: React.ComponentType
  keybinding?: string
  when?: ContextExpression
}

class CommandService {
  private commands = new Map<string, Command>()

  registerCommand(command: Command): Disposable
  executeCommand(id: string, ...args: any[]): Promise<any>
  getCommands(): Command[]
}
```

#### 2.2 Layout Service
```typescript
class LayoutService {
  // Manages overall layout state
  toggleSidebar(): void
  togglePanel(): void
  focusView(viewId: string): void
  moveView(viewId: string, targetContainer: string): void
  splitEditor(direction: 'horizontal' | 'vertical'): void

  // Events
  onDidChangeLayout: Event<LayoutChange>
  onDidFocusView: Event<string>
}
```

#### 2.3 Context Key Service
```typescript
class ContextKeyService {
  private keys = new Map<string, any>()

  setContext(key: string, value: any): void
  getContext(key: string): any
  createScoped(target: HTMLElement): ContextKeyService

  // Enable conditional UI
  when(expression: string): boolean
}
```

### Phase 3: Activity Bar & ViewContainers (Priority: Medium)

#### 3.1 Activity Bar Component
```typescript
interface ActivityBarProps {
  containers: ViewContainer[]
  activeContainerId?: string
  onContainerChange: (id: string) => void
  position?: 'left' | 'right'
}

// Visual representation of VS Code's activity bar
<ActivityBar>
  <ActivityBarItem icon={FilesIcon} containerId="explorer" />
  <ActivityBarItem icon={SearchIcon} containerId="search" />
  <ActivityBarItem icon={GitIcon} containerId="git" />
</ActivityBar>
```

#### 3.2 ViewContainer Component
```typescript
// Manages multiple views in sidebar/panel
<ViewContainer id="explorer">
  <ViewPane id="files" title="Files" />
  <ViewPane id="outline" title="Outline" collapsible />
  <ViewPane id="timeline" title="Timeline" collapsed />
</ViewContainer>
```

### Phase 4: SplitView & Advanced Layouts (Priority: Medium)

#### 4.1 SplitView Component
```typescript
interface SplitViewProps {
  orientation: 'horizontal' | 'vertical'
  children: React.ReactNode
  sizes?: number[]
  minSizes?: number[]
  onSizeChange?: (sizes: number[]) => void
}

// 1D accordion-style container
<SplitView orientation="vertical">
  <SplitViewPane title="Problems" collapsible>
    <ProblemsView />
  </SplitViewPane>
  <SplitViewPane title="Output">
    <OutputView />
  </SplitViewPane>
  <SplitViewPane title="Terminal" minSize={100}>
    <TerminalView />
  </SplitViewPane>
</SplitView>
```

#### 4.2 Editor Groups
```typescript
// Support for split editors
interface EditorGroup {
  id: string
  editors: EditorInput[]
  activeEditor?: EditorInput
  layout?: 'split' | 'grid'
}

<EditorArea>
  <EditorGroup id="main" layout="split">
    <Editor id="file1.ts" />
    <Editor id="file2.ts" />
  </EditorGroup>
</EditorArea>
```

### Phase 5: Dynamic Composition (Priority: Low)

#### 5.1 Drag & Drop Views
```typescript
interface DragDropContext {
  draggedView?: ViewDescriptor
  targetContainer?: string
  dropPosition?: 'before' | 'after' | 'inside'
}

// Enable dragging views between containers
<ViewPane
  draggable
  onDragStart={(view) => startDrag(view)}
  onDragOver={(e) => handleDragOver(e)}
  onDrop={(e) => handleDrop(e)}
/>
```

#### 5.2 Docking System
```typescript
interface DockingZone {
  id: string
  accepts: string[] // View types that can dock here
  orientation: 'horizontal' | 'vertical' | 'tabs'
}

// Allow views to dock in different areas
<Grid>
  <DockingZone id="sidebar" accepts={['explorer', 'search']}>
    <ViewContainer />
  </DockingZone>
  <DockingZone id="bottom" accepts={['terminal', 'output']}>
    <Panel />
  </DockingZone>
</Grid>
```

## Implementation Strategy

### Step 1: Refactor Current Architecture (Week 1-2)

1. **Extract Services from GridProvider**
   ```typescript
   // Split monolithic GridProvider into services
   - LayoutService (layout state, mode switching)
   - ResizeService (resize operations)
   - PersistenceService (save/load state)
   - ViewportService (responsive behavior)
   ```

2. **Create Service Container**
   ```typescript
   const ServiceContainer = ({ children }) => {
     return (
       <LayoutServiceProvider>
         <CommandServiceProvider>
           <ViewRegistryProvider>
             {children}
           </ViewRegistryProvider>
         </CommandServiceProvider>
       </LayoutServiceProvider>
     )
   }
   ```

### Step 2: Implement View System (Week 3-4)

1. **Create ViewRegistry and ViewDescriptor types**
2. **Transform Block to accept viewId prop**
3. **Build ViewPane component for collapsible views**
4. **Add ViewContainer for managing multiple views**

### Step 3: Add Command System (Week 5)

1. **Implement CommandService**
2. **Create command palette component**
3. **Add keyboard shortcut system**
4. **Build toolbar/menu components that use commands**

### Step 4: Build Activity Bar (Week 6)

1. **Create ActivityBar component**
2. **Integrate with ViewContainers**
3. **Add icon-based navigation**
4. **Support badges/notifications**

### Step 5: Implement SplitView (Week 7)

1. **Build SplitView component**
2. **Add collapsible pane support**
3. **Implement size persistence**
4. **Support nested SplitViews**

## Migration Path for Existing Users

### Backwards Compatibility

1. **Maintain current Block API** as convenience wrapper:
   ```typescript
   // Old API still works
   <Block id="editor">
     <MyContent />
   </Block>

   // Gets transformed internally to:
   <Block id="editor" viewId="legacy-content">
     <LegacyView><MyContent /></LegacyView>
   </Block>
   ```

2. **Progressive Enhancement**: New features are opt-in:
   ```typescript
   // Start with basic grid
   <Grid blocks={blocks} />

   // Gradually adopt new features
   <Grid blocks={blocks} viewRegistry={registry}>
     <ActivityBar />
   </Grid>
   ```

### Migration Utilities

```typescript
// Helper to convert old blocks to new view system
function migrateBlocksToViews(blocks: BlockConfig[]): ViewDescriptor[] {
  return blocks.map(block => ({
    id: block.id,
    title: block.id,
    component: LegacyBlockView,
    props: { block }
  }))
}
```

## Benefits of VS Code Architecture

### For Developers

1. **Extensibility**: Register new views/commands without modifying core
2. **Testability**: Services can be mocked/stubbed easily
3. **Type Safety**: Well-defined interfaces for all contracts
4. **Reusability**: Views work in any compatible container

### For End Users

1. **Flexibility**: Customize layout to preference
2. **Productivity**: Keyboard shortcuts for everything
3. **Context Awareness**: UI adapts to current task
4. **Persistence**: Layout survives refreshes/updates

## Performance Considerations

### Optimizations Needed

1. **Virtual Rendering**: For large view lists
2. **Lazy Loading**: Load view components on demand
3. **Memoization**: Prevent unnecessary re-renders
4. **Service Caching**: Cache expensive computations

### Benchmarks to Track

- Time to initial render
- Resize performance (fps during drag)
- Memory usage with many views
- Bundle size impact

## Conclusion

Pretty Poly has a solid foundation that can evolve into a VS Code-like layout system. The key transformations needed are:

1. **From static blocks to dynamic views**
2. **From direct coupling to service architecture**
3. **From hardcoded actions to command pattern**
4. **From fixed layouts to pluggable composition**

This evolution can be done incrementally while maintaining backwards compatibility, allowing gradual adoption of new capabilities.

## Next Steps

1. Review and approve this architectural direction
2. Create detailed technical specs for Phase 1
3. Set up new project structure with services
4. Begin implementing ViewRegistry and ViewDescriptor
5. Build proof-of-concept with basic view switching