export default [
    // ===================================== frontend/RequireJS =====================================
    {
        id: 20181003,
        name: 'RequireJS (四)',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'frontend',
        //分类-路径（参见 main.vue）：
        // frontend：HTML/CSS, JavaScript, VueJS, AngularJS, canvas
        // backend： beMixed
        // others：  othMixed, computer, Git
        category: 'JavaScript',
        //标签-全局搜索（参见 main.vue）
        // HTML, CSS, JavaScript, ES6, jQuery, Git, webpack, vue, angular, template
        // RequireJS, issue, iview, router, windows, computer, canvas
        tag: ['JavaScript', 'RequireJS'],
        // 概要
        abstract: 'RequireJS 实现 jsonp 服务，它的基本思想是，网页通过添加一个 <script> 元素，向服务器请求 JSON 数据，这种做法不受同源政策限制。',
        // 发表时间
        postTime: '2018-10-03 18:59:34',
        // articles + <field> + <category> + <englishName>
        path: '/articles/frontend/javascript/RequireJS-3',
        // 路径名称：englishName
        pathName: 'RequireJS-3',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./javascript/RequireJS-3.vue')
    },
    {
        id: 20181002,
        name: 'RequireJS (三)',
        field: 'frontend',
        category: 'JavaScript',
        tag: ['JavaScript', 'RequireJS'],
        abstract: 'RequireJS 的基本配置，包括配置 baseUrl、加载第三方模块、配置 map及其它常用配置。',
        postTime: '2018-10-02 16:44:23',
        path: '/articles/frontend/javascript/RequireJS-2',
        pathName: 'RequireJS-2',
        component: () => import('./javascript/RequireJS-2.vue')
    },
    {
        id: 20181001,
        name: 'RequireJS (二)',
        field: 'frontend',
        category: 'JavaScript',
        tag: ['JavaScript', 'RequireJS'],
        abstract: 'RequireJS 的基本使用方法，简单介绍其基本 API。',
        postTime: '2018-10-01 20:08:25',
        path: '/articles/frontend/javascript/RequireJS-1',
        pathName: 'RequireJS-1',
        component: () => import('./javascript/RequireJS-1.vue')
    },
    {
        id: 20180930,
        name: 'RequireJS (一)',
        field: 'frontend',
        category: 'JavaScript',
        tag: ['JavaScript', 'RequireJS'],
        abstract: 'RequireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一。',
        postTime: '2018-09-30 22:18:35',
        path: '/articles/frontend/javascript/RequireJS',
        pathName: 'RequireJS',
        component: () => import('./javascript/RequireJs.vue')
    }
];
