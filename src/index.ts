import meta from "./meta";
import base from './configs/base'
import vueRecommended from './configs/vue-recommended';

const plugin = {
    meta,
    configs: {
        'flat/base': base,
        'flat/vue-recommended': vueRecommended,
    },
    rules: {},
    processors: {}
};

// for ESM
export default plugin

module.exports = plugin
