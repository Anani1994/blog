import Vue from 'vue';
import App from './app.vue';
import { router } from './router/index';
import store from './store/store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import highLight from './highlight/highlight.js';
// 引入自定义通用的 css
import './styles/main.less';
// 全局使用工具函数
import util from '@/libs/util.js';
Vue.prototype.$util = util;
// 自定义全局组件
import defineSubassemblies from '@/components/defineSubassembly.js';
Vue.use(defineSubassemblies);

Vue.use(iView);
Vue.use(highLight);

new Vue({ // 创建 vue 实例
  // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  el: '#app', 
  // 创建和挂载根实例
  router: router,
  // 
  store: store,
  // 声明了 html 中的内容
  render: h => h(App)
})