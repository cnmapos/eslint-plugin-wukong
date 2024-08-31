"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pluginVue = require('eslint-plugin-vue');
const typescript_eslint_1 = __importDefault(require("typescript-eslint"));
const base_1 = __importDefault(require("./base"));
const eslint_plugin_check_file_1 = __importDefault(require("eslint-plugin-check-file"));
exports.default = [
    ...base_1.default,
    {
        plugins: {
            [constants_1.PLUGIN_CHECK_FILE]: eslint_plugin_check_file_1.default,
        },
        rules: {
            // 文件夹采用KEBAB_CASE
            [`${constants_1.PLUGIN_CHECK_FILE}/folder-naming-convention`]: [
                'error',
                { '**/': 'KEBAB_CASE' }
            ],
            // components目录下的vue文件采用KEBAB_CASE
            [`${constants_1.PLUGIN_CHECK_FILE}/filename-naming-convention`]: [
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
            [constants_1.PLUGIN_TS]: typescript_eslint_1.default,
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
            [constants_1.PLUGIN_VUE]: pluginVue
        },
        rules: {
            // vue组件节点顺序: script、template、style
            [`${constants_1.PLUGIN_VUE}/block-order`]: ['error', { order: ['script', 'template', 'style'] }],
            // vue组件命名采用kabab-case
            [`${constants_1.PLUGIN_VUE}/component-definition-name-casing`]: ['error', 'kebab-case'],
            // defineProps中属性命名采用camelCase
            [`${constants_1.PLUGIN_VUE}/prop-name-casing`]: ['error', 'camelCase'],
            // defineEmits中事件命名
            [`${constants_1.PLUGIN_VUE}/define-emits-declaration`]: ["error", 'runtime'],
            // template每行显示属性个数为1
            [`${constants_1.PLUGIN_VUE}/max-attributes-per-line`]: ["error", {
                    "singleline": {
                        "max": 1
                    },
                    "multiline": {
                        "max": 1
                    }
                }],
            // b-bind使用简写
            [`${constants_1.PLUGIN_VUE}/v-bind-style`]: ["error", "shorthand"],
            // b-on使用简写
            [`${constants_1.PLUGIN_VUE}/v-on-style`]: ["error", "shorthand"],
            //v-slot使用简写
            [`${constants_1.PLUGIN_VUE}/v-slot-style`]: ["error", {
                    "atComponent": "shorthand",
                    "default": "shorthand",
                    "named": "shorthand",
                }]
        }
    }
];
