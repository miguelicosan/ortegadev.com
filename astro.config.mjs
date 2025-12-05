// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ortegadev.com',
  integrations: [react()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  // Enable View Transitions for smoother page navigation
  viewTransitions: {
    fallback: 'animate'
  }
});