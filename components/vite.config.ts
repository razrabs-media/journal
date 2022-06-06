import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
