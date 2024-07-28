import path, { resolve } from 'path'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { compression } from 'vite-plugin-compression2'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/frontend/main.tsx',
      refresh: true,
    }),
    TanStackRouterVite(),
    VitePWA({
      registerType: 'autoUpdate',
      outDir: 'public',
      scope: '/',
      base: '/',
      devOptions: {
        enabled: true,
      },
      manifest: {
        id: '/',
        scope: '/',
        name: 'laravel React',
        short_name: 'laravel React',
        description: 'App laravel React',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/img/icons/icon-48-48.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/img/icons/icon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/img/icons/icon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/img/icons/icon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/img/icons/icon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/img/icons/icon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any',
          },
        ],
      },
    }),
    react(),
    compression()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/frontend'),
    },
  },
  optimizeDeps: {
    include: ['resources/frontend/components/**/*.tsx'],
  },
  build: {
    minify: 'terser', // use terser for better minification
    assetsInlineLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks:  {
          react: ['react'],
          reactdomclient: ['react-dom/client'],
          icon: ['lucide-react', 'react-icons'],
          tanstack: ['@tanstack/react-router', '@tanstack/react-query'],
          lazyImage: ['loadable-image', 'transitions-kit'],
          radix: ['@radix-ui/react-menubar', '@radix-ui/react-dropdown-menu']
        }
        // manualChunks(id) { // 407kb
        //   if (id.includes('node_modules')) {
        //     return id
        //       .toString()
        //       .split('node_modules/')[1]
        //       .split('/')[0]
        //       .toString()
        //   }
        // },
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
