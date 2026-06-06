import { forwardRef } from 'react'
import { cn } from "@/lib/utils"

export interface BlockFooterProps {
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * BlockFooter component for fixed footer/status bar areas
 * Does not scroll with content, stays at bottom of block
 */
export const BlockFooter = forwardRef<HTMLDivElement, BlockFooterProps>(
  ({ className, children, 'aria-label': ariaLabel }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pretty-poly-block-footer',
          'flex-shrink-0', // Don't shrink
          'flex flex-row items-center', // Default to horizontal layout
          'min-h-0', // Allow content to determine height
          'order-last', // Always at bottom
          className
        )}
        aria-label={ariaLabel}
        role="contentinfo"
      >
        {children}
      </div>
    )
  }
)

BlockFooter.displayName = 'Block.Footer'