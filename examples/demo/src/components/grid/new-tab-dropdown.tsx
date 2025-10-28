import { useState, useRef, useEffect } from 'react'
import { useViewRegistry } from '@pretty-poly/react'
import { useGridContext } from './grid-provider'
import type { ViewDescriptor } from '@pretty-poly/react'
import { cn } from '@/lib/utils'

/**
 * NewTabDropdown - Button with dropdown menu to create new tabs from registered views
 */
export interface NewTabDropdownProps {
  blockId: string
  label?: string
  className?: string
  onTabCreated?: (tabId: string) => void
}

export function NewTabDropdown({
  blockId,
  label = '+',
  className,
  onTabCreated,
}: NewTabDropdownProps) {
  const registry = useViewRegistry()
  const { openTab } = useGridContext()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const allViews = registry.getAllViews(true)
  const categories = registry.getCategories()
  const hasCategories = categories.length > 0

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleCreateTab = (view: ViewDescriptor) => {
    const Icon = view.icon

    const tabId = openTab(blockId, {
      label: view.title,
      icon: Icon,
      viewType: view.id,
      viewState: {},
      closable: true,
    })

    setIsOpen(false)
    onTabCreated?.(tabId)
  }

  const viewsByCategory = hasCategories
    ? categories.map(category => ({
        category,
        views: registry.getViewsByCategory(category),
      }))
    : [{ category: undefined, views: allViews }]

  const nonEmptyCategories = viewsByCategory.filter(group => group.views.length > 0)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'px-2 py-1 text-sm font-medium rounded hover:bg-accent transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          className
        )}
        aria-label="Create new tab"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {label}
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-full right-0 mt-1 min-w-[200px] max-h-[400px]',
            'bg-popover border rounded-md shadow-md overflow-y-auto z-50'
          )}
          role="menu"
          aria-orientation="vertical"
        >
          {nonEmptyCategories.length === 0 ? (
            <div className="px-3 py-2 text-sm text-muted-foreground text-center">
              No views registered
            </div>
          ) : (
            nonEmptyCategories.map((group, groupIndex) => (
              <div key={group.category || 'uncategorized'}>
                {group.category && (
                  <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide border-b">
                    {group.category}
                  </div>
                )}
                <div className={group.category ? 'py-1' : ''}>
                  {group.views.map(view => {
                    const Icon = view.icon
                    return (
                      <button
                        key={view.id}
                        onClick={() => handleCreateTab(view)}
                        className={cn(
                          'w-full px-3 py-2 text-left text-sm',
                          'hover:bg-accent transition-colors',
                          'focus:outline-none focus:bg-accent',
                          'flex items-center gap-2'
                        )}
                        role="menuitem"
                      >
                        {Icon && (
                          <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        )}
                        <span className="flex-1">{view.title}</span>
                      </button>
                    )
                  })}
                </div>
                {groupIndex < nonEmptyCategories.length - 1 && (
                  <div className="border-t" />
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
