import React, { useState } from "react";
import { Grid, Block, Divider } from "../src";
import type { BlockConfig, ResponsiveModes } from "../src";

/**
 * VS Code Activity Bar Example
 * Demonstrates the new Block.Sidebar system with VS Code-style activity bar
 */

const vsCodeActivityBarLayout: BlockConfig[] = [
  // Root container
  {
    id: "root",
    type: "group",
    direction: "row",
    order: 0,
  },

  // Main content area with activity bar
  {
    id: "main-container",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 0,
  },
];

const vsCodeModes: ResponsiveModes = {
  mobile: {
    type: "stack",
    maxWidth: 767,
  },
  desktop: {
    type: "grid",
    minWidth: 768,
  },
};

const VSCodeActivityBarExample: React.FC = () => {
  const [activeView, setActiveView] = useState("explorer");
  const [notifications, setNotifications] = useState(3);

  const handleViewChange = (view: string) => {
    setActiveView(view);
  };

  const clearNotifications = () => {
    setNotifications(0);
  };

  return (
    <div style={{ height: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <Grid
        defaultLayout={vsCodeActivityBarLayout}
        modes={vsCodeModes}
        className="h-full bg-gray-900 text-white"
      >
        {/* Main container with activity bar and content */}
        <Block
          id="main-container"
          className="bg-gray-900"
          mobile={{ label: "VS Code", dockOrder: 1 }}
        >
          {/* Activity Bar - VS Code style vertical sidebar */}
          <Block.Sidebar position="left" className="bg-gray-800">
            <Block.Sidebar.Item
              icon={ExplorerIcon}
              tooltip="Explorer (⇧⌘E)"
              active={activeView === "explorer"}
              onClick={() => handleViewChange("explorer")}
            />
            <Block.Sidebar.Item
              icon={SearchIcon}
              tooltip="Search (⇧⌘F)"
              active={activeView === "search"}
              onClick={() => handleViewChange("search")}
            />
            <Block.Sidebar.Item
              icon={SourceControlIcon}
              tooltip="Source Control (⌃⇧G)"
              active={activeView === "git"}
              onClick={() => handleViewChange("git")}
              badge={notifications > 0 ? notifications : undefined}
            />
            <Block.Sidebar.Item
              icon={RunIcon}
              tooltip="Run and Debug (⇧⌘D)"
              active={activeView === "debug"}
              onClick={() => handleViewChange("debug")}
            />
            <Block.Sidebar.Item
              icon={ExtensionsIcon}
              tooltip="Extensions (⇧⌘X)"
              active={activeView === "extensions"}
              onClick={() => handleViewChange("extensions")}
            />

            {/* Spacer to push items to bottom */}
            <Block.Sidebar.Spacer />

            <Block.Sidebar.Item
              icon={AccountIcon}
              tooltip="Accounts"
              active={activeView === "accounts"}
              onClick={() => handleViewChange("accounts")}
            />
            <Block.Sidebar.Item
              icon={SettingsIcon}
              tooltip="Manage (⌘,)"
              active={activeView === "settings"}
              onClick={() => handleViewChange("settings")}
            />
          </Block.Sidebar>

          {/* Main content area */}
          <Block.Content scrollMode="vertical" className="flex-1">
            <div className="h-full flex flex-col">
              {/* Header for current view */}
              <div className="bg-gray-800 border-b border-gray-700 px-4 py-3">
                <h2 className="text-lg font-semibold text-white capitalize">
                  {activeView === "git" ? "Source Control" : activeView}
                </h2>
              </div>

              {/* Content based on active view */}
              <div className="flex-1 p-4">
                {activeView === "explorer" && <ExplorerContent />}
                {activeView === "search" && <SearchContent />}
                {activeView === "git" && (
                  <SourceControlContent
                    notifications={notifications}
                    onClearNotifications={clearNotifications}
                  />
                )}
                {activeView === "debug" && <DebugContent />}
                {activeView === "extensions" && <ExtensionsContent />}
                {activeView === "accounts" && <AccountsContent />}
                {activeView === "settings" && <SettingsContent />}
              </div>
            </div>
          </Block.Content>
        </Block>
      </Grid>
    </div>
  );
};

// Content components for each view
const ExplorerContent: React.FC = () => (
  <div className="space-y-4">
    <div className="text-sm font-medium text-gray-300 mb-3">OPEN EDITORS</div>
    <div className="space-y-2 ml-4">
      <div className="flex items-center space-x-2 text-white hover:bg-gray-700 p-1 rounded cursor-pointer">
        <TypeScriptIcon className="w-4 h-4" />
        <span className="text-sm">App.tsx</span>
        <span className="text-xs text-gray-400">●</span>
      </div>
      <div className="flex items-center space-x-2 text-white hover:bg-gray-700 p-1 rounded cursor-pointer">
        <CSSIcon className="w-4 h-4" />
        <span className="text-sm">styles.css</span>
      </div>
    </div>

    <div className="text-sm font-medium text-gray-300 mb-3 mt-6">WORKSPACE</div>
    <FileTreeComponent />
  </div>
);

const SearchContent: React.FC = () => (
  <div className="space-y-4">
    <div>
      <input
        type="text"
        placeholder="Search"
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Replace"
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
      />
    </div>
    <div className="flex items-center space-x-2 text-sm">
      <label className="flex items-center text-gray-300">
        <input type="checkbox" className="mr-2" />
        Match Case
      </label>
      <label className="flex items-center text-gray-300">
        <input type="checkbox" className="mr-2" />
        Whole Word
      </label>
    </div>
    <div className="text-gray-400 text-sm mt-4">
      No results found. Try a different search term.
    </div>
  </div>
);

const SourceControlContent: React.FC<{
  notifications: number;
  onClearNotifications: () => void;
}> = ({ notifications, onClearNotifications }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium text-gray-300">CHANGES</div>
      {notifications > 0 && (
        <button
          onClick={onClearNotifications}
          className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Clear {notifications}
        </button>
      )}
    </div>

    {notifications > 0 ? (
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-green-400">
          <span className="text-sm">M</span>
          <span className="text-sm text-white">src/App.tsx</span>
        </div>
        <div className="flex items-center space-x-2 text-green-400">
          <span className="text-sm">M</span>
          <span className="text-sm text-white">src/components/Block.tsx</span>
        </div>
        <div className="flex items-center space-x-2 text-green-400">
          <span className="text-sm">A</span>
          <span className="text-sm text-white">src/components/Sidebar.tsx</span>
        </div>
      </div>
    ) : (
      <div className="text-gray-400 text-sm">
        No changes detected in your workspace.
      </div>
    )}

    <div className="mt-6">
      <input
        type="text"
        placeholder="Message (Ctrl+Enter to commit)"
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
      />
    </div>
  </div>
);

const DebugContent: React.FC = () => (
  <div className="space-y-4">
    <div className="text-sm text-gray-300">
      To start debugging, configure your launch.json file.
    </div>
    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
      Create a launch.json file
    </button>
    <div className="mt-6">
      <div className="text-sm font-medium text-gray-300 mb-2">BREAKPOINTS</div>
      <div className="text-gray-400 text-sm">No breakpoints</div>
    </div>
  </div>
);

const ExtensionsContent: React.FC = () => (
  <div className="space-y-4">
    <input
      type="text"
      placeholder="Search Extensions in Marketplace"
      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
    />

    <div className="text-sm font-medium text-gray-300 mb-3">INSTALLED</div>
    <div className="space-y-3">
      <div className="flex items-start space-x-3 p-2 hover:bg-gray-700 rounded">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
          TS
        </div>
        <div className="flex-1">
          <div className="text-white text-sm font-medium">TypeScript Importer</div>
          <div className="text-gray-400 text-xs">Auto import for TypeScript</div>
        </div>
      </div>
      <div className="flex items-start space-x-3 p-2 hover:bg-gray-700 rounded">
        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
          P
        </div>
        <div className="flex-1">
          <div className="text-white text-sm font-medium">Prettier</div>
          <div className="text-gray-400 text-xs">Code formatter</div>
        </div>
      </div>
    </div>
  </div>
);

const AccountsContent: React.FC = () => (
  <div className="space-y-4">
    <div className="text-gray-300 text-sm">
      Sign in to sync your settings, extensions, and more across devices.
    </div>
    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
      Sign in with GitHub
    </button>
    <button className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
      Sign in with Microsoft
    </button>
  </div>
);

const SettingsContent: React.FC = () => (
  <div className="space-y-4">
    <input
      type="text"
      placeholder="Search settings"
      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
    />

    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Editor Font Size</label>
        <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm">
          <option>12</option>
          <option>13</option>
          <option selected>14</option>
          <option>15</option>
          <option>16</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center text-gray-300">
          <input type="checkbox" className="mr-2" defaultChecked />
          <span className="text-sm">Auto Save</span>
        </label>
        <label className="flex items-center text-gray-300">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm">Format On Save</span>
        </label>
        <label className="flex items-center text-gray-300">
          <input type="checkbox" className="mr-2" defaultChecked />
          <span className="text-sm">Word Wrap</span>
        </label>
      </div>
    </div>
  </div>
);

const FileTreeComponent: React.FC = () => (
  <div className="space-y-1 text-sm ml-2">
    <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
      <span className="text-gray-400">▼</span>
      <FolderIcon className="w-4 h-4 text-blue-400" />
      <span className="text-white">src</span>
    </div>
    <div className="ml-6 space-y-1">
      <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
        <span className="text-gray-400">▼</span>
        <FolderIcon className="w-4 h-4 text-blue-400" />
        <span className="text-white">components</span>
      </div>
      <div className="ml-6 space-y-1">
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
          <TypeScriptIcon className="w-4 h-4" />
          <span className="text-white">Block.tsx</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
          <TypeScriptIcon className="w-4 h-4" />
          <span className="text-white">Sidebar.tsx</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
        <TypeScriptIcon className="w-4 h-4" />
        <span className="text-white">App.tsx</span>
      </div>
      <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
        <CSSIcon className="w-4 h-4" />
        <span className="text-white">styles.css</span>
      </div>
    </div>
    <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
      <MarkdownIcon className="w-4 h-4" />
      <span className="text-white">README.md</span>
    </div>
    <div className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded cursor-pointer">
      <JSONIcon className="w-4 h-4" />
      <span className="text-white">package.json</span>
    </div>
  </div>
);

// Icon components (simplified for example)
const ExplorerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const SourceControlIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const RunIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const ExtensionsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
  </svg>
);

const AccountIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
  </svg>
);

const TypeScriptIcon = ({ className }: { className?: string }) => (
  <div className={`${className} bg-blue-600 text-white text-xs flex items-center justify-center rounded`}>
    TS
  </div>
);

const CSSIcon = ({ className }: { className?: string }) => (
  <div className={`${className} bg-blue-500 text-white text-xs flex items-center justify-center rounded`}>
    CSS
  </div>
);

const MarkdownIcon = ({ className }: { className?: string }) => (
  <div className={`${className} bg-gray-600 text-white text-xs flex items-center justify-center rounded`}>
    MD
  </div>
);

const JSONIcon = ({ className }: { className?: string }) => (
  <div className={`${className} bg-yellow-600 text-white text-xs flex items-center justify-center rounded`}>
    JS
  </div>
);

const FolderIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
  </svg>
);

export default VSCodeActivityBarExample;