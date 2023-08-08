module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint'
  ],
  rules: {
    // react
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    // eslint
    'space-infix-ops': ['error', {
      'int32Hint': false
    }],
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/']
      },
      block: {
        balanced: true
      }
    }],
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-unused-expressions': 'error',
    'jsx-quotes': ['error', 'prefer-double']
  }
}
