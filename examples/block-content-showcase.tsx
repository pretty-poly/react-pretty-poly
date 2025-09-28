import React, { useState } from "react";
import { Grid, Block, Divider } from "../src";
import type { BlockConfig, ResponsiveModes, Tab } from "../src";

/**
 * Block Content Showcase - demonstrates all new content components
 * Shows different scroll modes, toolbar layouts, and structured content
 */

const showcaseLayout: BlockConfig[] = [
  // Root container
  {
    id: "root",
    type: "group",
    direction: "row",
    order: 0,
  },

  // Left panel - Vertical scrolling example
  {
    id: "vertical-scroll",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    dividerPosition: "end",
    parentId: "root",
    order: 0,
  },

  // Middle panel - Horizontal scrolling example
  {
    id: "horizontal-scroll",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    dividerPosition: "end",
    parentId: "root",
    order: 1,
  },

  // Right panel - No scroll example
  {
    id: "no-scroll",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 2,
  },
];

const showcaseModes: ResponsiveModes = {
  mobile: {
    type: "stack",
    maxWidth: 767,
  },
  desktop: {
    type: "grid",
    minWidth: 768,
  },
};

const BlockContentShowcase: React.FC = () => {
  // Tab state for examples
  const [activeVerticalTab, setActiveVerticalTab] = useState("content");
  const [activeHorizontalTab, setActiveHorizontalTab] = useState("table");

  const verticalTabs: Tab[] = [
    { id: "content", label: "Content", icon: ContentIcon },
    { id: "settings", label: "Settings", icon: SettingsIcon },
    { id: "info", label: "Info", icon: InfoIcon },
  ];

  const horizontalTabs: Tab[] = [
    { id: "table", label: "Wide Table", icon: TableIcon },
    { id: "code", label: "Code", icon: CodeIcon },
  ];

  return (
    <div style={{ height: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <Grid
        defaultLayout={showcaseLayout}
        modes={showcaseModes}
        className="h-full bg-gray-50"
      >
        {/* Vertical Scroll Example */}
        <Block
          id="vertical-scroll"
          className="bg-white shadow-sm border border-gray-200"
          mobile={{ label: "Vertical Scroll", dockOrder: 1 }}
        >
          <Block.Header className="bg-blue-50 border-b border-blue-200">
            <Block.Tabs
              tabs={verticalTabs}
              activeTab={activeVerticalTab}
              onTabChange={setActiveVerticalTab}
              className="bg-blue-50"
            />
            <Block.Toolbar
              className="bg-blue-100 border-t border-blue-200"
              left={
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-blue-800">
                    Vertical Scroll Mode
                  </span>
                </div>
              }
              right={
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded">
                    Action
                  </button>
                  <button className="px-2 py-1 text-xs border border-blue-300 text-blue-700 rounded">
                    Save
                  </button>
                </div>
              }
            />
          </Block.Header>

          <Block.Content scrollMode="vertical" className="p-4">
            {activeVerticalTab === "content" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Vertical Scrolling Content
                </h3>
                <p className="text-gray-600">
                  This content scrolls vertically. The header and footer stay
                  fixed while the content area scrolls.
                </p>

                {/* Generate lots of content to demonstrate scrolling */}
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <h4 className="font-medium text-gray-900">Item {i + 1}</h4>
                    <p className="text-gray-600 mt-2">
                      This is some sample content for item {i + 1}. Each item
                      takes up some vertical space to demonstrate scrolling
                      behavior. The content will overflow and become scrollable
                      when it exceeds the available height.
                    </p>
                    <div className="mt-3 flex space-x-2">
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                        Tag {i + 1}
                      </span>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                        Category
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeVerticalTab === "settings" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter display name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notifications
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Email notifications
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Push notifications
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        SMS notifications
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeVerticalTab === "info" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Information
                </h3>
                <div className="prose prose-sm max-w-none">
                  <p>
                    This panel demonstrates vertical scrolling with structured
                    content. The Block.Content component automatically handles
                    overflow-y when scrollMode is set to "vertical".
                  </p>
                  <ul>
                    <li>Header stays fixed at the top</li>
                    <li>Content area is scrollable</li>
                    <li>Footer stays fixed at the bottom</li>
                    <li>Works with any amount of content</li>
                  </ul>
                </div>
              </div>
            )}
          </Block.Content>

          <Block.Footer className="bg-blue-50 border-t border-blue-200 px-4 py-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-xs text-blue-700">
                Scroll: {activeVerticalTab} • Vertical Mode
              </span>
              <span className="text-xs text-blue-600">Items: 20</span>
            </div>
          </Block.Footer>
        </Block>

        <Divider targetId="vertical-scroll" position="end" />

        {/* Horizontal Scroll Example */}
        <Block
          id="horizontal-scroll"
          className="bg-white shadow-sm border border-gray-200"
          mobile={{ label: "Horizontal Scroll", dockOrder: 2 }}
        >
          <Block.Header className="bg-green-50 border-b border-green-200">
            <Block.Tabs
              tabs={horizontalTabs}
              activeTab={activeHorizontalTab}
              onTabChange={setActiveHorizontalTab}
              className="bg-green-50"
            />
          </Block.Header>

          <Block.Content scrollMode="horizontal" className="p-4">
            {activeHorizontalTab === "table" && (
              <div className="min-w-max">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Wide Table (Horizontal Scroll)
                </h3>
                <table className="min-w-max border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      {Array.from({ length: 15 }, (_, i) => (
                        <th
                          key={i}
                          className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900 min-w-40"
                        >
                          Column {i + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }, (_, rowIndex) => (
                      <tr key={rowIndex} className="even:bg-gray-50">
                        {Array.from({ length: 15 }, (_, colIndex) => (
                          <td
                            key={colIndex}
                            className="border border-gray-300 px-4 py-2 text-sm text-gray-700"
                          >
                            Row {rowIndex + 1}, Col {colIndex + 1}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeHorizontalTab === "code" && (
              <div className="min-w-max">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Wide Code Block
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm font-mono min-w-max">
{`// This is a very wide code block that demonstrates horizontal scrolling
function demonstrateHorizontalScrolling() {
  const veryLongVariableName = "This line is intentionally very long to show horizontal scrolling behavior in the block content system";

  return {
    message: "The content scrolls horizontally when it exceeds the available width",
    features: ["Fixed header", "Scrollable content", "Horizontal overflow", "Structured layout"],
    coordinates: { x: 12345, y: 67890, z: 54321 },
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    configuration: {
      enableHorizontalScrolling: true,
      maxWidth: "none",
      overflow: "auto",
      display: "block"
    }
  };
}`}
                </pre>
              </div>
            )}
          </Block.Content>

          <Block.Footer className="bg-green-50 border-t border-green-200 px-4 py-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-xs text-green-700">
                Scroll: {activeHorizontalTab} • Horizontal Mode
              </span>
              <span className="text-xs text-green-600">
                Width: Auto-expanding
              </span>
            </div>
          </Block.Footer>
        </Block>

        <Divider targetId="horizontal-scroll" position="end" />

        {/* No Scroll Example */}
        <Block
          id="no-scroll"
          className="bg-white shadow-sm border border-gray-200"
          mobile={{ label: "No Scroll", dockOrder: 3 }}
        >
          <Block.Header className="bg-purple-50 border-b border-purple-200">
            <Block.Toolbar
              className="bg-purple-50"
              left={
                <span className="text-sm font-medium text-purple-800">
                  No Scroll Mode
                </span>
              }
              center={
                <div className="flex items-center space-x-4">
                  <button className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded">
                    Fit Content
                  </button>
                  <button className="px-3 py-1 text-sm border border-purple-300 text-purple-700 rounded">
                    Reset
                  </button>
                </div>
              }
              right={
                <span className="text-xs text-purple-600">No Overflow</span>
              }
            />
          </Block.Header>

          <Block.Content scrollMode="none" className="p-4">
            <div className="h-full flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                No Scroll - Fixed Layout
              </h3>

              <div className="flex-1 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-6 flex flex-col justify-center items-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📐</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Fixed Content Area
                  </h4>
                  <p className="text-gray-600 mb-4 max-w-xs">
                    This content doesn't scroll. Everything fits within the
                    available space, creating a fixed layout.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="font-medium text-gray-900">Mode</div>
                      <div className="text-gray-600">overflow: hidden</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="font-medium text-gray-900">Behavior</div>
                      <div className="text-gray-600">Fixed content</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="font-medium text-gray-900">Use Case</div>
                      <div className="text-gray-600">Dashboards</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="font-medium text-gray-900">Layout</div>
                      <div className="text-gray-600">Responsive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Block.Content>

          <Block.Footer className="bg-purple-50 border-t border-purple-200 px-4 py-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-xs text-purple-700">
                Mode: No Scroll • Content fits available space
              </span>
              <span className="text-xs text-purple-600">✓ Fixed</span>
            </div>
          </Block.Footer>
        </Block>
      </Grid>
    </div>
  );
};

// Simple icon components for the example
const ContentIcon = () => <span>📄</span>;
const SettingsIcon = () => <span>⚙️</span>;
const InfoIcon = () => <span>ℹ️</span>;
const TableIcon = () => <span>📊</span>;
const CodeIcon = () => <span>💻</span>;

export default BlockContentShowcase;