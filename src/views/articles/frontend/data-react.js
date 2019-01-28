export default [
    // ===================================== frontend/React =====================================
    {
        id: 20181202,
        name: '搭建 webpack、react 开发环境（一）',
        //领域及路径
        // backend
        // frontend
        // others
        field: 'frontend',
        //分类-路径（参见 main.vue）：
        // frontend：HTML/CSS, JavaScript, VueJS, AngularJS, canvas,React
        // backend： beMixed
        // others：  othMixed, computer, Git
        category: 'React',
        //标签-全局搜索（参见 main.vue）
        // HTML, CSS, JavaScript, ES6, jQuery, Git, webpack, vue, angular, template
        // RequireJS, issue, iview, router, windows, computer, canvas
        tag: ['React', 'javascript', 'webpack', 'ES6'],
        // 概要
        abstract: 'Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源，利用它搭建如今一个用于构建用户界面的 JAVASCRIPT 库 React 的开发环境。',
        //发表时间
        postTime: '2018-12-22 11:45:21',
        // articles + <field> + <category> + <englishName>
        path: '/articles/frontend/React/webpack-react',
        // 路径名称： englishName
        pathName: 'webpack-react',
        // 文章组件位置，主要区别在于后两位: field + englishName
        component: () => import('./React/WebpackReact.vue')
    },
    {
        id: 20190105,
        name: '搭建 webpack、react 开发环境（二）',
        field: 'frontend',
        category: 'React',
        tag: ['React', 'javascript', 'webpack', 'ES6'],
        abstract: 'Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源，利用它搭建如今一个用于构建用户界面的 JAVASCRIPT 库 React 的开发环境。',
        postTime: '2018-01-05 20:11:43',
        path: '/articles/frontend/React/webpack-react-two',
        pathName: 'webpack-react-two',
        component: () => import('./React/WebpackReactTwo.vue')
    },
    {
        id: 20190115,
        name: '搭建 webpack、react 开发环境（三）',
        field: 'frontend',
        category: 'React',
        tag: ['React', 'javascript', 'webpack', 'ES6'],
        abstract: 'Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源，利用它搭建如今一个用于构建用户界面的 JAVASCRIPT 库 React 的开发环境。',
        postTime: '2018-01-15 22:30:33',
        path: '/articles/frontend/React/webpack-react-three',
        pathName: 'webpack-react-three',
        component: () => import('./React/WebpackReactThree.vue')
    },
];
