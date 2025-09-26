import React from 'react'
import { Grid, Block, Divider } from '../src'
import type { BlockConfig } from '../src'

/**
 * Basic grid example demonstrating resizable layout
 */

const basicLayout: BlockConfig[] = [
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0
  },
  {
    id: 'sidebar',
    type: 'block',
    defaultSize: 300,
    minSize: 200,
    maxSize: 500,
    sizeUnit: 'px',
    dividerPosition: 'end',
    collapsible: true,
    collapseAt: 250,
    collapseTo: 50,
    parentId: 'root',
    order: 0
  },
  {
    id: 'main',
    type: 'block',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'root',
    order: 1
  }
]

const BasicGridExample: React.FC = () => {
  return (
    <div style={{ height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Grid
        defaultLayout={basicLayout}
        persist="localStorage"
        persistKey="basic-example"
        onLayoutChange={(blocks) => {
          console.log('Layout changed:', blocks)
        }}
        onModeChange={(newMode, oldMode) => {
          console.log('Mode changed:', oldMode, '->', newMode)
        }}
        className="h-full border"
      >
        {/* Sidebar */}
        <Block
          id="sidebar"
          className="bg-gray-100 p-4 border-r"
          desktop={{
            defaultSize: 300,
            minSize: 200,
            maxSize: 500,
            collapsible: true
          }}
          mobile={{
            icon: ({ className }: { className?: string }) => (
              <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ),
            label: "Menu",
            dockOrder: 1
          }}
        >
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="block p-2 hover:bg-gray-200 rounded">Dashboard</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-200 rounded">Projects</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-200 rounded">Settings</a></li>
            </ul>
          </nav>
        </Block>

        {/* Divider between sidebar and main */}
        <Divider
          targetId="sidebar"
          position="end"
          className="hover:bg-blue-200 transition-colors"
        />

        {/* Main content */}
        <Block
          id="main"
          className="bg-white p-6"
          desktop={{ sizingMode: "fill" }}
          mobile={{
            icon: ({ className }: { className?: string }) => (
              <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ),
            label: "Content",
            dockOrder: 2
          }}
        >
          <h1 className="text-2xl font-bold mb-6">Main Content</h1>
          <p className="text-gray-600 mb-4">
            This is a basic example of the PrettyPoly grid system. You can:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Drag the divider to resize the sidebar</li>
            <li>Double-click the sidebar to collapse/expand it</li>
            <li>Use keyboard shortcuts (Ctrl+Arrow keys) to resize</li>
            <li>The layout automatically saves to localStorage</li>
            <li>Resize the window to see responsive behavior</li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Try these interactions:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Drag the vertical divider</li>
              <li>• Double-click the sidebar to collapse</li>
              <li>• Focus the sidebar and use Ctrl+← → to resize</li>
              <li>• Resize window to see mobile dock mode</li>
            </ul>
          </div>
        </Block>
      </Grid>
    </div>
  )
}

export default BasicGridExample