import { forwardRef, useState } from 'react'
import { clsx } from 'clsx'

export interface Tab {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  closable?: boolean
  disabled?: boolean
  isDirty?: boolean
  isPinned?: boolean
}

export interface BlockTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
  onTabClose?: (id: string) => void
  className?: string
  'aria-label'?: string
  allowOverflow?: boolean

  // Enhanced features
  showNavigation?: boolean
  onNavigateBack?: () => void
  onNavigateForward?: () => void
  canGoBack?: boolean
  canGoForward?: boolean
  actions?: React.ReactNode
}

/**
 * BlockTabs component for tab bar functionality
 * Supports active state, closable tabs, overflow handling, navigation, and actions
 */
export const BlockTabs = forwardRef<HTMLDivElement, BlockTabsProps>(
  ({
    tabs,
    activeTab,
    onTabChange,
    onTabClose,
    className,
    'aria-label': ariaLabel,
    allowOverflow = true,
    showNavigation = false,
    onNavigateBack,
    onNavigateForward,
    canGoBack = false,
    canGoForward = false,
    actions,
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
          className
        )}
        role="tablist"
        aria-label={ariaLabel || 'Block tabs'}
      >
        {/* Navigation controls */}
        {showNavigation && (
          <div className="flex items-center space-x-1 px-2 border-r border-gray-200 flex-shrink-0">
            <button
              onClick={onNavigateBack}
              disabled={!canGoBack}
              className={clsx(
                'p-1.5 rounded hover:bg-gray-100 transition-colors',
                !canGoBack && 'opacity-30 cursor-not-allowed'
              )}
              aria-label="Navigate back"
              title="Go back"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNavigateForward}
              disabled={!canGoForward}
              className={clsx(
                'p-1.5 rounded hover:bg-gray-100 transition-colors',
                !canGoForward && 'opacity-30 cursor-not-allowed'
              )}
              aria-label="Navigate forward"
              title="Go forward"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Tabs container */}
        <div className={clsx(
          'flex items-center min-w-0 flex-1',
          allowOverflow ? 'overflow-x-auto' : 'overflow-x-hidden'
        )}>
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
                  tab.isPinned && 'bg-gray-100',
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
                data-tab-dirty={tab.isDirty}
                data-tab-pinned={tab.isPinned}
              >
                {/* Pin indicator */}
                {tab.isPinned && (
                  <svg
                    className="w-3 h-3 flex-shrink-0 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-label="Pinned"
                  >
                    <title>Pinned</title>
                    <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1h-2z" />
                  </svg>
                )}

                {/* Tab icon */}
                {Icon && (
                  <Icon className="w-4 h-4 flex-shrink-0" />
                )}

                {/* Tab label */}
                <span className="truncate min-w-0">
                  {tab.label}
                </span>

                {/* Dirty indicator */}
                {tab.isDirty && (
                  <div
                    className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"
                    title="Unsaved changes"
                    aria-label="Has unsaved changes"
                  />
                )}

                {/* Close button */}
                {tab.closable && onTabClose && !tab.isPinned && (
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

        {/* Actions section */}
        {actions && (
          <div className="flex items-center space-x-2 px-2 border-l border-gray-200 flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    )
  }
)

BlockTabs.displayName = 'Block.Tabs'
