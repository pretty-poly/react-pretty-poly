/**
 * Tabbed Views Demo
 *
 * Demonstrates integration between tabs and ViewRegistry:
 * - NewTabDropdown component to create tabs from registered views
 * - ViewRenderer component to display view components in tabs
 * - Multiple view types in a single tabbed interface
 * - View icons and categories in dropdown
 *
 * This shows how to build VS Code-style interfaces where tabs can contain different view types!
 */

import React from "react";
import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockContent } from "@/components/grid/block-content";
import { BlockHeader } from "@/components/grid/block-header";
import { BlockLayout } from "@/components/grid/block-layout";
import { BlockToolbar } from "@/components/grid/block-toolbar";
import {
  ViewRegistryProvider,
  useRegisterViews,
  type ViewDescriptor,
  type ViewProps,
} from "@pretty-poly/react";
import type { BlockConfig } from "@/lib/grid-types";
import { useGridContext } from "@/components/grid/grid-provider";
import {
  FileText,
  Code,
  Image,
  Video,
  Music,
  Terminal,
  Database,
  LineChart,
  type LucideIcon,
} from "lucide-react";

// Import the new components (demo-local versions that use demo's GridProvider)
import { NewTabDropdown } from "@/components/grid/new-tab-dropdown";
import { ViewRenderer } from "@/components/grid/view-renderer";

// ============================================================================
// Example View Components (same as view-registry-demo.tsx)
// ============================================================================

function TextEditorView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Text Editor</h3>
      <textarea
        className="flex-1 w-full p-2 border rounded resize-none font-mono text-sm"
        placeholder="Start typing..."
        defaultValue="This is a text editor view loaded from the ViewRegistry!&#10;&#10;You can create multiple tabs with different view types using the + button."
      />
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

function CodeEditorView({ blockId }: ViewProps) {
  const code = `function hello() {\n  console.log("Code Editor View!");\n  return "This view was loaded from ViewRegistry";\n}`;

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
  const images = ["🖼️", "🎨", "📸", "🌄", "🌅", "🌆", "🌇", "🌃"];

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Image Gallery</h3>
      <div className="flex-1 grid grid-cols-4 gap-2 overflow-auto">
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

function VideoPlayerView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Video Player</h3>
      <div className="flex-1 border rounded bg-black flex items-center justify-center">
        <div className="text-white/60 text-6xl">▶️</div>
      </div>
      <div className="flex gap-2 justify-center">
        <button className="px-3 py-1 border rounded hover:bg-accent text-sm">
          ⏮️ Prev
        </button>
        <button className="px-3 py-1 border rounded hover:bg-accent text-sm">
          ⏯️ Play
        </button>
        <button className="px-3 py-1 border rounded hover:bg-accent text-sm">
          ⏭️ Next
        </button>
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

function AudioMixerView({ blockId }: ViewProps) {
  const channels = ["Vocals", "Guitar", "Bass", "Drums"];

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Audio Mixer</h3>
      <div className="flex-1 flex gap-4 items-end justify-center">
        {channels.map((channel, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <input
              type="range"
              orient="vertical"
              className="h-32"
              defaultValue={70 - i * 10}
            />
            <div className="text-xs font-medium">{channel}</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

function TerminalView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-2 bg-slate-950 text-green-400 font-mono">
      <div className="text-sm">
        <div>$ ls -la</div>
        <div className="text-green-300">total 48</div>
        <div>drwxr-xr-x  12 user  staff   384 Oct 28 10:30 .</div>
        <div>drwxr-xr-x  25 user  staff   800 Oct 28 09:15 ..</div>
        <div>-rw-r--r--   1 user  staff  1234 Oct 28 10:30 index.ts</div>
        <div>-rw-r--r--   1 user  staff  5678 Oct 28 10:29 demo.tsx</div>
        <div className="mt-2">$ _</div>
      </div>
      <div className="text-xs text-muted-foreground mt-auto">Block ID: {blockId}</div>
    </div>
  );
}

function DatabaseView({ blockId }: ViewProps) {
  const data = [
    { id: 1, name: "Alice", role: "Engineer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" },
  ];

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Database</h3>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm border">
          <thead className="bg-muted">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t hover:bg-accent">
                <td className="p-2">{row.id}</td>
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

function AnalyticsView({ blockId }: ViewProps) {
  return (
    <div className="p-4 h-full flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Analytics</h3>
      <div className="grid grid-cols-3 gap-2">
        <div className="border rounded p-3">
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-xs text-muted-foreground">Users</div>
        </div>
        <div className="border rounded p-3">
          <div className="text-2xl font-bold">56.7%</div>
          <div className="text-xs text-muted-foreground">Conversion</div>
        </div>
        <div className="border rounded p-3">
          <div className="text-2xl font-bold">$89K</div>
          <div className="text-xs text-muted-foreground">Revenue</div>
        </div>
      </div>
      <div className="flex-1 border rounded flex items-center justify-center text-4xl">
        📈
      </div>
      <div className="text-xs text-muted-foreground">Block ID: {blockId}</div>
    </div>
  );
}

// ============================================================================
// View Type Definitions (with categories for grouped dropdown)
// ============================================================================

const VIEW_TYPES: ViewDescriptor[] = [
  {
    id: "text-editor",
    title: "Text Editor",
    icon: FileText,
    component: TextEditorView,
    category: "Editor",
    order: 1,
  },
  {
    id: "code-editor",
    title: "Code Editor",
    icon: Code,
    component: CodeEditorView,
    category: "Editor",
    order: 2,
  },
  {
    id: "image-gallery",
    title: "Image Gallery",
    icon: Image,
    component: ImageGalleryView,
    category: "Media",
    order: 3,
  },
  {
    id: "video-player",
    title: "Video Player",
    icon: Video,
    component: VideoPlayerView,
    category: "Media",
    order: 4,
  },
  {
    id: "audio-mixer",
    title: "Audio Mixer",
    icon: Music,
    component: AudioMixerView,
    category: "Media",
    order: 5,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: Terminal,
    component: TerminalView,
    category: "Tools",
    order: 6,
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    component: DatabaseView,
    category: "Data",
    order: 7,
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: LineChart,
    component: AnalyticsView,
    category: "Data",
    order: 8,
  },
];

// ============================================================================
// Tabbed Block Component
// ============================================================================

interface TabbedBlockProps {
  id: string;
}

function TabbedBlock({ id }: TabbedBlockProps) {
  const { getTabState, setActiveTab, closeTab, openTab } = useGridContext();
  const tabState = getTabState(id);

  // Initialize with a default tab if no tabs exist
  React.useEffect(() => {
    if (!tabState || tabState.tabs.length === 0) {
      openTab(id, {
        label: "Welcome",
        icon: FileText,
        viewType: "text-editor",
        closable: true,
      });
    }
  }, [tabState, id, openTab]);

  if (!tabState || tabState.tabs.length === 0) {
    return null;
  }

  const activeTabObj = tabState.tabs.find((t) => t.id === tabState.activeTabId);

  return (
    <Block id={id}>
      <BlockLayout>
        <BlockHeader>
          <BlockToolbar
            left={
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold">Tabbed Views Demo</h3>
                <span className="text-xs text-muted-foreground">
                  ({tabState.tabs.length} {tabState.tabs.length === 1 ? "tab" : "tabs"})
                </span>
              </div>
            }
            right={
              <div className="flex items-center gap-2">
                <NewTabDropdown blockId={id} label="+ New Tab" />
              </div>
            }
          />

          {/* Tab Bar */}
          <div className="border-t flex items-center gap-1 px-2 py-1 bg-muted/30">
            {tabState.tabs.map((tab) => {
              const Icon = tab.icon as LucideIcon | undefined;
              const isActive = tab.id === tabState.activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(id, tab.id)}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-colors
                    ${isActive
                      ? 'bg-background border shadow-sm font-medium'
                      : 'hover:bg-background/50'
                    }
                  `}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{tab.label}</span>
                  {tab.closable && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(id, tab.id);
                      }}
                      className="ml-1 hover:text-destructive"
                      aria-label={`Close ${tab.label}`}
                    >
                      ✕
                    </button>
                  )}
                </button>
              );
            })}
          </div>
        </BlockHeader>

        <BlockContent>
          {activeTabObj && activeTabObj.viewType ? (
            <ViewRenderer tab={activeTabObj} blockId={id} />
          ) : (
            <div className="p-4 text-muted-foreground">
              No view selected or view type not found.
            </div>
          )}
        </BlockContent>
      </BlockLayout>
    </Block>
  );
}

// ============================================================================
// Main Demo Component
// ============================================================================

function TabbedViewsDemoContent() {
  // Register all view types
  useRegisterViews(VIEW_TYPES);

  const blocks: BlockConfig[] = [
    {
      id: "root",
      type: "block",
      defaultSize: 100,
      sizeUnit: "percent",
    },
  ];

  return (
    <Grid id="tabbed-views-demo" defaultLayout={blocks} className="h-dvh">
      <TabbedBlock id="root" />
    </Grid>
  );
}

export default function TabbedViewsDemo() {
  return (
    <ViewRegistryProvider>
      <TabbedViewsDemoContent />
    </ViewRegistryProvider>
  );
}
