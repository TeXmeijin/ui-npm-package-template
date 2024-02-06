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

# 解説

以下の項目について解説予定

- [ ] tsconfig.jsonの各種設定
- [ ] build.mjsによるesbuildの設定とesbuildをバンドラーに選んでいる背景
- [ ] package.jsonの設定
- [ ] GitHub Actionsの設定：Lintなど
- [ ] GitHub Actionsの設定：Storybookの自動デプロイ
- [ ] GitHub Actionsの設定：npmパッケージの自動デプロイ
- [ ] Storybookの設定
