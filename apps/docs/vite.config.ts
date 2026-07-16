import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Builds the docs into ONE self-contained index.html (JS + CSS + fonts + the
// machine SVG all inlined) so it can be shared as a single file / artifact.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  server: { port: 5173, host: true },
  build: {
    assetsInlineLimit: 100_000_000, // inline every asset as a data URI
    cssCodeSplit: false,
    chunkSizeWarningLimit: 5000,
  },
});
