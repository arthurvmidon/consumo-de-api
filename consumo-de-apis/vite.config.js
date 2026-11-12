import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugIn = {
  registerType: 'prompt',

  includeAssets: [
  'favicon.ico',
  'favicon.svg',
  'apple-touch-icon.png',
  'icons.svg'
  ],

  manifest: {
    name: 'Consumo de APIs',
    short_name: 'APIs',
    description: 'Aplicação para consumo de APIs',

    theme_color: '#171717',
    background_color: '#f0e7db',

    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',

    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },

  workbox: {
    globPatterns: [
      '**/*.{js,css,html,ico,png,svg,webp,woff2}'
    ],

    navigateFallback: 'index.html',

    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/i,

        handler: 'CacheFirst',

        options: {
          cacheName: 'imagens-cache',

          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30
          }
        }
      },

      {
        urlPattern: /^https:\/\/www\.omdbapi\.com\/.*/i,

        handler: 'NetworkFirst',

        options: {
          cacheName: 'omdb-api-cache',

          networkTimeoutSeconds: 5,

          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24
          }
        }
      }
    ]
  }
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugIn)
  ]
})