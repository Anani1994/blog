export default [
    {
        id: 1,
        type: 'windows',
        title: '更改目录',
        command: 'cd',
        detail: '更改目录',
        arguments: ['path'],
        pathName: 'w-cd',
        path: '/articles/others/command-line/windows/w-cd',
        component: () => import('../views/articles/others/command-line/windows/w-cd.vue')
    }
]