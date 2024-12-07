import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        // Sépare le code en chunks pour de meilleures performances
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'chart': ['chart.js'],
          'pdf': ['jspdf']
        }
      }
    }
  },
  server: {
    port: 3000
  }
})
