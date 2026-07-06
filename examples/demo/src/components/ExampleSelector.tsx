import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutPreview } from "./LayoutPreview";
import BasicDashboard from "../examples/basic-dashboard";
import IDELayout from "../examples/ide-layout";
import EmailClient from "../examples/email-client";
import MusicDAW from "../examples/music-daw";
import FileManager from "../examples/file-manager";
import FixedSidebar from "../examples/fixed-sidebar";
import { ViewRegistryDemoWrapper } from "../examples/view-registry-demo";
import { CommandServiceDemoWrapper } from "../examples/command-service-demo";
import PrimitivesDemo from "../examples/primitives-demo";
import BlockVisibilityDemo from "../examples/block-visibility-demo";
import BlockSplitDemo from "../examples/block-split-demo";
import TabbedEditorDemo from "../examples/tabbed-editor-demo";
import TabbedViewsDemo from "../examples/tabbed-views-demo";
import SplitTabsDemo from "../examples/split-tabs-demo";

interface ExampleInfo {
  name: string;
  description: string;
  component: React.ComponentType;
  key: string;
}

type PreviewLayout = React.ComponentProps<typeof LayoutPreview>["layout"];

const previewLayouts: Partial<Record<string, PreviewLayout>> = {
  "basic-dashboard": "basic-dashboard",
  "email-client": "email-client",
  "file-manager": "file-manager",
  "ide-layout": "ide-layout",
  "music-daw": "music-daw",
  "fixed-sidebar": "fixed-sidebar",
};

const examples: ExampleInfo[] = [
  {
    name: "Basic Dashboard",
    description:
      "Three-panel dashboard with navigation, main content, and activity context",
    component: BasicDashboard,
    key: "basic-dashboard",
  },
  {
    name: "Email Client",
    description:
      "Mailbox workflow with folder list, message list, and preview pane",
    component: EmailClient,
    key: "email-client",
  },
  {
    name: "File Manager",
    description:
      "File browser with folder tree, file list, and metadata panel",
    component: FileManager,
    key: "file-manager",
  },
  {
    name: "IDE Layout",
    description:
      "Dense developer workspace with file tree, editor, terminal, and details",
    component: IDELayout,
    key: "ide-layout",
  },
  {
    name: "Music DAW",
    description:
      "Audio production layout with tracks, timeline, editor, and mixer",
    component: MusicDAW,
    key: "music-daw",
  },
  {
    name: "Fixed Sidebar",
    description:
      "Fixed navigation panel with adjustable work and properties areas",
    component: FixedSidebar,
    key: "fixed-sidebar",
  },
  {
    name: "Block Visibility",
    description:
      "Toggle optional panels while the grid recalculates the remaining space",
    component: BlockVisibilityDemo,
    key: "block-visibility-demo",
  },
  {
    name: "Block Splitting Experiment",
    description:
      "Under-review runtime panel splitting behavior for adding workspace context",
    component: BlockSplitDemo,
    key: "block-split-demo",
  },
  {
    name: "Tabbed Panel Experiment",
    description:
      "Under-review tab strip behavior for multiple related panel contexts",
    component: TabbedEditorDemo,
    key: "tabbed-editor-demo",
  },
  {
    name: "Tabbed Views Experiment",
    description:
      "Under-review registry-backed tab content workflow",
    component: TabbedViewsDemo,
    key: "tabbed-views-demo",
  },
  {
    name: "Split Tabs Experiment",
    description:
      "Under-review composition of runtime panel splitting and tabbed content",
    component: SplitTabsDemo,
    key: "split-tabs-demo",
  },
  {
    name: "View Registry Experiment",
    description:
      "Under-review component lookup helper for rendering registered view types",
    component: ViewRegistryDemoWrapper,
    key: "view-registry-demo",
  },
  {
    name: "Action Helper Experiment",
    description:
      "Under-review action helper source that may be removed from the public registry",
    component: CommandServiceDemoWrapper,
    key: "command-service-demo",
  },
  {
    name: "Combined Helpers Experiment",
    description:
      "Under-review combination of view lookup, action helpers, and saved layout helpers",
    component: PrimitivesDemo,
    key: "primitives-demo",
  },
];

function ExperimentPreview() {
  return (
    <div className="grid grid-cols-[1fr_80px] grid-rows-[1fr_42px] gap-1 h-32 w-full bg-slate-50 p-2 rounded-lg border border-slate-200">
      <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
        <div className="h-2 bg-slate-300 rounded w-1/3"></div>
        <div className="grid grid-cols-2 gap-1 flex-1">
          <div className="bg-blue-50 rounded border border-blue-200"></div>
          <div className="bg-amber-50 rounded border border-amber-200"></div>
        </div>
      </div>
      <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
        <div className="h-2 bg-slate-300 rounded"></div>
        <div className="h-1 bg-slate-200 rounded"></div>
        <div className="h-1 bg-slate-200 rounded w-2/3"></div>
      </div>
      <div className="col-span-2 bg-slate-900 rounded p-2 flex items-center gap-1">
        <div className="h-2 bg-slate-700 rounded w-20"></div>
        <div className="h-2 bg-slate-700 rounded w-16"></div>
        <div className="h-2 bg-slate-700 rounded w-12"></div>
      </div>
    </div>
  );
}

export default function ExampleSelector() {
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [showSelector, setShowSelector] = useState<boolean>(true);

  // Check URL for example parameter and handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const exampleParam = urlParams.get("example");

      if (exampleParam && examples.find((ex) => ex.key === exampleParam)) {
        setSelectedExample(exampleParam);
        setShowSelector(false);
      } else {
        setSelectedExample("");
        setShowSelector(true);
      }
    };

    // Handle initial load
    handlePopState();

    // Listen for browser back/forward button
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Update URL when example changes
  const selectExample = (key: string) => {
    setSelectedExample(key);
    setShowSelector(false);

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?example=${key}`;
    window.history.pushState({}, "", newUrl);
  };

  // If an example is selected, show it full page
  if (!showSelector && selectedExample) {
    const currentExample = examples.find((ex) => ex.key === selectedExample);
    if (currentExample) {
      const ExampleComponent = currentExample.component;

      return <ExampleComponent />;
    }
  }

  // Show example selector
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            PrettyPoly Demo Examples
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interactive examples showing how PrettyPoly panels fit into normal
            React app workflows. Advanced experiments are kept at the end while
            their public API shape is reviewed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example) => {
            const previewLayout = previewLayouts[example.key];

            return (
              <Card
                key={example.key}
                data-testid="example-card"
                data-example-key={example.key}
                className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
                onClick={() => selectExample(example.key)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{example.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {previewLayout ? (
                    <LayoutPreview layout={previewLayout} />
                  ) : (
                    <ExperimentPreview />
                  )}
                  <Button variant="outline" className="w-full">
                    View Example →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <p className="text-blue-800 text-sm">
                <strong>Tip:</strong> Each example runs in full-page mode. Try
                resizing panels by dragging dividers and double-clicking to
                collapse or expand sections.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
