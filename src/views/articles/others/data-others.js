export default [
    // 在此文件下写文章的相关信息，并在对应路径下创建文章的组件
    {
        id: 20180922,
        name: '组件开发测试页面',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'others）',
        //分类  - field.vue及路径-所有类型：
        // frontend：HTML, CSS, JS, VueJS, AngularJS, mixed
        // backend： beMixed
        // others：  demo, git, notes, othMixed, computer
        category: 'othMixed',
        //标签-暂未使用: 后期可做全局搜索
        tag: ['template', 'vue'],
        // 概要
        abstract: '页面主要用于测试新增加的组件',
        //发表时间
        postTime: '2018-09-22 12:00:00',
        // articles + <field> + <category> + <englishName>
        path: '/articles/others/othMixed/TestTemp',
        // 路径名称： englishName
        pathName: 'TestTemp.vue',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./othMixed/TestTemp.vue')
    },
    // ....................................................................................................................others/computer
    {
        id: 20181116,
        name: '操作系统',
        field: 'others',
        category: 'computer',
        tag: ['computer', 'operating system', 'OS'],
        abstract: '操作系统（英语：operating system，缩写作 OS）是管理计算机硬件与软件资源的计算机程序，同时也是计算机系统的内核与基石。',
        postTime: '2018-11-16 22:41:24',
        path: '/articles/others/computer/OperatingSystem',
        pathName: 'OperatingSystem',
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
    },
    // ....................................................................................................................others/git
    {
        id: 20180918, 
        name: 'Could not restore untracked files from stash',
        field: 'others',
        category: 'Git',
        tag: ['Git', 'issue'],
        abstract: '分析解决如题所示问题的原因和解决方法。',
        postTime: '2018-09-18 22:21:18',
        path: '/articles/others/Git/IssueOne',
        pathName: 'IssueOne',
        component: () => import('./git/IssueOne.vue')
    }
];
