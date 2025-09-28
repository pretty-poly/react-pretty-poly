import React, { useState } from "react";
import { Grid, Block, Divider } from "../src";
import type { BlockConfig, ResponsiveModes, Tab } from "../src";

/**
 * VS Code-style content example demonstrating the new block content system
 * Features: tabs, toolbars, scrollable content, status bars, and different scroll modes
 */

const vsCodeLayout: BlockConfig[] = [
  // Root container
  {
    id: "root",
    type: "group",
    direction: "row",
    order: 0,
  },

  // Sidebar
  {
    id: "sidebar",
    type: "block",
    defaultSize: 300,
    minSize: 200,
    maxSize: 500,
    sizeUnit: "px",
    dividerPosition: "end",
    collapsible: true,
    collapseAt: 250,
    collapseTo: 48,
    parentId: "root",
    order: 0,
  },

  // Main editor area
  {
    id: "main-area",
    type: "group",
    direction: "column",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 1,
  },

  // Editor
  {
    id: "editor",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    dividerPosition: "end",
    parentId: "main-area",
    order: 0,
  },

  // Terminal/output panel
  {
    id: "terminal",
    type: "block",
    defaultSize: 250,
    minSize: 150,
    maxSize: 400,
    sizeUnit: "px",
    collapsible: true,
    collapseAt: 200,
    collapseTo: 0,
    parentId: "main-area",
    order: 1,
  },
];

const vsCodeModes: ResponsiveModes = {
  mobile: {
    type: "stack",
    maxWidth: 767,
  },
  tablet: {
    type: "tabs",
    minWidth: 768,
    maxWidth: 1023,
  },
  desktop: {
    type: "grid",
    minWidth: 1024,
  },
};

const VSCodeStyleContentExample: React.FC = () => {
  // Sidebar state
  const [sidebarActiveTab, setSidebarActiveTab] = useState("explorer");

  // Editor state
  const [editorTabs, setEditorTabs] = useState<Tab[]>([
    { id: "app.tsx", label: "App.tsx", icon: TypeScriptIcon, closable: true },
    { id: "styles.css", label: "styles.css", icon: CSSIcon, closable: true },
    { id: "readme.md", label: "README.md", icon: MarkdownIcon, closable: true },
  ]);
  const [activeEditorTab, setActiveEditorTab] = useState("app.tsx");

  // Terminal state
  const [terminalTabs, setTerminalTabs] = useState<Tab[]>([
    { id: "terminal", label: "Terminal", icon: TerminalIcon, closable: false },
    { id: "problems", label: "Problems", icon: ProblemsIcon, closable: false },
    { id: "output", label: "Output", icon: OutputIcon, closable: false },
  ]);
  const [activeTerminalTab, setActiveTerminalTab] = useState("terminal");

  const sidebarTabs: Tab[] = [
    { id: "explorer", label: "Explorer", icon: ExplorerIcon },
    { id: "search", label: "Search", icon: SearchIcon },
    { id: "git", label: "Git", icon: GitIcon },
    { id: "extensions", label: "Extensions", icon: ExtensionsIcon },
  ];

  const handleEditorTabClose = (tabId: string) => {
    const newTabs = editorTabs.filter(tab => tab.id !== tabId);
    setEditorTabs(newTabs);

    if (activeEditorTab === tabId && newTabs.length > 0) {
      setActiveEditorTab(newTabs[0].id);
    }
  };

  return (
    <div style={{ height: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <Grid
        defaultLayout={vsCodeLayout}
        modes={vsCodeModes}
        className="h-full bg-gray-900 text-white"
      >
        {/* Sidebar */}
        <Block
          id="sidebar"
          className="bg-gray-800 border-r border-gray-700"
          desktop={{ collapsible: true }}
          mobile={{
            icon: ExplorerIcon,
            label: "Explorer",
            dockOrder: 1,
          }}
        >
          <Block.Header className="bg-gray-800 border-b border-gray-700">
            <Block.Tabs
              tabs={sidebarTabs}
              activeTab={sidebarActiveTab}
              onTabChange={setSidebarActiveTab}
              className="bg-gray-800"
              allowOverflow={false}
            />
          </Block.Header>

          <Block.Content scrollMode="vertical" className="p-4">
            {sidebarActiveTab === "explorer" && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-300 mb-3">EXPLORER</div>
                <FileTree />
              </div>
            )}
            {sidebarActiveTab === "search" && (
              <div className="space-y-4">
                <div className="text-sm font-medium text-gray-300 mb-3">SEARCH</div>
                <input
                  type="text"
                  placeholder="Search files..."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                />
                <div className="text-sm text-gray-400">No results found</div>
              </div>
            )}
            {sidebarActiveTab === "git" && (
              <div className="space-y-4">
                <div className="text-sm font-medium text-gray-300 mb-3">SOURCE CONTROL</div>
                <div className="text-sm text-gray-400">No changes detected</div>
              </div>
            )}
            {sidebarActiveTab === "extensions" && (
              <div className="space-y-4">
                <div className="text-sm font-medium text-gray-300 mb-3">EXTENSIONS</div>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-700 rounded">
                    <div className="text-sm font-medium">TypeScript</div>
                    <div className="text-xs text-gray-400">Installed</div>
                  </div>
                  <div className="p-2 bg-gray-700 rounded">
                    <div className="text-sm font-medium">Prettier</div>
                    <div className="text-xs text-gray-400">Installed</div>
                  </div>
                </div>
              </div>
            )}
          </Block.Content>
        </Block>

        <Divider targetId="sidebar" position="end" />

        {/* Main area with editor */}
        <Block id="main-area">
          {/* Editor */}
          <Block
            id="editor"
            className="bg-gray-900"
            mobile={{
              icon: EditorIcon,
              label: "Editor",
              dockOrder: 2,
            }}
          >
            <Block.Header>
              <Block.Tabs
                tabs={editorTabs}
                activeTab={activeEditorTab}
                onTabChange={setActiveEditorTab}
                onTabClose={handleEditorTabClose}
                className="bg-gray-800 border-b border-gray-700"
              />
              <Block.Toolbar
                className="bg-gray-800 border-b border-gray-700"
                left={
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <SaveIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <UndoIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <RedoIcon className="w-4 h-4" />
                    </button>
                  </div>
                }
                center={
                  <div className="text-sm text-gray-400">
                    {activeEditorTab && `Editing: ${activeEditorTab}`}
                  </div>
                }
                right={
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Ln 42, Col 8</span>
                    <span className="text-xs text-gray-400">UTF-8</span>
                    <span className="text-xs text-gray-400">TypeScript</span>
                  </div>
                }
              />
            </Block.Header>

            <Block.Content scrollMode="both" className="p-4">
              <EditorContent activeFile={activeEditorTab} />
            </Block.Content>
          </Block>

          <Divider targetId="terminal" position="start" />

          {/* Terminal/Output Panel */}
          <Block
            id="terminal"
            className="bg-gray-900"
            desktop={{ collapsible: true }}
            mobile={{
              icon: TerminalIcon,
              label: "Terminal",
              dockOrder: 3,
            }}
          >
            <Block.Header>
              <Block.Tabs
                tabs={terminalTabs}
                activeTab={activeTerminalTab}
                onTabChange={setActiveTerminalTab}
                className="bg-gray-800 border-b border-gray-700"
              />
            </Block.Header>

            <Block.Content
              scrollMode={activeTerminalTab === "terminal" ? "vertical" : "both"}
              className="p-4 font-mono text-sm"
            >
              {activeTerminalTab === "terminal" && <TerminalContent />}
              {activeTerminalTab === "problems" && <ProblemsContent />}
              {activeTerminalTab === "output" && <OutputContent />}
            </Block.Content>

            <Block.Footer className="bg-gray-800 border-t border-gray-700 px-4 py-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>✓ No errors</span>
                  <span>⚠ 2 warnings</span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>TypeScript 4.9.4</span>
                  <span>Node 18.12.1</span>
                </div>
              </div>
            </Block.Footer>
          </Block>
        </Block>
      </Grid>
    </div>
  );
};

// Helper components for the example
const FileTree: React.FC = () => (
  <div className="space-y-1 text-sm">
    <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
      <FolderIcon className="w-4 h-4 text-blue-400" />
      <span>src</span>
    </div>
    <div className="ml-6 space-y-1">
      <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
        <TypeScriptIcon className="w-4 h-4" />
        <span>App.tsx</span>
      </div>
      <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
        <CSSIcon className="w-4 h-4" />
        <span>styles.css</span>
      </div>
    </div>
    <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
      <MarkdownIcon className="w-4 h-4" />
      <span>README.md</span>
    </div>
  </div>
);

const EditorContent: React.FC<{ activeFile: string }> = ({ activeFile }) => (
  <div className="font-mono text-sm leading-relaxed">
    {activeFile === "app.tsx" && (
      <pre className="text-white">
{`import React from 'react';
import './styles.css';

interface AppProps {
  title?: string;
}

const App: React.FC<AppProps> = ({ title = 'Hello World' }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;`}
      </pre>
    )}
    {activeFile === "styles.css" && (
      <pre className="text-white">
{`.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
}

button {
  background: #007acc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #005a9e;
}`}
      </pre>
    )}
    {activeFile === "readme.md" && (
      <pre className="text-white">
{`# Pretty Poly React Example

This example demonstrates the new block content system with VS Code-style layouts.

## Features

- Structured block content with Header, Content, Footer
- Tabbed interfaces with closable tabs
- Toolbars with left, center, right sections
- Multiple scroll modes: vertical, horizontal, both, none
- Responsive design with different layout modes

## Usage

\`\`\`tsx
<Block id="editor">
  <Block.Header>
    <Block.Tabs tabs={tabs} activeTab={activeTab} />
    <Block.Toolbar left={actions} right={status} />
  </Block.Header>
  <Block.Content scrollMode="vertical">
    Content here
  </Block.Content>
  <Block.Footer>
    Status bar
  </Block.Footer>
</Block>
\`\`\`
`}
      </pre>
    )}
  </div>
);

const TerminalContent: React.FC = () => (
  <div className="space-y-2 text-green-400">
    <div>$ npm run dev</div>
    <div className="text-gray-400">
      {">"} pretty-poly-example@1.0.0 dev<br />
      {">"} vite
    </div>
    <div className="text-blue-400">
      ➜  Local:   http://localhost:5173/<br />
      ➜  Network: use --host to expose
    </div>
    <div className="text-gray-400">ready in 543ms.</div>
    <div className="text-green-400">$<span className="animate-pulse">_</span></div>
  </div>
);

const ProblemsContent: React.FC = () => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2 text-yellow-400">
      <span>⚠</span>
      <span className="text-white">Warning:</span>
      <span className="text-gray-400">Unused import 'useState' in App.tsx:1</span>
    </div>
    <div className="flex items-center space-x-2 text-yellow-400">
      <span>⚠</span>
      <span className="text-white">Warning:</span>
      <span className="text-gray-400">Missing dependency in useEffect at App.tsx:12</span>
    </div>
  </div>
);

const OutputContent: React.FC = () => (
  <div className="space-y-1 text-gray-300 text-xs">
    <div>[vite] connecting...</div>
    <div>[vite] connected.</div>
    <div>12:34:56 PM [vite] hmr update /src/App.tsx</div>
    <div>12:34:58 PM [vite] hmr update /src/styles.css</div>
  </div>
);

// Icon components (simplified for example)
const iconProps = { className: "w-4 h-4" };

const ExplorerIcon = (props: any) => <div {...props}>📁</div>;
const SearchIcon = (props: any) => <div {...props}>🔍</div>;
const GitIcon = (props: any) => <div {...props}>🔀</div>;
const ExtensionsIcon = (props: any) => <div {...props}>🧩</div>;
const EditorIcon = (props: any) => <div {...props}>📝</div>;
const TerminalIcon = (props: any) => <div {...props}>💻</div>;
const ProblemsIcon = (props: any) => <div {...props}>⚠️</div>;
const OutputIcon = (props: any) => <div {...props}>📤</div>;
const TypeScriptIcon = (props: any) => <div {...props}>📘</div>;
const CSSIcon = (props: any) => <div {...props}>🎨</div>;
const MarkdownIcon = (props: any) => <div {...props}>📄</div>;
const FolderIcon = (props: any) => <div {...props}>📁</div>;
const SaveIcon = (props: any) => <div {...props}>💾</div>;
const UndoIcon = (props: any) => <div {...props}>↶</div>;
const RedoIcon = (props: any) => <div {...props}>↷</div>;

export default VSCodeStyleContentExample;