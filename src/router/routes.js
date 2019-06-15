const main = {
    path: "/",
    name: "index",
    meta: {
        title: {
            // 默认的 title
            content: "",
            // 是否支持国际化
            i18n: true,
            // 国际化 key 值
            key: "index_title"
        }
    },
    component: () => import("../views/main/Main.vue")
};

const itemSet = {
    path: '/item-set',
    name: 'itemSet',
    meta: {
        content: '项目演示',
        i18n: true,
        key: 'item_demo',
    },
    component: () => import("../views/itemset/ItemSet.vue")
};

export default [
    main,
    itemSet,
];
