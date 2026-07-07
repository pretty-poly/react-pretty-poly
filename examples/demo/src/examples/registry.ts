import type React from "react";
import BasicDashboard from "./basic-dashboard";
import BlockSplitDemo from "./block-split-demo";
import BlockVisibilityDemo from "./block-visibility-demo";
import { CommandServiceDemoWrapper } from "./command-service-demo";
import EmailClient from "./email-client";
import FileManager from "./file-manager";
import FixedSidebar from "./fixed-sidebar";
import IDELayout from "./ide-layout";
import MusicDAW from "./music-daw";
import PrimitivesDemo from "./primitives-demo";
import SplitTabsDemo from "./split-tabs-demo";
import TabbedEditorDemo from "./tabbed-editor-demo";
import TabbedViewsDemo from "./tabbed-views-demo";
import { ViewRegistryDemoWrapper } from "./view-registry-demo";

import basicDashboardSource from "./basic-dashboard.tsx?raw";
import blockSplitDemoSource from "./block-split-demo.tsx?raw";
import blockVisibilityDemoSource from "./block-visibility-demo.tsx?raw";
import commandServiceDemoSource from "./command-service-demo.tsx?raw";
import emailClientSource from "./email-client.tsx?raw";
import fileManagerSource from "./file-manager.tsx?raw";
import fixedSidebarSource from "./fixed-sidebar.tsx?raw";
import ideLayoutSource from "./ide-layout.tsx?raw";
import musicDawSource from "./music-daw.tsx?raw";
import primitivesDemoSource from "./primitives-demo.tsx?raw";
import splitTabsDemoSource from "./split-tabs-demo.tsx?raw";
import tabbedEditorDemoSource from "./tabbed-editor-demo.tsx?raw";
import tabbedViewsDemoSource from "./tabbed-views-demo.tsx?raw";
import viewRegistryDemoSource from "./view-registry-demo.tsx?raw";

export type ExampleStatus = "stable" | "under-review";
export type ExampleCategory = "app-patterns" | "dense-context" | "under-review";

export interface ExampleDefinition {
  id: string;
  title: string;
  navTitle: string;
  description: string;
  category: ExampleCategory;
  status: ExampleStatus;
  component: React.ComponentType;
  source: string;
  apiNotes: string[];
  anatomy: string[];
  implementationNotes: string[];
}

export const DEFAULT_EXAMPLE_ID = "basic-dashboard";

export const exampleCategories: Array<{
  id: ExampleCategory;
  title: string;
  description: string;
}> = [
  {
    id: "app-patterns",
    title: "Normal App Patterns",
    description: "Everyday React workflows that need optional panel context.",
  },
  {
    id: "dense-context",
    title: "Dense Context Tools",
    description: "Richer task surfaces where several panels work together.",
  },
  {
    id: "under-review",
    title: "Under Review",
    description: "Experimental helpers whose public API shape is not settled.",
  },
];

export const examples: ExampleDefinition[] = [
  {
    id: "basic-dashboard",
    title: "Basic Dashboard",
    navTitle: "Dashboard",
    description:
      "A normal application dashboard with navigation, primary content, and activity context that can resize as the task changes.",
    category: "app-patterns",
    status: "stable",
    component: BasicDashboard,
    source: basicDashboardSource,
    apiNotes: ["Grid", "Block", "BlockLayout", "BlockHeader", "BlockContent"],
    anatomy: [
      "Root row grid with a fixed navigation block, flexible main block, and contextual activity block.",
      "Automatic overlay dividers keep resizing out of the CSS grid template.",
      "Panel content stays ordinary React markup inside PrettyPoly blocks.",
    ],
    implementationNotes: [
      "Use this shape when the app already has real navigation and content, but benefits from adjustable context panels.",
      "The example keeps application state local; PrettyPoly owns panel sizing and divider interaction only.",
    ],
  },
  {
    id: "email-client",
    title: "Email Client",
    navTitle: "Email Client",
    description:
      "A mailbox workflow with folders, a message list, and a preview pane arranged as resizable task context.",
    category: "app-patterns",
    status: "stable",
    component: EmailClient,
    source: emailClientSource,
    apiNotes: ["Grid", "Block", "DividerOverlay", "BlockContent"],
    anatomy: [
      "Three sibling blocks model folder navigation, list scanning, and focused reading.",
      "The preview remains a normal component; the grid only decides how much space it receives.",
      "The layout is useful for any inbox-like workflow with progressive detail.",
    ],
    implementationNotes: [
      "The example shows PrettyPoly fitting inside a familiar product surface rather than defining the product shell.",
      "Panel resizing is independent from the selected message and folder state.",
    ],
  },
  {
    id: "file-manager",
    title: "File Manager",
    navTitle: "File Manager",
    description:
      "A file browser with folder navigation and a large work area that can grow while preserving app context.",
    category: "app-patterns",
    status: "stable",
    component: FileManager,
    source: fileManagerSource,
    apiNotes: ["Grid", "Block", "BlockHeader", "BlockContent"],
    anatomy: [
      "A fixed folder sidebar and flexible file table use the same block primitives.",
      "The demo behaves like a full-page app inside the docs iframe.",
      "PrettyPoly adds resizing without requiring a special file-management framework.",
    ],
    implementationNotes: [
      "Use this pattern for asset browsers, media libraries, or other list-plus-context tools.",
      "The app keeps its own breadcrumb, selection, and table rendering.",
    ],
  },
  {
    id: "ide-layout",
    title: "IDE Layout",
    navTitle: "IDE Layout",
    description:
      "A dense developer-style task surface with file context, editor space, terminal output, and supporting details.",
    category: "dense-context",
    status: "stable",
    component: IDELayout,
    source: ideLayoutSource,
    apiNotes: ["Grid", "Block", "Nested blocks", "Automatic dividers"],
    anatomy: [
      "Nested groups combine side context, primary work, lower output, and supporting detail.",
      "The example demonstrates density without requiring PrettyPoly to own commands, files, or editor behavior.",
      "Nested block ids give the divider overlay stable measurement targets.",
    ],
    implementationNotes: [
      "Use this as a pattern for any context-heavy tool, not as a target product model.",
      "Keep domain actions in the app; PrettyPoly stays responsible for panel structure and resize behavior.",
    ],
  },
  {
    id: "music-daw",
    title: "Music DAW",
    navTitle: "Music DAW",
    description:
      "An audio production layout with tracks, timeline, editor, and mixer areas that need simultaneous context.",
    category: "dense-context",
    status: "stable",
    component: MusicDAW,
    source: musicDawSource,
    apiNotes: ["Grid", "Block", "Nested groups", "BlockContent"],
    anatomy: [
      "Multiple work panels share one dense editing surface.",
      "The grid models spatial relationships while the app owns playback, tracks, and controls.",
      "Nested regions keep the interface useful without forcing a monolithic app shell.",
    ],
    implementationNotes: [
      "This is a stress case for rich app composition rather than an endorsement of audio-specific primitives.",
      "It shows how PrettyPoly can support specialized products by staying small.",
    ],
  },
  {
    id: "fixed-sidebar",
    title: "Fixed Sidebar",
    navTitle: "Fixed Sidebar",
    description:
      "A fixed navigation area with adjustable work and properties regions for app surfaces that need one stable anchor.",
    category: "dense-context",
    status: "stable",
    component: FixedSidebar,
    source: fixedSidebarSource,
    apiNotes: ["Grid", "Block", "fixed px sizing", "flexible fr sizing"],
    anatomy: [
      "A non-resizable anchor panel sits beside adjustable work and detail space.",
      "Mixed px and fr sizes let the app decide which areas are fixed and which should flex.",
      "The pattern keeps ordinary app navigation outside PrettyPoly's responsibilities.",
    ],
    implementationNotes: [
      "Use fixed blocks for app chrome that should stay predictable.",
      "Let detail panels resize when the user needs more context for the current task.",
    ],
  },
  {
    id: "block-visibility-demo",
    title: "Block Visibility",
    navTitle: "Block Visibility",
    description:
      "A focused example for toggling optional panels while remaining grid space is reconciled.",
    category: "under-review",
    status: "under-review",
    component: BlockVisibilityDemo,
    source: blockVisibilityDemoSource,
    apiNotes: ["hideBlock", "showBlock", "toggleBlockVisibility"],
    anatomy: [
      "Optional blocks can be hidden without leaving dead grid space.",
      "The remaining visible blocks recalculate their share of the layout.",
      "The behavior is useful, but its final public shape still needs pressure from real integrations.",
    ],
    implementationNotes: [
      "Treat this as an API review target, not the stable center of the package.",
      "The important question is whether visibility belongs in PrettyPoly or should stay app-owned.",
    ],
  },
  {
    id: "block-split-demo",
    title: "Block Splitting Experiment",
    navTitle: "Block Splitting",
    description:
      "An under-review experiment for adding panels at runtime when a task needs more local context.",
    category: "under-review",
    status: "under-review",
    component: BlockSplitDemo,
    source: blockSplitDemoSource,
    apiNotes: ["splitBlock", "unsplitBlock", "canSplit"],
    anatomy: [
      "A block can become a group with two child panels.",
      "The reducer tracks runtime structure after the split.",
      "This is powerful, but it risks pulling app state decisions into PrettyPoly.",
    ],
    implementationNotes: [
      "Review whether runtime structure changes are a primitive or an app concern.",
      "If retained, keep the API smaller than a full application layout system.",
    ],
  },
  {
    id: "tabbed-editor-demo",
    title: "Tabbed Panel Experiment",
    navTitle: "Tabbed Panel",
    description:
      "An under-review tab strip for multiple related panel contexts inside one block.",
    category: "under-review",
    status: "under-review",
    component: TabbedEditorDemo,
    source: tabbedEditorDemoSource,
    apiNotes: ["BlockTabs", "openTab", "closeTab", "setActiveTab"],
    anatomy: [
      "Tabs keep related views inside one block instead of creating new columns.",
      "The grid and tab state currently meet at block-level APIs.",
      "The review question is whether tabs should remain an optional helper.",
    ],
    implementationNotes: [
      "Use this for evaluating API pressure, not as the recommended starting point.",
      "The long-term direction should avoid making PrettyPoly own document or view lifecycles.",
    ],
  },
  {
    id: "tabbed-views-demo",
    title: "Tabbed Views Experiment",
    navTitle: "Tabbed Views",
    description:
      "An under-review registry-backed tab workflow for rendering related view types.",
    category: "under-review",
    status: "under-review",
    component: TabbedViewsDemo,
    source: tabbedViewsDemoSource,
    apiNotes: ["ViewRegistry", "ViewRenderer", "BlockTabs"],
    anatomy: [
      "Registered view types can be rendered from block or tab state.",
      "The helper may be useful as a small lookup layer.",
      "It should not become an app framework or lifecycle owner.",
    ],
    implementationNotes: [
      "Review ViewRegistry separately from broader action and saved-layout helpers.",
      "If kept, it should stay optional and easy to replace with app code.",
    ],
  },
  {
    id: "split-tabs-demo",
    title: "Split Tabs Experiment",
    navTitle: "Split Tabs",
    description:
      "An under-review composition of runtime panel splitting and tabbed panel content.",
    category: "under-review",
    status: "under-review",
    component: SplitTabsDemo,
    source: splitTabsDemoSource,
    apiNotes: ["splitBlock", "BlockTabs", "ViewRenderer"],
    anatomy: [
      "Runtime splits and tabs combine into a much richer interaction surface.",
      "The composition is useful for review because it exposes API coupling.",
      "It is intentionally not presented as the stable package direction.",
    ],
    implementationNotes: [
      "This example should help decide what to remove, split, or keep optional.",
      "Favor simpler primitives over a larger integrated behavior set.",
    ],
  },
  {
    id: "view-registry-demo",
    title: "View Registry Experiment",
    navTitle: "View Registry",
    description:
      "An under-review component lookup helper for rendering registered view types inside panels.",
    category: "under-review",
    status: "under-review",
    component: ViewRegistryDemoWrapper,
    source: viewRegistryDemoSource,
    apiNotes: ["ViewRegistry", "ViewRenderer", "viewType"],
    anatomy: [
      "A view key resolves to a component at render time.",
      "The helper can reduce wiring for polymorphic panel content.",
      "It is small enough to review independently from larger helpers.",
    ],
    implementationNotes: [
      "The likely path is either keep this as a tiny optional helper or remove it in favor of app-owned lookup maps.",
      "Avoid letting view registration imply ownership of app navigation or actions.",
    ],
  },
  {
    id: "command-service-demo",
    title: "Action Helper Experiment",
    navTitle: "Action Helper",
    description:
      "An under-review action helper source that may leave the public registry if it pulls too much app structure into PrettyPoly.",
    category: "under-review",
    status: "under-review",
    component: CommandServiceDemoWrapper,
    source: commandServiceDemoSource,
    apiNotes: ["action helper", "keyboard shortcut helper", "action metadata"],
    anatomy: [
      "The demo wraps actions in a reusable helper object.",
      "That shape is convenient, but it is more app-framework-like than the core grid primitives.",
      "The current direction is to keep app actions outside PrettyPoly unless there is a smaller primitive hiding inside.",
    ],
    implementationNotes: [
      "This is a removal candidate, not a recommended integration path.",
      "If any part survives, it should be split from the grid registry center.",
    ],
  },
  {
    id: "primitives-demo",
    title: "Combined Helpers Experiment",
    navTitle: "Combined Helpers",
    description:
      "An under-review combination of view lookup, action helpers, and saved layout helpers.",
    category: "under-review",
    status: "under-review",
    component: PrimitivesDemo,
    source: primitivesDemoSource,
    apiNotes: ["ViewRegistry", "action helper", "saved layout helper"],
    anatomy: [
      "Several helper layers are composed around the grid primitives.",
      "The combined surface is intentionally treated as review material.",
      "The goal is to identify which pieces can become simpler or disappear.",
    ],
    implementationNotes: [
      "Do not treat this as the future center of PrettyPoly.",
      "Use it to find boundaries between grid primitives and app-level structure.",
    ],
  },
];

export function getExample(exampleId: string | undefined): ExampleDefinition | undefined {
  return examples.find((example) => example.id === exampleId);
}

export function isExampleId(exampleId: string | undefined): exampleId is string {
  return getExample(exampleId) !== undefined;
}
