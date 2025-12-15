// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ortegadev.com',
  integrations: [react()],
  output: 'static',
  image: {
    domains: ['ortegadev.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});