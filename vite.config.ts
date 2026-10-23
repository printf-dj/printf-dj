import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/printf-dj/', // <--- Add this line so assets load correctly on GitHub Pages
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
