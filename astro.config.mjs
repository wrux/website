import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  integrations: [
    compress({
      path: ['./build', './dist'],
      logger: 0,
      html: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
        removeComments: true,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    tailwind(),
  ],
});
