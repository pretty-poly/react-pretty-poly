/**
 * Under-review helper integration demo.
 *
 * This shows the optional helper source that is being reviewed separately from
 * the stable grid-system registry item.
 */

import React from 'react'
import { Grid } from '@/components/grid/grid'
import { Block } from '@/components/grid/block'
import { BlockContent } from '@/components/grid/block-content'
import {
  ViewRegistryProvider,
  useViewRegistry,
  type ViewDescriptor,
  type ViewProps,
} from '@/lib/view-registry'
import {
  CommandServiceProvider,
  useCommandService,
  useRegisterCommands,
  type Command,
} from '@/lib/command-service'
import {
  LayoutServiceProvider,
  useLayoutService,
  useSetBlockViewType,
  useBlockViewType,
  useSaveLayout,
  useApplyLayout,
  useLayouts,
} from '@/lib/layout-service'
import type { BlockConfig } from '@/lib/grid-types'
import { FileText, Image, Video, Music, Save, FolderOpen, Sparkles } from 'lucide-react'

// Simple view components
const TextView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full">
    <div className="text-center">
      <FileText className="w-16 h-16 mx-auto mb-4 text-blue-500" />
      <h2 className="text-2xl font-bold">Text View</h2>
      <p className="text-muted-foreground mt-2">Use the controls below to switch views.</p>
    </div>
  </div>
)

const ImageView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
    <div className="text-center">
      <Image className="w-16 h-16 mx-auto mb-4 text-purple-500" />
      <h2 className="text-2xl font-bold">Image View</h2>
      <p className="text-muted-foreground mt-2">Use the controls below to switch views.</p>
    </div>
  </div>
)

const VideoView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
    <div className="text-center">
      <Video className="w-16 h-16 mx-auto mb-4 text-cyan-500" />
      <h2 className="text-2xl font-bold">Video View</h2>
      <p className="text-muted-foreground mt-2">Use the controls below to switch views.</p>
    </div>
  </div>
)

const MusicView: React.FC<ViewProps> = () => (
  <div className="p-8 flex items-center justify-center h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
    <div className="text-center">
      <Music className="w-16 h-16 mx-auto mb-4 text-green-500" />
      <h2 className="text-2xl font-bold">Music View</h2>
      <p className="text-muted-foreground mt-2">Use the controls below to switch views.</p>
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

  // Register actions that use the layout helper to change views
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
          Under-review Helper Integration
        </h1>
        <p className="text-sm opacity-90 mb-3">
          Combined view lookup, action helper, and saved layout helper source.
        </p>
        <div className="flex gap-4 text-xs">
          <div className="bg-white/20 px-3 py-1 rounded">
            <strong>Optional shortcuts:</strong> Ctrl+0 (Text), Ctrl+1 (Image), Ctrl+2 (Video), Ctrl+3 (Music), Ctrl+S (Save)
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
                  onClick={() => {
                    void commandService.executeCommand(`view.switchTo${view.title}`).catch((error: unknown) => {
                      console.error('Failed to switch view:', error)
                    })
                  }}
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
              onClick={() => {
                void commandService.executeCommand('workspace.save').catch((error: unknown) => {
                  console.error('Failed to save workspace:', error)
                })
              }}
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
        <Grid defaultLayout={blocks}>
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
            <strong>View lookup:</strong> {registry.count} views registered
          </div>
          <div>
            <strong>Action helper:</strong> {commandService.count} actions available
          </div>
          <div>
            <strong>Layout helper:</strong> {layoutService.layoutCount} workspaces saved
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
