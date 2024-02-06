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
      white: '#fdfdfd',
      body: '#3a3f4a',
      gray: '#777',
      primary: '#0d8a23',
      accent: '#1306c7',
      secondary: '#99621b',
      error: '#bb3849',
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
