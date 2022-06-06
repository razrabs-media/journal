module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@feature-sliced',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // TODO: Включить после исправления
    // https://github.com/feature-sliced/eslint-config/issues/92
    // https://github.com/feature-sliced/eslint-config/issues/93
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@next/next/no-document-import-in-page': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: ['key'],
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: { single: 5, multi: 1 } },
    ],
    'react/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-boolean-value': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/prop-types': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'max-params': ['error', 2],
    camelcase: [2, { properties: 'always' }],
    'arrow-parens': [2, 'always'],
    'consistent-return': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'no-useless-computed-key': 'error',
    'prefer-destructuring': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],
    'block-spacing': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
  },
  overrides: [
    {
      files: ['src/**'],
      rules: {
        'import/no-internal-modules': 'off',
        'import/prefer-default-export': 'off',
        'import/newline-after-import': ['error', { count: 1 }],
      },
    },
    {
      files: ['src/pages/**'],
      rules: {
        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['packages/packages/**'],
      rules: {
        'import/no-internal-modules': 'off',
      },
    }
  ],
}
