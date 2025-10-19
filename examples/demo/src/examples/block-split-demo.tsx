/**
 * Block Split Demo
 *
 * Demonstrates dynamic block splitting using the new split API.
 * Shows how blocks can be split vertically and horizontally to create
 * VS Code-like editor layouts.
 */

import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockContent } from "@/components/grid/block-content";
import { BlockHeader } from "@/components/grid/block-header";
import { BlockToolbar } from "@/components/grid/block-toolbar";
import { useSplitBlock, useGridContext } from "@/components/grid/grid-provider";
import { SplitSquareVertical, SplitSquareHorizontal, Info, Keyboard } from "lucide-react";
import type { BlockConfig } from "@/lib/grid-types";
import { useState } from "react";

// Initial grid layout: single main block
const initialBlocks: BlockConfig[] = [
  {
    id: "root",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    canSplit: true,
  },
];

// Color schemes for split blocks
const colorSchemes = [
  { bg: "bg-purple-50 dark:bg-purple-950/50", border: "border-purple-200 dark:border-purple-800", accent: "purple" },
  { bg: "bg-blue-50 dark:bg-blue-950/50", border: "border-blue-200 dark:border-blue-800", accent: "blue" },
  { bg: "bg-green-50 dark:bg-green-950/50", border: "border-green-200 dark:border-green-800", accent: "green" },
  { bg: "bg-orange-50 dark:bg-orange-950/50", border: "border-orange-200 dark:border-orange-800", accent: "orange" },
  { bg: "bg-pink-50 dark:bg-pink-950/50", border: "border-pink-200 dark:border-pink-800", accent: "pink" },
  { bg: "bg-cyan-50 dark:bg-cyan-950/50", border: "border-cyan-200 dark:border-cyan-800", accent: "cyan" },
];

function SplitBlockContent({ blockId }: { blockId: string }) {
  const { splitBlock, canSplit } = useSplitBlock();
  const [splitCount, setSplitCount] = useState(0);

  // Get color scheme based on blockId
  const colorIndex = blockId.split('-').length % colorSchemes.length;
  const colors = colorSchemes[colorIndex];

  const isSplittable = canSplit(blockId);

  const handleSplitVertical = () => {
    if (isSplittable) {
      splitBlock(blockId, 'vertical');
      setSplitCount(c => c + 1);
    }
  };

  const handleSplitHorizontal = () => {
    if (isSplittable) {
      splitBlock(blockId, 'horizontal');
      setSplitCount(c => c + 1);
    }
  };

  return (
    <Block id={blockId}>
      <BlockHeader className={`${colors.bg} ${colors.border} border-b`}>
        <BlockToolbar
          left={
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm">Block: {blockId}</h3>
              {!isSplittable && (
                <span className="text-xs text-muted-foreground">(max depth)</span>
              )}
            </div>
          }
          right={
            isSplittable && (
              <div className="flex gap-1">
                <button
                  onClick={handleSplitVertical}
                  className="px-2 py-1 rounded text-xs border hover:bg-accent transition-colors flex items-center gap-1"
                  title="Split Right (Ctrl+\)"
                >
                  <SplitSquareVertical className="w-3 h-3" />
                  <span className="hidden sm:inline">Split Right</span>
                </button>
                <button
                  onClick={handleSplitHorizontal}
                  className="px-2 py-1 rounded text-xs border hover:bg-accent transition-colors flex items-center gap-1"
                  title="Split Down (Ctrl+Shift+\)"
                >
                  <SplitSquareHorizontal className="w-3 h-3" />
                  <span className="hidden sm:inline">Split Down</span>
                </button>
              </div>
            )
          }
        />
      </BlockHeader>
      <BlockContent className={`p-6 ${colors.bg}`}>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className={`p-6 rounded-lg border-2 ${colors.border} bg-white dark:bg-gray-900`}>
            <h2 className={`text-xl font-bold mb-3 text-${colors.accent}-600 dark:text-${colors.accent}-400`}>
              Editor Pane
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              This is block <code className="px-1 py-0.5 rounded bg-muted">{blockId}</code>.
              {isSplittable ? " Click the buttons above or use keyboard shortcuts to split this pane." : " This block has reached maximum split depth."}
            </p>

            {blockId === "root" && (
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                      How It Works
                    </p>
                    <p className="text-blue-800 dark:text-blue-200">
                      When you split a block, it transforms into a group with two child blocks.
                      The original content stays in the first child, and a new empty block is created.
                      Each child gets 1fr of space (50% split).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                  <Keyboard className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-purple-900 dark:text-purple-100 mb-1">
                      Keyboard Shortcuts
                    </p>
                    <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                      <li>
                        <kbd className="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 text-xs">
                          Ctrl/Cmd + \
                        </kbd>
                        {" "}Split Right (vertical)
                      </li>
                      <li>
                        <kbd className="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 text-xs">
                          Ctrl/Cmd + Shift + \
                        </kbd>
                        {" "}Split Down (horizontal)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {blockId !== "root" && (
              <div className="mt-4 p-4 rounded border bg-muted/50">
                <h3 className="font-semibold text-sm mb-2">Split Details</h3>
                <div className="text-xs space-y-1 text-muted-foreground">
                  <div>Parent: {blockId.split('-').slice(0, -1).join('-') || 'root'}</div>
                  <div>Depth: {blockId.split('-').length - 1}</div>
                  <div>Size: 1fr (flexible)</div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded border bg-card">
              <div className="font-semibold mb-1">Features</div>
              <ul className="text-muted-foreground space-y-0.5">
                <li>✓ Dynamic splitting</li>
                <li>✓ Keyboard shortcuts</li>
                <li>✓ Zero-sum resizing</li>
                <li>✓ Auto grid templates</li>
              </ul>
            </div>
            <div className="p-3 rounded border bg-card">
              <div className="font-semibold mb-1">Architecture</div>
              <ul className="text-muted-foreground space-y-0.5">
                <li>✓ Primitive-based</li>
                <li>✓ ViewRegistry ready</li>
                <li>✓ Tree structure</li>
                <li>✓ CSS Grid native</li>
              </ul>
            </div>
          </div>
        </div>
      </BlockContent>
    </Block>
  );
}

// Recursive component to render all blocks in the tree
function RecursiveBlockRenderer({ blockId }: { blockId: string }) {
  const { state } = useGridContext();
  const block = state.blocks[blockId];

  if (!block) return null;

  // If it's a group, render children recursively
  if (block.type === 'group' && block.children) {
    return (
      <>
        {block.children.map(childId => (
          <RecursiveBlockRenderer key={childId} blockId={childId} />
        ))}
      </>
    );
  }

  // Otherwise, render the block content
  return <SplitBlockContent blockId={blockId} />;
}

export default function BlockSplitDemo() {
  return (
    <div className="h-screen w-screen bg-background">
      <Grid id="split-demo" defaultLayout={initialBlocks}>
        <RecursiveBlockRenderer blockId="root" />
      </Grid>
    </div>
  );
}
