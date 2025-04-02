import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//BANAN
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mytaste",
  server: {
    port: 3000, // Adjust port if needed
    proxy: {
      ...{
        "/mockServiceWorker.js": {
          target: "http://localhost:3000", // Adjust target URL if needed
          rewrite: () => "/mytaste/mockServiceWorker.js",
        },
      },
    },
  },
});
