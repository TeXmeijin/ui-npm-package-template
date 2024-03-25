module.exports = {
  extends: ['plugin:react/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-this-in-sfc": "off",
    "import/no-relative-packages": "error",
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['Input', 'InputWithTooltip'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'type',
    ],
  },
}
