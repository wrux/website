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
  integrations: [
    icon({
      include: {
        lucide: [
          'user',
          'briefcase',
          'contact',
          'file-text',
          'folder-git-2',
          'external-link',
          'terminal',
          'globe',
          'sparkles',
          'link',
        ],
      },
    }),
  ],
});
