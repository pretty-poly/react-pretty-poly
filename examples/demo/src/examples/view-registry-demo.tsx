/**
 * View Registry Demo
 *
 * Demonstrates Pretty Poly 2.0's primitive-based architecture:
 * - ViewRegistry for registering view types
 * - Blocks can display any registered view type
 * - Runtime view switching (Blender's Area concept)
 *
 * This is the foundation for polymorphic UIs!
 */

import React, { useState } from 'react'
import {
  Grid,
  Block,
  BlockContent,
  BlockHeader,
  BlockToolbar,
  ViewRegistryProvider,
  useViewRegistry,
  useRegisterViews,
  type BlockConfig,
  type ViewDescriptor,
  type ViewProps,
} from '@pretty-poly/react'
import {
  FileText,
  Image,
  Video,
  Music,
  Code,
  Database,
  LineChart,
  type LucideIcon,
} from 'lucide-react'

// ============================================================================
// Example View Components
// ============================================================================

/**
 * Text Editor View
 */
function TextEditorView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Text Editor</h3>
      <textarea
        className="flex-1 w-full p-2 border rounded resize-none font-mono text-sm"
        placeholder="Start typing..."
        defaultValue="This is a text editor view component.&#10;&#10;Try switching this block to a different view type using the dropdown above!"
      />
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  )
}

/**
 * Image Gallery View
 */
function ImageGalleryView({ blockId }: ViewProps) {
  const images = ['🖼️', '🎨', '📸', '🌄', '🌅', '🌆', '🌇', '🌃']

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Image Gallery</h3>
      <div className="flex-1 grid grid-cols-4 gap-2 overflow-auto">
        {images.map((emoji, i) => (
          <div
            key={i}
            className="aspect-square border rounded flex items-center justify-center text-4xl hover:bg-accent cursor-pointer transition-colors"
          >
            {emoji}
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  )
}

/**
 * Video Player View
 */
function VideoPlayerView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Video Player</h3>
      <div className="flex-1 border rounded bg-black flex items-center justify-center">
        <div className="text-white/60 text-6xl">▶️</div>
      </div>
      <div className="flex gap-2 justify-center">
        <button className="px-3 py-1 border rounded hover:bg-accent text-sm">⏮️ Prev</button>
        <button className="px-3 py-1 border rounded hover:bg-accent text-sm">⏯️ Play</button>
        <button className="px-3 py-1 border rounded hover:bg-accent text-sm">⏭️ Next</button>
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  )
}

/**
 * Audio Mixer View
 */
function AudioMixerView({ blockId }: ViewProps) {
  const channels = ['Vocals', 'Guitar', 'Bass', 'Drums']

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Audio Mixer</h3>
      <div className="flex-1 flex gap-4 items-end justify-center">
        {channels.map((channel, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <input
              type="range"
              orient="vertical"
              className="h-32"
              defaultValue={70 - i * 10}
            />
            <div className="text-xs font-medium">{channel}</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  )
}

/**
 * Code Editor View
 */
function CodeEditorView({ blockId }: ViewProps) {
  const code = `function hello() {\n  console.log("Hello from Code Editor!");\n  return "This is a code editor view";\n}`

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Code Editor</h3>
      <div className="flex-1 border rounded p-2 bg-slate-950 text-green-400 font-mono text-sm overflow-auto">
        <pre>{code}</pre>
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  )
}

/**
 * Database View
 */
function DatabaseView({ blockId }: ViewProps) {
  const data = [
    { id: 1, name: 'Alice', role: 'Engineer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Manager' },
  ]

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Database</h3>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm border">
          <thead className="bg-muted">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} className="border-t hover:bg-accent">
                <td className="p-2">{row.id}</td>
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  )
}

/**
 * Analytics View
 */
function AnalyticsView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Analytics</h3>
      <div className="grid grid-cols-3 gap-2">
        <div className="border rounded p-3">
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-xs text-muted-foreground">Users</div>
        </div>
        <div className="border rounded p-3">
          <div className="text-2xl font-bold">56.7%</div>
          <div className="text-xs text-muted-foreground">Conversion</div>
        </div>
        <div className="border rounded p-3">
          <div className="text-2xl font-bold">$89K</div>
          <div className="text-xs text-muted-foreground">Revenue</div>
        </div>
      </div>
      <div className="flex-1 border rounded flex items-center justify-center text-4xl">
        📈
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  )
}

// ============================================================================
// View Type Definitions
// ============================================================================

const VIEW_TYPES: ViewDescriptor[] = [
  {
    id: 'text-editor',
    title: 'Text Editor',
    icon: FileText,
    component: TextEditorView,
    category: 'editor',
    order: 1,
  },
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    icon: Image,
    component: ImageGalleryView,
    category: 'media',
    order: 2,
  },
  {
    id: 'video-player',
    title: 'Video Player',
    icon: Video,
    component: VideoPlayerView,
    category: 'media',
    order: 3,
  },
  {
    id: 'audio-mixer',
    title: 'Audio Mixer',
    icon: Music,
    component: AudioMixerView,
    category: 'media',
    order: 4,
  },
  {
    id: 'code-editor',
    title: 'Code Editor',
    icon: Code,
    component: CodeEditorView,
    category: 'editor',
    order: 5,
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    component: DatabaseView,
    category: 'data',
    order: 6,
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: LineChart,
    component: AnalyticsView,
    category: 'data',
    order: 7,
  },
]

// ============================================================================
// View Switcher Component (Blender-style dropdown)
// ============================================================================

interface ViewSwitcherProps {
  blockId: string
  currentViewType: string
  onViewTypeChange: (viewType: string) => void
}

function ViewSwitcher({ blockId, currentViewType, onViewTypeChange }: ViewSwitcherProps) {
  const registry = useViewRegistry()
  const allViews = registry.getAllViews()
  const currentView = registry.getView(currentViewType)

  const Icon = currentView?.icon as LucideIcon | undefined

  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="w-4 h-4" />}
      <select
        value={currentViewType}
        onChange={(e) => onViewTypeChange(e.target.value)}
        className="px-2 py-1 text-sm border rounded bg-background cursor-pointer hover:bg-accent"
      >
        {allViews.map(view => {
          const ViewIcon = view.icon as LucideIcon | undefined
          return (
            <option key={view.id} value={view.id}>
              {view.title}
            </option>
          )
        })}
      </select>
      <span className="text-xs text-muted-foreground">
        ({blockId})
      </span>
    </div>
  )
}

// ============================================================================
// Dynamic Block Component
// ============================================================================

interface DynamicBlockProps {
  id: string
  viewType: string
  onViewTypeChange: (viewType: string) => void
}

function DynamicBlock({ id, viewType, onViewTypeChange }: DynamicBlockProps) {
  const registry = useViewRegistry()
  const viewDescriptor = registry.getView(viewType)

  if (!viewDescriptor) {
    return (
      <Block id={id}>
        <BlockContent>
          <div className="p-4 text-red-500">
            Error: View type "{viewType}" not found in registry!
          </div>
        </BlockContent>
      </Block>
    )
  }

  const ViewComponent = viewDescriptor.component

  return (
    <Block id={id}>
      <BlockHeader>
        <BlockToolbar
          left={
            <ViewSwitcher
              blockId={id}
              currentViewType={viewType}
              onViewTypeChange={onViewTypeChange}
            />
          }
        />
      </BlockHeader>
      <BlockContent>
        <ViewComponent viewId={viewType} blockId={id} />
      </BlockContent>
    </Block>
  )
}

// ============================================================================
// Main Demo Component
// ============================================================================

export default function ViewRegistryDemo() {
  const registry = useViewRegistry()

  // Register all view types synchronously on mount (not in effect)
  // This ensures views are available before first render
  React.useMemo(() => {
    VIEW_TYPES.forEach(view => registry.registerView(view))
  }, [registry])

  // Track which view type each block is displaying
  const [viewTypes, setViewTypes] = useState({
    topLeft: 'text-editor',
    topRight: 'image-gallery',
    bottomLeft: 'code-editor',
    bottomRight: 'analytics',
  })

  const handleViewTypeChange = (blockId: keyof typeof viewTypes, newType: string) => {
    setViewTypes(prev => ({ ...prev, [blockId]: newType }))
  }

  // Grid layout: 2x2 grid
  const blocks: BlockConfig[] = [
    {
      id: 'root',
      type: 'group',
      direction: 'column',
      children: ['topRow', 'bottomRow'],
    },
    {
      id: 'topRow',
      type: 'group',
      direction: 'row',
      parentId: 'root',
      order: 0,
      children: ['topLeft', 'topRight'],
    },
    {
      id: 'bottomRow',
      type: 'group',
      direction: 'row',
      parentId: 'root',
      order: 1,
      children: ['bottomLeft', 'bottomRight'],
    },
    {
      id: 'topLeft',
      type: 'block',
      parentId: 'topRow',
      order: 0,
      defaultSize: 1,
      sizeUnit: 'fr',
    },
    {
      id: 'topRight',
      type: 'block',
      parentId: 'topRow',
      order: 1,
      defaultSize: 1,
      sizeUnit: 'fr',
    },
    {
      id: 'bottomLeft',
      type: 'block',
      parentId: 'bottomRow',
      order: 0,
      defaultSize: 1,
      sizeUnit: 'fr',
    },
    {
      id: 'bottomRight',
      type: 'block',
      parentId: 'bottomRow',
      order: 1,
      defaultSize: 1,
      sizeUnit: 'fr',
    },
  ]

  return (
    <div className="h-screen flex flex-col">
      {/* Info Banner */}
      <div className="bg-blue-50 dark:bg-blue-950 border-b border-blue-200 dark:border-blue-800 p-4">
        <h1 className="text-xl font-bold mb-2">View Registry Demo (Pretty Poly 2.0)</h1>
        <p className="text-sm text-muted-foreground mb-2">
          This demonstrates the <strong>ViewRegistry</strong> primitive - the foundation for polymorphic UIs.
          Each block can display any registered view type, inspired by Blender's Area concept.
        </p>
        <div className="flex gap-4 text-xs">
          <div>
            <strong>✨ Try this:</strong> Use the dropdowns to change what each block displays
          </div>
          <div>
            <strong>📦 Registered:</strong> {VIEW_TYPES.length} view types
          </div>
        </div>
      </div>

      {/* Grid with Dynamic Blocks */}
      <div className="flex-1">
        <Grid id="view-registry-demo" defaultLayout={blocks}>
          <DynamicBlock
            id="topLeft"
            viewType={viewTypes.topLeft}
            onViewTypeChange={(type) => handleViewTypeChange('topLeft', type)}
          />
          <DynamicBlock
            id="topRight"
            viewType={viewTypes.topRight}
            onViewTypeChange={(type) => handleViewTypeChange('topRight', type)}
          />
          <DynamicBlock
            id="bottomLeft"
            viewType={viewTypes.bottomLeft}
            onViewTypeChange={(type) => handleViewTypeChange('bottomLeft', type)}
          />
          <DynamicBlock
            id="bottomRight"
            viewType={viewTypes.bottomRight}
            onViewTypeChange={(type) => handleViewTypeChange('bottomRight', type)}
          />
        </Grid>
      </div>
    </div>
  )
}

// Wrap demo with ViewRegistryProvider
export function ViewRegistryDemoWrapper() {
  return (
    <ViewRegistryProvider>
      <ViewRegistryDemo />
    </ViewRegistryProvider>
  )
}
