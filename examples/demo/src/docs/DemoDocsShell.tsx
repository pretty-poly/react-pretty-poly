import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  FlaskConical,
  PanelLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockContent } from "@/components/grid/block-content";
import { BlockHeader } from "@/components/grid/block-header";
import { BlockLayout } from "@/components/grid/block-layout";
import { useGridResize } from "@/components/grid/grid-provider";
import { cn } from "@/lib/utils";
import type { BlockConfig } from "@/lib/grid-types";
import {
  exampleCategories,
  examples,
  type ExampleDefinition,
} from "@/examples/registry";

const docsLayout: BlockConfig[] = [
  {
    id: "docs-root",
    type: "group",
    direction: "row",
  },
  {
    id: "docs-nav",
    type: "block",
    parentId: "docs-root",
    order: 0,
    defaultSize: 280,
    minSize: 220,
    maxSize: 360,
    sizeUnit: "px",
  },
  {
    id: "demo-preview",
    type: "block",
    parentId: "docs-root",
    order: 1,
    defaultSize: 1,
    minSize: 420,
    sizeUnit: "fr",
  },
  {
    id: "example-details",
    type: "block",
    parentId: "docs-root",
    order: 2,
    defaultSize: 420,
    minSize: 320,
    maxSize: 560,
    sizeUnit: "px",
  },
];

interface DemoDocsShellProps {
  example: ExampleDefinition;
}

export function DemoDocsShell({ example }: DemoDocsShellProps) {
  const isDesktop = useDesktopShell();

  return (
    <main data-testid="docs-shell" className="min-h-dvh bg-slate-100 text-slate-950">
      {isDesktop ? (
        <div className="h-dvh">
          <Grid
            defaultLayout={docsLayout}
            dividers="auto"
            className="h-dvh bg-slate-100"
            aria-label="PrettyPoly documentation and demo grid"
          >
            <Block id="docs-nav" className="bg-white border-r border-slate-200">
              <BlockLayout>
                <DocsNavHeader />
                <BlockContent className="px-3 pb-4" aria-label="Example navigation">
                  <DocsNavigation activeExampleId={example.id} />
                </BlockContent>
              </BlockLayout>
            </Block>

            <Block id="demo-preview" className="bg-slate-50">
              <BlockLayout>
                <BlockContent scrollMode="none" className="bg-white" aria-label="Live demo">
                  <GridAwareDemoFrame example={example} />
                </BlockContent>
              </BlockLayout>
            </Block>

            <Block id="example-details" className="bg-white border-l border-slate-200">
              <BlockLayout>
                <DetailsHeader example={example} />
                <BlockContent className="px-5 pb-5" aria-label="Example documentation">
                  <ExampleDetails example={example} />
                </BlockContent>
              </BlockLayout>
            </Block>
          </Grid>
        </div>
      ) : (
        <div>
          <DocsNavHeader />
          <div className="border-y border-slate-200 bg-white px-3 py-4">
            <DocsNavigation activeExampleId={example.id} compact />
          </div>
          <div className="h-[70dvh] border-y border-slate-200 bg-white">
            <DemoFrame example={example} />
          </div>
          <section data-testid="example-docs-panel" className="bg-white">
            <DetailsHeader example={example} />
            <div className="px-4 py-5">
              <ExampleDetails example={example} />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

function useDesktopShell() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return true;

    return window.matchMedia("(min-width: 1024px)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateLayout = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateLayout);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
    };
  }, []);

  return isDesktop;
}

function DocsNavHeader() {
  return (
    <BlockHeader className="flex-col items-start gap-3 border-b border-slate-200 px-5 py-5">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
          <PanelLeft className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">PrettyPoly</p>
          <p className="text-xs text-slate-500">Docs and examples</p>
        </div>
      </div>
      <p className="max-w-64 text-sm leading-6 text-slate-600">
        Resizable React panel primitives for app workflows that benefit from
        more task context.
      </p>
    </BlockHeader>
  );
}

function DocsNavigation({
  activeExampleId,
  compact = false,
}: {
  activeExampleId: string;
  compact?: boolean;
}) {
  return (
    <nav data-testid="docs-nav" aria-label="PrettyPoly examples">
      <div className={cn("space-y-6", compact && "space-y-4")}>
        {exampleCategories.map((category) => {
          const categoryExamples = examples.filter(
            (example) => example.category === category.id
          );

          return (
            <section key={category.id} aria-labelledby={`${category.id}-heading`}>
              <div className="mb-2 px-2">
                <h2
                  id={`${category.id}-heading`}
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {category.title}
                </h2>
                {!compact && (
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {category.description}
                  </p>
                )}
              </div>
              <div className={cn("space-y-1", compact && "grid grid-cols-2 gap-2 space-y-0")}>
                {categoryExamples.map((example) => {
                  const isActive = example.id === activeExampleId;

                  return (
                    <Link
                      key={example.id}
                      to="/examples/$exampleId"
                      params={{ exampleId: example.id }}
                      data-testid="docs-nav-item"
                      data-example-id={example.id}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "group flex min-h-11 items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-blue-50 text-blue-800 ring-1 ring-blue-200"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      )}
                    >
                      <span className="truncate font-medium">{example.navTitle}</span>
                      {example.status === "under-review" && (
                        <FlaskConical
                          className={cn(
                            "ml-2 h-3.5 w-3.5 flex-none",
                            isActive ? "text-blue-700" : "text-slate-400"
                          )}
                          aria-label="Under review"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </nav>
  );
}

function GridAwareDemoFrame({ example }: DemoDocsShellProps) {
  const { isDragging } = useGridResize();

  return <DemoFrame example={example} disablePointerEvents={isDragging} />;
}

function DemoFrame({
  example,
  disablePointerEvents = false,
}: DemoDocsShellProps & { disablePointerEvents?: boolean }) {
  return (
    <iframe
      key={example.id}
      data-testid="demo-frame"
      title={`${example.title} live demo`}
      src={`/embed/${example.id}`}
      className={cn(
        "h-full w-full border-0 bg-white",
        disablePointerEvents && "pointer-events-none"
      )}
    />
  );
}

function DetailsHeader({ example }: DemoDocsShellProps) {
  return (
    <BlockHeader className="border-b border-slate-200 px-5 py-4">
      <div className="flex w-full items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
            <BookOpen className="h-4 w-4 text-blue-600" aria-hidden="true" />
            Example notes
          </div>
          <p
            data-testid="example-details-title"
            className="mt-1 truncate text-sm leading-6 text-slate-600"
          >
            {example.title}
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0"
        >
          <a
            href={`/embed/${example.id}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${example.title} full page`}
            title="Open full-page demo"
          >
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </BlockHeader>
  );
}

function ExampleDetails({ example }: DemoDocsShellProps) {
  return (
    <div data-testid="example-docs-panel" className="space-y-5">
      <Tabs defaultValue="guide" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="guide">
            <Braces className="mr-2 h-4 w-4" aria-hidden="true" />
            Guide
          </TabsTrigger>
          <TabsTrigger value="source">
            <Code2 className="mr-2 h-4 w-4" aria-hidden="true" />
            Source
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guide" className="space-y-6 pt-3">
          <section>
            <h2 className="text-sm font-semibold text-slate-950">Layout anatomy</h2>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
              {example.anatomy.map((note) => (
                <li key={note} className="border-l-2 border-blue-200 pl-3">
                  {note}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-slate-950">
              PrettyPoly surface
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {example.apiNotes.map((note) => (
                <Badge key={note} variant="outline" className="rounded-md">
                  {note}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-slate-950">
              Implementation notes
            </h2>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
              {example.implementationNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        </TabsContent>

        <TabsContent value="source" className="pt-3">
          <pre
            data-testid="example-source"
            className="overflow-auto rounded-md border border-slate-200 bg-slate-950 p-4 text-xs leading-5 text-slate-100"
          >
            <code>{example.source}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
