import FullPage from './fullpage/fullpage.vue';
import PageItem from './fullpage/components/page.vue';
import BoWen from './bowen/bowen.vue';
import FooterDivider from './footer-divider/footerDivider.vue';

const defineSubassemblies = {
    install:function (Vue) {
        Vue.component('FullPage',FullPage);
        Vue.component('PageItem',PageItem);
        Vue.component('BoWen',BoWen);
        Vue.component('FooterDivider',FooterDivider);;
    }
};

export default defineSubassemblies;
