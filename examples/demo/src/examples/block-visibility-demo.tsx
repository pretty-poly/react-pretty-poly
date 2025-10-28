/**
 * Block Visibility Demo
 *
 * Demonstrates:
 * 1. Blocks starting in hidden state via isHidden: true in BlockConfig
 * 2. Dynamic block hiding/showing using the visibility API
 * 3. How grid templates regenerate automatically when blocks are hidden
 */

import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockContent } from "@/components/grid/block-content";
import { BlockHeader } from "@/components/grid/block-header";
import { BlockToolbar } from "@/components/grid/block-toolbar";
import {
  useToggleBlockVisibility,
  useIsBlockHidden,
} from "@/components/grid/grid-provider";
import {
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  PanelBottomOpen,
  PanelBottomClose,
} from "lucide-react";
import type { BlockConfig } from "@/lib/grid-types";

// Grid layout: sidebar | (main / bottom-panel) | properties
const blocks: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "row",
    children: ["sidebar", "main-area", "properties"],
  },
  {
    id: "sidebar",
    type: "block",
    parentId: "root",
    order: 0,
    defaultSize: 250,
    sizeUnit: "px",
    minSize: 200,
  },
  {
    id: "main-area",
    type: "group",
    direction: "column",
    parentId: "root",
    order: 1,
    defaultSize: 1,
    sizeUnit: "fr",
    children: ["main", "bottom-panel"],
  },
  {
    id: "main",
    type: "block",
    parentId: "main-area",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  {
    id: "bottom-panel",
    type: "block",
    parentId: "main-area",
    order: 1,
    defaultSize: 200,
    sizeUnit: "px",
    minSize: 100,
    maxSize: 400,
    // Start hidden - demonstrates isHidden property
    isHidden: true,
  },
  {
    id: "properties",
    type: "block",
    parentId: "root",
    order: 2,
    defaultSize: 300,
    sizeUnit: "px",
    minSize: 250,
  },
];

function ToggleButton({
  blockId,
  label,
  icon: Icon,
  align: _align = "left",
}: {
  blockId: string;
  label: string;
  icon: React.ElementType;
  align?: "left" | "right";
}) {
  const toggleVisibility = useToggleBlockVisibility();
  const isHidden = useIsBlockHidden(blockId);

  return (
    <button
      onClick={() => toggleVisibility(blockId)}
      className="px-3 py-1.5 rounded border flex items-center gap-2 text-sm hover:bg-accent transition-colors"
      title={`${isHidden ? "Show" : "Hide"} ${label}`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">
        {isHidden ? `Show ${label}` : `Hide ${label}`}
      </span>
    </button>
  );
}

function DemoBlocks() {
  const sidebarHidden = useIsBlockHidden("sidebar");
  const propertiesHidden = useIsBlockHidden("properties");
  const bottomPanelHidden = useIsBlockHidden("bottom-panel");

  return (
    <>
      {/* Sidebar */}
      <Block id="sidebar">
        <BlockHeader className="bg-blue-50 dark:bg-blue-950 border-b">
          <BlockToolbar
            left={<h2 className="font-semibold text-sm">File Explorer</h2>}
          />
        </BlockHeader>
        <BlockContent className="p-4 bg-blue-50/50 dark:bg-blue-950/50">
          <div className="space-y-2">
            <div className="p-2 rounded bg-white dark:bg-gray-800 text-sm">
              📁 src
            </div>
            <div className="p-2 rounded bg-white dark:bg-gray-800 text-sm ml-4">
              📄 App.tsx
            </div>
            <div className="p-2 rounded bg-white dark:bg-gray-800 text-sm ml-4">
              📄 index.ts
            </div>
            <div className="p-2 rounded bg-white dark:bg-gray-800 text-sm">
              📁 components
            </div>
            <div className="p-2 rounded bg-white dark:bg-gray-800 text-sm ml-4">
              📄 Grid.tsx
            </div>
            <div className="p-2 rounded bg-white dark:bg-gray-800 text-sm ml-4">
              📄 Block.tsx
            </div>
          </div>
        </BlockContent>
      </Block>

      {/* Main Area Group */}
      <Block id="main-area" type="group" direction="column">
        {/* Main Content */}
        <Block id="main">
          <BlockHeader className="bg-purple-50 dark:bg-purple-950 border-b">
            <BlockToolbar
              left={<h2 className="font-semibold text-sm">Editor</h2>}
            />
          </BlockHeader>
          <BlockContent className="p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Toolbar />

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-lg border border-purple-200 dark:border-purple-800">
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">
                    1. Initial Hidden State
                  </h3>
                  <p className="text-muted-foreground">
                    The <strong>Bottom Panel</strong> starts hidden via{" "}
                    <code className="bg-white dark:bg-gray-800 px-1 rounded">
                      isHidden: true
                    </code>{" "}
                    in its BlockConfig. This is useful for output panels,
                    terminals, or other auxiliary views.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    2. Dynamic Template Generation
                  </h3>
                  <p className="text-muted-foreground">
                    When you hide a block, the grid template CSS is regenerated
                    to exclude that block, and remaining blocks automatically
                    fill the available space.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. display: none</h3>
                  <p className="text-muted-foreground">
                    Hidden blocks use{" "}
                    <code className="bg-white dark:bg-gray-800 px-1 rounded">
                      display: none
                    </code>
                    , which removes them from the grid&apos;s auto-placement flow.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">4. Automatic Reflow</h3>
                  <p className="text-muted-foreground">
                    No manual layout calculations needed - CSS Grid handles the
                    reflow automatically!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded border bg-card">
                <h3 className="font-semibold mb-2 text-sm">Current State</h3>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>
                    Sidebar: {sidebarHidden ? "🚫 Hidden" : "✅ Visible"}
                  </div>
                  <div>Main: ✅ Visible (always)</div>
                  <div>
                    Bottom Panel: {bottomPanelHidden ? "🚫 Hidden (default)" : "✅ Visible"}
                  </div>
                  <div>
                    Properties: {propertiesHidden ? "🚫 Hidden" : "✅ Visible"}
                  </div>
                </div>
              </div>
              <div className="p-4 rounded border bg-card">
                <h3 className="font-semibold mb-2 text-sm">Visibility API</h3>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• <code>isHidden: true</code> in config</div>
                  <div>• <code>useToggleBlockVisibility()</code></div>
                  <div>• <code>useIsBlockHidden(id)</code></div>
                  <div>• Dynamic template updates</div>
                </div>
              </div>
            </div>
          </div>
        </BlockContent>
        </Block>

        {/* Bottom Panel (starts hidden) */}
        <Block id="bottom-panel">
          <BlockHeader className="bg-yellow-50 dark:bg-yellow-950 border-t">
            <BlockToolbar
              left={<h2 className="font-semibold text-sm">Output / Terminal</h2>}
            />
          </BlockHeader>
          <BlockContent className="p-4 bg-yellow-50/50 dark:bg-yellow-950/50">
            <div className="font-mono text-xs space-y-1 text-muted-foreground">
              <div className="text-green-600 dark:text-green-400">
                ✓ Build complete (2.3s)
              </div>
              <div>Starting development server...</div>
              <div className="text-blue-600 dark:text-blue-400">
                → Local: http://localhost:5173
              </div>
              <div className="text-muted-foreground/50 mt-2">
                This panel started hidden via <code>isHidden: true</code>
              </div>
            </div>
          </BlockContent>
        </Block>
      </Block>

      {/* Properties Panel */}
      <Block id="properties">
        <BlockHeader className="bg-green-50 dark:bg-green-950 border-b">
          <BlockToolbar
            left={<h2 className="font-semibold text-sm">Properties</h2>}
          />
        </BlockHeader>
        <BlockContent className="p-4 bg-green-50/50 dark:bg-green-950/50">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Width
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 rounded border text-sm"
                placeholder="300"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Height
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 rounded border text-sm"
                placeholder="200"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Background
              </label>
              <input type="color" className="w-full mt-1 h-10 rounded border" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Opacity
              </label>
              <input
                type="range"
                className="w-full mt-1"
                min="0"
                max="100"
                defaultValue="100"
              />
            </div>
          </div>
        </BlockContent>
      </Block>
    </>
  );
}

function Toolbar() {
  const sidebarHidden = useIsBlockHidden("sidebar");
  const propertiesHidden = useIsBlockHidden("properties");
  const bottomPanelHidden = useIsBlockHidden("bottom-panel");

  return (
    <div className="border-b p-4 bg-muted/30 flex gap-2 items-center flex-wrap">
      <strong className="text-sm mr-2">Toggle Panels:</strong>
      <ToggleButton
        blockId="sidebar"
        label="Sidebar"
        icon={sidebarHidden ? PanelLeftOpen : PanelLeftClose}
      />
      <ToggleButton
        blockId="bottom-panel"
        label="Output"
        icon={bottomPanelHidden ? PanelBottomOpen : PanelBottomClose}
      />
      <ToggleButton
        blockId="properties"
        label="Properties"
        icon={propertiesHidden ? PanelRightOpen : PanelRightClose}
      />
    </div>
  );
}

export default function BlockVisibilityDemo() {
  return (
    <Grid id="visibility-demo" defaultLayout={blocks}>
      <DemoBlocks />
    </Grid>
  );
}
