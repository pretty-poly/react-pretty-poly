import { useState, useEffect } from 'react'
import { Grid } from '@/components/grid/grid'
import { Block } from '@/components/grid/block'
import { BlockLayout } from '@/components/grid/block-layout'
import { BlockContent } from '@/components/grid/block-content'
import { BlockTabs } from '@/components/grid/block-tabs'
import { File, Plus } from 'lucide-react'

// Simple mock editor view
function EditorView({ content, onChange, isDirty }: {
  content: string
  onChange: (value: string) => void
  isDirty: boolean
}) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        <textarea
          className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none"
          value={content}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start typing..."
        />
      </div>
      {isDirty && (
        <div className="px-4 py-2 bg-yellow-50 border-t border-yellow-200 text-sm text-yellow-800">
          Unsaved changes
        </div>
      )}
    </div>
  )
}

export default function TabbedEditorDemo() {
  // Tab state - start with several tabs to demonstrate scrolling
  const [tabs, setTabs] = useState([
    {
      id: 'tab-1',
      label: 'Welcome.md',
      icon: File,
      closable: true,
      isDirty: false,
      isPinned: false,
      content: '# Welcome\n\nThis is a demo of the tabbed editor interface with scrollable tabs!',
    },
    {
      id: 'tab-2',
      label: 'README.md',
      icon: File,
      closable: true,
      isDirty: false,
      isPinned: true,
      content: '# README\n\nThis tab is pinned.',
    },
    {
      id: 'tab-3',
      label: 'Components.tsx',
      icon: File,
      closable: true,
      isDirty: false,
      isPinned: false,
      content: '// React component code here',
    },
    {
      id: 'tab-4',
      label: 'utils.ts',
      icon: File,
      closable: true,
      isDirty: false,
      isPinned: false,
      content: '// Utility functions',
    },
    {
      id: 'tab-5',
      label: 'styles.css',
      icon: File,
      closable: true,
      isDirty: false,
      isPinned: false,
      content: '/* CSS styles */',
    },
  ])
  const [activeTabId, setActiveTabId] = useState('tab-1')
  const [history, setHistory] = useState(['tab-1'])
  const [historyIndex, setHistoryIndex] = useState(0)

  // Handle tab changes
  const handleTabChange = (tabId: string) => {
    if (tabId === activeTabId) return

    // Add to history
    const newHistory = [...history.slice(0, historyIndex + 1), tabId]
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setActiveTabId(tabId)
  }

  // Handle tab close
  const handleTabClose = (tabId: string) => {
    const tabIndex = tabs.findIndex((t) => t.id === tabId)
    if (tabIndex === -1) return

    const tab = tabs[tabIndex]

    // Confirm if dirty
    if (tab.isDirty) {
      const confirmed = window.confirm(`"${tab.label}" has unsaved changes. Close anyway?`)
      if (!confirmed) return
    }

    // Confirm if pinned
    if (tab.isPinned) {
      const confirmed = window.confirm(`"${tab.label}" is pinned. Close anyway?`)
      if (!confirmed) return
    }

    const newTabs = tabs.filter((t) => t.id !== tabId)
    setTabs(newTabs)

    // Update active tab if closing current
    if (tabId === activeTabId && newTabs.length > 0) {
      const newActiveIndex = tabIndex < newTabs.length ? tabIndex : tabIndex - 1
      setActiveTabId(newTabs[newActiveIndex].id)
    }

    // Update history
    const newHistory = history.filter((id) => id !== tabId)
    setHistory(newHistory)
    setHistoryIndex(Math.max(0, newHistory.length - 1))
  }

  // Navigate history
  const navigateBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setActiveTabId(history[historyIndex - 1])
    }
  }

  const navigateForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setActiveTabId(history[historyIndex + 1])
    }
  }

  // Create new tab
  const createNewTab = () => {
    const newId = `tab-${Date.now()}`
    const newTab = {
      id: newId,
      label: `Untitled-${tabs.length + 1}.md`,
      icon: File,
      closable: true,
      isDirty: false,
      isPinned: false,
      content: '',
    }

    setTabs([...tabs, newTab])
    setActiveTabId(newId)

    // Add to history
    const newHistory = [...history.slice(0, historyIndex + 1), newId]
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  // Update content
  const updateContent = (tabId: string, content: string) => {
    setTabs(tabs.map(tab =>
      tab.id === tabId
        ? { ...tab, content, isDirty: content !== tab.content }
        : tab
    ))
  }

  // Toggle pin
  const togglePin = (tabId: string) => {
    setTabs(tabs.map(tab =>
      tab.id === tabId
        ? { ...tab, isPinned: !tab.isPinned }
        : tab
    ))
  }

  // Keyboard shortcuts for tab switching
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey

      // Ctrl/Cmd + Tab - Next tab
      // Ctrl/Cmd + Shift + Tab - Previous tab
      if (isCtrlOrCmd && e.key === 'Tab') {
        e.preventDefault()

        const currentIndex = tabs.findIndex(t => t.id === activeTabId)
        if (currentIndex === -1) return

        let newIndex: number
        if (e.shiftKey) {
          // Previous tab
          newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
        } else {
          // Next tab
          newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1
        }

        handleTabChange(tabs[newIndex].id)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [tabs, activeTabId])

  const activeTab = tabs.find(t => t.id === activeTabId)

  return (
    <div className="h-screen w-screen bg-gray-50 overflow-hidden">
      <Grid
        defaultLayout={[
          {
            id: 'root',
            type: 'block',
            direction: 'column',
            defaultSize: 1,
            sizeUnit: 'fr',
          },
        ]}
      >
        <Block id="root">
          <BlockLayout direction="column">
            {/* Tab bar */}
            <BlockTabs
              tabs={tabs}
              activeTab={activeTabId}
              onTabChange={handleTabChange}
              onTabClose={handleTabClose}
              showNavigation={true}
              onNavigateBack={navigateBack}
              onNavigateForward={navigateForward}
              canGoBack={historyIndex > 0}
              canGoForward={historyIndex < history.length - 1}
              allowOverflow={true}
              actions={
                <button
                  onClick={createNewTab}
                  className="p-1.5 rounded hover:bg-gray-200 transition-colors"
                  title="New file"
                >
                  <Plus className="w-4 h-4" />
                </button>
              }
            />

            {/* Editor content */}
            <BlockContent scrollMode="vertical">
              {activeTab ? (
                <EditorView
                  content={activeTab.content}
                  onChange={(content) => updateContent(activeTab.id, content)}
                  isDirty={activeTab.isDirty}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <File className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>No file open</p>
                    <button
                      onClick={createNewTab}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Create new file
                    </button>
                  </div>
                </div>
              )}
            </BlockContent>

            {/* Status bar */}
            <div className="px-4 py-2 bg-gray-100 border-t border-gray-200 text-sm text-gray-600 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span>
                  {tabs.length} {tabs.length === 1 ? 'file' : 'files'} open
                </span>
                {activeTab && (
                  <>
                    <span className="text-gray-400">|</span>
                    <button
                      onClick={() => togglePin(activeTab.id)}
                      className="hover:text-gray-800 transition-colors"
                    >
                      {activeTab.isPinned ? 'Unpin' : 'Pin'} this file
                    </button>
                  </>
                )}
              </div>
              <div className="text-gray-400">
                Pretty Poly Tabbed Editor Demo
              </div>
            </div>
          </BlockLayout>
        </Block>
      </Grid>
    </div>
  )
}
