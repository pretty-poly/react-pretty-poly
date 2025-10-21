import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'e2e/**/*.spec.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-comment-textnodes': 'off',

      // Allow exporting variants/constants from component files
      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true,
      }],
      // Allow unused vars that start with _
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
  {
    // Disable react-refresh for shadcn/ui components
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    // Disable type-checking for config and e2e files not in tsconfig.app.json
    files: ['**/*.config.ts', '**/*.config.js', 'e2e/**/*.ts'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    // Disable type-checking for JS files
    files: ['**/*.js', '**/*.jsx'],
    extends: [tseslint.configs.disableTypeChecked],
  },
])
