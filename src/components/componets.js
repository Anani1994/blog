// 布局
import Layout from "./layout/Layout.vue";
// 抽屉
import Drawer from "./drawer/Drawer.vue";
// 步骤条
import Steps from "./steps/components/Steps.vue";
import Step from "./steps/components/Step.vue";

export default [
    {
        name: "Layout",
        component: Layout
    },
    {
        name: "Drawer",
        component: Drawer
    },
    {
        name: "Steps",
        component: Steps
    },
    {
        name: "Step",
        component: Step
    }
];
