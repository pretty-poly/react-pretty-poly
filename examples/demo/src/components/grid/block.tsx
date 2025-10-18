import { forwardRef, useMemo } from 'react'
import type { BlockProps } from "@/lib/grid-types"
import { cn } from "@/lib/utils"
import { useGridContext, useGridState, useGridActions } from "@/components/grid/grid-provider"
import { useGridMode } from "@/hooks/use-grid-mode"
import { BlockContent } from "@/components/grid/block-content"
import { BlockHeader } from "@/components/grid/block-header"
import { BlockFooter } from "@/components/grid/block-footer"
import { BlockToolbar } from "@/components/grid/block-toolbar"
import { BlockTabs } from "@/components/grid/block-tabs"
import { BlockSidebar } from "@/components/grid/block-sidebar"
import { BlockSidebarItem } from "@/components/grid/block-sidebar-item"
import { BlockSidebarSpacer } from "@/components/grid/block-sidebar-spacer"
import { BlockLayout } from "@/components/grid/block-layout"

/**
 * Block component for grid layouts
 */
export const Block = forwardRef<HTMLDivElement, BlockProps>(
  ({
    id,
    type = 'block',
    direction = 'row',
    children,
    className,
    divider,
    noDivider,
    'aria-label': ariaLabel
  }, ref) => {
    const { gridId } = useGridContext()
    const state = useGridState()
    const { collapseBlock, expandBlock } = useGridActions()
    const { supportsFeature } = useGridMode()

    // Get block configuration from state
    const blockConfig = state?.blocks[id]

    // Calculate collapsed state
    const isCollapsed = useMemo(() => {
      if (blockConfig?.collapsible && blockConfig.collapseAt) {
        const currentSize = blockConfig.size ?? blockConfig.defaultSize ?? 0
        return currentSize <= blockConfig.collapseAt
      }
      return false
    }, [blockConfig])

    // Handle double-click for collapse/expand
    const handleDoubleClick = () => {
      if (blockConfig?.collapsible && blockConfig.collapseAt) {
        const currentSize = blockConfig.size ?? blockConfig.defaultSize ?? 0
        const isCollapsed = currentSize <= blockConfig.collapseAt
        if (isCollapsed) {
          expandBlock(id)
        } else {
          collapseBlock(id)
        }
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles - simple grid item that fills its space
          'relative',
          'w-full h-full',
          'overflow-hidden',
          'transition-opacity duration-150',
          isCollapsed && 'opacity-70',
          className
        )}
        data-grid-id={gridId}
        data-block-id={id}
        data-block-type={type}
        data-block-direction={direction}
        data-block-size-default={blockConfig?.defaultSize}
        data-block-size-unit={blockConfig?.sizeUnit}
        data-block-size-min={blockConfig?.minSize}
        data-block-size-max={blockConfig?.maxSize}
        data-block-resizable={blockConfig?.resizable !== false}
        data-block-collapse-at={blockConfig?.collapseAt}
        data-block-collapse-to={blockConfig?.collapseTo}
        data-block-divider-position={blockConfig?.dividerPosition}
        data-block-divider-size={blockConfig?.dividerSize}
        data-block-divider={divider !== undefined ? JSON.stringify(divider) : undefined}
        data-block-no-divider={noDivider}
        aria-label={ariaLabel}
        role={type === 'group' ? 'group' : undefined}
        tabIndex={supportsFeature('resizing') ? 0 : undefined}
        onDoubleClick={supportsFeature('collapse') ? handleDoubleClick : undefined}
      >
        {children}
      </div>
    )
  }
)

Block.displayName = 'Block'

/**
 * Block.Group component for nested layouts
 */
export const BlockGroup = forwardRef<HTMLDivElement, BlockProps>(
  (props, ref) => {
    return <Block ref={ref} {...props} type="group" />
  }
)

BlockGroup.displayName = 'Block.Group'

// Add all sub-components as properties of Block
Object.assign(Block, {
  Group: BlockGroup,
  Layout: BlockLayout,
  Header: BlockHeader,
  Content: BlockContent,
  Footer: BlockFooter,
  Toolbar: BlockToolbar,
  Tabs: BlockTabs,
  Sidebar: BlockSidebar
})

// Add nested sidebar components
Object.assign(BlockSidebar, {
  Item: BlockSidebarItem,
  Spacer: BlockSidebarSpacer
})