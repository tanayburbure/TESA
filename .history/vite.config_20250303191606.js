import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [
    react(),
    glsl(),
  ],
  server: {
    historyApiFallback: true, // Enable fallback for SPA
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Alias for cleaner imports
    },
  },
  base: './', // Ensures correct paths for assets in production
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.css$/i.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.ttf|\.otf$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
