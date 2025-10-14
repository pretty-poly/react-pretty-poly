import React, { useState } from "react";
import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockLayout } from "@/components/grid/block-layout";
import { BlockContent } from "@/components/grid/block-content";
import { BlockHeader } from "@/components/grid/block-header";
import type { BlockConfig } from "@/lib/grid-types";
import {
  Lock,
  Unlock,
  Home,
  FileText,
  Settings,
  Users,
  BarChart3,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fixedSidebarLayout: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "row",
    order: 1,
  },
  {
    id: "sidebar",
    type: "block",
    defaultSize: 240,
    sizeUnit: "px",
    resizable: false, // Fixed sidebar - cannot be resized
    parentId: "root",
    order: 0,
  },
  {
    id: "main",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 1,
  },
  {
    id: "properties",
    type: "block",
    defaultSize: 320,
    minSize: 250,
    maxSize: 500,
    sizeUnit: "px",
    resizable: true, // Resizable properties panel
    parentId: "root",
    order: 2,
  },
];

const FixedSidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <Grid defaultLayout={fixedSidebarLayout} dividers="auto" className="h-dvh">
      {/* Fixed Sidebar - Cannot be resized */}
      <Block id="sidebar" className="bg-slate-900 text-white">
        <BlockLayout>
          <BlockHeader className="p-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-slate-400" />
              <h2 className="font-semibold text-sm">Fixed Sidebar</h2>
            </div>
            <Badge variant="secondary" className="mt-2 text-xs bg-slate-800 text-slate-300">
              resizable: false
            </Badge>
          </BlockHeader>

          <BlockContent className="p-3">
            <div className="mb-4 p-3 bg-blue-900/30 border border-blue-700 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-200">
                  This sidebar has <code className="bg-slate-800 px-1 py-0.5 rounded">resizable: false</code> set, so no divider appears on its right edge.
                </p>
              </div>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full transition-colors text-sm ${
                      selectedItem === item.id
                        ? "bg-slate-800 text-white"
                        : "hover:bg-slate-800 text-slate-300 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </BlockContent>
        </BlockLayout>
      </Block>

      {/* Main Content Area - Takes up remaining space */}
      <Block id="main" className="bg-slate-50">
        <BlockLayout>
          <BlockHeader className="bg-white border-b border-slate-200 px-6 py-4">
            <h2 className="text-xl font-semibold">Fixed Sidebar Demo</h2>
            <p className="text-sm text-slate-600 mt-1">
              Demonstrating the <code className="bg-slate-100 px-2 py-0.5 rounded text-xs">resizable</code> property
            </p>
          </BlockHeader>

          <BlockContent className="p-6">
            <div className="max-w-3xl">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">About This Example</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <p>
                    This example demonstrates how to create <strong>fixed-width panels</strong> that
                    cannot be resized by users. This is useful for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Navigation sidebars that should maintain a consistent width</li>
                    <li>Toolbars and icon panels with fixed-size controls</li>
                    <li>Headers or footers that should not be user-adjustable</li>
                    <li>UI elements that have a specific optimal width</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sidebar Configuration Card */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-slate-900">Left Sidebar</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-600">Size:</span>
                      <code className="bg-slate-100 px-2 py-0.5 rounded text-xs">240px</code>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-600">Resizable:</span>
                      <code className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">
                        false
                      </code>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-600">Divider:</span>
                      <span className="text-slate-400 text-xs">Hidden (auto)</span>
                    </div>
                  </div>
                </div>

                {/* Properties Panel Configuration Card */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Unlock className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-slate-900">Right Panel</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-600">Size:</span>
                      <code className="bg-slate-100 px-2 py-0.5 rounded text-xs">320px</code>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-600">Resizable:</span>
                      <code className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">
                        true
                      </code>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-600">Min / Max:</span>
                      <span className="text-xs text-slate-600">250px / 500px</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-slate-900 rounded-lg p-5 mt-6 overflow-x-auto">
                <div className="text-xs text-slate-400 mb-2 font-mono">TypeScript</div>
                <pre className="text-sm text-slate-200 font-mono">
{`const layout: BlockConfig[] = [
  {
    id: "sidebar",
    defaultSize: 240,
    sizeUnit: "px",
    resizable: false, // 🔒 No divider
    parentId: "root",
    order: 0,
  },
  {
    id: "main",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 1,
  },
  {
    id: "properties",
    defaultSize: 320,
    minSize: 250,
    maxSize: 500,
    sizeUnit: "px",
    resizable: true, // ✅ Divider shown
    parentId: "root",
    order: 2,
  },
];`}
                </pre>
              </div>

              {/* Try it section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
                <h4 className="font-semibold text-blue-900 mb-2">Try It Yourself</h4>
                <p className="text-sm text-blue-800">
                  Try to resize the left sidebar by hovering over its right edge - you won't see any
                  divider or resize handle! However, you can resize the properties panel on the right
                  by dragging the divider between the main content and the panel.
                </p>
              </div>
            </div>
          </BlockContent>
        </BlockLayout>
      </Block>

      {/* Properties Panel - Can be resized */}
      <Block id="properties" className="bg-white border-l border-slate-200">
        <BlockLayout>
          <BlockHeader className="p-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Unlock className="w-4 h-4 text-green-600" />
              <h3 className="font-semibold text-sm">Properties Panel</h3>
            </div>
            <Badge variant="secondary" className="mt-2 text-xs bg-green-100 text-green-700">
              resizable: true
            </Badge>
          </BlockHeader>

          <BlockContent className="p-4">
            <div className="space-y-4">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-green-800">
                    This panel is resizable! Drag the divider on the left to resize it.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-slate-600 mb-1">Selected Item</div>
                  <div className="text-sm text-slate-900 capitalize">{selectedItem}</div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-slate-600 mb-1">Panel Width</div>
                  <div className="text-sm text-slate-900">320px (default)</div>
                  <div className="text-xs text-slate-500 mt-1">Min: 250px, Max: 500px</div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-slate-600 mb-2">Behavior</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Has resize divider</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>User can adjust width</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Respects min/max constraints</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-slate-600 mb-2">Use Cases</div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li>• Adjustable details panels</li>
                    <li>• Flexible property inspectors</li>
                    <li>• Resizable tool palettes</li>
                    <li>• Dynamic sidebar widths</li>
                  </ul>
                </div>
              </div>
            </div>
          </BlockContent>
        </BlockLayout>
      </Block>
    </Grid>
  );
};

export default FixedSidebar;
