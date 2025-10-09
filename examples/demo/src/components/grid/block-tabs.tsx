import { forwardRef, useState } from 'react'
import { clsx } from 'clsx'

export interface Tab {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  closable?: boolean
  disabled?: boolean
}

export interface BlockTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
  onTabClose?: (id: string) => void
  className?: string
  'aria-label'?: string
  allowOverflow?: boolean
}

/**
 * BlockTabs component for tab bar functionality
 * Supports active state, closable tabs, and overflow handling
 */
export const BlockTabs = forwardRef<HTMLDivElement, BlockTabsProps>(
  ({
    tabs,
    activeTab,
    onTabChange,
    onTabClose,
    className,
    'aria-label': ariaLabel,
    allowOverflow = true
  }, ref) => {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null)

    const handleTabClick = (tab: Tab, event: React.MouseEvent) => {
      event.preventDefault()
      if (!tab.disabled) {
        onTabChange(tab.id)
      }
    }

    const handleTabClose = (tab: Tab, event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (onTabClose && tab.closable) {
        onTabClose(tab.id)
      }
    }

    const handleKeyDown = (tab: Tab, event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        if (!tab.disabled) {
          onTabChange(tab.id)
        }
      }
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'pretty-poly-block-tabs',
          'flex items-center',
          'border-b border-gray-200',
          'bg-white',
          allowOverflow ? 'overflow-x-auto' : 'overflow-x-hidden',
          className
        )}
        role="tablist"
        aria-label={ariaLabel || 'Block tabs'}
      >
        <div className="flex items-center min-w-0">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab
            const isHovered = hoveredTab === tab.id
            const Icon = tab.icon

            return (
              <div
                key={tab.id}
                className={clsx(
                  'flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer',
                  'border-b-2 transition-colors duration-150',
                  'min-w-0 flex-shrink-0', // Prevent shrinking
                  isActive
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50',
                  tab.disabled && 'opacity-50 cursor-not-allowed',
                  !allowOverflow && 'flex-1' // Equal width tabs when overflow disabled
                )}
                role="tab"
                aria-selected={isActive}
                aria-disabled={tab.disabled}
                tabIndex={tab.disabled ? -1 : 0}
                onClick={(e) => handleTabClick(tab, e)}
                onKeyDown={(e) => handleKeyDown(tab, e)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                data-tab-id={tab.id}
              >
                {/* Tab icon */}
                {Icon && (
                  <Icon className="w-4 h-4 flex-shrink-0" />
                )}

                {/* Tab label */}
                <span className="truncate min-w-0">
                  {tab.label}
                </span>

                {/* Close button */}
                {tab.closable && onTabClose && (
                  <button
                    className={clsx(
                      'flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200',
                      'flex items-center justify-center',
                      'transition-colors duration-150',
                      isHovered || isActive ? 'opacity-100' : 'opacity-0'
                    )}
                    onClick={(e) => handleTabClose(tab, e)}
                    aria-label={`Close ${tab.label} tab`}
                    tabIndex={-1}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)

BlockTabs.displayName = 'Block.Tabs'
