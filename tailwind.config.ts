import preset from './src/tailwind.preset'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  prefix: 'mej-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: 'var(--color-white)',
      body: 'var(--color-body)',
      gray: 'var(--color-gray)',
      primary: 'var(--color-primary)',
      accent: 'var(--color-accent)',
      secondary: 'var(--color-secondary)',
      error: 'var(--color-error)',
      richTextEditor: {
        toolBarBg: 'var(--color-rich-text-editor-tool-bar-bg)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.background-transition': {
          transition: 'filter 0.3s ease',
        },
        '.background-transition:hover': {
          filter: 'invert(0.1) saturate(120%)',
        },
      })
    }),
  ],
  corePlugins: {
    preflight: false,
    gridTemplateColumns: true,
    gridColumn: true,
    gridColumnStart: true,
    gridColumnEnd: true,

    // 以下は暫定
    boxShadowColor: false,
    caretColor: false,
    divideColor: false,
    placeholderColor: false,
    ringColor: false,
    ringOffsetColor: false,
    textDecorationColor: false,
  },
}
