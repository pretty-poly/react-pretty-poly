import { createContext, useContext, useState, useEffect, useCallback } from 'react'

/**
 * Describes a command that can be executed
 * Commands provide a declarative way to define actions that can be:
 * - Executed programmatically
 * - Triggered by keyboard shortcuts
 * - Displayed in menus/toolbars
 * - Shown in a command palette
 */
export interface Command {
  /** Unique identifier for this command */
  id: string

  /** Handler function to execute when command is triggered */
  handler: (...args: unknown[]) => Promise<unknown> | void

  /** Display title for menus/palette */
  title?: string

  /** Category for organization */
  category?: string

  /** Icon component */
  icon?: React.ComponentType<{ className?: string }>

  /** Keyboard shortcut (e.g., 'Ctrl+B', 'Cmd+Shift+P') */
  keybinding?: string

  /** Context expression for conditional availability (future feature) */
  when?: string

  /** Description for tooltips/help */
  description?: string
}

/**
 * Result of command execution
 */
export interface CommandExecutionResult {
  success: boolean
  error?: Error
  result?: unknown
}

/**
 * CommandService manages command registration and execution
 * Provides a centralized command system for the application
 */
export class CommandService {
  private commands = new Map<string, Command>()
  private executionListeners = new Map<string, Set<(result: unknown) => void>>()
  private registrationListeners = new Set<() => void>()
  private keybindingMap = new Map<string, string>() // normalized key -> command id

  /**
   * Register a new command
   * @returns Disposable function to unregister the command
   */
  registerCommand(command: Command): () => void {
    if (this.commands.has(command.id)) {
      console.warn(`Command "${command.id}" is already registered. Overwriting.`)
    }

    this.commands.set(command.id, command)

    // Register keybinding if provided
    if (command.keybinding) {
      const normalizedKey = this.normalizeKeybinding(command.keybinding)
      this.keybindingMap.set(normalizedKey, command.id)
    }

    this.notifyRegistrationChange()

    // Return disposable
    return () => {
      this.commands.delete(command.id)
      if (command.keybinding) {
        const normalizedKey = this.normalizeKeybinding(command.keybinding)
        this.keybindingMap.delete(normalizedKey)
      }
      this.notifyRegistrationChange()
    }
  }

  /**
   * Register multiple commands at once
   * @returns Disposable function to unregister all commands
   */
  registerCommands(commands: Command[]): () => void {
    const disposables = commands.map(c => this.registerCommand(c))
    return () => disposables.forEach(dispose => dispose())
  }

  /**
   * Execute a command by ID
   */
  async executeCommand(id: string, ...args: unknown[]): Promise<CommandExecutionResult> {
    const command = this.commands.get(id)

    if (!command) {
      console.warn(`Command not found: ${id}`)
      return { success: false, error: new Error(`Command not found: ${id}`) }
    }

    try {
      const result = await command.handler(...args)
      this.notifyExecution(id, result)
      return { success: true, result }
    } catch (error) {
      console.error(`Error executing command ${id}:`, error)
      return { success: false, error: error as Error }
    }
  }

  /**
   * Get a specific command by ID
   */
  getCommand(id: string): Command | undefined {
    return this.commands.get(id)
  }

  /**
   * Get all registered commands, optionally sorted by category and title
   */
  getAllCommands(sorted = true): Command[] {
    const commands = Array.from(this.commands.values())

    if (sorted) {
      return commands.sort((a, b) => {
        // Sort by category first, then by title
        const catA = a.category || ''
        const catB = b.category || ''
        if (catA !== catB) return catA.localeCompare(catB)

        const titleA = a.title || a.id
        const titleB = b.title || b.id
        return titleA.localeCompare(titleB)
      })
    }

    return commands
  }

  /**
   * Get commands filtered by category
   */
  getCommandsByCategory(category: string): Command[] {
    return this.getAllCommands().filter(c => c.category === category)
  }

  /**
   * Get all unique categories
   */
  getCategories(): string[] {
    const categories = new Set<string>()
    this.commands.forEach(command => {
      if (command.category) {
        categories.add(command.category)
      }
    })
    return Array.from(categories).sort()
  }

  /**
   * Check if a command exists
   */
  hasCommand(id: string): boolean {
    return this.commands.has(id)
  }

  /**
   * Subscribe to command execution events
   * @returns Unsubscribe function
   */
  onDidExecuteCommand(commandId: string, listener: (result: unknown) => void): () => void {
    if (!this.executionListeners.has(commandId)) {
      this.executionListeners.set(commandId, new Set())
    }
    this.executionListeners.get(commandId)!.add(listener)

    return () => {
      this.executionListeners.get(commandId)?.delete(listener)
    }
  }

  /**
   * Subscribe to command registration changes
   * @returns Unsubscribe function
   */
  onDidChangeCommands(listener: () => void): () => void {
    this.registrationListeners.add(listener)
    return () => this.registrationListeners.delete(listener)
  }

  /**
   * Handle keyboard event and execute matching command
   * Returns true if a command was executed
   */
  handleKeyboardEvent(event: KeyboardEvent): boolean {
    const normalizedKey = this.normalizeKeyboardEvent(event)
    const commandId = this.keybindingMap.get(normalizedKey)

    if (commandId) {
      event.preventDefault()
      event.stopPropagation()
      void this.executeCommand(commandId).catch((error: unknown) => {
        console.error(`Error executing command ${commandId}:`, error)
      })
      return true
    }

    return false
  }

  /**
   * Get count of registered commands
   */
  get count(): number {
    return this.commands.size
  }

  /**
   * Clear all registered commands
   */
  clear(): void {
    this.commands.clear()
    this.keybindingMap.clear()
    this.notifyRegistrationChange()
  }

  /**
   * Normalize a keybinding string to a canonical format
   * e.g., 'Ctrl+B' -> 'ctrl+b', 'Cmd+Shift+P' -> 'meta+shift+p'
   */
  private normalizeKeybinding(keybinding: string): string {
    return keybinding
      .toLowerCase()
      .replace('cmd', 'meta')
      .replace('command', 'meta')
      .split('+')
      .map(k => k.trim())
      .sort()
      .join('+')
  }

  /**
   * Convert a keyboard event to normalized key string
   */
  private normalizeKeyboardEvent(event: KeyboardEvent): string {
    const parts: string[] = []

    if (event.ctrlKey) parts.push('ctrl')
    if (event.altKey) parts.push('alt')
    if (event.shiftKey) parts.push('shift')
    if (event.metaKey) parts.push('meta')

    // Add the key itself (lowercase)
    const key = event.key.toLowerCase()
    if (key !== 'control' && key !== 'alt' && key !== 'shift' && key !== 'meta') {
      parts.push(key)
    }

    return parts.sort().join('+')
  }

  private notifyExecution(commandId: string, result: unknown): void {
    this.executionListeners.get(commandId)?.forEach(listener => listener(result))
  }

  private notifyRegistrationChange(): void {
    this.registrationListeners.forEach(listener => listener())
  }
}

/**
 * React Context for CommandService
 */
const CommandServiceContext = createContext<CommandService | null>(null)

/**
 * Hook to access the CommandService
 * @throws Error if used outside CommandServiceProvider
 */
export function useCommandService(): CommandService {
  const service = useContext(CommandServiceContext)
  if (!service) {
    throw new Error('useCommandService must be used within CommandServiceProvider')
  }
  return service
}

/**
 * Hook to access a specific command
 */
export function useCommand(commandId: string): Command | undefined {
  const service = useCommandService()
  const [command, setCommand] = useState(() => service.getCommand(commandId))

  useEffect(() => {
    const updateCommand = () => {
      setCommand(service.getCommand(commandId))
    }

    const unsubscribe = service.onDidChangeCommands(updateCommand)
    return unsubscribe
  }, [service, commandId])

  return command
}

/**
 * Hook to get all commands with automatic updates
 */
export function useCommands(options?: {
  category?: string
  sorted?: boolean
}): Command[] {
  const service = useCommandService()
  const [commands, setCommands] = useState(() => {
    if (options?.category) {
      return service.getCommandsByCategory(options.category)
    }
    return service.getAllCommands(options?.sorted ?? true)
  })

  useEffect(() => {
    const updateCommands = () => {
      if (options?.category) {
        setCommands(service.getCommandsByCategory(options.category))
      } else {
        setCommands(service.getAllCommands(options?.sorted ?? true))
      }
    }

    const unsubscribe = service.onDidChangeCommands(updateCommands)
    return unsubscribe
  }, [service, options?.category, options?.sorted])

  return commands
}

/**
 * Hook to execute a command
 * Returns a memoized callback that executes the command
 */
export function useExecuteCommand(commandId: string): (...args: unknown[]) => Promise<CommandExecutionResult> {
  const service = useCommandService()

  return useCallback(
    (...args: unknown[]) => service.executeCommand(commandId, ...args),
    [service, commandId]
  )
}

/**
 * Hook to register commands on component mount
 * Automatically unregisters when component unmounts
 */
export function useRegisterCommands(commands: Command[]): void {
  const service = useCommandService()

  useEffect(() => {
    const dispose = service.registerCommands(commands)
    return dispose
  }, [service, commands])
}

/**
 * Hook to register a single command on component mount
 */
export function useRegisterCommand(command: Command): void {
  const service = useCommandService()

  useEffect(() => {
    const dispose = service.registerCommand(command)
    return dispose
  }, [service, command])
}

/**
 * Hook to set up global keyboard shortcut handling
 * Should be used once at the app root level
 */
export function useCommandKeyboardShortcuts(enabled = true): void {
  const service = useCommandService()

  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      service.handleKeyboardEvent(event)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [service, enabled])
}

/**
 * Provider component for CommandService
 */
export interface CommandServiceProviderProps {
  children: React.ReactNode
  /** Optional pre-configured service instance */
  service?: CommandService
  /** Enable global keyboard shortcuts */
  enableKeyboardShortcuts?: boolean
}

export function CommandServiceProvider({
  children,
  service: providedService,
  enableKeyboardShortcuts = true,
}: CommandServiceProviderProps) {
  const [service] = useState(() => providedService ?? new CommandService())

  // Set up global keyboard shortcuts directly (can't use the hook here since we're in the provider)
  useEffect(() => {
    if (!enableKeyboardShortcuts) return

    const handleKeyDown = (event: KeyboardEvent) => {
      service.handleKeyboardEvent(event)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [service, enableKeyboardShortcuts])

  return (
    <CommandServiceContext.Provider value={service}>
      {children}
    </CommandServiceContext.Provider>
  )
}
