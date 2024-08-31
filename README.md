# eslint-plugin-wukong
我是Vue3黑神话·悟空版eslint规范插件，依据[《浅读Vue3代码10万行，总结出30个代码规范》](https://juejin.cn/post/7402811750771851275)而定制。提供base、recommended两个配置。

我正在快速成长，还不够成熟，需要大家的帮忙，欢迎大家pr、star、fork。

## config:base
包含js、typescript、vue开发常用的eslint配置：
```[
    pluginJs.configs.recommended,
    ...pluginTs.configs.recommended,
    ...pluginVue.configs["flat/essential"],
]
```
## config:recommended
基于[《浅读Vue3代码10万行，总结出30个代码规范》](https://juejin.cn/post/7402811750771851275)扩展的规范。
- wukong/check-file/folder-naming-convention：文件夹规范
- wukong/check-file/filename-naming-convention：Vue组件规范
- wukong/vue/block-order：Vue组件script、template、style顺序
- wukong/vue/component-definition-name-casing 组件定义命名规范
- wukong/vue/define-emits-declaration：defineEmits规范
- wukong/vue/max-attributes-per-line：template中一行显示属性个数
- wukong/vue/prop-name-casing：prop命名规范
- wukong/vue/v-bind-style：v-bind使用简写
- wukong/vue/v-on-style：v-on使用简写
- wukong/vue/v-slot-style：v-slot使用简写
