import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from "vite-plugin-pwa"
// import { compression } from "vite-plugin-compression2"
import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import path from "path"
import react from "@vitejs/plugin-react"

const manualChunksConfig = {
  react: ["react", "react-dom"],
  // 'react-style-singleton': ['react-style-singleton'],
  // '@radix-ui': ['@radix-ui'],
  // '@tanstack': ['@tanstack'],
  // animation: ['transitions-kit'],
  
  skeleton: ["resources/frontend/components/skeleton"],
  shared: ["resources/frontend/components/shared"],
  pages: ["resources/frontend/pages"],
  organisms: ["resources/frontend/components/organisms"],
  molecules: ["resources/frontend/components/molecules"],
  layouts: ["resources/frontend/components/layouts"],
  libs: ["resources/frontend/lib"],
  "shadcn-ui": ["resources/frontend/components/ui"],
}

export default defineConfig({
  plugins: [
    ViteImageOptimizer(),
    laravel({
      input: "resources/frontend/main.tsx",
      refresh: true,
    }),
    TanStackRouterVite(),
    VitePWA({
      registerType: "autoUpdate",
      outDir: "public",
      scope: "/",
      base: "/",
      devOptions: {
        enabled: true,
      },
      manifest: {
        id: "/",
        scope: "/",
        name: "laravel React",
        short_name: "laravel React",
        description: "App laravel React",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/assets/icons/icon-48-48.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/assets/icons/icon-72-72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/assets/icons/icon-96-96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/assets/icons/icon-144-144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/assets/icons/icon-192-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/assets/icons/icon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
      },
    }),
    react(),
    // compression()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./resources/frontend"),
    },
  },
  optimizeDeps: {
    include: ['resources/frontend/components/**/*.tsx'],
  },
  build: {
    minify: "terser", // use terser for better minification
    rollupOptions: {
      output: {
        // manualChunks(id) { // lighthouse 71
        //   for (const [chunkName, paths] of Object.entries(manualChunksConfig)) {
        //     if (paths.some(path => id.includes(path))) {
        //       return chunkName
        //     }
        //   }
        // },
        manualChunks(id) { // 41
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // remove console logs
        drop_debugger: true, // remove debugger statements
      },
    },
  },
})
