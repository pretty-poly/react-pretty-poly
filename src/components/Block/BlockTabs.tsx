import { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import { clsx } from 'clsx'
import type { Tab } from '../../types'

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
    const [showScrollControls, setShowScrollControls] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const tabsContainerRef = useRef<HTMLDivElement>(null)

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

    // Check if tabs overflow and update scroll button states
    const updateScrollState = useCallback(() => {
      const container = tabsContainerRef.current
      if (!container) return

      const hasOverflow = container.scrollWidth > container.clientWidth
      setShowScrollControls(hasOverflow && allowOverflow)

      if (hasOverflow) {
        const scrollLeft = container.scrollLeft
        const maxScroll = container.scrollWidth - container.clientWidth

        setCanScrollLeft(scrollLeft > 1) // Small threshold for floating point
        setCanScrollRight(scrollLeft < maxScroll - 1)
      } else {
        setCanScrollLeft(false)
        setCanScrollRight(false)
      }
    }, [allowOverflow])

    // Scroll tabs left/right
    const scrollTabs = useCallback((direction: 'left' | 'right') => {
      const container = tabsContainerRef.current
      if (!container) return

      const scrollAmount = 200 // Scroll by 200px
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }, [])

    // Set up scroll and resize observers
    useEffect(() => {
      const container = tabsContainerRef.current
      if (!container) return

      // Initial check
      updateScrollState()

      // Listen for scroll events
      container.addEventListener('scroll', updateScrollState)

      // Listen for resize events
      const resizeObserver = new ResizeObserver(updateScrollState)
      resizeObserver.observe(container)

      return () => {
        container.removeEventListener('scroll', updateScrollState)
        resizeObserver.disconnect()
      }
    }, [updateScrollState])

    // Re-check when tabs change
    useEffect(() => {
      updateScrollState()
    }, [tabs, updateScrollState])

    return (
      <div
        ref={ref}
        className={clsx(
          'pretty-poly-block-tabs',
          'flex items-center',
          'border-b border-border',
          'bg-card',
          className
        )}
        role="tablist"
        aria-label={ariaLabel || 'Block tabs'}
      >
        {/* Navigation controls */}
        {showNavigation && (
          <div className="flex items-center space-x-1 px-2 border-r border-border flex-shrink-0">
            <button
              onClick={onNavigateBack}
              disabled={!canGoBack}
              className={clsx(
                'p-1.5 rounded hover:bg-accent transition-colors',
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
                'p-1.5 rounded hover:bg-accent transition-colors',
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

        {/* Scroll left button */}
        {showScrollControls && (
          <button
            onClick={() => scrollTabs('left')}
            disabled={!canScrollLeft}
            className={clsx(
              'flex-shrink-0 p-1.5 hover:bg-accent transition-colors',
              !canScrollLeft && 'opacity-30 cursor-not-allowed'
            )}
            aria-label="Scroll tabs left"
            title="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Tabs container */}
        <div
          ref={tabsContainerRef}
          className={clsx(
            'flex items-center min-w-0 flex-1 relative',
            allowOverflow ? 'overflow-x-auto' : 'overflow-x-hidden',
            // Hide scrollbar for cleaner look
            '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
          )}
        >
          {/* Left gradient overlay */}
          {showScrollControls && canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-card to-transparent z-10" />
          )}

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
                    ? 'border-primary text-primary bg-accent'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-accent',
                  tab.disabled && 'opacity-50 cursor-not-allowed',
                  tab.isPinned && 'bg-accent/50',
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
                    className="w-3 h-3 flex-shrink-0 text-muted-foreground"
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
                    className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                    title="Unsaved changes"
                    aria-label="Has unsaved changes"
                  />
                )}

                {/* Close button */}
                {tab.closable && onTabClose && !tab.isPinned && (
                  <button
                    className={clsx(
                      'flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted',
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

          {/* Right gradient overlay */}
          {showScrollControls && canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-card to-transparent z-10" />
          )}
        </div>

        {/* Scroll right button */}
        {showScrollControls && (
          <button
            onClick={() => scrollTabs('right')}
            disabled={!canScrollRight}
            className={clsx(
              'flex-shrink-0 p-1.5 hover:bg-accent transition-colors',
              !canScrollRight && 'opacity-30 cursor-not-allowed'
            )}
            aria-label="Scroll tabs right"
            title="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Actions section */}
        {actions && (
          <div className="flex items-center space-x-2 px-2 border-l border-border flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    )
  }
)

BlockTabs.displayName = 'Block.Tabs'