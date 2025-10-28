import { useGridContext } from '../components/Grid/GridProvider'
import type { Tab } from '../types'

/**
 * Hook for managing tabs within a block
 * Provides a clean API for tab operations
 */
export function useBlockTabs(blockId: string) {
  const context = useGridContext()

  if (!context) {
    throw new Error('useBlockTabs must be used within a GridProvider')
  }

  const {
    state,
    openTab,
    closeTab,
    setActiveTab,
    updateTab,
    reorderTabs,
    navigateTabHistory,
  } = context

  const block = state.blocks[blockId]
  const tabState = block?.tabState
  const tabConfig = block?.tabConfig

  // Derived state
  const tabs = tabState?.tabs ?? []
  const activeTabId = tabState?.activeTabId
  const activeTab = tabs.find(t => t.id === activeTabId)
  const history = tabState?.history ?? []
  const historyIndex = tabState?.historyIndex ?? 0
  const canGoBack = historyIndex > 0
  const canGoForward = historyIndex < history.length - 1

  // Check if tabs are enabled for this block
  const isEnabled = tabConfig?.enabled ?? false

  // Check if we can add more tabs
  const canAddTab = () => {
    if (!isEnabled || !tabConfig?.allowMultiple) return false
    if (tabConfig.maxTabs && tabs.length >= tabConfig.maxTabs) return false
    return true
  }

  // Wrapper functions that bind blockId
  const boundOpenTab = (tab: Omit<Tab, 'id'>) => {
    if (!canAddTab()) {
      console.warn(`Cannot add tab to block ${blockId}: maximum tabs reached or multiple tabs not allowed`)
      return null
    }
    return openTab(blockId, tab)
  }

  const boundCloseTab = (tabId: string) => {
    // Check for dirty state and confirmation if configured
    const tab = tabs.find(t => t.id === tabId)
    if (tab?.isDirty && tabConfig?.closeConfirmation) {
      const shouldClose = window.confirm(`Tab "${tab.label}" has unsaved changes. Close anyway?`)
      if (!shouldClose) return
    }

    // Don't close pinned tabs unless explicitly requested
    if (tab?.isPinned) {
      const shouldClose = window.confirm(`Tab "${tab.label}" is pinned. Close anyway?`)
      if (!shouldClose) return
    }

    closeTab(blockId, tabId)
  }

  const boundSetActiveTab = (tabId: string) => {
    setActiveTab(blockId, tabId)
  }

  const boundUpdateTab = (tabId: string, updates: Partial<Tab>) => {
    updateTab(blockId, tabId, updates)
  }

  const boundReorderTabs = (fromIndex: number, toIndex: number) => {
    reorderTabs(blockId, fromIndex, toIndex)
  }

  const boundNavigateHistory = (direction: 'forward' | 'back') => {
    navigateTabHistory(blockId, direction)
  }

  // Convenience functions
  const closeAllTabs = () => {
    tabs.forEach(tab => {
      if (!tab.isPinned) {
        closeTab(blockId, tab.id)
      }
    })
  }

  const closeOtherTabs = (tabId: string) => {
    tabs.forEach(tab => {
      if (tab.id !== tabId && !tab.isPinned) {
        closeTab(blockId, tab.id)
      }
    })
  }

  const closeTabsToRight = (tabId: string) => {
    const tabIndex = tabs.findIndex(t => t.id === tabId)
    if (tabIndex === -1) return

    tabs.slice(tabIndex + 1).forEach(tab => {
      if (!tab.isPinned) {
        closeTab(blockId, tab.id)
      }
    })
  }

  const closeTabsToLeft = (tabId: string) => {
    const tabIndex = tabs.findIndex(t => t.id === tabId)
    if (tabIndex === -1) return

    tabs.slice(0, tabIndex).forEach(tab => {
      if (!tab.isPinned) {
        closeTab(blockId, tab.id)
      }
    })
  }

  const togglePin = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId)
    if (!tab) return

    boundUpdateTab(tabId, { isPinned: !tab.isPinned })
  }

  const markDirty = (tabId: string, isDirty = true) => {
    boundUpdateTab(tabId, { isDirty })
  }

  return {
    // State
    tabs,
    activeTabId,
    activeTab,
    history,
    historyIndex,
    tabState,
    tabConfig,
    isEnabled,

    // Navigation state
    canGoBack,
    canGoForward,
    canAddTab: canAddTab(),

    // Core operations
    openTab: boundOpenTab,
    closeTab: boundCloseTab,
    setActiveTab: boundSetActiveTab,
    updateTab: boundUpdateTab,
    reorderTabs: boundReorderTabs,
    navigateHistory: boundNavigateHistory,

    // Convenience functions
    closeAllTabs,
    closeOtherTabs,
    closeTabsToRight,
    closeTabsToLeft,
    togglePin,
    markDirty,
  }
}
