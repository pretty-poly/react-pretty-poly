import React, { useState } from 'react'
import { Grid } from '@/components/grid/grid'
import { Block, BlockGroup } from '@/components/grid/block'
import { BlockLayout } from '@/components/grid/block-layout'
import { BlockContent } from '@/components/grid/block-content'
import { BlockHeader } from '@/components/grid/block-header'
import type { BlockConfig } from '@/lib/grid-types'
import { Folder, File, Code, Terminal as TerminalIcon, Settings } from 'lucide-react'

const ideLayout: BlockConfig[] = [
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0
  },
  {
    id: 'file-tree',
    type: 'block',
    defaultSize: 250,
    minSize: 200,
    maxSize: 400,
    sizeUnit: 'px',
    parentId: 'root',
    order: 0
  },
  {
    id: 'editor-area',
    type: 'group',
    direction: 'column',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'root',
    order: 1
  },
  {
    id: 'editor',
    type: 'block',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'editor-area',
    order: 0
  },
  {
    id: 'terminal',
    type: 'block',
    defaultSize: 300,
    minSize: 150,
    maxSize: 600,
    sizeUnit: 'px',
    parentId: 'editor-area',
    order: 1
  },
  {
    id: 'properties',
    type: 'block',
    defaultSize: 300,
    minSize: 250,
    maxSize: 450,
    sizeUnit: 'px',
    parentId: 'root',
    order: 2
  }
]

interface CodeFile {
  id: string
  name: string
  type: 'file' | 'folder'
  path: string
  language: string
  size: string
  lines: number
  modified: boolean
  content: { line: number; text: string; color?: string }[]
}

const codeFiles: CodeFile[] = [
  {
    id: 'index',
    name: 'index.ts',
    type: 'file',
    path: 'src/index.ts',
    language: 'TypeScript',
    size: '0.8 KB',
    lines: 24,
    modified: false,
    content: [
      { line: 1, text: "import React from 'react'", color: 'purple' },
      { line: 2, text: "import ReactDOM from 'react-dom/client'", color: 'purple' },
      { line: 3, text: "import { App } from './App'", color: 'purple' },
      { line: 4, text: "import './index.css'", color: 'purple' },
      { line: 5, text: '' },
      { line: 6, text: "const root = ReactDOM.createRoot(", color: 'blue' },
      { line: 7, text: "  document.getElementById('root') as HTMLElement", color: 'slate' },
      { line: 8, text: ')', color: 'blue' },
      { line: 9, text: '' },
      { line: 10, text: 'root.render(', color: 'blue' },
      { line: 11, text: '  <React.StrictMode>', color: 'blue' },
      { line: 12, text: '    <App />', color: 'blue' },
      { line: 13, text: '  </React.StrictMode>', color: 'blue' },
      { line: 14, text: ')', color: 'blue' }
    ]
  },
  {
    id: 'app',
    name: 'App.tsx',
    type: 'file',
    path: 'src/App.tsx',
    language: 'TypeScript React',
    size: '1.5 KB',
    lines: 52,
    modified: false,
    content: [
      { line: 1, text: "import { useState } from 'react'", color: 'purple' },
      { line: 2, text: "import { Grid, Block } from '@pretty-poly/react'", color: 'purple' },
      { line: 3, text: "import './App.css'", color: 'purple' },
      { line: 4, text: '' },
      { line: 5, text: 'export function App() {', color: 'purple' },
      { line: 6, text: '  const [count, setCount] = useState(0)', color: 'blue' },
      { line: 7, text: '' },
      { line: 8, text: '  return (', color: 'purple' },
      { line: 9, text: '    <div className="app">', color: 'blue' },
      { line: 10, text: '      <h1>Welcome to React</h1>', color: 'blue' },
      { line: 11, text: '      <button onClick={() => setCount(count + 1)}>', color: 'blue' },
      { line: 12, text: '        Count: {count}', color: 'green' },
      { line: 13, text: '      </button>', color: 'blue' },
      { line: 14, text: '    </div>', color: 'blue' },
      { line: 15, text: '  )', color: 'purple' },
      { line: 16, text: '}', color: 'purple' }
    ]
  },
  {
    id: 'components',
    name: 'components.tsx',
    type: 'file',
    path: 'src/components.tsx',
    language: 'TypeScript React',
    size: '1.2 KB',
    lines: 45,
    modified: true,
    content: [
      { line: 1, text: "import React from 'react'", color: 'purple' },
      { line: 2, text: "import { Grid, Block } from '@pretty-poly/react'", color: 'purple' },
      { line: 3, text: '' },
      { line: 4, text: 'export function MyComponent() {', color: 'purple' },
      { line: 5, text: '  return (', color: 'purple' },
      { line: 6, text: '    <Grid className="h-dvh">', color: 'blue' },
      { line: 7, text: '      <Block>', color: 'blue' },
      { line: 8, text: '        Content goes here', color: 'slate' },
      { line: 9, text: '      </Block>', color: 'blue' },
      { line: 10, text: '    </Grid>', color: 'blue' },
      { line: 11, text: '  )', color: 'purple' },
      { line: 12, text: '}', color: 'purple' }
    ]
  }
]

const IDELayout: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<CodeFile>(codeFiles[2])

  const getColorClass = (color?: string) => {
    switch (color) {
      case 'purple': return 'text-purple-400'
      case 'blue': return 'text-blue-400'
      case 'green': return 'text-green-400'
      case 'yellow': return 'text-yellow-400'
      case 'slate': return 'text-slate-400'
      default: return 'text-slate-300'
    }
  }

  return (
    <Grid
      defaultLayout={ideLayout}
      dividers="auto"
      className="h-dvh bg-slate-900"
    >
      {/* File Tree */}
      <Block id="file-tree" className="bg-slate-900 text-slate-300 border-r border-slate-800">
        <BlockLayout>
          <BlockHeader className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-200">Explorer</span>
          <Folder className="w-4 h-4 text-slate-400" />
        </BlockHeader>

        <BlockContent className="p-2">
          <div className="space-y-1">
            <div className="px-3 py-2 hover:bg-slate-800 rounded cursor-pointer flex items-center gap-2">
              <Folder className="w-4 h-4 text-blue-400" />
              <span className="text-sm">src</span>
            </div>
            {codeFiles.map((file) => (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file)}
                className={`w-full px-3 py-2 rounded cursor-pointer flex items-center gap-2 ml-4 transition-colors ${
                  selectedFile.id === file.id
                    ? 'bg-slate-800 text-blue-400'
                    : 'hover:bg-slate-800 text-slate-400'
                }`}
              >
                <File className="w-4 h-4" />
                <span className="text-sm">{file.name}</span>
              </button>
            ))}
            <div className="px-3 py-2 hover:bg-slate-800 rounded cursor-pointer flex items-center gap-2">
              <Folder className="w-4 h-4 text-blue-400" />
              <span className="text-sm">styles</span>
            </div>
            <div className="px-3 py-2 hover:bg-slate-800 rounded cursor-pointer flex items-center gap-2">
              <File className="w-4 h-4 text-slate-400" />
              <span className="text-sm">package.json</span>
            </div>
          </div>
        </BlockContent>
        </BlockLayout>
      </Block>

      {/* Editor Area Group */}
      <BlockGroup id="editor-area">
        {/* Code Editor */}
        <Block id="editor" className="bg-slate-950">
          <BlockLayout>
            <BlockHeader className="px-4 py-2 border-b border-slate-800 flex items-center gap-2">
            <Code className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-300">{selectedFile.name}</span>
            {selectedFile.modified && (
              <span className="w-2 h-2 rounded-full bg-blue-500 ml-1"></span>
            )}
          </BlockHeader>

          <BlockContent className="p-4 font-mono text-sm overflow-auto">
            <div className="text-slate-300">
              {selectedFile.content.map((line) => (
                <div key={line.line} className="flex">
                  <span className="text-slate-600 w-12 text-right pr-4 select-none">
                    {line.line}
                  </span>
                  <span className={getColorClass(line.color)}>
                    {line.text || '\u00A0'}
                  </span>
                </div>
              ))}
            </div>
          </BlockContent>
          </BlockLayout>
        </Block>

        {/* Terminal */}
        <Block id="terminal" className="bg-slate-950 border-t border-slate-800">
          <BlockLayout>
            <BlockHeader className="px-4 py-2 border-b border-slate-800 flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-300">Terminal</span>
          </BlockHeader>

          <BlockContent className="p-4 font-mono text-sm text-slate-300">
            <div className="space-y-1">
              <div>
                <span className="text-green-400">➜</span>
                <span className="text-blue-400"> ~/project</span>
                <span className="text-slate-500"> $</span>
                <span> npm run dev</span>
              </div>
              <div className="text-slate-500">
                Starting development server...
              </div>
              <div className="text-green-400">
                ✓ Server running at http://localhost:3000
              </div>
              <div className="text-slate-500">
                ✓ Compiled successfully in 842ms
              </div>
              <div>
                <span className="text-green-400">➜</span>
                <span className="text-blue-400"> ~/project</span>
                <span className="text-slate-500"> $</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </BlockContent>
          </BlockLayout>
        </Block>
      </BlockGroup>

      {/* Properties Panel */}
      <Block id="properties" className="bg-slate-900 text-slate-300 border-l border-slate-800">
        <BlockLayout>
          <BlockHeader className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-200">Properties</span>
          <Settings className="w-4 h-4 text-slate-400" />
        </BlockHeader>

        <BlockContent className="p-4">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-slate-500 uppercase mb-2 block">File Info</label>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Type:</span>
                  <span className="text-slate-200">{selectedFile.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Size:</span>
                  <span className="text-slate-200">{selectedFile.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lines:</span>
                  <span className="text-slate-200">{selectedFile.lines}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Path:</span>
                  <span className="text-slate-200 text-xs">{selectedFile.path}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4">
              <label className="text-xs text-slate-500 uppercase mb-2 block">Git Status</label>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${selectedFile.modified ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                  <span className="text-slate-200">{selectedFile.modified ? 'Modified' : 'Committed'}</span>
                </div>
                {selectedFile.modified && (
                  <div className="text-slate-400 text-xs">
                    2 changes in current file
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4">
              <label className="text-xs text-slate-500 uppercase mb-2 block">Quick Actions</label>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm text-left transition-colors">
                  Format Document
                </button>
                <button className="w-full px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm text-left transition-colors">
                  Organize Imports
                </button>
                {selectedFile.modified && (
                  <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm text-left transition-colors">
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </BlockContent>
        </BlockLayout>
      </Block>
    </Grid>
  )
}

export default IDELayout
