// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lilimesemuhelye.hu',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Ship one small stylesheet instead of a per-page <style> waterfall.
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
