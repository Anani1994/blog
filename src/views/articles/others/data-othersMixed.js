export default [
    // ===================================== frontend/othersMixed =====================================
    // 在此文件下写文章的相关信息，并在对应路径下创建文章的组件
    {
        id: 20180922,
        name: '组件开发测试页面',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'others）',
        //分类-路径（参见 main.vue）：
        // frontend：HTML/CSS, JavaScript, VueJS, AngularJS, canvas
        // backend： beMixed
        // others：  othMixed, computer, Git
        category: 'othMixed',
        //标签-全局搜索（参见 main.vue）
        // HTML, CSS, JavaScript, ES6, jQuery, Git, webpack, vue, angular, template
        // RequireJS, issue, iview, router, windows, computer, canvas
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
    }
];
