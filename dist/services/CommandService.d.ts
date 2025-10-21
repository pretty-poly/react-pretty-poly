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
    id: string;
    /** Handler function to execute when command is triggered */
    handler: (...args: unknown[]) => Promise<unknown> | void;
    /** Display title for menus/palette */
    title?: string;
    /** Category for organization */
    category?: string;
    /** Icon component */
    icon?: React.ComponentType<{
        className?: string;
    }>;
    /** Keyboard shortcut (e.g., 'Ctrl+B', 'Cmd+Shift+P') */
    keybinding?: string;
    /** Context expression for conditional availability (future feature) */
    when?: string;
    /** Description for tooltips/help */
    description?: string;
}
/**
 * Result of command execution
 */
export interface CommandExecutionResult {
    success: boolean;
    error?: Error;
    result?: unknown;
}
/**
 * CommandService manages command registration and execution
 * Provides a centralized command system for the application
 */
export declare class CommandService {
    private commands;
    private executionListeners;
    private registrationListeners;
    private keybindingMap;
    /**
     * Register a new command
     * @returns Disposable function to unregister the command
     */
    registerCommand(command: Command): () => void;
    /**
     * Register multiple commands at once
     * @returns Disposable function to unregister all commands
     */
    registerCommands(commands: Command[]): () => void;
    /**
     * Execute a command by ID
     */
    executeCommand(id: string, ...args: unknown[]): Promise<CommandExecutionResult>;
    /**
     * Get a specific command by ID
     */
    getCommand(id: string): Command | undefined;
    /**
     * Get all registered commands, optionally sorted by category and title
     */
    getAllCommands(sorted?: boolean): Command[];
    /**
     * Get commands filtered by category
     */
    getCommandsByCategory(category: string): Command[];
    /**
     * Get all unique categories
     */
    getCategories(): string[];
    /**
     * Check if a command exists
     */
    hasCommand(id: string): boolean;
    /**
     * Subscribe to command execution events
     * @returns Unsubscribe function
     */
    onDidExecuteCommand(commandId: string, listener: (result: unknown) => void): () => void;
    /**
     * Subscribe to command registration changes
     * @returns Unsubscribe function
     */
    onDidChangeCommands(listener: () => void): () => void;
    /**
     * Handle keyboard event and execute matching command
     * Returns true if a command was executed
     */
    handleKeyboardEvent(event: KeyboardEvent): boolean;
    /**
     * Get count of registered commands
     */
    get count(): number;
    /**
     * Clear all registered commands
     */
    clear(): void;
    /**
     * Normalize a keybinding string to a canonical format
     * e.g., 'Ctrl+B' -> 'ctrl+b', 'Cmd+Shift+P' -> 'meta+shift+p'
     */
    private normalizeKeybinding;
    /**
     * Convert a keyboard event to normalized key string
     */
    private normalizeKeyboardEvent;
    private notifyExecution;
    private notifyRegistrationChange;
}
/**
 * Hook to access the CommandService
 * @throws Error if used outside CommandServiceProvider
 */
export declare function useCommandService(): CommandService;
/**
 * Hook to access a specific command
 */
export declare function useCommand(commandId: string): Command | undefined;
/**
 * Hook to get all commands with automatic updates
 */
export declare function useCommands(options?: {
    category?: string;
    sorted?: boolean;
}): Command[];
/**
 * Hook to execute a command
 * Returns a memoized callback that executes the command
 */
export declare function useExecuteCommand(commandId: string): (...args: unknown[]) => Promise<CommandExecutionResult>;
/**
 * Hook to register commands on component mount
 * Automatically unregisters when component unmounts
 */
export declare function useRegisterCommands(commands: Command[]): void;
/**
 * Hook to register a single command on component mount
 */
export declare function useRegisterCommand(command: Command): void;
/**
 * Hook to set up global keyboard shortcut handling
 * Should be used once at the app root level
 */
export declare function useCommandKeyboardShortcuts(enabled?: boolean): void;
/**
 * Provider component for CommandService
 */
export interface CommandServiceProviderProps {
    children: React.ReactNode;
    /** Optional pre-configured service instance */
    service?: CommandService;
    /** Enable global keyboard shortcuts */
    enableKeyboardShortcuts?: boolean;
}
export declare function CommandServiceProvider({ children, service: providedService, enableKeyboardShortcuts, }: CommandServiceProviderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CommandService.d.ts.map