import React from 'react'
import { Grid, Block, Divider } from '../src'
import type { BlockConfig, ResponsiveModes } from '../src/types'

/**
 * Comprehensive example showcasing all features:
 * - Responsive modes
 * - Nested layouts
 * - Different size units
 * - Collapse/expand
 * - Persistence
 */

const comprehensiveLayout: BlockConfig[] = [
  // Root container
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0
  },

  // Left sidebar
  {
    id: 'sidebar',
    type: 'block',
    defaultSize: 280,
    minSize: 200,
    maxSize: 400,
    sizeUnit: 'px',
    dividerPosition: 'end',
    collapsible: true,
    collapseAt: 220,
    collapseTo: 48,
    parentId: 'root',
    order: 0
  },

  // Main content area (nested)
  {
    id: 'main-container',
    type: 'group',
    direction: 'column',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'root',
    order: 1
  },

  // Header within main
  {
    id: 'header',
    type: 'block',
    defaultSize: 60,
    sizeUnit: 'px',
    dividerPosition: 'end',
    parentId: 'main-container',
    order: 0
  },

  // Content area (nested horizontally)
  {
    id: 'content-container',
    type: 'group',
    direction: 'row',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'main-container',
    order: 1
  },

  // Main content
  {
    id: 'content',
    type: 'block',
    defaultSize: 2,
    sizeUnit: 'fr',
    dividerPosition: 'end',
    parentId: 'content-container',
    order: 0
  },

  // Right panel
  {
    id: 'right-panel',
    type: 'block',
    defaultSize: 1,
    sizeUnit: 'fr',
    minSize: 200,
    collapsible: true,
    collapseAt: 250,
    collapseTo: 0,
    parentId: 'content-container',
    order: 1
  }
]

const customModes: ResponsiveModes = {
  mobile: {
    type: 'dock',
    breakpoint: 0,
    maxWidth: 767
  },
  tablet: {
    type: 'tabs',
    breakpoint: 768,
    minWidth: 768,
    maxWidth: 1023
  },
  desktop: {
    type: 'grid',
    breakpoint: 1024,
    minWidth: 1024
  }
}

const ComprehensiveExample: React.FC = () => {
  // Could be used for programmatic panel switching in the future
  // const [currentPanel, setCurrentPanel] = useState('content')

  const icons = {
    sidebar: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    content: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    rightPanel: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }

  return (
    <div style={{ height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Grid
        defaultLayout={comprehensiveLayout}
        modes={customModes}
        persist="localStorage"
        persistKey="comprehensive-example"
        onLayoutChange={(blocks) => {
          console.log('Layout changed:', blocks)
        }}
        onModeChange={(newMode, oldMode) => {
          console.log('Mode changed:', oldMode, '->', newMode)
        }}
        className="h-full bg-gray-50"
      >
        {/* Sidebar */}
        <Block
          id="sidebar"
          className="bg-slate-800 text-white"
          desktop={{
            className: "border-r border-gray-300"
          }}
          mobile={{
            icon: icons.sidebar,
            label: "Menu",
            dockOrder: 1
          }}
          tablet={{
            tabLabel: "Navigation"
          }}
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-slate-100">Navigation</h2>
            <nav>
              <ul className="space-y-1">
                <li><button className="w-full text-left p-2 hover:bg-slate-700 rounded text-slate-200">Dashboard</button></li>
                <li><button className="w-full text-left p-2 hover:bg-slate-700 rounded text-slate-200">Projects</button></li>
                <li><button className="w-full text-left p-2 hover:bg-slate-700 rounded text-slate-200">Tasks</button></li>
                <li><button className="w-full text-left p-2 hover:bg-slate-700 rounded text-slate-200">Reports</button></li>
                <li><button className="w-full text-left p-2 hover:bg-slate-700 rounded text-slate-200">Settings</button></li>
              </ul>
            </nav>
          </div>
        </Block>

        {/* Divider after sidebar */}
        <Divider targetId="sidebar" position="end" />

        {/* Header */}
        <Block
          id="header"
          className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"
          mobile={{ hidden: true }}
          tablet={{ hidden: true }}
        >
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12h5v12z" />
              </svg>
            </button>
          </div>
        </Block>

        {/* Divider after header */}
        <Divider targetId="header" position="end" />

        {/* Main Content */}
        <Block
          id="content"
          className="bg-white p-6 overflow-auto"
          mobile={{
            icon: icons.content,
            label: "Content",
            dockOrder: 2
          }}
          tablet={{
            tabLabel: "Content"
          }}
        >
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Main Content Area</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Responsive Features</h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• Desktop: Full resizable grid</li>
                  <li>• Tablet: Tabbed interface</li>
                  <li>• Mobile: Dock navigation</li>
                  <li>• Automatic mode switching</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Layout Features</h3>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• Nested grid containers</li>
                  <li>• Mixed size units (px, fr)</li>
                  <li>• Collapsible panels</li>
                  <li>• Persistent state</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Interactive Demo</h3>
              <div className="space-y-3">
                <p className="text-gray-600">Try these interactions:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800">Desktop Mode:</h4>
                    <ul className="text-gray-600 mt-1 space-y-1">
                      <li>• Drag dividers to resize</li>
                      <li>• Double-click panels to collapse</li>
                      <li>• Use Ctrl+arrows for keyboard resize</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Mobile Mode:</h4>
                    <ul className="text-gray-600 mt-1 space-y-1">
                      <li>• Tap dock icons to switch</li>
                      <li>• Resize window to see mode change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600">
                This comprehensive example demonstrates the full power of the PrettyPoly library.
                The layout automatically adapts based on screen size, providing optimal user
                experience across all devices while maintaining state persistence.
              </p>
            </div>
          </div>
        </Block>

        {/* Divider between content and right panel */}
        <Divider targetId="content" position="end" />

        {/* Right Panel */}
        <Block
          id="right-panel"
          className="bg-gray-50 p-4 border-l border-gray-200 overflow-auto"
          desktop={{
            collapsible: true
          }}
          mobile={{
            icon: icons.rightPanel,
            label: "Details",
            dockOrder: 3
          }}
          tablet={{
            tabLabel: "Details"
          }}
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Details Panel</h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Quick Stats</h4>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Active Projects:</dt>
                  <dd className="font-medium">12</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Completed Tasks:</dt>
                  <dd className="font-medium">47</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Team Members:</dt>
                  <dd className="font-medium">8</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Recent Activity</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Task "Design Review" completed</li>
                <li>• New project "Web Redesign" created</li>
                <li>• Meeting scheduled for tomorrow</li>
                <li>• 3 new team members joined</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Actions</h4>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
                  Create New Project
                </button>
                <button className="w-full text-left px-3 py-2 text-sm bg-green-50 text-green-700 rounded hover:bg-green-100">
                  Generate Report
                </button>
                <button className="w-full text-left px-3 py-2 text-sm bg-purple-50 text-purple-700 rounded hover:bg-purple-100">
                  Invite Team Member
                </button>
              </div>
            </div>
          </div>
        </Block>
      </Grid>
    </div>
  )
}

export default ComprehensiveExample