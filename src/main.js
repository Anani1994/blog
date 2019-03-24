import Vue from 'vue';

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

import App from './views/App.vue';

// 存储
import store from './store/store';

// 路由
import router from './router';

// 国际化
import i18n from './i18n';

// 全局使用工具函数
import util from './libs/util';
Vue.prototype.$util = util;

// 自定义全局组件
import defineSubassemblies from './components/defineSubassembly.js';
Vue.use(defineSubassemblies);

// 引入 Bootstrap 样式文件
import 'bootstrap/scss/bootstrap.scss';
// 按需引入 bootstrap 插件
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

// 引入动画
import 'animate.css';

// 创建自己的 custom.less 书写通用组件样式
import './styles/index.less';

new Vue({ // 创建 vue 实例
    // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
});
