import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/reclamos-municipales-react/',
  base: '/',   // 👈 importante: raíz
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});


