import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface BlockToolbarProps {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
  className?: string
  'aria-label'?: string
}

/**
 * BlockToolbar component for standardized toolbar layouts
 * Provides left, center, and right sections with proper spacing
 */
export const BlockToolbar = forwardRef<HTMLDivElement, BlockToolbarProps>(
  ({ left, center, right, className, 'aria-label': ariaLabel }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pretty-poly-block-toolbar',
          'flex items-center justify-between',
          'w-full px-3 py-2', // Standard padding
          'border-b', // Shadcn border uses default border color
          'bg-muted', // Shadcn background
          className
        )}
        aria-label={ariaLabel || 'Toolbar'}
        role="toolbar"
      >
        {/* Left section */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {left}
        </div>

        {/* Center section */}
        <div className="flex items-center justify-center flex-1 px-4">
          {center}
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {right}
        </div>
      </div>
    )
  }
)

BlockToolbar.displayName = 'Block.Toolbar'