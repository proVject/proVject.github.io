import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['fpwa.svg'],
    //   devOptions: {
    //     enabled: false
    //   },
    //   manifestIcons: {
    //     src: 'pwa.svg',
    //     sizes: [96, 128, 192, 256, 384, 512],
    //     purpose: 'any maskable'
    //   },
    //   manifest: {
    //     name: 'proVject',
    //     short_name: 'proVject',
    //     description: 'Volodymyr melnyk\'s portfolio',
    //     theme_color: '#9ae600',
    //     background_color: '#212121',
    //     icons: [
    //       {
    //         "src": "pwa-64x64.png",
    //         "sizes": "64x64",
    //         "type": "image/png"
    //       },
    //       {
    //         "src": "pwa-192x192.png",
    //         "sizes": "192x192",
    //         "type": "image/png"
    //       },
    //       {
    //         "src": "pwa-512x512.png",
    //         "sizes": "512x512",
    //         "type": "image/png"
    //       },
    //       {
    //         "src": "maskable-icon-512x512.png",
    //         "sizes": "512x512",
    //         "type": "image/png",
    //         "purpose": "maskable"
    //       }
    //
    //     ]
    //   },
    //   workbox: {
    //     runtimeCaching: [
    //       // {
    //       //     urlPattern: ({ request }) => request.destination === 'document',
    //       //     handler: 'NetworkFirst',
    //       //     options: {
    //       //         cacheName: 'html-cache',
    //       //     }
    //       // },
    //       // {
    //       //     urlPattern: ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
    //       //     handler: 'StaleWhileRevalidate',
    //       //     options: {
    //       //         cacheName: 'asset-cache',
    //       //     }
    //       // },
    //         // 1. Спочатку винятки
    //         // {
    //         //   urlPattern: ({ url }) => url.pathname.startsWith('/ais'),
    //         //   handler: 'NetworkOnly'
    //         // },
    //         // {
    //         //   urlPattern: ({ url }) => url.pathname.startsWith('/mediumclone_vue'),
    //         //   handler: 'NetworkOnly'
    //         // },
    //         // {
    //         //   urlPattern: ({ url }) => url.pathname.startsWith('/taskWave'),
    //         //   handler: 'NetworkOnly'
    //         // },
    //         //
    //         // // 2. Потім загальні правила
    //         // {
    //         //   urlPattern: ({ request }) => request.destination === 'document',
    //         //   handler: 'NetworkOnly',
    //         //   options: {
    //         //     cacheName: 'html-cache',
    //         //   }
    //         // },
    //         // {
    //         //   urlPattern: ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
    //         //   handler: 'StaleWhileRevalidate',
    //         //   options: {
    //         //     cacheName: 'asset-cache',
    //         //   }
    //         // },
    //         // {
    //         //   urlPattern: ({ request }) => request.destination === 'image',
    //         //   handler: 'CacheFirst',
    //         //   options: {
    //         //     cacheName: 'image-cache',
    //         //     expiration: {
    //         //       maxEntries: 50,
    //         //       maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
    //         //     }
    //         //   }
    //         // }
    //
    //     ]
    //   }
    // })
  ],
})
