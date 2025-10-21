/**
 * Pretty Poly 2.0 Primitives Integration Demo
 *
 * Shows all three core primitives working together:
 * - ViewRegistry: Register view types
 * - CommandService: Execute actions with keyboard shortcuts
 * - LayoutService: Manage which views are where + save/load workspaces
 */

import React from 'react'
import {
  Grid,
  Block,
  BlockContent,
  ViewRegistryProvider,
  CommandServiceProvider,
  LayoutServiceProvider,
  useViewRegistry,
  useCommandService,
  useLayoutService,
  useRegisterCommands,
  useSetBlockViewType,
  useBlockViewType,
  useSaveLayout,
  useApplyLayout,
  useLayouts,
  type BlockConfig,
  type ViewDescriptor,
  type ViewProps,
  type Command,
} from '@pretty-poly/react'
import { FileText, Image, Video, Music, Save, FolderOpen, Sparkles } from 'lucide-react'

// Simple view components
const TextView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full">
    <div className="text-center">
      <FileText className="w-16 h-16 mx-auto mb-4 text-blue-500" />
      <h2 className="text-2xl font-bold">Text View</h2>
      <p className="text-muted-foreground mt-2">Press Ctrl+1 to switch to Image View</p>
    </div>
  </div>
)

const ImageView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
    <div className="text-center">
      <Image className="w-16 h-16 mx-auto mb-4 text-purple-500" />
      <h2 className="text-2xl font-bold">Image View</h2>
      <p className="text-muted-foreground mt-2">Press Ctrl+2 to switch to Video View</p>
    </div>
  </div>
)

const VideoView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
    <div className="text-center">
      <Video className="w-16 h-16 mx-auto mb-4 text-cyan-500" />
      <h2 className="text-2xl font-bold">Video View</h2>
      <p className="text-muted-foreground mt-2">Press Ctrl+3 to switch to Music View</p>
    </div>
  </div>
)

const MusicView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
    <div className="text-center">
      <Music className="w-16 h-16 mx-auto mb-4 text-green-500" />
      <h2 className="text-2xl font-bold">Music View</h2>
      <p className="text-muted-foreground mt-2">Press Ctrl+0 to switch to Text View</p>
    </div>
  </div>
)

// View type definitions
const VIEW_TYPES: ViewDescriptor[] = [
  { id: 'text', title: 'Text', icon: FileText, component: TextView },
  { id: 'image', title: 'Image', icon: Image, component: ImageView },
  { id: 'video', title: 'Video', icon: Video, component: VideoView },
  { id: 'music', title: 'Music', icon: Music, component: MusicView },
]

function PrimitivesDemoInternal() {
  const registry = useViewRegistry()
  const commandService = useCommandService()
  const layoutService = useLayoutService()
  const setBlockViewType = useSetBlockViewType()
  const mainViewType = useBlockViewType('main') || 'text'
  const savedLayouts = useLayouts()
  const saveLayout = useSaveLayout()
  const applyLayout = useApplyLayout()

  // Register view types
  React.useMemo(() => {
    VIEW_TYPES.forEach(view => registry.registerView(view))
  }, [registry])

  // Grid layout - simple single block
  const blocks: BlockConfig[] = React.useMemo(() => [
    { id: 'root', type: 'group', direction: 'row', children: ['main'] },
    { id: 'main', type: 'block', parentId: 'root', order: 0, defaultSize: 1, sizeUnit: 'fr' },
  ], [])

  // Register commands that use LayoutService to change views
  const commands: Command[] = React.useMemo(
    () => [
      {
        id: 'view.switchToText',
        title: 'Switch to Text View',
        category: 'View',
        keybinding: 'Ctrl+0',
        icon: FileText,
        handler: () => setBlockViewType('main', 'text'),
      },
      {
        id: 'view.switchToImage',
        title: 'Switch to Image View',
        category: 'View',
        keybinding: 'Ctrl+1',
        icon: Image,
        handler: () => setBlockViewType('main', 'image'),
      },
      {
        id: 'view.switchToVideo',
        title: 'Switch to Video View',
        category: 'View',
        keybinding: 'Ctrl+2',
        icon: Video,
        handler: () => setBlockViewType('main', 'video'),
      },
      {
        id: 'view.switchToMusic',
        title: 'Switch to Music View',
        category: 'View',
        keybinding: 'Ctrl+3',
        icon: Music,
        handler: () => setBlockViewType('main', 'music'),
      },
      {
        id: 'workspace.save',
        title: 'Save Current Workspace',
        category: 'Workspace',
        keybinding: 'Ctrl+S',
        icon: Save,
        handler: () => {
          const id = `workspace-${Date.now()}`
          const name = `Workspace ${savedLayouts.length + 1} (${mainViewType})`
          saveLayout(id, name, blocks, { description: `Saved with ${mainViewType} view` })
          alert(`Saved workspace: ${name}`)
        },
      },
    ],
    [setBlockViewType, saveLayout, blocks, mainViewType, savedLayouts.length]
  )

  useRegisterCommands(commands)

  // Current view component
  const currentView = registry.getView(mainViewType)
  const CurrentViewComponent = currentView?.component || TextView

  return (
    <div className="h-screen flex flex-col">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
          <Sparkles className="w-6 h-6" />
          Pretty Poly 2.0: The Three Primitives
        </h1>
        <p className="text-sm opacity-90 mb-3">
          ViewRegistry + CommandService + LayoutService working together
        </p>
        <div className="flex gap-4 text-xs">
          <div className="bg-white/20 px-3 py-1 rounded">
            <strong>Shortcuts:</strong> Ctrl+0 (Text), Ctrl+1 (Image), Ctrl+2 (Video), Ctrl+3 (Music), Ctrl+S (Save)
          </div>
          <div className="bg-white/20 px-3 py-1 rounded">
            <strong>Current View:</strong> {mainViewType}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="border-b p-4 bg-muted/50">
        <div className="flex gap-4 items-center justify-between">
          <div className="flex gap-2">
            <strong className="text-sm">Switch View:</strong>
            {VIEW_TYPES.map(view => {
              const Icon = view.icon
              return (
                <button
                  key={view.id}
                  onClick={() => commandService.executeCommand(`view.switchTo${view.title}`)}
                  className={`px-3 py-1.5 rounded border flex items-center gap-1.5 text-sm transition-colors ${
                    mainViewType === view.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'hover:bg-accent'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {view.title}
                </button>
              )
            })}
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => commandService.executeCommand('workspace.save')}
              className="px-3 py-1.5 rounded border flex items-center gap-1.5 text-sm hover:bg-accent"
            >
              <Save className="w-3.5 h-3.5" />
              Save Workspace
            </button>

            {savedLayouts.length > 0 && (
              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">Load:</span>
                {savedLayouts.slice(0, 3).map(layout => (
                  <button
                    key={layout.id}
                    onClick={() => {
                      applyLayout(layout.id)
                      alert(`Loaded: ${layout.name}`)
                    }}
                    className="px-2 py-1 rounded border flex items-center gap-1 text-xs hover:bg-accent"
                  >
                    <FolderOpen className="w-3 h-3" />
                    {layout.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1">
        <Grid id="primitives-demo" defaultLayout={blocks}>
          <Block id="main">
            <BlockContent>
              <CurrentViewComponent viewId={mainViewType} blockId="main" />
            </BlockContent>
          </Block>
        </Grid>
      </div>

      {/* Info Footer */}
      <div className="border-t p-4 bg-muted/30 text-xs">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <strong>ViewRegistry:</strong> {registry.count} views registered
          </div>
          <div>
            <strong>CommandService:</strong> {commandService.count} commands available
          </div>
          <div>
            <strong>LayoutService:</strong> {layoutService.layoutCount} workspaces saved
          </div>
        </div>
      </div>
    </div>
  )
}

// Service Container Component
export function ServiceContainer({ children }: { children: React.ReactNode }) {
  return (
    <ViewRegistryProvider>
      <CommandServiceProvider enableKeyboardShortcuts={true}>
        <LayoutServiceProvider initialViewTypes={{ main: 'text' }}>
          {children}
        </LayoutServiceProvider>
      </CommandServiceProvider>
    </ViewRegistryProvider>
  )
}

export default function PrimitivesDemo() {
  return (
    <ServiceContainer>
      <PrimitivesDemoInternal />
    </ServiceContainer>
  )
}
