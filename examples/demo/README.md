# PrettyPoly Demo App

This is a separate demo application for testing and showcasing PrettyPoly as copied shadcn registry source.

## Features

- **Separate Environment**: Clean demo app with its own dependencies
- **PrettyPoly Integration**: Uses copied source from the GitHub shadcn registry
- **Shadcn/UI Components**: Comprehensive examples showing integration with popular UI components
- **Enhanced Examples**: Modern examples that showcase real-world use cases

## Examples Included

1. **Basic Grid** - Simple resizable layout with sidebar and main content
2. **Comprehensive** - Full feature showcase with responsive modes and nested layouts
3. **Dashboard** - Original dashboard example from the library
4. **Shadcn Dashboard** - Modern dashboard with shadcn/ui components, tables, charts, and notifications
5. **Form Layout** - Interactive form with live preview, tabbed sections, and input validation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview built app
npm run preview
```

## Library Development

When making changes to PrettyPoly registry source:

1. Make changes in the root `components/`, `hooks/`, or `lib/` source.
2. Validate the registry: `cd ../.. && npm run registry:validate`.
3. Reinstall copied source: `npm run update:grid`.
4. Restart the demo app dev server to see changes.

## Architecture

- **Registry Source**: Uses `shadcn add pretty-poly/react-pretty-poly/...` to copy source locally
- **Tailwind CSS v4**: Modern CSS framework
- **Shadcn/UI**: High-quality components that integrate seamlessly with PrettyPoly
- **TypeScript**: Full type safety across all examples
