import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // add this for xlxs outdated error
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
