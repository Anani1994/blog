export default [
    // ===================================== frontend/AngularJS =====================================
    {
        id: 20181015,
        name: 'UI-Router for AngularJS (四)',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'frontend',
        //分类-路径（参见 main.vue）：
        // frontend：HTML/CSS, JavaScript, VueJS, AngularJS, canvas
        // backend： beMixed
        // others：  othMixed, computer, Git
        category: 'AngularJS',
        //标签-全局搜索（参见 main.vue）
        // HTML, CSS, JavaScript, ES6, jQuery, Git, webpack, vue, angular, template
        // RequireJS, issue, iview, router, windows, computer, canvas
        tag: ['JavaScript', 'angular', 'router'],
        // 概要
        abstract: 'UI-Router is the defacto standard for routing in AngularJS-嵌套路由&多视图。',
        // 发表时间
        postTime: '2018-10-15 23:16:23',
        // articles + <field> + <category> + <englishName>
        path: '/articles/frontend/AngularJS/angular-ui-router-3',
        // 路径名称
        pathName: 'angular-ui-router-3',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./AngularJS/angular-ui-router-3.vue')
    },
    {
        id: 20181014,
        name: 'UI-Router for AngularJS (三)',
        field: 'frontend',
        category: 'AngularJS',
        tag: ['JavaScript', 'angular', 'router'],
        abstract: 'UI-Router is the defacto standard for routing in AngularJS-传参。',
        postTime: '2018-10-14 00:43:51',
        path: '/articles/frontend/AngularJS/angular-ui-router-2',
        pathName: 'angular-ui-router-2',
        component: () => import('./AngularJS/angular-ui-router-2.vue')
    },
    {
        id: 20181013,
        name: 'UI-Router for AngularJS (二)',
        field: 'frontend',
        category: 'AngularJS',
        tag: ['JavaScript', 'angular', 'router'],
        abstract: 'UI-Router is the defacto standard for routing in AngularJS-基本配置。',
        postTime: '2018-10-13 21:25:12',
        path: '/articles/frontend/AngularJS/angular-ui-router-1',
        pathName: 'angular-ui-router-1',
        component: () => import('./AngularJS/angular-ui-router-1.vue')
    },
    {
        id: 20181013,
        name: 'UI-Router for AngularJS (一)',
        field: 'frontend',
        category: 'AngularJS',
        tag: ['JavaScript', 'angular', 'router'],
        abstract: 'UI-Router is the defacto standard for routing in AngularJS-简单使用方法。',
        postTime: '2018-10-13 13:27:05',
        path: '/articles/frontend/AngularJS/angular-ui-router',
        pathName: 'angular-ui-router',
        component: () => import('./AngularJS/angular-ui-router.vue')
    },
    {
        id: 20181010,
        name: 'AngularJS 获取 radio 选中的值',
        field: 'frontend',
        category: 'AngularJS',
        tag: ['JavaScript', 'angular', 'radio'],
        abstract: 'AngularJS 获取 实时获取被选中的 radio 的值。',
        postTime: '2018-10-10 22:29:52',
        path: '/articles/frontend/AngularJS/angular-radio',
        pathName: 'angular-radio',
        component: () => import('./AngularJS/angular-radio.vue')
    },
    {
        id: 20180922,
        name: 'AngularJS 的使用笔记',
        field: 'frontend',
        category: 'AngularJS',
        tag: ['JavaScript', 'angular', 'scope'],
        abstract: '记录工作中的学习中遇到的重点。',
        postTime: '2018-09-22 00:05:45',
        path: '/articles/frontend/AngularJS/angular-notes',
        pathName: 'angular-notes',
        component: () => import('./AngularJS/angular-notes.vue')
    },
    {
        id: 20180823,
        name: '搭建 webpack-angular 基础开发环境',
        field: 'frontend',
        category: 'AngularJS',
        tag: ['webpack', 'angular', 'JavaScript', 'jQuery'],
        abstract: '由于公司的项目主要使用 AngularJS，所以准备搭建一个基本的开发环境，以便更好的学习和调试组件等。',
        postTime: '2018-08-23 23:33:38',
        path: '/articles/frontend/AngularJS/angular-dev',
        pathName: 'angular-dev',
        component: () => import('./AngularJS/angular-dev.vue')
    }
];
