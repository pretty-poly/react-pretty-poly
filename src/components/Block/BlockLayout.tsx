import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface BlockLayoutProps {
  direction?: 'row' | 'column'
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * BlockLayout component provides flex container for structured block content
 * Use this to wrap BlockHeader, BlockContent, BlockFooter, and BlockSidebar components
 */
export const BlockLayout = forwardRef<HTMLDivElement, BlockLayoutProps>(
  ({ direction = 'column', className, children, 'aria-label': ariaLabel }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pretty-poly-block-layout',
          // Fill parent block completely
          'w-full h-full',
          // Flex container for structured children
          'flex',
          direction === 'column' ? 'flex-col' : 'flex-row',
          // Allow flex children to shrink below content size
          'min-h-0 min-w-0',
          // Stretch to fill grid area
          'self-stretch',
          className
        )}
        aria-label={ariaLabel}
      >
        {children}
      </div>
    )
  }
)

BlockLayout.displayName = 'Block.Layout'
