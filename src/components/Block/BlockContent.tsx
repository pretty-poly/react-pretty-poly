import { forwardRef } from 'react'
import { clsx } from 'clsx'

export type ScrollMode = 'vertical' | 'horizontal' | 'both' | 'none'

export interface BlockContentProps {
  scrollMode?: ScrollMode
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * BlockContent component for main scrollable content areas
 * Handles different scrolling behaviors and fills remaining space in block
 */
export const BlockContent = forwardRef<HTMLDivElement, BlockContentProps>(
  ({ scrollMode = 'vertical', className, children, 'aria-label': ariaLabel }, ref) => {
    const scrollClasses = {
      vertical: 'overflow-y-auto overflow-x-hidden',
      horizontal: 'overflow-x-auto overflow-y-hidden',
      both: 'overflow-auto',
      none: 'overflow-hidden'
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'pretty-poly-block-content',
          'flex-1', // Fill remaining space
          'min-h-0', // Allow flex shrinking
          scrollClasses[scrollMode],
          className
        )}
        data-scroll-mode={scrollMode}
        aria-label={ariaLabel}
        role="main"
      >
        {children}
      </div>
    )
  }
)

BlockContent.displayName = 'Block.Content'