import { defineConfig } from 'eslint/config';
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
//import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier'


export default defineConfig([
  {
    ignores: [
      'dist/**',
      '**/node_modules/*',
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  //importPlugin.flatConfigs.recommended,
  {
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
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
      eslintPlugin
    },
    rules: {
      "semi": "error",
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  prettierConfig,
]);

