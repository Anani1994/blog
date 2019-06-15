import Vue from 'vue';
import i18n from '../i18n';
import VueRouter from 'vue-router';
import routes from './routes';
import util from '../libs/util';

// 注册
Vue.use(VueRouter);

// 路由配置
const routerConfig = {
    // mode: history,
    routes,
};

// 传 `routes` 配置创建 router 实例
const router = new VueRouter(routerConfig);

/**
 * 设置网页标题
 * @param {string} 网页标题
 * @param {object} vue实例
 * @Returns undefined
 */
function title(title, vm) {
    let newTitle = `码良的博客`;
    if (title) {
        const { i18n, content, key } = title;
        if (i18n) {
            newTitle = vm.$t('message.basic_title');
        }
        if (!util.isEmpty(content)) {
            newTitle += ` - ${i18n ? vm.$t(`message.${key}`) : content}`;
        }
    }
    window.document.title = newTitle;
}

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
    // util.LoadingBar.start();
    title(to.meta.title, router.app);
    next();
});

// 路由全局后置守卫
router.afterEach((to) => {
    // util.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;
