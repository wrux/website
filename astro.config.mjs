import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    tailwind(),
    compress({
      Path: ['./build', './dist'],
      Logger: 0,
      HTML: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        decodeEntities: true,
        html5: true,
        removeComments: true,
      },
    }),
  ],
});
