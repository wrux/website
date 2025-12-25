import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
