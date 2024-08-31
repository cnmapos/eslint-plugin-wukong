"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = __importDefault(require("@eslint/js"));
const typescript_eslint_1 = __importDefault(require("typescript-eslint"));
const globals_1 = __importDefault(require("globals"));
const __1 = __importDefault(require("../"));
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pluginVue = require('eslint-plugin-vue');
exports.default = [
    js_1.default.configs.recommended,
    ...typescript_eslint_1.default.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        name: 'wukong/base',
        plugins: {
            get wukong() {
                return __1.default;
            },
        },
        languageOptions: {
            sourceType: 'module',
            globals: globals_1.default.browser
        }
    }
];
