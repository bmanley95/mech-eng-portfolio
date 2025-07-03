import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const measurementId = env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'

  return {
    plugins: [
      react(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(/GA_MEASUREMENT_ID/g, measurementId)
        },
      },
    ],
    base: '/',
    build: {
      outDir: 'dist',
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[name]__[local]__[hash:base64:5]',
      },
    },
  }
})
