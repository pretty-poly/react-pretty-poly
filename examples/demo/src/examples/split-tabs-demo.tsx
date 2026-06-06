/**
 * Split + Tabs Demo
 *
 * Demonstrates VS Code-style interface combining:
 * - Split containers with dynamic pane creation
 * - Tabbed interface within each split pane
 * - ViewRegistry integration for tab content
 * - Independent tab management per pane
 *
 * Architecture:
 * - Container (Group): Has toolbar with split buttons
 * - Panes (Blocks): Each has independent tab bar + ViewRenderer
 * - Tabs: Managed independently per pane
 * - Views: Rendered via ViewRegistry
 */

import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockContent } from "@/components/grid/block-content";
import { BlockLayout } from "@/components/grid/block-layout";
import { BlockHeader } from "@/components/grid/block-header";
import { BlockTreeRenderer } from "@/components/grid/block-tree-renderer";
import { useGridContext } from "@/components/grid/grid-provider";
import { BlockTabs } from "@/components/grid/block-tabs";
import { NewTabDropdown } from "@/components/grid/new-tab-dropdown";
import { ViewRenderer } from "@/components/grid/view-renderer";
import { BlockCloseButton } from "@/components/grid/block-close-button";
import { useRemoveBlock } from "@/hooks/use-remove-block";
import {
  ViewRegistryProvider,
  useRegisterViews,
  type ViewDescriptor,
  type ViewProps,
} from "@/lib/view-registry";
import type { BlockConfig } from "@/lib/grid-types";
import {
  SplitSquareVertical,
  SplitSquareHorizontal,
  FileText,
  Code,
  Image,
  Terminal,
  X,
  Plus,
} from "lucide-react";

// ============================================================================
// View Components (registered with ViewRegistry)
// ============================================================================

function WelcomeView(_props: ViewProps) {
  return (
    <div className="p-6 overflow-auto h-full">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">Split + Tabs Demo</h1>
          <p className="text-lg text-muted-foreground">
            This demonstrates VS Code-style interface with split panes and tabs.
            Each split pane has its own independent tab bar!
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
              How to Use
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>
                <strong>Split Panes</strong>: Click &quot;Split Right&quot; or &quot;Split Down&quot;
                in the container toolbar above to create new panes
              </li>
              <li>
                <strong>Add Tabs</strong>: Click the + button in each pane&apos;s tab bar
                to open new tabs (multiple view types available)
              </li>
              <li>
                <strong>Switch Tabs</strong>: Click tabs or use Ctrl/Cmd+Tab keyboard
                shortcuts
              </li>
              <li>
                <strong>Independent Management</strong>: Each split pane manages its
                own tabs independently
              </li>
              <li>
                <strong>Close Panes/Tabs</strong>: Use X buttons to close individual
                tabs or entire panes
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
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 font-mono text-xs">
                  Ctrl/Cmd + Tab
                </kbd>
                <span>Next Tab</span>
              </div>
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 font-mono text-xs">
                  Ctrl/Cmd + Shift + Tab
                </kbd>
                <span>Previous Tab</span>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <h2 className="text-xl font-semibold mb-3 text-green-900 dark:text-green-100">
              Architecture
            </h2>
            <div className="space-y-3 text-sm text-green-800 dark:text-green-200">
              <div>
                <strong>Container (Group)</strong>
                <p>
                  Split containers manage pane layout and have toolbar with split buttons
                </p>
              </div>
              <div>
                <strong>Panes (Blocks)</strong>
                <p>
                  Each pane is an independent block with its own tab bar and tab state
                </p>
              </div>
              <div>
                <strong>Tabs</strong>
                <p>
                  Tabs within a pane are managed independently - no cross-pane interference
                </p>
              </div>
              <div>
                <strong>Views</strong>
                <p>
                  Tab content is rendered via ViewRegistry - supports multiple view types
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-bold">Scroll to Test</h2>
          <p className="text-muted-foreground">
            Each pane scrolls independently while maintaining tab state.
          </p>

          {[...Array(10) as undefined[]].map((_, i) => (
            <div key={i} className="p-4 border rounded bg-card">
              <h3 className="font-semibold mb-2">Content Block {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Scrollable content to demonstrate independent scrolling per pane.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TextEditorView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Text Editor</h3>
      <textarea
        className="flex-1 w-full p-2 border rounded resize-none font-mono text-sm"
        placeholder="Start typing..."
        defaultValue="This is a text editor view in a split pane!&#10;&#10;Each pane has independent tabs. Try:&#10;1. Creating more tabs in this pane&#10;2. Splitting to create another pane&#10;3. Adding tabs to the new pane&#10;&#10;All tab state is managed independently per pane!"
      />
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

function CodeEditorView({ blockId }: ViewProps) {
  const code = `// Code Editor in Split Pane
function demonstrateSplitTabs() {
  const panes = ["pane-1", "pane-2", "pane-3"];

  panes.forEach(pane => {
    console.log(\`Pane \${pane} has independent tabs!\`);
  });

  return "Each pane = separate editor group";
}`;

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Code Editor</h3>
      <div className="flex-1 border rounded p-2 bg-slate-950 text-green-400 font-mono text-sm overflow-auto">
        <pre>{code}</pre>
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

function ImageGalleryView({ blockId }: ViewProps) {
  const images = ["🖼️", "🎨", "📸", "🌄", "🌅", "🌆"];

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Image Gallery</h3>
      <div className="flex-1 grid grid-cols-3 gap-2 overflow-auto">
        {images.map((emoji, i) => (
          <div
            key={i}
            className="aspect-square border rounded flex items-center justify-center text-4xl hover:bg-accent cursor-pointer transition-colors"
          >
            {emoji}
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

function TerminalView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-2 bg-slate-950 text-green-400 font-mono text-sm">
      <div>
        <div>$ pretty-poly split-tabs-demo</div>
        <div className="text-gray-400 mt-2">
          &gt; Split panes initialized
        </div>
        <div className="text-gray-400">
          &gt; Tab bars created per pane
        </div>
        <div className="text-gray-400">
          &gt; ViewRegistry connected
        </div>
        <div className="text-green-400 mt-2">✓ Everything works!</div>
        <div className="mt-4">$ # Block ID: {blockId}</div>
        <div className="mt-2">
          $ <span className="animate-pulse">_</span>
        </div>
      </div>
      <div className="text-xs text-green-400/50 mt-auto">
        Terminal in split pane with tabs
      </div>
    </div>
  );
}

// Empty state when pane has no tabs
function EmptyPaneView({ blockId }: ViewProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 p-6 bg-muted/30">
      <Plus className="w-16 h-16 text-muted-foreground/50" />
      <div className="text-center space-y-2">
        <h3 className="font-semibold text-lg text-muted-foreground">No Tabs Open</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          This pane has no tabs. Click the <strong>+</strong> button in the tab bar
          above to create a new tab with your choice of view type.
        </p>
      </div>
      <div className="text-xs text-muted-foreground/70">
        Block ID: <code className="px-1 py-0.5 rounded bg-muted">{blockId}</code>
      </div>
    </div>
  );
}

// ============================================================================
// Initial Layout
// ============================================================================

const initialBlocks: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "row",
    children: ["editor-area"],
  },
  // Editor Area: Splittable container
  {
    id: "editor-area",
    type: "group",
    direction: undefined, // Set on first split
    canSplit: true,
    hasToolbar: true,
    defaultViewType: "empty-pane",
    children: ["pane-1"],
    parentId: "root",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  // Initial pane with welcome tab
  {
    id: "pane-1",
    type: "block",
    parentId: "editor-area",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
    tabState: {
      tabs: [
        {
          id: "welcome-tab",
          viewType: "welcome",
          label: "Welcome",
          icon: FileText,
        },
      ],
      activeTabId: "welcome-tab",
      history: ["welcome-tab"],
      historyIndex: 0,
      scrollOffset: 0,
    },
  },
];

// ============================================================================
// View Registry Setup
// ============================================================================

const VIEW_DESCRIPTORS: ViewDescriptor[] = [
  {
    id: "welcome",
    title: "Welcome",
    component: WelcomeView,
    icon: FileText,
    category: "Editor",
    order: 0,
  },
  {
    id: "text-editor",
    title: "Text Editor",
    component: TextEditorView,
    icon: FileText,
    category: "Editor",
    order: 1,
  },
  {
    id: "code-editor",
    title: "Code Editor",
    component: CodeEditorView,
    icon: Code,
    category: "Editor",
    order: 2,
  },
  {
    id: "image-gallery",
    title: "Image Gallery",
    component: ImageGalleryView,
    icon: Image,
    category: "Media",
    order: 3,
  },
  {
    id: "terminal",
    title: "Terminal",
    component: TerminalView,
    icon: Terminal,
    category: "Tools",
    order: 4,
  },
  {
    id: "empty-pane",
    title: "Empty Pane",
    component: EmptyPaneView,
    icon: Plus,
    category: "System",
    order: 999,
  },
];

// ============================================================================
// Pane Component (Block with Tabs)
// ============================================================================

function EditorPane({ blockId }: { blockId: string }) {
  const { setActiveTab, closeTab, navigateTabHistory, getTabState } = useGridContext();
  const { removeBlock, canRemove } = useRemoveBlock();
  const tabState = getTabState(blockId);
  const hasNoTabs = !tabState || tabState.tabs.length === 0;

  // Get active tab
  const activeTab = tabState?.tabs.find(t => t.id === tabState.activeTabId);

  // Tab operations
  const handleTabChange = (tabId: string) => {
    setActiveTab(blockId, tabId);
  };

  const handleTabClose = (tabId: string) => {
    closeTab(blockId, tabId);
  };

  const handleNavigateBack = () => {
    navigateTabHistory(blockId, 'back');
  };

  const handleNavigateForward = () => {
    navigateTabHistory(blockId, 'forward');
  };

  return (
    <Block id={blockId}>
      <BlockLayout>
        {/* Tab bar in header */}
        <BlockHeader>
          {hasNoTabs ? (
            // Show simple toolbar when no tabs
            <div className="flex items-center justify-between px-3 py-2 border-b">
              <span className="text-sm text-muted-foreground">No Tabs</span>
              <div className="flex items-center gap-1">
                <NewTabDropdown blockId={blockId} />
                {canRemove(blockId) && (
                  <BlockCloseButton
                    icon={X}
                    onClick={() => removeBlock(blockId)}
                    title="Close Pane"
                    className="ml-1"
                  />
                )}
              </div>
            </div>
          ) : (
            // Show tab bar when tabs exist
            <BlockTabs
              tabs={tabState.tabs}
              activeTab={tabState.activeTabId}
              onTabChange={handleTabChange}
              onTabClose={handleTabClose}
              showNavigation={true}
              onNavigateBack={handleNavigateBack}
              onNavigateForward={handleNavigateForward}
              canGoBack={tabState.historyIndex > 0}
              canGoForward={tabState.historyIndex < tabState.history.length - 1}
              allowOverflow={true}
              actions={
                <div className="flex items-center gap-1">
                  <NewTabDropdown blockId={blockId} />
                  {canRemove(blockId) && (
                    <BlockCloseButton
                      icon={X}
                      onClick={() => removeBlock(blockId)}
                      title="Close Pane"
                      className="ml-1"
                    />
                  )}
                </div>
              }
            />
          )}
        </BlockHeader>

        {/* Tab content via ViewRenderer */}
        <BlockContent>
          {hasNoTabs ? (
            <EmptyPaneView blockId={blockId} viewId="empty-pane" />
          ) : activeTab ? (
            <ViewRenderer tab={activeTab} blockId={blockId} />
          ) : null}
        </BlockContent>
      </BlockLayout>
    </Block>
  );
}

// ============================================================================
// Main Demo Component
// ============================================================================

function SplitTabsDemoContent() {
  const { state } = useGridContext();

  return (
    <BlockTreeRenderer
      blockId="root"
      renderBlock={(_blockConfig, blockId) => {
        // All panes in editor-area get tabs
        const block = state.blocks[blockId];
        const parentBlock = block?.parentId ?
          state.blocks[block.parentId] :
          null;

        if (parentBlock?.id === "editor-area") {
          return <EditorPane blockId={blockId} />;
        }

        // Fallback
        return <EditorPane blockId={blockId} />;
      }}
      getSplitContainerProps={() => ({
        label: "Editor",
        icon: FileText,
        splitButtonIcons: {
          vertical: SplitSquareVertical,
          horizontal: SplitSquareHorizontal,
        },
      })}
    />
  );
}

function SplitTabsDemoWrapper() {
  // Register all view types before Grid renders
  useRegisterViews(VIEW_DESCRIPTORS);

  return (
    <Grid defaultLayout={initialBlocks} className="h-dvh">
      <SplitTabsDemoContent />
    </Grid>
  );
}

export default function SplitTabsDemo() {
  return (
    <ViewRegistryProvider>
      <SplitTabsDemoWrapper />
    </ViewRegistryProvider>
  );
}
