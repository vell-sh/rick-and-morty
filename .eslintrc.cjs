module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'eol-last': ['error', 'always'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-empty-interface': 'warn',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react$'], ['^[a-z]'], ['^@']],
      },
    ],
  },
};
