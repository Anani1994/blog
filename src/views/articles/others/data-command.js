export default [
    // ===================================== frontend/computer =====================================
    {
        id: 20181216,
        name: 'ls',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'others',
        //分类-路径（参见 main.vue）：
        // frontend：HTML/CSS, JavaScript, VueJS, AngularJS, canvas
        // backend： beMixed
        // others：  othMixed, computer, Git
        category: 'computer',
        //标签-全局搜索（参见 main.vue）
        // HTML, CSS, JavaScript, ES6, jQuery, Git, webpack, vue, angular, template
        // RequireJS, issue, iview, router, windows, computer, canvas
        tag: ['computer', 'command', 'ls'],
        // 概要
        abstract: 'ls 命令将每个由 Directory 参数指定的目录或者每个由 File 参数指定的名称写到标准输出，以及您所要求的和标志一起的其它信息。',
        // 发表时间
        postTime: '2018-12-16 11:32:56',
        // 路径名称
        path: '/articles/others/command/LS',
        // articles + <field> + <category> + <englishName>
        pathName: 'LS',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./command/LS.vue')
    },
    {
        id: 20190119,
        name: 'ls',
        field: 'others',
        category: 'computer',
        tag: ['computer', 'command'],
        abstract: '囊括目录的增删改查操作命令。',
        postTime: '2018-01-19 00:15:25',
        path: '/articles/others/command/dir-manage',
        pathName: 'dir-manage',
        component: () => import('./command/DirManage.vue')
    },
];
