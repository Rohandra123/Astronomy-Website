import { defineConfig } from 'vite';

export default defineConfig({
  root: 'frontend',
  build: {
    outDir: '../static',  // Ensure built files go to the static directory
  },
  server: {
    port: 5173,
  },
});
