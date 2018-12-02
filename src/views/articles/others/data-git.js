export default [
    // ===================================== frontend/Git =====================================
    {
        id: 20180918, 
        name: 'Could not restore untracked files from stash',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'others',
        //分类-路径（参见 main.vue）：
        // frontend：HTML/CSS, JavaScript, VueJS, AngularJS, canvas
        // backend： beMixed
        // others：  othMixed, computer, Git
        category: 'Git',
        //标签-全局搜索（参见 main.vue）
        // HTML, CSS, JavaScript, ES6, jQuery, Git, webpack, vue, angular, template
        // RequireJS, issue, iview, router, windows, computer, canvas
        tag: ['Git', 'issue'],
        // 概要
        abstract: '分析解决如题所示问题的原因和解决方法。',
        // 发表时间
        postTime: '2018-09-18 22:21:18',
        // articles + <field> + <category> + <englishName>
        path: '/articles/others/Git/IssueOne',
        // 路径名称：englishName
        pathName: 'IssueOne',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./git/IssueOne.vue')
    }
];