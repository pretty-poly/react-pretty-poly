import { useGridState } from "@/components/grid/grid-provider"
import { BlockSplitContainer } from "@/components/grid/block-split-container"
import type { BlockSplitContainerProps } from "@/components/grid/block-split-container"
import type { BlockConfig } from "@/lib/grid-types"

export interface BlockTreeRendererProps {
  /**
   * The ID of the block to render (typically start with "root")
   */
  blockId: string

  /**
   * Function to render leaf blocks (blocks without children)
   * @param block - The block configuration
   * @param blockId - The ID of the block
   * @returns React node to render for this leaf block
   */
  renderBlock?: (block: BlockConfig, blockId: string) => React.ReactNode

  /**
   * Function to get props for BlockSplitContainer
   * @param block - The block configuration
   * @param blockId - The ID of the block
   * @returns Props to pass to BlockSplitContainer
   */
  getSplitContainerProps?: (
    block: BlockConfig,
    blockId: string
  ) => Partial<BlockSplitContainerProps>

  /**
   * Custom renderer for split containers
   * If provided, this replaces the default BlockSplitContainer
   */
  renderSplitContainer?: (
    blockId: string,
    block: BlockConfig,
    children: React.ReactNode
  ) => React.ReactNode

  /**
   * Custom renderer for regular group containers
   * If provided, this replaces the default group div
   */
  renderGroup?: (
    blockId: string,
    block: BlockConfig,
    children: React.ReactNode
  ) => React.ReactNode

  /**
   * Class name for the root element
   */
  className?: string
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
export function BlockTreeRenderer({
  blockId,
  renderBlock,
  getSplitContainerProps,
  renderSplitContainer,
  renderGroup,
  className
}: BlockTreeRendererProps): React.ReactElement | null {
  const state = useGridState()

  if (!state || !state.blocks) {
    return null
  }

  const block = state.blocks[blockId]

  if (!block) {
    return null
  }

  // Recursively render children
  const renderChildren = () => {
    if (!block.children || block.children.length === 0) {
      return null
    }

    return (
      <>
        {block.children.map((childId) => (
          <BlockTreeRenderer
            key={childId}
            blockId={childId}
            renderBlock={renderBlock}
            getSplitContainerProps={getSplitContainerProps}
            renderSplitContainer={renderSplitContainer}
            renderGroup={renderGroup}
          />
        ))}
      </>
    )
  }

  // Case 1: Group with hasToolbar → Split Container
  if (block.type === 'group' && block.hasToolbar) {
    const children = renderChildren()

    // Use custom split container renderer if provided
    if (renderSplitContainer) {
      return <>{renderSplitContainer(blockId, block, children)}</>
    }

    // Get props for BlockSplitContainer
    const splitContainerProps = getSplitContainerProps
      ? getSplitContainerProps(block, blockId)
      : {}

    return (
      <BlockSplitContainer
        blockId={blockId}
        className={className}
        {...splitContainerProps}
      >
        {children}
      </BlockSplitContainer>
    )
  }

  // Case 2: Regular group (no toolbar) → Just render children (Grid handles CSS)
  if (block.type === 'group' && block.children) {
    const children = renderChildren()

    // Use custom group renderer if provided
    if (renderGroup) {
      return <>{renderGroup(blockId, block, children)}</>
    }

    // Don't wrap in a div - Grid component already handles the parent container
    // and generates CSS Grid styles via selectors like [data-block-id="root"]
    return <>{children}</>
  }

  // Case 3: Leaf block → Use renderBlock prop
  if (renderBlock) {
    return <>{renderBlock(block, blockId)}</>
  }

  // Fallback: render basic block wrapper
  return (
    <div
      data-block-id={blockId}
      data-block-type="block"
      className={className || 'relative w-full h-full'}
    >
      <div className="p-4 text-muted-foreground">
        Block &quot;{blockId}&quot; - No render function provided
      </div>
    </div>
  )
}

BlockTreeRenderer.displayName = 'BlockTreeRenderer'
