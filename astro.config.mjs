import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// import tailwind from '@astrojs/tailwind';

// import vercel from '@astrojs/vercel/static';

export default defineConfig({
  // integrations: [tailwind()],
  output: 'static',
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true,
  //   },
  // }),
  vite: {
    plugins: [tailwindcss()],
  },
});
