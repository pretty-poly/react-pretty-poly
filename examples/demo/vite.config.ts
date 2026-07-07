import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { resolve } from 'path'

const DEFAULT_DEMO_PORT = 5174
const DEFAULT_PREVIEW_PORT = 4174

function readPort(value: string | undefined, fallback: number) {
  const port = Number(value)

  return Number.isInteger(port) && port > 0 ? port : fallback
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    // Ensure Vite can resolve the linked package properly
    preserveSymlinks: false,
    // Dedupe React to prevent multiple copies
    dedupe: ['react', 'react-dom'],
  },
  server: {
    host: '127.0.0.1',
    port: readPort(process.env.VITE_DEMO_PORT, DEFAULT_DEMO_PORT),
    strictPort: true,
    fs: {
      // Allow serving files from the linked package
      strict: false,
    },
  },
  preview: {
    host: '127.0.0.1',
    port: readPort(process.env.VITE_DEMO_PREVIEW_PORT, DEFAULT_PREVIEW_PORT),
    strictPort: true,
  },
})
