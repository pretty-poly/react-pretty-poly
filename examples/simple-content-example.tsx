import React, { useState } from "react";
import { Grid, Block, Divider } from "../src";
import type { BlockConfig, Tab } from "../src";

/**
 * Simple Content Example - Basic usage of the new block content system
 * Perfect for understanding the API and getting started
 */

const simpleLayout: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "row",
    order: 0,
  },
  {
    id: "editor",
    type: "block",
    defaultSize: 2,
    sizeUnit: "fr",
    dividerPosition: "end",
    parentId: "root",
    order: 0,
  },
  {
    id: "sidebar",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 1,
  },
];

const SimpleContentExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("file1");

  const tabs: Tab[] = [
    { id: "file1", label: "main.tsx", closable: true },
    { id: "file2", label: "styles.css", closable: true },
    { id: "file3", label: "README.md", closable: true },
  ];

  const handleTabClose = (tabId: string) => {
    console.log("Closing tab:", tabId);
  };

  return (
    <div style={{ height: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <Grid defaultLayout={simpleLayout} className="h-full bg-gray-100">
        {/* Editor with structured content */}
        <Block id="editor" className="bg-white shadow-sm">
          {/* Header with tabs and toolbar */}
          <Block.Header>
            <Block.Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onTabClose={handleTabClose}
            />
            <Block.Toolbar
              left={
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 text-sm bg-blue-600 text-white rounded">
                    Save
                  </button>
                  <button className="px-2 py-1 text-sm border border-gray-300 rounded">
                    Format
                  </button>
                </div>
              }
              center={
                <span className="text-sm text-gray-600">
                  Editing: {activeTab}
                </span>
              }
              right={
                <span className="text-xs text-gray-500">Line 42, Column 8</span>
              }
            />
          </Block.Header>

          {/* Main content area with vertical scrolling */}
          <Block.Content scrollMode="vertical" className="p-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Welcome to Block Content System
              </h2>

              <div className="prose max-w-none">
                <p>
                  This example demonstrates the basic usage of the new Block
                  content system. The content area scrolls vertically while the
                  header and footer remain fixed.
                </p>

                <h3>Key Components:</h3>
                <ul>
                  <li>
                    <strong>Block.Header</strong> - Fixed header area for tabs
                    and toolbars
                  </li>
                  <li>
                    <strong>Block.Content</strong> - Scrollable content with
                    configurable scroll modes
                  </li>
                  <li>
                    <strong>Block.Footer</strong> - Fixed footer for status
                    information
                  </li>
                  <li>
                    <strong>Block.Toolbar</strong> - Structured toolbar with
                    left/center/right sections
                  </li>
                  <li>
                    <strong>Block.Tabs</strong> - Tab interface with closable
                    tabs
                  </li>
                </ul>

                <h3>Scroll Modes:</h3>
                <ul>
                  <li>
                    <code>vertical</code> - Content scrolls vertically (most
                    common)
                  </li>
                  <li>
                    <code>horizontal</code> - Content scrolls horizontally
                  </li>
                  <li>
                    <code>both</code> - Content scrolls in both directions
                  </li>
                  <li>
                    <code>none</code> - No scrolling, content is clipped
                  </li>
                </ul>

                {/* Add more content to demonstrate scrolling */}
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded border">
                    <h4 className="font-medium">Section {i + 1}</h4>
                    <p className="text-gray-600 mt-2">
                      This is additional content to demonstrate vertical
                      scrolling. Each section adds more height to show how the
                      content area becomes scrollable when it exceeds the
                      available space.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Block.Content>

          {/* Footer with status information */}
          <Block.Footer className="bg-gray-50 border-t">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-gray-600">
                Ready • TypeScript
              </span>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>UTF-8</span>
                <span>LF</span>
                <span>Spaces: 2</span>
              </div>
            </div>
          </Block.Footer>
        </Block>

        <Divider targetId="editor" position="end" />

        {/* Simple sidebar without structured content (legacy style) */}
        <Block id="sidebar" className="bg-white shadow-sm p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Legacy Content
          </h3>
          <p className="text-gray-600 mb-4">
            This block uses the traditional approach without structured content
            components. The entire block scrolls as one unit.
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900">Traditional Block</h4>
              <p className="text-blue-700 text-sm mt-1">
                Uses direct children without Block.Header, Block.Content, etc.
              </p>
            </div>

            <div className="p-3 bg-green-50 rounded border border-green-200">
              <h4 className="font-medium text-green-900">Structured Block</h4>
              <p className="text-green-700 text-sm mt-1">
                Uses Block.Header, Block.Content, Block.Footer for better
                control
              </p>
            </div>

            <div className="p-3 bg-purple-50 rounded border border-purple-200">
              <h4 className="font-medium text-purple-900">Backward Compatible</h4>
              <p className="text-purple-700 text-sm mt-1">
                Both approaches work together seamlessly
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h4 className="font-medium text-gray-900 mb-2">Usage Example:</h4>
            <pre className="text-xs text-gray-700 overflow-x-auto">
{`<Block id="editor">
  <Block.Header>
    <Block.Tabs tabs={tabs} />
    <Block.Toolbar left={actions} />
  </Block.Header>
  <Block.Content scrollMode="vertical">
    Content here
  </Block.Content>
  <Block.Footer>
    Status bar
  </Block.Footer>
</Block>`}
            </pre>
          </div>
        </Block>
      </Grid>
    </div>
  );
};

export default SimpleContentExample;