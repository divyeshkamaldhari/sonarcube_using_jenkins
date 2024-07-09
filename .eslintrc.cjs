module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.config.js',
    'dist/*',
    '**/*.js',
    'node_modules/*',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // indent: ['error', 2],
    indent: 'off',
    semi: ['error', 'always'],
  },
};
