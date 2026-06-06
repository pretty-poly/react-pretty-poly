import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    fs: {
      // Allow serving files from the linked package
      strict: false,
    },
  },
})
