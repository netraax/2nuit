import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@behaviors': path.resolve(__dirname, './src/behaviors')
    }
  },
  server: {
    port: 3000,
    open: true // Ouvre automatiquement le navigateur au démarrage
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // Configuration pour Netlify
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'charts': ['chart.js'],
        }
      }
    }
  }
})
