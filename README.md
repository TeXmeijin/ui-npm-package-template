# UI library テンプレート

## 概要

ReactベースでUIライブラリを開発するときのテンプレートです。

## 技術選定
- React
- Tailwind CSS
- Storybook
- TypeScript
- ESLint
- Prettier
- PNPM
- Scaffdog

# How To Use

importして利用する側は、コンポーネントとCSSの両方をセットアップします。

```tsx
import '@texmeijin/ui-library-example/output.css'
```

```tsx
import {Text} from '@texmeijin/ui-library-example'

<Text>テキスト</Text>
```

