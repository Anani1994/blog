import Vue from 'vue';
// 引入组件配置
import componentArr from './componets';

// 引入使用 font-awesome
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    fas
} from '@fortawesome/free-solid-svg-icons';
import {
    fab
} from '@fortawesome/free-brands-svg-icons';
import {
    far
} from '@fortawesome/free-regular-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
library.add(fas, fab, far);

Vue.config.productionTip = false;

// 注册全局组件
const defineSubassemblies = {
    install: function (Vue) {
        Vue.component('FontAwesomeIcon', FontAwesomeIcon);
        componentArr.forEach(item => {
            Vue.component(item.name, item.component);
        });
    }
};

export default defineSubassemblies;
