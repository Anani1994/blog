export default [
    // ===================================== frontend/computer =====================================
    {
        id: 20181116,
        name: '操作系统',
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
        tag: ['computer', 'operating system', 'OS'],
        // 概要
        abstract: '操作系统（英语：operating system，缩写作 OS）是管理计算机硬件与软件资源的计算机程序，同时也是计算机系统的内核与基石。',
        // 发表时间
        postTime: '2018-11-16 22:41:24',
        // 路径名称
        path: '/articles/others/computer/OperatingSystem',
        // articles + <field> + <category> + <englishName>
        pathName: 'OperatingSystem',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./computer/OperatingSystem.vue')
    },
    {
        id: 20181116,
        name: '计算机系统',
        field: 'others',
        category: 'computer',
        tag: ['computer', 'computer system'],
        abstract: '计算机系统指用于数据库管理的计算机硬软件及网络系统。',
        postTime: '2018-11-18 16:17:24',
        path: '/articles/others/computer/ComputerSystem',
        pathName: 'ComputerSystem',
        component: () => import('./computer/ComputerSystem.vue')
    }
];
