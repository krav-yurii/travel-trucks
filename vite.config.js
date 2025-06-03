import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@api': '/src/setup/api',
      '@utils': '/src/utils',
      '@shared': '/src/shared',
      '@router': '/src/setup/router',
      '@store': '/src/store',
      '@pages': '/src/pages',
      '@constants': '/src/constants',
      '@assets': '/assets',
    },
  },
});
