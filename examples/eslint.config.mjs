import globals from "globals";
import tseslint from "typescript-eslint";
import wukong from 'eslint-plugin-wukong';

export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  ...wukong.configs['flat/vue-recommended'],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
];