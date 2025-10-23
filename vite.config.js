import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Let-s-play-tic-tac-toe/',
  build: { outDir: 'docs' },
  plugins: [react()],
})
