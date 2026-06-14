import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    sitemap({
      hostname: "https://www.varanasispiritualtour.com",
      dynamicRoutes: [
        "/",
        "/about",
        "/tours",
        "/reviews",
        "/contact",
        "/booking",
      ],
      exclude: ["/404"],
      generateRobotsTxt: false,
      changefreq: "weekly",
      priority: 0.8,
      readable: true,
      outDir: "dist",
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
