/**
 * Block Visibility Demo
 *
 * Demonstrates dynamic block hiding/showing using the new visibility API.
 * Shows how grid templates regenerate automatically when blocks are hidden.
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
} from "lucide-react";
import type { BlockConfig } from "@/lib/grid-types";

// Grid layout: sidebar | main | properties
const blocks: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "row",
    children: ["sidebar", "main", "properties"],
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
    id: "main",
    type: "block",
    parentId: "root",
    order: 1,
    defaultSize: 1,
    sizeUnit: "fr",
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
                    1. Dynamic Template Generation
                  </h3>
                  <p className="text-muted-foreground">
                    When you hide a block, the grid template CSS is regenerated
                    to exclude that block. Instead of{" "}
                    <code className="bg-white dark:bg-gray-800 px-1 rounded">
                      var(--sidebar) var(--main) var(--props)
                    </code>
                    , it becomes{" "}
                    <code className="bg-white dark:bg-gray-800 px-1 rounded">
                      var(--main) var(--props)
                    </code>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. display: none</h3>
                  <p className="text-muted-foreground">
                    Hidden blocks use{" "}
                    <code className="bg-white dark:bg-gray-800 px-1 rounded">
                      display: none
                    </code>
                    , which removes them from the grid&apos;s auto-placement flow.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Automatic Reflow</h3>
                  <p className="text-muted-foreground">
                    The remaining blocks automatically fill the available space.
                    No manual layout calculations needed!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    4. Future: Block Splitting
                  </h3>
                  <p className="text-muted-foreground">
                    This same architecture will enable splitting blocks. Add new
                    blocks to the template and fr units will naturally share the
                    space.
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
                    Properties: {propertiesHidden ? "🚫 Hidden" : "✅ Visible"}
                  </div>
                </div>
              </div>
              <div className="p-4 rounded border bg-card">
                <h3 className="font-semibold mb-2 text-sm">Grid Template</h3>
                <code className="text-xs text-muted-foreground break-all">
                  {!sidebarHidden &&
                    !propertiesHidden &&
                    "var(--sidebar) 1fr var(--props)"}
                  {sidebarHidden && !propertiesHidden && "1fr var(--props)"}
                  {!sidebarHidden && propertiesHidden && "var(--sidebar) 1fr"}
                  {sidebarHidden && propertiesHidden && "1fr"}
                </code>
              </div>
            </div>
          </div>
        </BlockContent>
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

  return (
    <div className="border-b p-4 bg-muted/30 flex gap-2 items-center">
      <strong className="text-sm mr-2">Toggle Panels:</strong>
      <ToggleButton
        blockId="sidebar"
        label="Sidebar"
        icon={sidebarHidden ? PanelLeftOpen : PanelLeftClose}
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
