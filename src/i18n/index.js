import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhCN from './zh-CN';
import enUS from './en-US';

// 使用插件
Vue.use(VueI18n);

const messages = {
    'zh-CN': {
        message: zhCN
    },
    'en-US': {
        message: enUS
    }
};
// Create VueI18n instance with options
const i18n = new VueI18n({
    // set locale
    locale: 'en-US',
     // set locale messages
    messages
});

export default i18n;
