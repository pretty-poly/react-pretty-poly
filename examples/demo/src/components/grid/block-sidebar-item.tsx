import { forwardRef, useState } from 'react'
import { clsx } from 'clsx'

export interface BlockSidebarItemProps {
  icon: React.ComponentType<{ className?: string }>
  tooltip?: string
  active?: boolean
  disabled?: boolean
  badge?: number | string
  onClick?: () => void
  className?: string
  'aria-label'?: string
}

/**
 * BlockSidebarItem component for individual sidebar items
 * VS Code-style icon buttons with tooltips and active states
 */
export const BlockSidebarItem = forwardRef<HTMLButtonElement, BlockSidebarItemProps>(
  ({
    icon: Icon,
    tooltip,
    active = false,
    disabled = false,
    badge,
    onClick,
    className,
    'aria-label': ariaLabel
  }, ref) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const handleMouseEnter = () => {
      if (tooltip && !disabled) {
        setShowTooltip(true)
      }
    }

    const handleMouseLeave = () => {
      setShowTooltip(false)
    }

    const handleClick = () => {
      if (!disabled && onClick) {
        onClick()
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handleClick()
      }
    }

    return (
      <div className="relative">
        <button
          ref={ref}
          className={clsx(
            'pretty-poly-sidebar-item',
            'w-full h-12', // Fixed height for consistency
            'flex items-center justify-center',
            'relative',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset',
            // Active state
            active && 'bg-accent border-r-2 border-primary',
            // Hover state (when not disabled)
            !disabled && 'hover:bg-accent',
            // Disabled state
            disabled && 'opacity-50 cursor-not-allowed',
            // Default cursor
            !disabled && 'cursor-pointer',
            className
          )}
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label={ariaLabel || tooltip}
          aria-pressed={active}
          tabIndex={disabled ? -1 : 0}
        >
          {/* Icon */}
          <Icon
            className={clsx(
              'w-5 h-5',
              active ? 'text-primary' : 'text-muted-foreground',
              !disabled && 'group-hover:text-foreground'
            )}
          />

          {/* Badge */}
          {badge && (
            <div className="absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1">
              {typeof badge === 'number' && badge > 99 ? '99+' : badge}
            </div>
          )}

          {/* Active indicator */}
          {active && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" />
          )}
        </button>

        {/* Tooltip */}
        {showTooltip && tooltip && (
          <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50">
            <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border">
              {tooltip}
              {/* Tooltip arrow */}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" />
            </div>
          </div>
        )}
      </div>
    )
  }
)

BlockSidebarItem.displayName = 'Block.Sidebar.Item'