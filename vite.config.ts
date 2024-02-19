/// <reference types="vitest" />
import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src/') },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, './src/components/'),
      },
      { find: '@/lib', replacement: path.resolve(__dirname, './src/lib/') },
    ],
  },
})
