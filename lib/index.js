"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meta_1 = __importDefault(require("./meta"));
const base_1 = __importDefault(require("./configs/base"));
const vue_recommended_1 = __importDefault(require("./configs/vue-recommended"));
const plugin = {
    meta: meta_1.default,
    configs: {
        'flat/base': base_1.default,
        'flat/vue-recommended': vue_recommended_1.default,
    },
    rules: {},
    processors: {}
};
// for ESM
exports.default = plugin;
module.exports = plugin;
