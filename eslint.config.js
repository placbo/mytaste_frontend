import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: ['dist/**', '**/node_modules/*', '**/mockServiceWorker.js'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  //importPlugin.flatConfigs.recommended,
  {
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
      // 'import/resolver': {
      //   typescript: true,
      //   alias: true,
      // },
    },
    plugins: {
      js,
      eslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      semi: 'error',
      'no-console': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
]);
