import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  // Recommended rules for .astro files + embedded JS/TS
  ...eslintPluginAstro.configs.recommended,

  // Accessibility rules (jsx-a11y) applied inside .astro templates
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],

  {
    // Use TS parser for the JS/TS frontmatter blocks in .astro files
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },

  {
    // Project-level overrides
    rules: {
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/no-set-html-directive':          'warn',    // XSS risk — only acceptable for hardcoded static data
      'astro/prefer-class-list-directive':    'warn',
      'astro/semi':                           ['warn', 'always'],
    },
  },

  {
    ignores: ['dist/**', 'node_modules/**', 'scripts/**'],
  },
];
