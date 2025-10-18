/**
 * Command Service Demo
 *
 * Demonstrates Pretty Poly 2.0's CommandService primitive:
 * - Declarative command registration
 * - Keyboard shortcuts
 * - Command execution from UI
 * - Command palette for discovery
 *
 * This shows how commands provide a unified way to handle actions!
 */

import React, { useState } from 'react'
import {
  Grid,
  Block,
  BlockContent,
  BlockHeader,
  BlockToolbar,
  CommandServiceProvider,
  useCommandService,
  useRegisterCommands,
  useCommands,
  type BlockConfig,
  type Command,
} from '@pretty-poly/react'
import {
  Maximize2,
  Minimize2,
  RefreshCw,
  Zap,
  Keyboard,
  Search,
  X,
} from 'lucide-react'

// ============================================================================
// Demo State
// ============================================================================

interface DemoState {
  counter: number
  lastAction: string
  sidebarVisible: boolean
  notifications: string[]
}

// ============================================================================
// Command Palette Component
// ============================================================================

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const commandService = useCommandService()
  const allCommands = useCommands()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCommands = allCommands.filter(cmd => {
    const query = searchQuery.toLowerCase()
    return (
      cmd.title?.toLowerCase().includes(query) ||
      cmd.id.toLowerCase().includes(query) ||
      cmd.description?.toLowerCase().includes(query)
    )
  })

  const handleExecute = (commandId: string) => {
    commandService.executeCommand(commandId)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50"
      onClick={onClose}
    >
      <div
        className="bg-background border rounded-lg shadow-lg w-full max-w-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-2 p-3 border-b">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-accent rounded"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-96 overflow-auto">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm">
              No commands found
            </div>
          ) : (
            filteredCommands.map(command => {
              const Icon = command.icon
              return (
                <button
                  key={command.id}
                  onClick={() => handleExecute(command.id)}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent text-left transition-colors"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{command.title || command.id}</div>
                    {command.description && (
                      <div className="text-xs text-muted-foreground">
                        {command.description}
                      </div>
                    )}
                  </div>
                  {command.keybinding && (
                    <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                      {command.keybinding}
                    </div>
                  )}
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Main Demo Component
// ============================================================================

function CommandServiceDemoInternal() {
  const [state, setState] = useState<DemoState>({
    counter: 0,
    lastAction: 'None',
    sidebarVisible: true,
    notifications: [],
  })

  const [paletteOpen, setPaletteOpen] = useState(false)

  const addNotification = (message: string) => {
    setState(prev => ({
      ...prev,
      notifications: [...prev.notifications.slice(-4), message],
    }))
  }

  // Define all commands
  const commands: Command[] = [
    {
      id: 'demo.increment',
      title: 'Increment Counter',
      description: 'Increase the counter by 1',
      category: 'Counter',
      icon: Zap,
      keybinding: 'Ctrl+I',
      handler: () => {
        setState(prev => ({ ...prev, counter: prev.counter + 1, lastAction: 'Incremented' }))
        addNotification('Counter incremented!')
      },
    },
    {
      id: 'demo.decrement',
      title: 'Decrement Counter',
      description: 'Decrease the counter by 1',
      category: 'Counter',
      icon: Zap,
      keybinding: 'Ctrl+D',
      handler: () => {
        setState(prev => ({ ...prev, counter: prev.counter - 1, lastAction: 'Decremented' }))
        addNotification('Counter decremented!')
      },
    },
    {
      id: 'demo.reset',
      title: 'Reset Counter',
      description: 'Reset counter to zero',
      category: 'Counter',
      icon: RefreshCw,
      keybinding: 'Ctrl+R',
      handler: () => {
        setState(prev => ({ ...prev, counter: 0, lastAction: 'Reset' }))
        addNotification('Counter reset to 0!')
      },
    },
    {
      id: 'demo.toggleSidebar',
      title: 'Toggle Sidebar',
      description: 'Show or hide the sidebar',
      category: 'View',
      icon: state.sidebarVisible ? Minimize2 : Maximize2,
      keybinding: 'Ctrl+B',
      handler: () => {
        setState(prev => {
          const newVisible = !prev.sidebarVisible
          return {
            ...prev,
            sidebarVisible: newVisible,
            lastAction: newVisible ? 'Showed Sidebar' : 'Hid Sidebar',
          }
        })
        addNotification(state.sidebarVisible ? 'Sidebar hidden' : 'Sidebar shown')
      },
    },
    {
      id: 'demo.openPalette',
      title: 'Open Command Palette',
      description: 'Open the command palette to search and execute commands',
      category: 'System',
      icon: Keyboard,
      keybinding: 'Ctrl+P',
      handler: () => {
        setPaletteOpen(true)
        addNotification('Command palette opened')
      },
    },
    {
      id: 'demo.clearNotifications',
      title: 'Clear Notifications',
      description: 'Clear all notification messages',
      category: 'System',
      icon: X,
      keybinding: 'Ctrl+K',
      handler: () => {
        setState(prev => ({ ...prev, notifications: [], lastAction: 'Cleared Notifications' }))
      },
    },
  ]

  // Register commands
  useRegisterCommands(commands)

  // Grid layout
  const blocks: BlockConfig[] = [
    {
      id: 'root',
      type: 'group',
      direction: 'row',
      children: state.sidebarVisible ? ['sidebar', 'main'] : ['main'],
    },
    ...(state.sidebarVisible
      ? [
          {
            id: 'sidebar',
            type: 'block' as const,
            parentId: 'root',
            order: 0,
            defaultSize: 280,
            minSize: 200,
            maxSize: 400,
            sizeUnit: 'px' as const,
          },
        ]
      : []),
    {
      id: 'main',
      type: 'block' as const,
      parentId: 'root',
      order: 1,
      defaultSize: 1,
      sizeUnit: 'fr' as const,
    },
  ]

  return (
    <div className="h-screen flex flex-col">
      {/* Info Banner */}
      <div className="bg-purple-50 dark:bg-purple-950 border-b border-purple-200 dark:border-purple-800 p-4">
        <h1 className="text-xl font-bold mb-2">Command Service Demo (Pretty Poly 2.0)</h1>
        <p className="text-sm text-muted-foreground mb-2">
          This demonstrates the <strong>CommandService</strong> primitive - declarative actions
          with keyboard shortcuts and a command palette for discoverability.
        </p>
        <div className="flex gap-6 text-xs">
          <div>
            <strong>💻 Try this:</strong> Use keyboard shortcuts or the command palette (Ctrl+P)
          </div>
          <div>
            <strong>⌨️ Shortcuts:</strong> Ctrl+I (increment), Ctrl+D (decrement), Ctrl+R (reset),
            Ctrl+B (sidebar), Ctrl+P (palette)
          </div>
        </div>
      </div>

      {/* Grid with Blocks */}
      <div className="flex-1">
        <Grid id="command-demo" defaultLayout={blocks}>
          {state.sidebarVisible && (
            <Block id="sidebar">
              <BlockHeader>
                <BlockToolbar left={<h2 className="text-sm font-semibold">Registered Commands</h2>} />
              </BlockHeader>
              <BlockContent>
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    {commands.map(cmd => {
                      const Icon = cmd.icon
                      return (
                        <div
                          key={cmd.id}
                          className="p-2 border rounded text-sm hover:bg-accent transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {Icon && <Icon className="w-3 h-3" />}
                            <span className="font-medium">{cmd.title}</span>
                          </div>
                          {cmd.keybinding && (
                            <div className="text-xs text-muted-foreground font-mono">
                              {cmd.keybinding}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-xs text-muted-foreground">
                      Total: {commands.length} commands
                    </div>
                  </div>
                </div>
              </BlockContent>
            </Block>
          )}

          <Block id="main">
            <BlockHeader>
              <BlockToolbar
                left={<h2 className="text-sm font-semibold">Interactive Demo</h2>}
                right={
                  <button
                    onClick={() => setPaletteOpen(true)}
                    className="px-2 py-1 text-xs border rounded hover:bg-accent flex items-center gap-1"
                  >
                    <Keyboard className="w-3 h-3" />
                    Command Palette (Ctrl+P)
                  </button>
                }
              />
            </BlockHeader>
            <BlockContent>
              <div className="p-8 space-y-8">
                {/* Counter Display */}
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-6xl font-bold">{state.counter}</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Last Action: {state.lastAction}
                    </div>
                  </div>

                  {/* Command Buttons */}
                  <div className="flex gap-2 justify-center">
                    <CommandButton commandId="demo.increment" />
                    <CommandButton commandId="demo.decrement" />
                    <CommandButton commandId="demo.reset" />
                  </div>
                </div>

                {/* Keyboard Shortcuts Help */}
                <div className="border rounded p-4 bg-muted/50">
                  <h3 className="font-semibold mb-2 text-sm">⌨️ Keyboard Shortcuts</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <kbd className="px-2 py-1 bg-background border rounded text-xs">Ctrl+I</kbd>{' '}
                      Increment
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-background border rounded text-xs">Ctrl+D</kbd>{' '}
                      Decrement
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-background border rounded text-xs">Ctrl+R</kbd>{' '}
                      Reset
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-background border rounded text-xs">Ctrl+B</kbd>{' '}
                      Toggle Sidebar
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-background border rounded text-xs">Ctrl+P</kbd>{' '}
                      Command Palette
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-background border rounded text-xs">Ctrl+K</kbd>{' '}
                      Clear Notifications
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                {state.notifications.length > 0 && (
                  <div className="border rounded p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">Recent Actions</h3>
                      <CommandButton commandId="demo.clearNotifications" variant="ghost" />
                    </div>
                    <div className="space-y-1">
                      {state.notifications.map((notif, i) => (
                        <div key={i} className="text-sm text-muted-foreground">
                          • {notif}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </BlockContent>
          </Block>
        </Grid>
      </div>

      {/* Command Palette */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  )
}

// ============================================================================
// Command Button Helper Component
// ============================================================================

interface CommandButtonProps {
  commandId: string
  variant?: 'default' | 'ghost'
}

function CommandButton({ commandId, variant = 'default' }: CommandButtonProps) {
  const commandService = useCommandService()
  const command = commandService.getCommand(commandId)

  if (!command) return null

  const Icon = command.icon

  return (
    <button
      onClick={() => commandService.executeCommand(commandId)}
      className={
        variant === 'ghost'
          ? 'px-2 py-1 text-xs hover:bg-accent rounded flex items-center gap-1'
          : 'px-4 py-2 border rounded hover:bg-accent flex items-center gap-2'
      }
      title={command.keybinding}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{command.title}</span>
      {command.keybinding && variant === 'default' && (
        <span className="text-xs text-muted-foreground ml-1">({command.keybinding})</span>
      )}
    </button>
  )
}

// ============================================================================
// Wrapper with CommandServiceProvider
// ============================================================================

export function CommandServiceDemoWrapper() {
  return (
    <CommandServiceProvider enableKeyboardShortcuts={true}>
      <CommandServiceDemoInternal />
    </CommandServiceProvider>
  )
}

export default CommandServiceDemoWrapper
