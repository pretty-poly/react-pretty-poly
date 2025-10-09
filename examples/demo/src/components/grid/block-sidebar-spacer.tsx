import { forwardRef } from 'react'
import { clsx } from 'clsx'

export interface BlockSidebarSpacerProps {
  className?: string
}

/**
 * BlockSidebarSpacer component for flexible spacing in sidebars
 * Pushes subsequent items to the bottom of the sidebar
 */
export const BlockSidebarSpacer = forwardRef<HTMLDivElement, BlockSidebarSpacerProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'pretty-poly-sidebar-spacer',
          'flex-1', // Takes up all available space
          'min-h-2', // Minimum height to ensure visibility
          className
        )}
        role="separator"
        aria-hidden="true"
      />
    )
  }
)

BlockSidebarSpacer.displayName = 'Block.Sidebar.Spacer'
