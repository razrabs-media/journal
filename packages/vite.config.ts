import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    dedupe: ['@emotion/react', 'react', 'react-dom'],
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 3002,
  },
})
