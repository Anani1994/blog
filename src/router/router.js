export const pageIndex = {
    path: '/',
    name: 'index',
    meta: {
        title: '首页'
    },
    component: () => import('../views/main/main.vue')
}
export const routers = [
    pageIndex
];
