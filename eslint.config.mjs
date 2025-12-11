import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // eslint-plugin-prettier: Prettier 포맷 위반을 ESLint 에러로 보고
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  },

  // 마지막에 추가: 포맷 관련 ESLint 규칙은 비활성화해서 Prettier가 우선되도록 함
  prettierConfig,

  // Override default ignores of eslint-config-next.
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
