// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ============================================================
// Astro Configuration — Nafi Ainun Na'im Portfolio
// ============================================================

export default defineConfig({
  // URL final (untuk generate sitemap, canonical URL, dll)
  // TODO: Ganti ke "https://nafiainun.dev" setelah domain dibeli
  site: 'https://portfolio.nafiainun.workers.dev',

  // ============================================================
  // Integrations
  // ============================================================
  integrations: [
    sitemap({
      // Filter halaman yang tidak perlu masuk sitemap
      filter: (page) =>
        !page.includes('/og-designer') &&
        !page.includes('/404'),

      // Konfigurasi i18n untuk sitemap
      i18n: {
        defaultLocale: 'id',
        locales: {
          id: 'id-ID',
          en: 'en-US',
          ar: 'ar-SA',
        },
      },
    }),
  ],

  // ============================================================
  // i18n
  // ============================================================
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en', 'ar'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // ============================================================
  // Build Settings
  // ============================================================
  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  // Prefetch untuk navigasi cepat
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});