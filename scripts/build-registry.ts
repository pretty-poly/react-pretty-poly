#!/usr/bin/env tsx

/**
 * Build script for generating shadcn-compatible registry files
 *
 * This script:
 * 1. Reads component source files from src/
 * 2. Transforms import paths to use user's configured aliases
 * 3. Generates registry JSON files compatible with shadcn CLI
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, "..");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const REGISTRY_DIR = path.join(PROJECT_ROOT, "registry");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "public", "r");

interface RegistryFile {
  path: string;
  type: string;
  content?: string;
  target?: string;
}

interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description: string;
  files: RegistryFile[];
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  tailwind?: {
    config?: Record<string, any>;
  };
}

interface Registry {
  name: string;
  type: string;
  homepage: string;
  description: string;
  items: RegistryItem[];
}

/**
 * Converts PascalCase/camelCase to kebab-case
 */
function toKebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, ""); // Remove leading dash
}

/**
 * Transforms import paths from @/ to use shadcn-style aliases
 */
function transformImports(content: string): string {
  return (
    content
      // SPECIAL CASE: cn utility goes to @/lib/utils (not grid-cn)
      .replace(/from ['"]@\/utils\/cn['"]/g, 'from "@/lib/utils"')
      .replace(/from ['"]\.\.\/\.\.\/utils\/cn['"]/g, 'from "@/lib/utils"')

      // Transform @/utils/* imports (except cn, already handled)
      .replace(/from ['"]@\/utils\/(.*?)['"]/g, (match, p1) => {
        return `from "@/lib/grid-${p1}"`;
      })

      // Transform @/types imports
      .replace(/from ['"]@\/types['"]/g, 'from "@/lib/grid-types"')

      // Transform relative ../../types imports (from hooks/utils)
      .replace(/from ['"]\.\.\/\.\.\/types['"]/g, 'from "@/lib/grid-types"')
      .replace(/from ['"]\.\.\/types['"]/g, 'from "@/lib/grid-types"')

      // Transform @/components/Grid/* imports
      .replace(/from ['"]@\/components\/Grid\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/grid/${kebabCase}"`;
      })

      // Transform @/components/Block/* imports
      .replace(/from ['"]@\/components\/Block\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/grid/${kebabCase}"`;
      })

      // Transform @/components/Divider/* imports
      .replace(/from ['"]@\/components\/Divider\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/divider/${kebabCase}"`;
      })

      // Transform relative component imports from Grid directory: ./GridProvider → @/components/grid/grid-provider
      .replace(/from ['"]\.\/(Grid|GridProvider)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/grid/${kebabCase}"`;
      })

      // Transform relative component imports from Block directory: ./BlockContent → @/components/grid/block-content
      .replace(/from ['"]\.\/(Block[A-Z][a-zA-Z]*)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/grid/${kebabCase}"`;
      })

      // Transform relative component imports from Divider directory: ./Divider → @/components/divider/divider
      .replace(/from ['"]\.\/(Divider[A-Z]?[a-zA-Z]*)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/divider/${kebabCase}"`;
      })

      // Transform ../Grid/GridProvider → @/components/grid/grid-provider
      .replace(/from ['"]\.\.\/Grid\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/grid/${kebabCase}"`;
      })

      // Transform ../components/Grid/GridProvider → @/components/grid/grid-provider (from hooks)
      .replace(/from ['"]\.\.\/components\/Grid\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/grid/${kebabCase}"`;
      })

      // Transform @/hooks/* imports
      .replace(/from ['"]@\/hooks\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/hooks/${kebabCase}"`;
      })

      // Transform relative ../../hooks/* imports
      .replace(/from ['"]\.\.\/\.\.\/hooks\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/hooks/${kebabCase}"`;
      })

      // Transform relative ../../utils/* imports (from hooks)
      .replace(/from ['"]\.\.\/\.\.\/utils\/(.*?)['"]/g, (match, p1) => {
        if (p1 === "cn") {
          return 'from "@/lib/utils"';
        }
        return `from "@/lib/grid-${p1}"`;
      })

      // Transform relative ../utils/* imports (from components one level deep)
      .replace(/from ['"]\.\.\/utils\/(.*?)['"]/g, (match, p1) => {
        if (p1 === "cn") {
          return 'from "@/lib/utils"';
        }
        return `from "@/lib/grid-${p1}"`;
      })

      // Transform ../Divider/* imports
      .replace(/from ['"]\.\.\/Divider\/(.*?)['"]/g, (match, p1) => {
        const kebabCase = toKebabCase(p1);
        return `from "@/components/divider/${kebabCase}"`;
      })

      // Transform relative ./calculations imports (from lib)
      .replace(
        /from ['"]\.\/(calculations|constraints|storage)['"]/g,
        (match, p1) => {
          return `from "@/lib/grid-${p1}"`;
        }
      )
  );
}

/**
 * Maps source files to registry file paths
 */
const FILE_MAPPINGS: Record<string, { src: string; target: string }> = {
  // Grid components
  "components/grid/grid.tsx": {
    src: "src/components/Grid/Grid.tsx",
    target: "components/grid/grid.tsx",
  },
  "components/grid/grid-provider.tsx": {
    src: "src/components/Grid/GridProvider.tsx",
    target: "components/grid/grid-provider.tsx",
  },
  "components/grid/block.tsx": {
    src: "src/components/Block/Block.tsx",
    target: "components/grid/block.tsx",
  },
  "components/grid/block-content.tsx": {
    src: "src/components/Block/BlockContent.tsx",
    target: "components/grid/block-content.tsx",
  },
  "components/grid/block-header.tsx": {
    src: "src/components/Block/BlockHeader.tsx",
    target: "components/grid/block-header.tsx",
  },
  "components/grid/block-footer.tsx": {
    src: "src/components/Block/BlockFooter.tsx",
    target: "components/grid/block-footer.tsx",
  },
  "components/grid/block-toolbar.tsx": {
    src: "src/components/Block/BlockToolbar.tsx",
    target: "components/grid/block-toolbar.tsx",
  },
  "components/grid/block-layout.tsx": {
    src: "src/components/Block/BlockLayout.tsx",
    target: "components/grid/block-layout.tsx",
  },
  "components/grid/block-sidebar.tsx": {
    src: "src/components/Block/BlockSidebar.tsx",
    target: "components/grid/block-sidebar.tsx",
  },
  "components/grid/block-sidebar-item.tsx": {
    src: "src/components/Block/BlockSidebarItem.tsx",
    target: "components/grid/block-sidebar-item.tsx",
  },
  "components/grid/block-sidebar-spacer.tsx": {
    src: "src/components/Block/BlockSidebarSpacer.tsx",
    target: "components/grid/block-sidebar-spacer.tsx",
  },
  "components/grid/block-tabs.tsx": {
    src: "src/components/Block/BlockTabs.tsx",
    target: "components/grid/block-tabs.tsx",
  },

  // Divider components
  "components/divider/divider.tsx": {
    src: "src/components/Divider/Divider.tsx",
    target: "components/divider/divider.tsx",
  },
  "components/divider/divider-overlay.tsx": {
    src: "src/components/Divider/DividerOverlay.tsx",
    target: "components/divider/divider-overlay.tsx",
  },

  // Hooks
  "hooks/use-grid-resize.ts": {
    src: "src/hooks/useGridResize.ts",
    target: "hooks/use-grid-resize.ts",
  },
  "hooks/use-grid-resize-operations.ts": {
    src: "src/hooks/useGridResizeOperations.ts",
    target: "hooks/use-grid-resize-operations.ts",
  },
  "hooks/use-grid-mode.ts": {
    src: "src/hooks/useGridMode.ts",
    target: "hooks/use-grid-mode.ts",
  },
  "hooks/use-grid-persistence.ts": {
    src: "src/hooks/useGridPersistence.ts",
    target: "hooks/use-grid-persistence.ts",
  },
  "hooks/use-grid-keyboard.ts": {
    src: "src/hooks/useGridKeyboard.ts",
    target: "hooks/use-grid-keyboard.ts",
  },

  // Utilities
  "lib/grid-calculations.ts": {
    src: "src/utils/calculations.ts",
    target: "lib/grid-calculations.ts",
  },
  "lib/grid-constraints.ts": {
    src: "src/utils/constraints.ts",
    target: "lib/grid-constraints.ts",
  },
  "lib/grid-storage.ts": {
    src: "src/utils/storage.ts",
    target: "lib/grid-storage.ts",
  },
  "lib/grid-types.ts": {
    src: "src/types/index.ts",
    target: "lib/grid-types.ts",
  },
  "lib/grid-divider-auto-detection.ts": {
    src: "src/utils/divider-auto-detection.ts",
    target: "lib/grid-divider-auto-detection.ts",
  },
};

/**
 * Reads and processes a source file
 */
async function processFile(
  srcPath: string,
  targetPath: string
): Promise<RegistryFile> {
  const fullSrcPath = path.join(PROJECT_ROOT, srcPath);

  try {
    let content = await fs.readFile(fullSrcPath, "utf-8");

    // Transform imports if it's a TypeScript/JavaScript file
    if (srcPath.endsWith(".ts") || srcPath.endsWith(".tsx")) {
      content = transformImports(content);
    }

    return {
      path: targetPath,
      type: targetPath.startsWith("components/")
        ? "registry:component"
        : targetPath.startsWith("hooks/")
        ? "registry:hook"
        : targetPath.startsWith("lib/")
        ? "registry:lib"
        : "registry:style",
      content,
      target: targetPath,
    };
  } catch (error) {
    console.error(`Error processing file ${srcPath}:`, error);
    throw error;
  }
}

/**
 * Builds registry JSON for a single item
 */
async function buildRegistryItem(item: RegistryItem): Promise<void> {
  const processedFiles: RegistryFile[] = [];

  for (const file of item.files) {
    const mapping = FILE_MAPPINGS[file.path];
    if (!mapping) {
      console.warn(`No mapping found for ${file.path}, skipping...`);
      continue;
    }

    const processedFile = await processFile(mapping.src, mapping.target);
    processedFiles.push(processedFile);
  }

  const outputItem = {
    ...item,
    files: processedFiles,
  };

  // Write to output directory
  const outputPath = path.join(OUTPUT_DIR, `${item.name}.json`);
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(outputItem, null, 2), "utf-8");

  console.log(`✓ Built registry item: ${item.name}`);
}

/**
 * Main build function
 */
async function build() {
  console.log("Building PrettyPoly registry...\n");

  // Read registry configuration
  const registryPath = path.join(REGISTRY_DIR, "registry.json");
  const registryContent = await fs.readFile(registryPath, "utf-8");
  const registry: Registry = JSON.parse(registryContent);

  // Process each registry item
  for (const item of registry.items) {
    await buildRegistryItem(item);
  }

  // Copy registry.json to output
  await fs.writeFile(
    path.join(OUTPUT_DIR, "registry.json"),
    registryContent,
    "utf-8"
  );

  console.log("\n✓ Registry build complete!");
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

// Run the build
build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
