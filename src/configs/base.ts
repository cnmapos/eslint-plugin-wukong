import pluginJs from '@eslint/js'
import pluginTs from 'typescript-eslint'
import globals from 'globals'
import wukong from '../'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pluginVue = require('eslint-plugin-vue')

export default [
    pluginJs.configs.recommended,
    ...pluginTs.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        name: 'wukong/base',
        plugins: {
            get wukong() {
                return wukong
            },
        },
        languageOptions: {
            sourceType: 'module',
            globals: globals.browser
        }
    }
]