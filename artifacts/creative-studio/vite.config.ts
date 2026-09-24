import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rawPort = process.env.PORT || "5173";

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || "/";

function nonBlockingCssPlugin() {
  return {
    name: "vite-plugin-non-blocking-css",
    enforce: "post" as const,
    transformIndexHtml(html: string) {
      return html.replace(
        /<link\s+([^>]*?)rel=["']stylesheet["']([^>]*?)href=["']([^"']+\.css)["']([^>]*)>/gi,
        (match, p1, p2, href, p3) => {
          // If already async or font preloaded, ignore
          if (match.includes("onload=") || match.includes("rel=\"preload\"") || match.includes("fonts.googleapis")) {
            return match;
          }
          return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    nonBlockingCssPlugin(),
    ...(process.env.NODE_ENV !== "production" ? [runtimeErrorOverlay()] : []),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react') || id.includes('@radix-ui') || id.includes('framer-motion')) {
              return 'vendor-ui';
            }
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
          }
          if (id.includes('canonicalTemplates')) {
            return 'canonical-templates-data';
          }
        }
      }
    }
  },
  server: {
    port,
    strictPort: true,
    host: "127.0.0.1",
    allowedHosts: ["localhost", "127.0.0.1"],
    fs: {
      strict: true,
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  preview: {
    port,
    host: "127.0.0.1",
    allowedHosts: ["localhost", "127.0.0.1"],
  },
});
