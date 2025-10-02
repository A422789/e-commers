import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // أضف هذا السطر
  base: "/e-commers/", 
  plugins: [react( )],
})
