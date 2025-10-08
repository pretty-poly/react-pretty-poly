# PrettyPoly Demo App

This is a separate demo application for testing and showcasing the `@pretty-poly/react` library with shadcn/ui integration.

## Features

- **Separate Environment**: Clean demo app with its own dependencies
- **PrettyPoly Integration**: References the library via file path
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

When making changes to the `@pretty-poly/react` library:

1. Make your changes in `../pretty_poly/`
2. Build the library: `cd ../pretty_poly && npm run build`
3. Restart the demo app dev server to see changes

## Architecture

- **Library Reference**: Uses `"@pretty-poly/react": "file:../pretty_poly"` in package.json
- **Tailwind CSS v4**: Modern CSS framework
- **Shadcn/UI**: High-quality components that integrate seamlessly with PrettyPoly
- **TypeScript**: Full type safety across all examples
