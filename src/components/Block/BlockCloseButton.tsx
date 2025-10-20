import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface BlockCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Optional icon component to display (e.g., lucide-react X icon)
   * If not provided, a simple × character is used
   */
  icon?: React.ComponentType<{ className?: string }>

  /**
   * Size variant for the button
   * @default 'sm'
   */
  size?: 'xs' | 'sm' | 'md'
}

/**
 * Close button component for removing blocks/panes
 *
 * Designed for use with BlockToolbar's `right` section to provide
 * VS Code-style close functionality for split panes.
 *
 * @example
 * ```tsx
 * import { X } from 'lucide-react'
 *
 * <BlockToolbar
 *   left={<h2>Pane Title</h2>}
 *   right={
 *     <BlockCloseButton
 *       icon={X}
 *       onClick={() => removeBlock(blockId)}
 *       title="Close (Ctrl+W)"
 *     />
 *   }
 * />
 * ```
 */
export const BlockCloseButton = forwardRef<HTMLButtonElement, BlockCloseButtonProps>(
  (
    {
      icon: Icon,
      size = 'sm',
      className,
      title = 'Close',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'h-5 w-5 p-0.5',
      sm: 'h-6 w-6 p-1',
      md: 'h-7 w-7 p-1.5',
    }

    const iconSizeClasses = {
      xs: 'w-3 h-3',
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
    }

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'pretty-poly-block-close-button',
          'inline-flex items-center justify-center',
          'rounded',
          'text-muted-foreground',
          'hover:bg-accent hover:text-accent-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          sizeClasses[size],
          className
        )}
        title={title}
        aria-label={title}
        {...props}
      >
        {Icon ? (
          <Icon className={iconSizeClasses[size]} />
        ) : (
          <span className="text-base leading-none">×</span>
        )}
      </button>
    )
  }
)

BlockCloseButton.displayName = 'BlockCloseButton'
