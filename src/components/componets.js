// 布局
import Layout from "./layout/Layout.vue";
// 抽屉
import Drawer from "./drawer/Drawer.vue";
// 步骤条
import {
    Steps,
    Step,
} from "./steps";
// 轮播图
import {
    SlideShow,
    Slide,
} from "./slide-show";
// 跑马灯
import {
    HorseRaceLamp,
} from "./horse-race-lamp";

export default [{
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
    },
    {
        name: "SlideShow",
        component: SlideShow
    },
    {
        name: "Slide",
        component: Slide
    },
    {
        name: "HorseRaceLamp",
        component: HorseRaceLamp
    },
];
