// 布局
import Layout from './layout/Layout.vue';
// 抽屉
import Drawer from './drawer/Drawer.vue';
// 兼容上个版本
import BoWen from './bowen/BoWen.vue';
import Steps from './steps/components/Steps.vue';
import Step from './steps/components/Step.vue';
import Divider from './divider/Divider.vue';
import FooterDivider from './footer-divider/FooterDivider.vue';
import Icon from './icon/Icon.vue';

export default [
    {
        name: 'Layout',
        component: Layout
    },
    {
        name: 'Drawer',
        component: Drawer
    },
    // 兼容
    {
        name: 'BoWen',
        component: BoWen
    },
    {
        name: 'Icon',
        component: Icon
    },
    {
        name: 'Steps',
        component: Steps
    },
    {
        name: 'Step',
        component: Step
    },
    {
        name: 'Divider',
        component: Divider
    },
    {
        name: 'FooterDivider',
        component: FooterDivider
    }
];