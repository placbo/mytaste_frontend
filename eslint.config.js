// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';

// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.recommended,
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: {
//       globals: {
//         browser: true,
//       },
//     },
//     plugins: {
//       js: eslint,
//       tseslint,
//     },
//     rules: {
//       semi: 'error',
//       'no-console': 'off',
//       'react/react-in-jsx-scope': 'off',
//       'react/jsx-uses-react': 'off',
//     },
//   }
// );



import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
//import pluginReact from "eslint-plugin-react";
import eslintPlugin from '@typescript-eslint/eslint-plugin';


//TODO  se : https://typescript-eslint.io/packages/typescript-eslint/#config

export default defineConfig([
  // {
  //   files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  //   languageOptions: { globals: globals.browser },
  //   ignores: ["dist/**"]
  // },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["dist/**"],
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
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
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/**"],
  },
  //pluginReact.configs.flat.recommended,
]);

