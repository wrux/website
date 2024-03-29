/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const textStyles = ({ theme }) => ({
  heading: {
    fontFamily: theme('fontFamily.sans'),
  },
  h1: {
    extends: 'heading',
    fontSize: theme('fontSize.step-4'),
    fontWeight: theme('fontWeight.semibold'),
    lineHeight: 1.2,
  },
  h2: {
    extends: 'heading',
    fontSize: theme('fontSize.step-3'),
    fontWeight: theme('fontWeight.bold'),
  },
  h3: {
    extends: 'heading',
    fontSize: theme('fontSize.step-2'),
    fontWeight: theme('fontWeight.normal'),
  },
  h4: {
    extends: 'heading',
    fontSize: theme('fontSize.step-1'),
    fontWeight: theme('fontWeight.light'),
  },
  overline: {
    fontSize: theme('fontSize.step--1'),
    fontWeight: theme('fontWeight.semibold'),
    lineHeight: 1.3,
    letterSpacing: '0.125em',
    textTransform: 'uppercase',
  },
  overlineSm: {
    fontSize: theme('fontSize.step--2'),
    fontWeight: theme('fontWeight.normal'),
    lineHeight: 1.3,
    letterSpacing: '0.125em',
    textTransform: 'uppercase',
  },
  pLg: {
    fontSize: theme('fontSize.step-1'),
    fontWeight: theme('fontWeight.normal'),
  },
  p: {
    fontSize: theme('fontSize.step--1'),
    fontWeight: theme('fontWeight.normal'),
  },
  pSm: {
    fontSize: theme('fontSize.step--2'),
    fontWeight: theme('fontWeight.normal'),
  },
});

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Don't purge typography classes
    { pattern: /^c-/ },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#00eacf',
        secondary: '#6f68e3',
        dark: '#1f1f28',
        offwhite: '#e5e5e5',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Fluid type: @link https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l
        'step--2': 'clamp(0.91rem, calc(0.89rem + 0.1vw), 0.96rem)',
        'step--1': 'clamp(1.09rem, calc(1.05rem + 0.21vw), 1.2rem)',
        'step-0': 'clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem)',
        'step-1': 'clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)',
        'step-2': 'clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)',
        'step-3': 'clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)',
        'step-4': 'clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)',
        'step-5': 'clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)',
      },
      margin: {
        spacing: 'min(16rem, 10vh)',
      },
      height: {
        'screen-dynamic': '100dvh',
      },
      textStyles,
    },
  },
  plugins: [require('tailwindcss-typography')()],
};
