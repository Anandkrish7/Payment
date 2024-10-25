import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  server: {
    host: true, // Listen on all IPs to allow network access
    watch: {
      usePolling: true, // Enable polling
    },
  },
})
