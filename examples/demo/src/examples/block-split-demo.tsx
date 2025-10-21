/**
 * Block Split Demo
 *
 * Demonstrates dynamic block splitting with proper container/pane separation.
 * - Containers (groups) have toolbars and can be split
 * - Panes (blocks) are leaves with content, cannot split
 * - Grid controls entire viewport for independent scrolling
 * - All documentation inside block content
 */

import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockContent } from "@/components/grid/block-content";
import { BlockLayout } from "@/components/grid/block-layout";
import { BlockHeader } from "@/components/grid/block-header";
import { BlockToolbar } from "@/components/grid/block-toolbar";
import { BlockCloseButton } from "@/components/grid/block-close-button";
import { BlockTreeRenderer } from "@/components/grid/block-tree-renderer";
import { useGridContext } from "@/components/grid/grid-provider";
import { useRemoveBlock } from "@/hooks/use-remove-block";
import {
  SplitSquareVertical,
  SplitSquareHorizontal,
  Terminal,
  FileText,
  X,
} from "lucide-react";
import type { BlockConfig } from "@/lib/grid-types";

// ============================================================================
// Initial Layout: Two split zones (Editor Area + Terminal Area)
// ============================================================================

const initialBlocks: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "column",
    children: ["editor-area", "terminal-area"],
  },
  // Editor Area (top): Splittable container with toolbar
  {
    id: "editor-area",
    type: "group",
    direction: undefined, // Set on first split
    canSplit: true,
    hasToolbar: true,
    defaultViewType: "editor",
    children: ["welcome-pane"],
    parentId: "root",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  {
    id: "welcome-pane",
    type: "block",
    parentId: "editor-area",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  // Terminal Area (bottom): Splittable container with toolbar
  {
    id: "terminal-area",
    type: "group",
    direction: undefined, // Set on first split
    canSplit: true,
    hasToolbar: true,
    defaultViewType: "terminal",
    children: ["terminal-1"],
    parentId: "root",
    order: 1,
    defaultSize: 200,
    sizeUnit: "px",
  },
  {
    id: "terminal-1",
    type: "block",
    parentId: "terminal-area",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
];

// ============================================================================
// Content Pane Components (Leaf Blocks)
// ============================================================================

function WelcomePane({ blockId }: { blockId: string }) {
  const { removeBlock, canRemove } = useRemoveBlock();

  return (
    <Block id={blockId}>
      <BlockLayout>
        <BlockHeader>
          <BlockToolbar
            left={<h2 className="text-sm font-semibold">Welcome</h2>}
            right={
              canRemove(blockId) && (
                <BlockCloseButton
                  icon={X}
                  onClick={() => removeBlock(blockId)}
                  title="Close Pane"
                />
              )
            }
          />
        </BlockHeader>
        <BlockContent className="p-6 overflow-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">Block Splitting Demo</h1>
              <p className="text-lg text-muted-foreground">
                This demonstrates VS Code-style dynamic splitting with proper
                container/pane separation. The Grid controls the entire
                viewport, and each pane scrolls independently.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-card">
                <h2 className="text-xl font-semibold mb-3">
                  Architecture Overview
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-foreground">
                      Containers (Groups)
                    </strong>
                    <p className="text-muted-foreground">
                      Groups with{" "}
                      <code className="px-1 py-0.5 rounded bg-muted">
                        canSplit: true
                      </code>{" "}
                      can be split. They render toolbars at the container level,
                      not on individual panes.
                    </p>
                  </div>
                  <div>
                    <strong className="text-foreground">Panes (Blocks)</strong>
                    <p className="text-muted-foreground">
                      Leaf blocks that display content. They cannot be split
                      themselves. Each pane scrolls its content independently.
                    </p>
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Multiple Split Zones
                    </strong>
                    <p className="text-muted-foreground">
                      You can have multiple splittable containers in one grid
                      (e.g., editor area + terminal area), but you never split
                      inside a split.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  How to Use
                </h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li>
                    <strong>Split the Editor Area</strong>: Click &quot;Split Right&quot;
                    or &quot;Split Down&quot; in the toolbar above to create additional
                    editor panes
                  </li>
                  <li>
                    <strong>Split the Terminal Area</strong>: Scroll down and
                    use the toolbar in the terminal section to create multiple
                    terminal panes
                  </li>
                  <li>
                    <strong>Resize Panes</strong>: Drag the dividers between
                    panes to resize them
                  </li>
                  <li>
                    <strong>Independent Scrolling</strong>: Each pane scrolls
                    its content independently - this is key for maintaining
                    context
                  </li>
                </ol>
              </div>

              <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
                <h2 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-100">
                  Keyboard Shortcuts
                </h2>
                <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                  <div className="flex items-center gap-3">
                    <kbd className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 font-mono text-xs">
                      Ctrl/Cmd + \
                    </kbd>
                    <span>Split Right (vertical split)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <kbd className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 font-mono text-xs">
                      Ctrl/Cmd + Shift + \
                    </kbd>
                    <span>Split Down (horizontal split)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <h2 className="text-xl font-semibold mb-3 text-green-900 dark:text-green-100">
                  Technical Implementation
                </h2>
                <div className="space-y-3 text-sm text-green-800 dark:text-green-200">
                  <div>
                    <strong>Grid Template Generation</strong>
                    <p>
                      Containers with{" "}
                      <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900">
                        hasToolbar: true
                      </code>{" "}
                      get{" "}
                      <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900">
                        grid-template-rows: auto 1fr
                      </code>{" "}
                      for toolbar + content area
                    </p>
                  </div>
                  <div>
                    <strong>ID Generation</strong>
                    <p>
                      Uses timestamps to prevent duplicate IDs:{" "}
                      <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900">
                        editor-area-{"{timestamp}"}-1
                      </code>
                    </p>
                  </div>
                  <div>
                    <strong>View Types</strong>
                    <p>
                      New panes use{" "}
                      <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900">
                        defaultViewType
                      </code>{" "}
                      from container config (e.g., &quot;editor&quot; or &quot;terminal&quot;)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra content to demonstrate scrolling */}
            <div className="space-y-4 pt-8">
              <h2 className="text-2xl font-bold">Scroll Down to See More</h2>
              <p className="text-muted-foreground">
                This demonstrates independent scrolling within panes. Each pane
                maintains its own scroll position, allowing you to view multiple
                sections simultaneously.
              </p>

              {[...Array(15) as undefined[]].map((_, i) => (
                <div key={i} className="p-4 border rounded bg-card">
                  <h3 className="font-semibold mb-2">Content Block {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                    This is scrollable content block {i + 1}. Notice how each
                    pane can scroll independently, maintaining context across
                    multiple views. This is the core benefit of polymorphic grid
                    layouts.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </BlockContent>
      </BlockLayout>
    </Block>
  );
}

function EditorPane({ blockId }: { blockId: string }) {
  const { removeBlock, canRemove } = useRemoveBlock();

  return (
    <Block id={blockId}>
      <BlockLayout>
        <BlockHeader>
          <BlockToolbar
            left={<h2 className="text-sm font-semibold">Editor</h2>}
            right={
              canRemove(blockId) && (
                <BlockCloseButton
                  icon={X}
                  onClick={() => removeBlock(blockId)}
                  title="Close Pane"
                />
              )
            }
          />
        </BlockHeader>
        <BlockContent className="p-6 overflow-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-3">Editor Pane {blockId}</h2>
              <p className="text-muted-foreground">
                This is a dynamically created editor pane. In a real
                application, this could display file contents, a text editor, or
                any other view type registered via ViewRegistry.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-card font-mono text-sm">
              <div className="text-green-600 dark:text-green-400">
                // Example code content
              </div>
              <div className="text-blue-600 dark:text-blue-400">function</div>{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                greet
              </span>
              <span>(</span>
              <span className="text-purple-600 dark:text-purple-400">name</span>
              <span className="text-gray-600 dark:text-gray-400">: string</span>
              <span>) {"{"}</span>
              <div className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
                <span className="text-green-600 dark:text-green-400">
                  `Hello, ${"{name}"}!`
                </span>
                ;
              </div>
              <span>{"}"}</span>
            </div>

            <div className="text-xs text-muted-foreground">
              <strong>Block ID:</strong>{" "}
              <code className="px-1 py-0.5 rounded bg-muted">{blockId}</code>
            </div>

            {/* Add scrollable content */}
            {[...Array(10) as undefined[]].map((_, i) => (
              <div key={i} className="p-3 border rounded bg-muted/50">
                <p className="text-sm">Editor content line {i + 1}</p>
              </div>
            ))}
          </div>
        </BlockContent>
      </BlockLayout>
    </Block>
  );
}

function TerminalPane({ blockId }: { blockId: string }) {
  const { removeBlock, canRemove } = useRemoveBlock();

  return (
    <Block id={blockId}>
      <BlockLayout>
        <BlockHeader>
          <BlockToolbar
            left={<h2 className="text-sm font-semibold text-green-400">Terminal</h2>}
            right={
              canRemove(blockId) && (
                <BlockCloseButton
                  icon={X}
                  onClick={() => removeBlock(blockId)}
                  title="Close Pane"
                />
              )
            }
          />
        </BlockHeader>
        <BlockContent className="p-4 overflow-auto bg-black dark:bg-gray-950 font-mono text-sm">
          <div className="text-green-400">
            <div>$ pretty-poly --version</div>
            <div className="text-gray-400">v0.1.0-alpha</div>
            <div className="mt-4">$ npm run dev</div>
            <div className="text-gray-400">
              &gt; Starting development server...
            </div>
            <div className="text-gray-400">
              &gt; Server running at http://localhost:5173
            </div>
            <div className="mt-4">$ # Terminal pane: {blockId}</div>
            <div className="text-gray-400">
              $ # This is a dynamically created terminal pane
            </div>
            <div className="mt-4">
              $ <span className="animate-pulse">_</span>
            </div>

            {/* Add scrollable terminal content */}
            {[...Array(20) as undefined[]].map((_, i) => (
              <div key={i} className="mt-2 text-gray-500">
                [LOG] Terminal output line {i + 1}
              </div>
            ))}
          </div>
        </BlockContent>
      </BlockLayout>
    </Block>
  );
}

// ============================================================================
// Empty State Components
// ============================================================================

function EditorEmptyState({ blockId }: { blockId: string }) {
  return (
    <Block id={blockId}>
      <BlockLayout>
        <BlockContent className="flex flex-col items-center justify-center h-full gap-4 p-6">
          <FileText className="w-16 h-16 text-muted-foreground" />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg">No Editor Panes</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              All editor panes have been closed. Click &quot;Split Right&quot; or &quot;Split
              Down&quot; in the toolbar above to create new editor panes.
            </p>
          </div>
          <div className="text-xs text-muted-foreground">
            Block ID: <code className="px-1 py-0.5 rounded bg-muted">{blockId}</code>
          </div>
        </BlockContent>
      </BlockLayout>
    </Block>
  );
}

function TerminalEmptyState({ blockId }: { blockId: string }) {
  return (
    <Block id={blockId}>
      <BlockLayout>
        <BlockContent className="flex flex-col items-center justify-center h-full gap-4 p-6 bg-black dark:bg-gray-950">
          <Terminal className="w-16 h-16 text-green-400/50" />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg text-green-400">No Terminal Panes</h3>
            <p className="text-sm text-green-400/70 max-w-md">
              All terminal panes have been closed. Click &quot;Split Right&quot; or &quot;Split
              Down&quot; in the toolbar above to create new terminal panes.
            </p>
          </div>
          <div className="text-xs text-green-400/50">
            Block ID: <code className="px-1 py-0.5 rounded bg-gray-800">{blockId}</code>
          </div>
        </BlockContent>
      </BlockLayout>
    </Block>
  );
}

// ============================================================================
// Main Demo Component
// ============================================================================

function BlockSplitDemoContent() {
  const { state } = useGridContext();

  return (
    <BlockTreeRenderer
      blockId="root"
      renderBlock={(block, blockId) => {
        // Check viewType first (for empty states)
        if (block.viewType === "editor-empty") {
          return <EditorEmptyState blockId={blockId} />;
        }
        if (block.viewType === "terminal-empty") {
          return <TerminalEmptyState blockId={blockId} />;
        }

        // Then check parent/block ID for normal panes
        const parentBlock = block.parentId ? state.blocks[block.parentId] : null;
        const isEditorPane = parentBlock?.id === "editor-area";
        const isTerminalPane = parentBlock?.id === "terminal-area";
        const isWelcomePane = blockId === "welcome-pane";

        if (isWelcomePane) return <WelcomePane blockId={blockId} />;
        if (isEditorPane) return <EditorPane blockId={blockId} />;
        if (isTerminalPane) return <TerminalPane blockId={blockId} />;

        // Fallback
        return <EditorPane blockId={blockId} />;
      }}
      getSplitContainerProps={(block, blockId) => ({
        label: blockId === "editor-area" ? "Editor Area" : "Terminal Area",
        icon: blockId === "editor-area" ? FileText : Terminal,
        splitButtonIcons: {
          vertical: SplitSquareVertical,
          horizontal: SplitSquareHorizontal,
        },
      })}
    />
  );
}

export default function BlockSplitDemo() {
  return (
    <Grid defaultLayout={initialBlocks} className="h-dvh">
      <BlockSplitDemoContent />
    </Grid>
  );
}
