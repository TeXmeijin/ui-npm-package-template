/**
 * TODO: 今後要検討
 */
module.exports = {
  extends: ['smarthr', 'plugin:storybook/recommended'],
  plugins: ['import'],
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
    'smarthr/a11y-delegate-element-has-role-presentation': 'error',
    'smarthr/require-barrel-import': 'off',
    'smarthr/a11y-clickable-element-has-text': 'off',
  },
}
