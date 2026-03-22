import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        // Main-process entry point of the Electron App
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onready(options) {
          options.reload()
        },
      },
    ]),
    renderer(),
  ],
  base: './', // Ensures assets load correctly in the built app
})