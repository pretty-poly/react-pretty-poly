import { forwardRef } from 'react'
import { clsx } from 'clsx'

export type SidebarPosition = 'left' | 'right'

export interface BlockSidebarProps {
  position?: SidebarPosition
  width?: number
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * BlockSidebar component for VS Code-style vertical icon bars
 * Creates a fixed-width vertical navigation sidebar within a block
 */
export const BlockSidebar = forwardRef<HTMLDivElement, BlockSidebarProps>(
  ({ position = 'left', width = 48, className, children, 'aria-label': ariaLabel }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'pretty-poly-block-sidebar',
          'flex flex-col',
          'flex-shrink-0', // Don't shrink
          'h-full', // Full height
          'bg-gray-800', // VS Code-style dark background
          'border-gray-700', // Border color
          position === 'left' ? 'border-r' : 'border-l', // Border on appropriate side
          position === 'right' && 'order-last', // Move to right if specified
          className
        )}
        style={{ width: `${width}px` }}
        data-sidebar-position={position}
        data-sidebar-width={width}
        aria-label={ariaLabel || 'Sidebar navigation'}
        role="navigation"
      >
        {children}
      </div>
    )
  }
)

BlockSidebar.displayName = 'Block.Sidebar'
