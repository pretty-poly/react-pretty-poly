import { BlockSplitContainerProps } from './BlockSplitContainer';
import { BlockConfig } from '../../types';

export interface BlockTreeRendererProps {
    /**
     * The ID of the block to render (typically start with "root")
     */
    blockId: string;
    /**
     * Function to render leaf blocks (blocks without children)
     * @param block - The block configuration
     * @param blockId - The ID of the block
     * @returns React node to render for this leaf block
     */
    renderBlock?: (block: BlockConfig, blockId: string) => React.ReactNode;
    /**
     * Function to get props for BlockSplitContainer
     * @param block - The block configuration
     * @param blockId - The ID of the block
     * @returns Props to pass to BlockSplitContainer
     */
    getSplitContainerProps?: (block: BlockConfig, blockId: string) => Partial<BlockSplitContainerProps>;
    /**
     * Custom renderer for split containers
     * If provided, this replaces the default BlockSplitContainer
     */
    renderSplitContainer?: (blockId: string, block: BlockConfig, children: React.ReactNode) => React.ReactNode;
    /**
     * Custom renderer for regular group containers
     * If provided, this replaces the default group div
     */
    renderGroup?: (blockId: string, block: BlockConfig, children: React.ReactNode) => React.ReactNode;
    /**
     * Class name for the root element
     */
    className?: string;
}
/**
 * Recursive block tree renderer
 *
 * Handles the complex logic of rendering a block hierarchy:
 * - Groups with `hasToolbar` are rendered as BlockSplitContainer
 * - Regular groups are rendered with required data attributes
 * - Leaf blocks are rendered using the provided renderBlock function
 * - Automatically handles recursive rendering of children
 *
 * @example
 * ```tsx
 * <BlockTreeRenderer
 *   blockId="root"
 *   renderBlock={(block, blockId) => {
 *     if (block.viewType === "editor") return <EditorPane blockId={blockId} />
 *     if (block.viewType === "terminal") return <TerminalPane blockId={blockId} />
 *     return <DefaultPane blockId={blockId} />
 *   }}
 *   getSplitContainerProps={(block, blockId) => ({
 *     label: blockId === "editor-area" ? "Editor" : "Terminal",
 *     icon: blockId === "editor-area" ? FileIcon : TerminalIcon
 *   })}
 * />
 * ```
 */
export declare function BlockTreeRenderer({ blockId, renderBlock, getSplitContainerProps, renderSplitContainer, renderGroup, className }: BlockTreeRendererProps): React.ReactElement | null;
export declare namespace BlockTreeRenderer {
    var displayName: string;
}
//# sourceMappingURL=BlockTreeRenderer.d.ts.map