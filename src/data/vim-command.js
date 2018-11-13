export default [
    {
        id: 1,
        type: 'vim',
        title: '退出',
        command: 'q',
        detail: '退出 vim 编辑器',
        arguments: [],
        pathName: 'vim-q',
        path: '/articles/others/linux/vim-q',
        component: () => import('../views/articles/others//vim/vim-q.vue')
    }
]