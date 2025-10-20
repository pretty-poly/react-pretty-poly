export interface BlockSplitContainerProps {
    blockId: string;
    children: React.ReactNode;
    label?: React.ReactNode;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    showSplitButtons?: boolean;
    splitButtonLabels?: {
        vertical?: string;
        horizontal?: string;
    };
    splitButtonIcons?: {
        vertical?: React.ComponentType<{
            className?: string;
        }>;
        horizontal?: React.ComponentType<{
            className?: string;
        }>;
    };
    onBeforeSplit?: (direction: 'horizontal' | 'vertical') => boolean | void;
    className?: string;
    toolbarClassName?: string;
    contentClassName?: string;
    renderToolbar?: (props: ToolbarRenderProps) => React.ReactNode;
    'aria-label'?: string;
}
export interface ToolbarRenderProps {
    blockId: string;
    canSplitVertical: boolean;
    canSplitHorizontal: boolean;
    handleSplitVertical: () => void;
    handleSplitHorizontal: () => void;
    label?: React.ReactNode;
    icon?: React.ComponentType<{
        className?: string;
    }>;
}
/**
 * Container component for splittable block groups
 *
 * Provides the essential structure for blocks that can be split:
 * - Toolbar with split controls
 * - Content area for child blocks
 * - Proper data attributes for divider positioning
 *
 * @example
 * ```tsx
 * <BlockSplitContainer
 *   blockId="editor-area"
 *   label="Editor"
 *   icon={FileIcon}
 * >
 *   {children}
 * </BlockSplitContainer>
 * ```
 */
export declare const BlockSplitContainer: import('react').ForwardRefExoticComponent<BlockSplitContainerProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BlockSplitContainer.d.ts.map