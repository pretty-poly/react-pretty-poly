import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export type HeaderPosition = 'top' | 'bottom'

export interface BlockHeaderProps {
  position?: HeaderPosition
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * BlockHeader component for fixed header/toolbar areas
 * Does not scroll with content, stays in fixed position
 */
export const BlockHeader = forwardRef<HTMLDivElement, BlockHeaderProps>(
  ({ position = 'top', className, children, 'aria-label': ariaLabel }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pretty-poly-block-header',
          'flex-shrink-0', // Don't shrink
          'flex flex-row items-center', // Default to horizontal layout
          'min-h-0', // Allow content to determine height
          position === 'bottom' && 'order-last', // Move to bottom if specified
          className
        )}
        data-header-position={position}
        aria-label={ariaLabel}
        role="banner"
      >
        {children}
      </div>
    )
  }
)

BlockHeader.displayName = 'Block.Header'