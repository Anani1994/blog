export default [
    // ===================================== frontend/canvas =====================================
    {
        id: 20181202,
        name: '初识CANVAS',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'frontend',
        //分类-路径（参见 main.vue）：
        // frontend：HTML/CSS, JavaScript, VueJS, AngularJS, canvas
        // backend： beMixed
        // others：  othMixed, computer, Git
        category: 'canvas',
        //标签-全局搜索（参见 main.vue）
        // HTML, CSS, JavaScript, ES6, jQuery, Git, webpack, vue, angular, template
        // RequireJS, issue, iview, router, windows, computer, canvas
        tag: ['canvas', 'javascript'],
        // 概要
        abstract: 'HTML5 新添加 <canvas> 元素，这个元素负责在页面中设定一个区域，然后就可以通过 JavaScript 动态地在这个区域中绘制图形。',
        //发表时间
        postTime: '2018-12-02 12:40:34',
        // articles + <field> + <category> + <englishName>
        path: '/articles/others/canvas/CanvasBasis',
        // 路径名称： englishName
        pathName: 'CanvasBasis.vue',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./canvas/CanvasBasis.vue')
    }
];
