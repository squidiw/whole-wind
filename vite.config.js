import { defineConfig } from 'vite'
import adastra from 'adastra-plugin'

export default defineConfig({
  plugins: [adastra()],
  build: {
    emptyOutDir: false,
    rollupOptions:{
      output:{
        entryFileNames:"[name].js",
        chunkFileNames:"[name].js",
        assetFileNames:"[name].[ext]"
      }
    }
  }
})
