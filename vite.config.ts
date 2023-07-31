import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    open: true
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  },
  plugins: [
    react()
  ]
})
