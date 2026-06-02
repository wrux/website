const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      preserve: false,
      features: {
        'custom-media-queries': true,
        'gap-properties': false,
        'nesting-rules': true,
      },
    }),
    production &&
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
          },
        ],
      }),
  ].filter(Boolean),
};
