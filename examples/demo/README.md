# PrettyPoly Demo App

This is a separate demo application for testing PrettyPoly as copied shadcn registry source.

## Features

- **Separate Environment**: Clean demo app with its own dependencies
- **PrettyPoly Integration**: Uses copied source from the repository registry files
- **Shadcn/UI Components**: Comprehensive examples showing integration with popular UI components
- **Enhanced Examples**: Modern examples that showcase real-world use cases

## Examples Included

The selector app leads with normal app surfaces: dashboard, email, file manager,
IDE-like dense context, DAW, and fixed-sidebar examples.

Under-review experiments for block visibility, runtime splitting, tabs, view
lookup, action helpers, and saved layout helpers remain available at the end of
the selector so their API shape can be evaluated without presenting them as the
stable center of PrettyPoly.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Validate the demo
npm run type-check
npm run lint

# Build for production
npm run build

# Run browser tests when Playwright browsers are installed
npm run test:e2e:chromium

# Preview built app
npm run preview
```

## Library Development

When making changes to PrettyPoly registry source:

1. Make changes in the root `components/`, `hooks/`, or `lib/` source.
2. Validate the registry: `cd ../.. && npm run registry:validate`.
3. Sync copied source from the repository: `npm run update:grid`.
4. Restart the demo app dev server to see changes.

## Architecture

- **Registry Source**: `npm run update:grid` runs `../../scripts/sync-demo-registry.mjs`, which copies every file listed in `registry.json`
- **Tailwind CSS v4**: Modern CSS framework
- **Shadcn/UI**: High-quality components that integrate seamlessly with PrettyPoly
- **TypeScript**: Full type safety across all examples
