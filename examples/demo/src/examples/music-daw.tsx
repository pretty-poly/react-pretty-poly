import {
  Grid,
  Block,
  BlockGroup,
  BlockLayout,
  BlockHeader,
  BlockContent,
  type BlockConfig,
} from "@pretty-poly/react";
import {
  Music,
  Piano,
  Sliders,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Mic,
  Headphones,
} from "lucide-react";

const musicDAWLayout: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "column",
    order: 0,
  },
  {
    id: "main-area",
    type: "group",
    parentId: "root",
    direction: "row",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  {
    id: "left-panel",
    type: "group",
    parentId: "main-area",
    direction: "column",
    order: 0,
    defaultSize: 220,
    minSize: 180,
    maxSize: 400,
    sizeUnit: "px",
  },
  {
    id: "track-list",
    type: "block",
    parentId: "left-panel",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  {
    id: "instruments",
    type: "block",
    parentId: "left-panel",
    order: 1,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  {
    id: "workspace",
    type: "group",
    parentId: "main-area",
    direction: "column",
    order: 1,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  {
    id: "timeline",
    type: "block",
    parentId: "workspace",
    order: 0,
    defaultSize: 1,
    sizeUnit: "fr",
  },
  {
    id: "editor",
    type: "block",
    parentId: "workspace",
    order: 1,
    defaultSize: 1.5,
    sizeUnit: "fr",
  },
  {
    id: "mixer",
    type: "block",
    parentId: "root",
    order: 1,
    defaultSize: 200,
    minSize: 150,
    maxSize: 300,
    sizeUnit: "px",
  },
];

export default function MusicDAW() {
  return (
    <Grid defaultLayout={musicDAWLayout} dividers="auto" className="h-screen">
      <BlockGroup id="root">
        <BlockGroup id="main-area">
          <BlockGroup id="left-panel">
            <Block id="track-list">
              <BlockLayout>
                <BlockHeader className="flex items-center gap-2 p-2 border-b border-border">
                  <button className="p-1 hover:bg-muted rounded" title="Add Track">
                    <Music className="h-4 w-4" />
                  </button>
                  <button
                    className="p-1 hover:bg-muted rounded"
                    title="Add MIDI Track"
                  >
                    <Piano className="h-4 w-4" />
                  </button>
                  <button
                    className="p-1 hover:bg-muted rounded"
                    title="Add Audio Track"
                  >
                    <Mic className="h-4 w-4" />
                  </button>
                </BlockHeader>
                <BlockContent>
                  <div className="space-y-1 p-2">
                    {[
                      "Master",
                      "Drums",
                      "Bass",
                      "Lead Synth",
                      "Pads",
                      "Vocals",
                      "FX",
                    ].map((track) => (
                      <div
                        key={track}
                        className="flex items-center gap-2 p-2 bg-muted/50 rounded hover:bg-muted cursor-pointer"
                      >
                        <button className="p-1 hover:bg-background rounded">
                          <Volume2 className="h-3 w-3" />
                        </button>
                        <button className="p-1 hover:bg-background rounded">
                          <Headphones className="h-3 w-3" />
                        </button>
                        <span className="flex-1 text-sm">{track}</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </BlockContent>
              </BlockLayout>
            </Block>

            <Block id="instruments">
              <BlockLayout>
                <BlockHeader>
                  <h3 className="text-sm font-semibold p-2">Instruments</h3>
                </BlockHeader>
                <BlockContent>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Analog",
                        "Wavetable",
                        "FM",
                        "Sampler",
                        "Drums",
                        "Piano",
                        "Guitar",
                        "Bass",
                      ].map((instrument) => (
                        <button
                          key={instrument}
                          className="p-3 bg-muted/50 rounded hover:bg-muted text-sm flex items-center gap-2"
                        >
                          <Piano className="h-4 w-4" />
                          {instrument}
                        </button>
                      ))}
                    </div>
                  </div>
                </BlockContent>
              </BlockLayout>
            </Block>
          </BlockGroup>

          <BlockGroup id="workspace">
            <Block id="timeline">
              <BlockLayout>
                <BlockHeader className="flex items-center gap-2 p-2 border-b border-border">
                  <button className="p-1 hover:bg-muted rounded">
                    <SkipBack className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 hover:bg-muted rounded bg-primary text-primary-foreground">
                    <Play className="h-4 w-4" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded">
                    <SkipForward className="h-4 w-4" />
                  </button>
                  <span className="px-2 font-mono text-sm">00:00:00</span>
                  <span className="px-2 text-xs text-muted-foreground">
                    120 BPM
                  </span>
                </BlockHeader>
                <BlockContent>
                  <div className="relative h-full overflow-auto">
                    {/* Timeline Grid */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/10 to-background">
                      <svg className="w-full h-full" style={{ minWidth: "2000px" }}>
                        {/* Measure lines */}
                        {Array.from({ length: 32 }, (_, i) => (
                          <line
                            key={i}
                            x1={`${i * 3.125}%`}
                            y1="0"
                            x2={`${i * 3.125}%`}
                            y2="100%"
                            stroke="currentColor"
                            strokeOpacity={i % 4 === 0 ? 0.3 : 0.1}
                          />
                        ))}
                        {/* Track lanes */}
                        {Array.from({ length: 7 }, (_, i) => (
                          <rect
                            key={i}
                            x="12.5%"
                            y={`${i * 14.28}%`}
                            width="25%"
                            height="12%"
                            fill="hsl(var(--primary))"
                            opacity={0.2 + i * 0.1}
                            rx="2"
                          />
                        ))}
                      </svg>
                    </div>
                    <div className="relative p-2 text-xs text-muted-foreground">
                      Timeline - Scroll horizontally to navigate
                    </div>
                  </div>
                </BlockContent>
              </BlockLayout>
            </Block>

            <Block id="editor">
              <BlockLayout>
                <BlockHeader>
                  <h3 className="text-sm font-semibold p-2">Piano Roll Editor</h3>
                </BlockHeader>
                <BlockContent>
                  <div className="h-full bg-gradient-to-b from-background to-muted/20 p-4">
                    <div className="grid grid-cols-16 gap-0.5">
                      {Array.from({ length: 128 }, (_, i) => (
                        <div
                          key={i}
                          className={`h-3 ${
                            [0, 2, 4, 5, 7, 9, 11].includes(i % 12)
                              ? "bg-primary/20 hover:bg-primary/40"
                              : "bg-muted hover:bg-muted/80"
                          } cursor-pointer`}
                        />
                      ))}
                    </div>
                  </div>
                </BlockContent>
              </BlockLayout>
            </Block>
          </BlockGroup>
        </BlockGroup>

        <Block id="mixer">
          <BlockLayout>
            <BlockHeader className="flex items-center gap-2 p-2 border-b border-border">
              <button className="p-1 hover:bg-muted rounded">
                <Sliders className="h-4 w-4" />
              </button>
              <span className="text-xs text-muted-foreground px-2">
                Master: -6.2dB
              </span>
            </BlockHeader>
            <BlockContent>
              <div className="flex gap-2 p-4 overflow-x-auto">
                {["Master", "Drums", "Bass", "Lead", "Pads", "Vocals", "FX"].map(
                  (channel) => (
                    <div key={channel} className="flex-shrink-0 w-20">
                      <div className="bg-muted/50 rounded p-2 space-y-2">
                        <div className="text-xs text-center font-medium">
                          {channel}
                        </div>

                        {/* Volume meter */}
                        <div className="h-24 bg-background rounded relative overflow-hidden">
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 via-yellow-500 to-red-500"
                            style={{ height: `${Math.random() * 80 + 20}%` }}
                          />
                        </div>

                        {/* Fader */}
                        <div className="h-16 bg-background rounded relative">
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-8 h-3 bg-primary rounded"
                            style={{ top: `${Math.random() * 70}%` }}
                          />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center gap-1">
                          <button className="p-1 bg-background hover:bg-muted rounded">
                            <Volume2 className="h-3 w-3" />
                          </button>
                          <button className="p-1 bg-background hover:bg-muted rounded">
                            <Headphones className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </BlockContent>
          </BlockLayout>
        </Block>
      </BlockGroup>
    </Grid>
  );
}
