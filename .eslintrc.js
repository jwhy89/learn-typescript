module.exports = {
    reportUnusedDisableDirectives: true,
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'prettier', 'jest'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      // Jest tests
      'jest/lowercase-name': [
        'error',
        {
          ignore: ['describe'],
        },
      ],
      'jest/prefer-inline-snapshots': 'off', // If 'warn' did not also attempt to fix where it shouldn't
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'no-shadow': 'off',
      'no-undef': 'warn',
      'prettier/prettier': 'error',
      // Typescript
      'no-useless-constructor': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/promise-function-async': ['error'],
    },
  };
  