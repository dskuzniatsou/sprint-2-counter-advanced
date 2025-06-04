import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base:'/sprint-2-counter-advanced/',
  plugins: [react()],
})
