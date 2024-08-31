import { PLUGIN_CHECK_FILE, PLUGIN_TS, PLUGIN_VUE } from "../utils/constants"
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pluginVue = require('eslint-plugin-vue')
import pluginTs from 'typescript-eslint'
import base from "./base";
import checkFiles from 'eslint-plugin-check-file'


export default [
    ...base,
    {
        plugins: {
            [PLUGIN_CHECK_FILE]: checkFiles,
        },
        rules: {
            // 文件夹采用KEBAB_CASE
            [`${PLUGIN_CHECK_FILE}/folder-naming-convention`]: [
                'error',
                { '**/': 'KEBAB_CASE' }
            ],
            // components目录下的vue文件采用KEBAB_CASE
            [`${PLUGIN_CHECK_FILE}/filename-naming-convention`]: [
                'error',
                {
                    '**/components/**/*.{vue,}': 'KEBAB_CASE',
                },
            ]
        }
    },
    {
        name: 'wukong/ts',
        plugins: {
           [PLUGIN_TS]: pluginTs,
        },
        rules: {
            [`@typescript-eslint/naming-convention`]: [
                "error",
                // 枚举选项使用UPPER_CASE
                {
                "selector": "enumMember",
                "format": ["UPPER_CASE"]
                }
            ]
        }
    },
    {
        name: 'wukong/vue',
        plugins: {
            [PLUGIN_VUE]: pluginVue
        },
        rules: {
            // vue组件节点顺序: script、template、style
           [`${PLUGIN_VUE}/block-order`]: ['error', { order: ['script', 'template', 'style'] }],
           // vue组件命名采用kabab-case
           [`${PLUGIN_VUE}/component-definition-name-casing`]: ['error', 'kebab-case'],
           // defineProps中属性命名采用camelCase
           [`${PLUGIN_VUE}/prop-name-casing`]: ['error', 'camelCase'],
           // defineEmits中事件命名
           [`${PLUGIN_VUE}/define-emits-declaration`]: ["error", 'runtime'],
           // template每行显示属性个数为1
           [`${PLUGIN_VUE}/max-attributes-per-line`]: ["error", {
            "singleline": {
                "max": 1
              },      
              "multiline": {
                "max": 1
              }
           }],
           // b-bind使用简写
           [`${PLUGIN_VUE}/v-bind-style`]: ["error", "shorthand"],
           // b-on使用简写
           [`${PLUGIN_VUE}/v-on-style`]: ["error", "shorthand"],
           //v-slot使用简写
           [`${PLUGIN_VUE}/v-slot-style`]: ["error", {
            "atComponent": "shorthand",
            "default": "shorthand",
            "named": "shorthand",
          }]
        }
    }
]