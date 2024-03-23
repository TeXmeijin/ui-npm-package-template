/**
 * TODO
 * https://github.com/kufu/smarthr-ui/blob/master/tailwind.config.ts
 * こちらを見る限りはPresetをライブラリ側で定義して、利用側がそれを拡張する想定っぽい
 */

/** @type {import('tailwindcss').Config} */
export default {
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
