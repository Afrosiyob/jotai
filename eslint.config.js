import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginImport from 'eslint-plugin-import';
import react from 'eslint-plugin-react';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      'build',
      'public',
      'commitlint.config.js',
      'jest.config.js',
      'src/react-app-env.d.ts',
      'src/serviceWorker.ts',
      'src/**/*.stories.tsx',
      'vite.config.ts'
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      import: eslintPluginImport,
      react
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],
      'import/no-cycle': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'react/button-has-type': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'no-return-assign': 'off',
      'no-debugger': 'off',
      'global-require': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'newline-after-var': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // react
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^react$', '^react-dom$', '^react-router$', '^react-router-dom$', '^@?\\w'],
            // Config import
            ['^config'],
            ['^store'],
            // Absolute imports and Relative imports.
            ['^services(/.*|$)'],
            ['^helpers(/.*|$)'],
            ['^modules(/.*|$)'],
            ['^containers(/.*|$)'],
            ['^layouts(/.*|$)'],
            ['^pages(/.*|$)'],
            ['^components(/.*|$)'],
            ['^translations(/.*|$)'],
            ['^assets(/.*|$)'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // images imports
            ['^.+\\.(svg|jpg|png)$'],
            // Style imports.
            ['^.+\\.s?css$'],
            ['^']
          ]
        }
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'unused-imports/no-unused-imports': 'error',
      'object-curly-spacing': ['warn', 'always'],
      'max-len': [
        'warn',
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true
        }
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true
        }
      ],
      'react/jsx-key': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.js',
            '**/*.test.jsx',
            '**/*.test.ts',
            '**/*.test.tsx',
            'src/tests/**/*',
            'src/setupTests.ts'
          ]
        }
      ],
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-boolean-value': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/destructuring-assignment': 'off',
      '@typescript-eslint/comma-dangle': [
        'error',
        {
          arrays: 'only-multiline',
          objects: 'only-multiline',
          imports: 'only-multiline',
          exports: 'only-multiline',
          functions: 'never'
        }
      ]
    }
  },
  eslintConfigPrettier
);
