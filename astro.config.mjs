import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  build: {
    inlineStylesheets: 'never',
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
