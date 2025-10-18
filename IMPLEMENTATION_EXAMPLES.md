# Implementation Examples: VS Code Patterns in Pretty Poly

This document provides concrete code examples showing how VS Code's architectural patterns could be implemented in pretty_poly.

## Example 1: View Registry System

### Basic View Registration

```typescript
// src/services/ViewRegistry.ts
import { createContext, useContext, useState, useCallback } from 'react'

export interface ViewDescriptor {
  id: string
  title: string
  icon?: React.ComponentType<{ className?: string }>
  component: React.ComponentType<ViewProps>
  category?: string
  when?: string // Context expression for conditional visibility
  order?: number
  defaultSize?: number
  canMoveToPanel?: boolean
  canMoveToSidebar?: boolean
}

export interface ViewProps {
  viewId: string
  onClose?: () => void
  onFocus?: () => void
}

class ViewRegistry {
  private views = new Map<string, ViewDescriptor>()
  private listeners = new Set<() => void>()

  registerView(descriptor: ViewDescriptor): () => void {
    this.views.set(descriptor.id, descriptor)
    this.notify()

    // Return disposable
    return () => {
      this.views.delete(descriptor.id)
      this.notify()
    }
  }

  getView(id: string): ViewDescriptor | undefined {
    return this.views.get(id)
  }

  getAllViews(): ViewDescriptor[] {
    return Array.from(this.views.values()).sort((a, b) =>
      (a.order ?? 0) - (b.order ?? 0)
    )
  }

  getViewsByCategory(category: string): ViewDescriptor[] {
    return this.getAllViews().filter(v => v.category === category)
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private notify() {
    this.listeners.forEach(listener => listener())
  }
}

// Context for dependency injection
const ViewRegistryContext = createContext<ViewRegistry | null>(null)

export function useViewRegistry(): ViewRegistry {
  const registry = useContext(ViewRegistryContext)
  if (!registry) throw new Error('useViewRegistry must be used within ViewRegistryProvider')
  return registry
}

export function ViewRegistryProvider({ children }: { children: React.ReactNode }) {
  const [registry] = useState(() => new ViewRegistry())
  return (
    <ViewRegistryContext.Provider value={registry}>
      {children}
    </ViewRegistryContext.Provider>
  )
}
```

### Usage Example

```typescript
// src/views/FileExplorerView.tsx
import { FileIcon } from 'lucide-react'

export function FileExplorerView({ viewId, onFocus }: ViewProps) {
  return (
    <div className="flex flex-col h-full" onFocus={onFocus}>
      <div className="flex-1 overflow-auto">
        {/* File tree content */}
      </div>
    </div>
  )
}

// src/App.tsx - Register views on startup
function App() {
  const registry = useViewRegistry()

  useEffect(() => {
    const disposables = [
      registry.registerView({
        id: 'file-explorer',
        title: 'Explorer',
        icon: FileIcon,
        component: FileExplorerView,
        category: 'sidebar',
        order: 1,
        canMoveToPanel: false
      }),
      registry.registerView({
        id: 'terminal',
        title: 'Terminal',
        icon: TerminalIcon,
        component: TerminalView,
        category: 'panel',
        order: 1,
        canMoveToSidebar: true
      })
    ]

    return () => disposables.forEach(d => d())
  }, [registry])

  return <Workbench />
}
```

## Example 2: Command Service

### Command Registration and Execution

```typescript
// src/services/CommandService.ts
import { createContext, useContext, useState } from 'react'

export interface Command {
  id: string
  handler: (...args: any[]) => any | Promise<any>
  title?: string
  category?: string
  icon?: React.ComponentType
  keybinding?: string
  when?: string // Context expression
}

export interface MenuItem {
  commandId: string
  group?: string
  order?: number
  when?: string
}

class CommandService {
  private commands = new Map<string, Command>()
  private listeners = new Map<string, Set<Function>>()

  registerCommand(command: Command): () => void {
    this.commands.set(command.id, command)

    return () => {
      this.commands.delete(command.id)
    }
  }

  async executeCommand(id: string, ...args: any[]): Promise<any> {
    const command = this.commands.get(id)
    if (!command) {
      console.warn(`Command not found: ${id}`)
      return
    }

    try {
      const result = await command.handler(...args)
      this.emit(`command:${id}`, result)
      return result
    } catch (error) {
      console.error(`Error executing command ${id}:`, error)
      throw error
    }
  }

  getCommand(id: string): Command | undefined {
    return this.commands.get(id)
  }

  getAllCommands(): Command[] {
    return Array.from(this.commands.values())
  }

  onDidExecuteCommand(commandId: string, listener: Function): () => void {
    if (!this.listeners.has(commandId)) {
      this.listeners.set(commandId, new Set())
    }
    this.listeners.get(commandId)!.add(listener)

    return () => {
      this.listeners.get(commandId)?.delete(listener)
    }
  }

  private emit(event: string, data: any) {
    const [, commandId] = event.split(':')
    this.listeners.get(commandId)?.forEach(listener => listener(data))
  }
}

const CommandServiceContext = createContext<CommandService | null>(null)

export function useCommandService(): CommandService {
  const service = useContext(CommandServiceContext)
  if (!service) throw new Error('useCommandService must be used within CommandServiceProvider')
  return service
}

export function CommandServiceProvider({ children }: { children: React.ReactNode }) {
  const [service] = useState(() => new CommandService())
  return (
    <CommandServiceContext.Provider value={service}>
      {children}
    </CommandServiceContext.Provider>
  )
}
```

### Command Usage

```typescript
// src/commands/layoutCommands.ts
export function registerLayoutCommands(commandService: CommandService, layoutService: LayoutService) {
  return [
    commandService.registerCommand({
      id: 'workbench.action.toggleSidebar',
      title: 'Toggle Sidebar',
      category: 'View',
      keybinding: 'Ctrl+B',
      handler: () => layoutService.toggleSidebar()
    }),

    commandService.registerCommand({
      id: 'workbench.action.togglePanel',
      title: 'Toggle Panel',
      category: 'View',
      keybinding: 'Ctrl+J',
      handler: () => layoutService.togglePanel()
    }),

    commandService.registerCommand({
      id: 'workbench.action.focusView',
      title: 'Focus View',
      category: 'View',
      handler: (viewId: string) => layoutService.focusView(viewId)
    }),

    commandService.registerCommand({
      id: 'workbench.action.splitEditor',
      title: 'Split Editor',
      category: 'Editor',
      keybinding: 'Ctrl+\\',
      handler: (direction: 'horizontal' | 'vertical' = 'vertical') =>
        layoutService.splitEditor(direction)
    })
  ]
}

// In component - execute command via button
function ToolbarButton({ commandId }: { commandId: string }) {
  const commandService = useCommandService()
  const command = commandService.getCommand(commandId)

  const handleClick = () => {
    commandService.executeCommand(commandId)
  }

  return (
    <button onClick={handleClick} title={command?.title}>
      {command?.icon && <command.icon />}
      {command?.title}
    </button>
  )
}
```

## Example 3: Layout Service

### Layout State Management

```typescript
// src/services/LayoutService.ts
import { createContext, useContext, useReducer } from 'react'

export interface LayoutState {
  sidebar: {
    visible: boolean
    position: 'left' | 'right'
    width: number
    activeContainer?: string
  }
  panel: {
    visible: boolean
    position: 'bottom' | 'right'
    height: number
    activeView?: string
  }
  editor: {
    groups: EditorGroup[]
    activeGroup?: string
  }
  activeView?: string
  fullscreen: boolean
}

export interface EditorGroup {
  id: string
  editors: string[] // View IDs
  activeEditor?: string
}

type LayoutAction =
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'TOGGLE_PANEL' }
  | { type: 'SET_SIDEBAR_WIDTH', width: number }
  | { type: 'SET_PANEL_HEIGHT', height: number }
  | { type: 'FOCUS_VIEW', viewId: string }
  | { type: 'SPLIT_EDITOR', direction: 'horizontal' | 'vertical' }
  | { type: 'MOVE_VIEW', viewId: string, target: 'sidebar' | 'panel' }

function layoutReducer(state: LayoutState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebar: { ...state.sidebar, visible: !state.sidebar.visible }
      }

    case 'TOGGLE_PANEL':
      return {
        ...state,
        panel: { ...state.panel, visible: !state.panel.visible }
      }

    case 'SET_SIDEBAR_WIDTH':
      return {
        ...state,
        sidebar: { ...state.sidebar, width: action.width }
      }

    case 'FOCUS_VIEW':
      return {
        ...state,
        activeView: action.viewId
      }

    case 'SPLIT_EDITOR': {
      const activeGroup = state.editor.groups.find(g => g.id === state.editor.activeGroup)
      if (!activeGroup) return state

      const newGroup: EditorGroup = {
        id: `group-${Date.now()}`,
        editors: [],
        activeEditor: undefined
      }

      return {
        ...state,
        editor: {
          ...state.editor,
          groups: [...state.editor.groups, newGroup]
        }
      }
    }

    default:
      return state
  }
}

class LayoutService {
  constructor(
    private state: LayoutState,
    private dispatch: React.Dispatch<LayoutAction>
  ) {}

  toggleSidebar() {
    this.dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  togglePanel() {
    this.dispatch({ type: 'TOGGLE_PANEL' })
  }

  setSidebarWidth(width: number) {
    this.dispatch({ type: 'SET_SIDEBAR_WIDTH', width })
  }

  setPanelHeight(height: number) {
    this.dispatch({ type: 'SET_PANEL_HEIGHT', height })
  }

  focusView(viewId: string) {
    this.dispatch({ type: 'FOCUS_VIEW', viewId })
  }

  splitEditor(direction: 'horizontal' | 'vertical' = 'vertical') {
    this.dispatch({ type: 'SPLIT_EDITOR', direction })
  }

  moveView(viewId: string, target: 'sidebar' | 'panel') {
    this.dispatch({ type: 'MOVE_VIEW', viewId, target })
  }

  getState(): LayoutState {
    return this.state
  }
}

const LayoutServiceContext = createContext<LayoutService | null>(null)

export function useLayoutService(): LayoutService {
  const service = useContext(LayoutServiceContext)
  if (!service) throw new Error('useLayoutService must be used within LayoutServiceProvider')
  return service
}

export function LayoutServiceProvider({ children }: { children: React.ReactNode }) {
  const initialState: LayoutState = {
    sidebar: { visible: true, position: 'left', width: 250 },
    panel: { visible: true, position: 'bottom', height: 200 },
    editor: { groups: [{ id: 'main', editors: [] }], activeGroup: 'main' },
    fullscreen: false
  }

  const [state, dispatch] = useReducer(layoutReducer, initialState)
  const [service] = useState(() => new LayoutService(state, dispatch))

  return (
    <LayoutServiceContext.Provider value={service}>
      {children}
    </LayoutServiceContext.Provider>
  )
}
```

## Example 4: Activity Bar Component

### Activity Bar with Container Switching

```typescript
// src/components/ActivityBar/ActivityBar.tsx
import { cn } from '../../utils/cn'

interface ActivityBarItem {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  badge?: number
  order?: number
}

interface ActivityBarProps {
  items: ActivityBarItem[]
  activeId?: string
  position?: 'left' | 'right'
  onItemClick: (id: string) => void
}

export function ActivityBar({
  items,
  activeId,
  position = 'left',
  onItemClick
}: ActivityBarProps) {
  const sortedItems = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <div
      className={cn(
        'flex flex-col',
        'bg-background border-r border-border',
        'w-12',
        position === 'right' && 'border-r-0 border-l'
      )}
      role="navigation"
      aria-label="Activity Bar"
    >
      <div className="flex-1 flex flex-col gap-1 p-1">
        {sortedItems.map(item => (
          <ActivityBarButton
            key={item.id}
            item={item}
            active={item.id === activeId}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

function ActivityBarButton({
  item,
  active,
  onClick
}: {
  item: ActivityBarItem
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      className={cn(
        'relative',
        'w-10 h-10',
        'flex items-center justify-center',
        'rounded',
        'transition-colors',
        'hover:bg-accent',
        active && 'bg-accent text-accent-foreground'
      )}
      onClick={onClick}
      title={item.title}
      aria-label={item.title}
      aria-current={active ? 'page' : undefined}
    >
      <item.icon className="w-5 h-5" />

      {item.badge && (
        <span className={cn(
          'absolute top-0 right-0',
          'w-4 h-4',
          'flex items-center justify-center',
          'rounded-full',
          'bg-blue-500 text-white',
          'text-xs font-semibold'
        )}>
          {item.badge > 9 ? '9+' : item.badge}
        </span>
      )}

      {active && (
        <div className={cn(
          'absolute left-0 top-0 bottom-0',
          'w-0.5',
          'bg-primary'
        )} />
      )}
    </button>
  )
}
```

### Activity Bar Usage

```typescript
// src/components/Workbench/Workbench.tsx
import { FileIcon, SearchIcon, GitIcon, SettingsIcon } from 'lucide-react'

function Workbench() {
  const viewRegistry = useViewRegistry()
  const layoutService = useLayoutService()
  const [activeContainer, setActiveContainer] = useState('explorer')

  const activityBarItems: ActivityBarItem[] = [
    { id: 'explorer', icon: FileIcon, title: 'Explorer', order: 1 },
    { id: 'search', icon: SearchIcon, title: 'Search', order: 2 },
    { id: 'git', icon: GitIcon, title: 'Source Control', order: 3, badge: 5 },
    { id: 'settings', icon: SettingsIcon, title: 'Settings', order: 100 }
  ]

  const handleActivityBarClick = (id: string) => {
    if (activeContainer === id) {
      // Toggle sidebar if clicking same item
      layoutService.toggleSidebar()
    } else {
      // Switch container
      setActiveContainer(id)
      // Ensure sidebar is visible
      if (!layoutService.getState().sidebar.visible) {
        layoutService.toggleSidebar()
      }
    }
  }

  return (
    <div className="flex h-screen">
      <ActivityBar
        items={activityBarItems}
        activeId={activeContainer}
        onItemClick={handleActivityBarClick}
      />

      {layoutService.getState().sidebar.visible && (
        <Sidebar containerId={activeContainer} />
      )}

      <EditorArea />

      {layoutService.getState().panel.visible && (
        <Panel />
      )}
    </div>
  )
}
```

## Example 5: ViewContainer Component

### ViewContainer with Collapsible Panes

```typescript
// src/components/ViewContainer/ViewContainer.tsx
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { cn } from '../../utils/cn'

interface ViewPaneDescriptor {
  id: string
  title: string
  viewId: string
  collapsible?: boolean
  collapsed?: boolean
  closable?: boolean
  minHeight?: number
  defaultHeight?: number
}

interface ViewContainerProps {
  id: string
  title: string
  panes: ViewPaneDescriptor[]
  onPaneCollapse?: (paneId: string) => void
  onPaneExpand?: (paneId: string) => void
  onPaneClose?: (paneId: string) => void
}

export function ViewContainer({
  id,
  title,
  panes,
  onPaneCollapse,
  onPaneExpand,
  onPaneClose
}: ViewContainerProps) {
  const viewRegistry = useViewRegistry()

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Container Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {title}
        </h2>
      </div>

      {/* Panes */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {panes.map(pane => (
          <ViewPane
            key={pane.id}
            pane={pane}
            view={viewRegistry.getView(pane.viewId)}
            onCollapse={() => onPaneCollapse?.(pane.id)}
            onExpand={() => onPaneExpand?.(pane.id)}
            onClose={() => onPaneClose?.(pane.id)}
          />
        ))}
      </div>
    </div>
  )
}

function ViewPane({
  pane,
  view,
  onCollapse,
  onExpand,
  onClose
}: {
  pane: ViewPaneDescriptor
  view?: ViewDescriptor
  onCollapse: () => void
  onExpand: () => void
  onClose: () => void
}) {
  const [collapsed, setCollapsed] = useState(pane.collapsed ?? false)

  const handleToggleCollapse = () => {
    if (collapsed) {
      setCollapsed(false)
      onExpand()
    } else {
      setCollapsed(true)
      onCollapse()
    }
  }

  if (!view) return null

  const ViewComponent = view.component

  return (
    <div className={cn(
      'flex flex-col',
      'border-b last:border-b-0',
      collapsed ? 'flex-none' : 'flex-1 min-h-0'
    )}>
      {/* Pane Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-muted/50">
        <button
          onClick={handleToggleCollapse}
          className="flex items-center gap-1 text-sm font-medium hover:text-foreground"
        >
          {pane.collapsible && (
            collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
          )}
          <span>{pane.title}</span>
        </button>

        {pane.closable && (
          <button
            onClick={onClose}
            className="p-0.5 hover:bg-accent rounded"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Pane Content */}
      {!collapsed && (
        <div className="flex-1 overflow-auto">
          <ViewComponent viewId={pane.viewId} />
        </div>
      )}
    </div>
  )
}
```

## Example 6: Complete Workbench Layout

### Putting It All Together

```typescript
// src/components/Workbench/Workbench.tsx
import { Grid } from '../Grid/Grid'
import { Block } from '../Block/Block'
import { ActivityBar } from '../ActivityBar/ActivityBar'
import { ViewContainer } from '../ViewContainer/ViewContainer'

export function Workbench() {
  const layoutService = useLayoutService()
  const viewRegistry = useViewRegistry()
  const layoutState = layoutService.getState()

  // VS Code-style workbench layout
  const workbenchBlocks: BlockConfig[] = [
    {
      id: 'workbench-root',
      type: 'group',
      direction: 'row',
      children: ['activity-bar', 'main-area']
    },
    {
      id: 'activity-bar',
      type: 'block',
      parentId: 'workbench-root',
      order: 0,
      defaultSize: 48,
      sizeUnit: 'px',
      resizable: false
    },
    {
      id: 'main-area',
      type: 'group',
      direction: 'row',
      parentId: 'workbench-root',
      order: 1,
      children: layoutState.sidebar.visible
        ? ['sidebar', 'editor-panel-container']
        : ['editor-panel-container']
    },
    ...(layoutState.sidebar.visible ? [{
      id: 'sidebar',
      type: 'block',
      parentId: 'main-area',
      order: 0,
      defaultSize: layoutState.sidebar.width,
      sizeUnit: 'px' as SizeUnit,
      minSize: 170,
      maxSize: 500
    }] : []),
    {
      id: 'editor-panel-container',
      type: 'group',
      direction: 'column',
      parentId: 'main-area',
      order: 1,
      children: layoutState.panel.visible
        ? ['editor-area', 'panel']
        : ['editor-area']
    },
    {
      id: 'editor-area',
      type: 'block',
      parentId: 'editor-panel-container',
      order: 0,
      defaultSize: 1,
      sizeUnit: 'fr'
    },
    ...(layoutState.panel.visible ? [{
      id: 'panel',
      type: 'block' as BlockType,
      parentId: 'editor-panel-container',
      order: 1,
      defaultSize: layoutState.panel.height,
      sizeUnit: 'px' as SizeUnit,
      minSize: 100,
      maxSize: 800
    }] : [])
  ]

  return (
    <Grid id="workbench" blocks={workbenchBlocks}>
      <Block id="activity-bar">
        <ActivityBar
          items={activityBarItems}
          activeId={layoutState.sidebar.activeContainer}
          onItemClick={handleActivityBarClick}
        />
      </Block>

      {layoutState.sidebar.visible && (
        <Block id="sidebar">
          <ViewContainer
            id={layoutState.sidebar.activeContainer ?? 'explorer'}
            title={getContainerTitle(layoutState.sidebar.activeContainer)}
            panes={getSidebarPanes(layoutState.sidebar.activeContainer)}
          />
        </Block>
      )}

      <Block id="editor-area">
        <EditorArea groups={layoutState.editor.groups} />
      </Block>

      {layoutState.panel.visible && (
        <Block id="panel">
          <ViewContainer
            id="panel"
            title="Panel"
            panes={getPanelPanes()}
          />
        </Block>
      )}
    </Grid>
  )
}
```

## Example 7: Migration from Current API

### Before (Current Pretty Poly)

```typescript
function MyApp() {
  const blocks: BlockConfig[] = [
    {
      id: 'root',
      type: 'group',
      direction: 'row',
      children: ['sidebar', 'main']
    },
    {
      id: 'sidebar',
      type: 'block',
      parentId: 'root',
      order: 0,
      defaultSize: 250,
      sizeUnit: 'px'
    },
    {
      id: 'main',
      type: 'block',
      parentId: 'root',
      order: 1,
      defaultSize: 1,
      sizeUnit: 'fr'
    }
  ]

  return (
    <Grid id="app" blocks={blocks}>
      <Block id="sidebar">
        <MySidebarContent />
      </Block>
      <Block id="main">
        <MyMainContent />
      </Block>
    </Grid>
  )
}
```

### After (With View System)

```typescript
function MyApp() {
  const registry = useViewRegistry()

  // Register views once
  useEffect(() => {
    const disposables = [
      registry.registerView({
        id: 'my-sidebar',
        title: 'Sidebar',
        component: MySidebarContent,
        category: 'sidebar'
      }),
      registry.registerView({
        id: 'my-main',
        title: 'Main',
        component: MyMainContent,
        category: 'editor'
      })
    ]
    return () => disposables.forEach(d => d())
  }, [])

  // Same block configuration
  const blocks: BlockConfig[] = [
    /* ... same as before ... */
  ]

  return (
    <Grid id="app" blocks={blocks}>
      {/* Views are resolved by ID */}
      <Block id="sidebar" viewId="my-sidebar" />
      <Block id="main" viewId="my-main" />
    </Grid>
  )
}
```

### Hybrid Approach (Gradual Migration)

```typescript
// Supports both inline content AND registered views
<Grid id="app" blocks={blocks}>
  {/* Old API: inline content */}
  <Block id="legacy">
    <MyInlineContent />
  </Block>

  {/* New API: registered view */}
  <Block id="modern" viewId="my-registered-view" />
</Grid>
```

## Summary

These examples demonstrate:

1. **View Registry**: Decoupled view registration and instantiation
2. **Command Service**: Declarative actions with keyboard shortcuts
3. **Layout Service**: Centralized layout state management
4. **Activity Bar**: Icon-based container switching
5. **ViewContainer**: Collapsible pane system
6. **Workbench**: Complete VS Code-style layout
7. **Migration Path**: Gradual adoption with backwards compatibility

The key insight is that all these patterns can be added **incrementally** without breaking existing code, allowing users to adopt new features as needed.