/**
 * NewTabDropdown - Button with dropdown menu to create new tabs from registered views
 *
 * Features:
 * - Lists all views from ViewRegistry
 * - Groups views by category
 * - Creates new tab with selected view type
 * - Shows view icons if available
 * - Keyboard accessible
 *
 * @example
 * ```tsx
 * <NewTabDropdown blockId="editor-block" />
 * ```
 */
export interface NewTabDropdownProps {
    /** ID of the block to add tabs to */
    blockId: string;
    /** Custom label for the button (default: "+") */
    label?: string;
    /** Custom className for the button */
    className?: string;
    /** Callback when tab is created */
    onTabCreated?: (tabId: string) => void;
}
export declare function NewTabDropdown({ blockId, label, className, onTabCreated, }: NewTabDropdownProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NewTabDropdown.d.ts.map