export default [
  // 在此文件下写文章的相关信息，并在对应路径下创建文章的组件
  {
    //时间做ID。 
    id: 20180922, 
    //field.vue中table的名称及网页title。。
    name: '组件开发测试页面',
    //领域及路径
    // backend
    // frontend
    // others
    field: 'others）',
    //分类  - field.vue及路径-所有类型：
    // frontend：HTML, CSS, JS, VueJS, AngularJS, mixed
    // backend： beMixed
    // others：  demo, Git, notes, othMixed
    category: 'othMixed',
    //标签-暂未使用: 后期可做全局搜索
    tag: ['template','vue'],
    // 概要
    abstract: '页面主要用于测试新增加的组件',
    //发表时间
    postTime: '2018-09-22 12:00:00',
    // articles + <field> + <category> + <englishName>
    path: '/articles/others/othMixed/test-temp',
    // 路径名称： englishName
    pathName: 'test-temp',
    // 文章组件位置，主要区别在于后两位: field + englishName
    component: () => import('../views/articles/others/othMixed/test-temp.vue')
  },
  {
    id: 20180805, 
    name: 'Vue 注册全局组件和函数',
    field: 'frontend',
    category: 'VueJS',
    tag: ['webpack','vue'],
    abstract: '如何让函数全局可用？ & 如何全局注册组件？',
    postTime: '2018-08-05 18:41:35',
    path: '/articles/frontend/VueJS/note-00',
    pathName: 'note-00',
    component: () => import('../views/articles/frontend/VueJS/note-00.vue')
  },
  // ..........................................................................................................................others/notes
  {
    id: 20180915, 
    name: '问题收录集（1）',
    field: 'others',
    category: 'notes',
    tag: ['webpack','vue', 'JavaScript'],
    abstract: '收集整理开发路上遇到的各种问题。',
    postTime: '2018-09-15 01:23:38',
    path: '/articles/others/notes/note-02',
    pathName: 'note-02',
    component: () => import('../views/articles/others/notes/note-02.vue')
  },
  {
    id: 20180916, 
    name: '问题收录集（2）',
    field: 'others',
    category: 'notes',
    tag: ['webpack','vue', 'JavaScript'],
    abstract: '收集整理开发路上遇到的各种问题。',
    postTime: '2018-09-16 08:23:38',
    path: '/articles/others/notes/note-03',
    pathName: 'note-03',
    component: () => import('../views/articles/others/notes/note-03.vue')
  },
  // ..........................................................................................................................others/Git
  {
    id: 20180918, 
    name: 'Could not restore untracked files from stash',
    field: 'others',
    category: 'Git',
    tag: ['Git', 'issue'],
    abstract: '分析解决如题所示问题的原因和解决方法。',
    postTime: '2018-09-18 22:21:18',
    path: '/articles/others/Git/issue-01',
    pathName: 'issue-01',
    component: () => import('../views/articles/others/Git/issue-01.vue')
  },
  // ..........................................................................................................................others/othMixed
  {
    id: 20180807,
    name: '博客开发记录',
    field: 'others',
    category: 'othMixed',
    tag: ['webpack','vue','iview','JavaScript','jQuery'],
    abstract: '记录博客开发过程中遇到的主要问题和解决方法，以及博客诞生至今已经解决或者尚且遗留的一些疑难杂症。',
    postTime: '2018-08-07 17:38:05',
    path: '/articles/others/othMixed/blog-dev-log',
    pathName: 'blog-dev-log',
    component: () => import('../views/articles/others/othMixed/blog-dev-log.vue')
  },
  {
    id: 20180921,
    name: '博客开发环境搭建',
    field: 'others',
    category: 'othMixed',
    tag: ['blog', 'enviroment'],
    abstract: '记录博客开发的基础环境的搭建。',
    postTime: '2018-09-21 00:12:37',
    path: '/articles/others/othMixed/blog-dev-enviroment',
    pathName: 'blog-dev-enviroment',
    component: () => import('../views/articles/others/othMixed/blog-dev-enviroment.vue')
  },
  // ...........................................................................................................................frontend/JS
  {
    id: 20181022,
    name: '递归函数',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript', '递归函数'],
    abstract: '递归函数是在一个函数通过名字调用自身。',
    postTime: '2018-10-22 22:22:18',
    path: '/articles/frontend/JS/factorial',
    pathName: 'factorial',
    component: () => import('../views/articles/frontend/JS/factorial.vue')
  },
  {
    id: 20181007,
    name: 'ES6-变量申明',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript', 'ES6'],
    abstract: 'ES6 中新增了 let 和 const 命令，用于申明变量',
    postTime: '2018-10-07 18:52:46',
    path: '/articles/frontend/JS/ES6-0',
    pathName: 'ES6-0',
    component: () => import('../views/articles/frontend/JS/ES6-0.vue')
  },
  {
    id: 20181003,
    name: 'RequireJS (四)',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript', 'RequireJS'],
    abstract: 'RequireJS 实现 jsonp 服务。',
    postTime: '2018-10-03 18:59:34',
    path: '/articles/frontend/JS/RequireJS-3',
    pathName: 'RequireJS-3',
    component: () => import('../views/articles/frontend/JS/RequireJS-3.vue')
  },
  {
    id: 20181002,
    name: 'RequireJS (三)',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript', 'RequireJS'],
    abstract: 'RequireJS 的基本配置。',
    postTime: '2018-10-02 16:44:23',
    path: '/articles/frontend/JS/RequireJS-2',
    pathName: 'RequireJS-2',
    component: () => import('../views/articles/frontend/JS/RequireJS-2.vue')
  },
  {
    id: 20181001,
    name: 'RequireJS (二)',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript', 'RequireJS'],
    abstract: 'RequireJS 的基本使用方法。',
    postTime: '2018-10-01 20:08:25',
    path: '/articles/frontend/JS/RequireJS-1',
    pathName: 'RequireJS-1',
    component: () => import('../views/articles/frontend/JS/RequireJS-1.vue')
  },
  {
    id: 20180930,
    name: 'RequireJS (一)',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript', 'RequireJS'],
    abstract: '非常小巧的 JavaScript 模块载入框架。',
    postTime: '2018-09-30 22:18:35',
    path: '/articles/frontend/JS/RequireJS',
    pathName: 'RequireJS',
    component: () => import('../views/articles/frontend/JS/RequireJS.vue')
  },
  {
    id: 20181013,
    name: 'JS-Array 类型',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: 'ECMAScript 数组与其他语言中的数组都是 数据的有序列表。',
    postTime: '2018-10-12 21:20:56',
    path: '/articles/frontend/JS/JS-11',
    pathName: 'JS-11',
    component: () => import('../views/articles/frontend/JS/JS-11.vue')
  },
  {
    id: 20181012,
    name: 'JS-Object 类型',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: 'ECMAScript 中的引用类型。',
    postTime: '2018-10-11 23:01:12',
    path: '/articles/frontend/JS/JS-10',
    pathName: 'JS-10',
    component: () => import('../views/articles/frontend/JS/JS-10.vue')
  },
  {
    id: 20181011,
    name: 'JS-垃圾收集',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: 'JavaScript 具有自动垃圾收集机制，执行环境会负责管理代码执行过程中使用的内存。',
    postTime: '2018-10-11 22:06:23',
    path: '/articles/frontend/JS/JS-09',
    pathName: 'JS-09',
    component: () => import('../views/articles/frontend/JS/JS-09.vue')
  },
  {
    id: 20181010,
    name: 'JS-执行环境和作用域',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '执行环境（execution context，为简单起见，有时也称为“环境” ）是 JavaScript 中最为重要的一个概念。',
    postTime: '2018-10-10 21:55:24',
    path: '/articles/frontend/JS/JS-08',
    pathName: 'JS-08',
    component: () => import('../views/articles/frontend/JS/JS-08.vue')
  },
  {
    id: 20181009,
    name: 'JS-基本类型和引用类型的值',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: 'ECMAScript 变量可能包含两种不同数据类型的值：基本类型值和引用类型值。',
    postTime: '2018-10-09 21:22:36',
    path: '/articles/frontend/JS/JS-07',
    pathName: 'JS-07',
    component: () => import('../views/articles/frontend/JS/JS-07.vue')
  },
  {
    id: 20181008,
    name: 'JS-函数',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '通过函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行。',
    postTime: '2018-10-08 21:48:33',
    path: '/articles/frontend/JS/JS-06',
    pathName: 'JS-06',
    component: () => import('../views/articles/frontend/JS/JS-06.vue')
  },
  {
    id: 20181007,
    name: 'JS-语句',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '语句定义了 ECMAScript 中的主要语法，语句通常使用一或多个关键字来完成给定任务。',
    postTime: '2018-10-07 20:32:26',
    path: '/articles/frontend/JS/JS-05',
    pathName: 'JS-05',
    component: () => import('../views/articles/frontend/JS/JS-05.vue')
  },
  {
    id: 20180929,
    name: 'JS-操作符（二）',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '乘性操作符、加性操作符、关系操作符、相等操作符、条件操作符、赋值操作符、逗号操作符。',
    postTime: '2018-09-28 23:05:34',
    path: '/articles/frontend/JS/JS-04',
    pathName: 'JS-04',
    component: () => import('../views/articles/frontend/JS/JS-04.vue')
  },
  {
    id: 20180927,
    name: 'JS-操作符（一）',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '一元操作符、位操作符、Boolean 操作符。',
    postTime: '2018-09-27 23:02:02',
    path: '/articles/frontend/JS/JS-03',
    pathName: 'JS-03',
    component: () => import('../views/articles/frontend/JS/JS-03.vue')
  },
  {
    id: 20180926,
    name: 'JS-数据类型',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '介绍 JavaScript 的基本数据类型。',
    postTime: '2018-09-26 22:28:06',
    path: '/articles/frontend/JS/JS-02',
    pathName: 'JS-02',
    component: () => import('../views/articles/frontend/JS/JS-02.vue')
  },
  {
    id: 20180925,
    name: 'JS-简介',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '介绍 JavaScript 的基本概念。',
    postTime: '2018-09-25 23:04:32',
    path: '/articles/frontend/JS/JS-01',
    pathName: 'JS-01',
    component: () => import('../views/articles/frontend/JS/JS-01.vue')
  },
  {
    id: 20180806,
    name: '详解 offsetTop、scrollTop 等DOM属性',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript','jQuery'],
    abstract: '详细分析 offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop... 以及 clientTop...等 DOM 属性的值。',
    postTime: '2018-08-06 20:21:15',
    path: '/articles/frontend/JS/top-left-width-height',
    pathName: 'top-left-width-height',
    component: () => import('../views/articles/frontend/JS/top-left-width-height.vue')
  },
  {
    id: 20180809,
    name: 'JavaScript 手动触发事件',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript','jQuery'],
    abstract: '简要介绍手动触发 JavaScript 事件的方法。',
    postTime: '2018-08-09 01:55:28',
    path: '/articles/frontend/JS/trigger-event',
    pathName: 'trigger-event',
    component: () => import('../views/articles/frontend/JS/trigger-event.vue')
  },
  {
    id: 20180809,
    name: 'JavaScript 手动触发事件（新）',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript','jQuery'],
    abstract: '简要介绍手动触发 JavaScript 事件的新方法，应用 W3C 最新的规范。',
    postTime: '2018-08-09 15:39:39',
    path: '/articles/frontend/JS/new-trigger-event',
    pathName: 'new-trigger-event',
    component: () => import('../views/articles/frontend/JS/new-trigger-event.vue')
  },
  {
    id: 20180811,
    name: 'JavaScript 函数节流和函数防抖',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '通过限制函数的执行，从而提高 JavaScript 应用程序的性能。',
    postTime: '2018-08-11 20:37:25',
    path: '/articles/frontend/JS/throttle-debounce',
    pathName: 'throttle-debounce',
    component: () => import('../views/articles/frontend/JS/throttle-debounce.vue')
  },
  // ..........................................................................................................................frontend/AngularJS
  {
    id: 20181023,
    name: 'Angular 模态框',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular', '$modal', '$modalInstance'],
    abstract: '$modal 是一种快速创建 AngularJS 模态框的服务。',
    postTime: '2018-10-23 21:27:28',
    path: '/articles/frontend/AngularJS/angular-ui-modal',
    pathName: 'angular-ui-modal',
    component: () => import('../views/articles/frontend/AngularJS/angular-ui-modal.vue')
  },
  {
    id: 20181021,
    name: 'UI-Router for AngularJS (五)',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular', 'router'],
    abstract: 'UI-Router is the defacto standard for routing in AngularJS-重定向和事件。',
    postTime: '2018-10-21 20:42:38',
    path: '/articles/frontend/AngularJS/angular-ui-router-4',
    pathName: 'angular-ui-router-4',
    component: () => import('../views/articles/frontend/AngularJS/angular-ui-router-4.vue')
  },
  {
    id: 20181015,
    name: 'UI-Router for AngularJS (四)',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular', 'router'],
    abstract: 'UI-Router is the defacto standard for routing in AngularJS-嵌套路由&多视图。',
    postTime: '2018-10-15 23:16:23',
    path: '/articles/frontend/AngularJS/angular-ui-router-3',
    pathName: 'angular-ui-router-3',
    component: () => import('../views/articles/frontend/AngularJS/angular-ui-router-3.vue')
  },
  {
    id: 20181014,
    name: 'UI-Router for AngularJS (三)',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular', 'router'],
    abstract: 'UI-Router is the defacto standard for routing in AngularJS-传参。',
    postTime: '2018-10-14 00:43:51',
    path: '/articles/frontend/AngularJS/angular-ui-router-2',
    pathName: 'angular-ui-router-2',
    component: () => import('../views/articles/frontend/AngularJS/angular-ui-router-2.vue')
  },
  {
    id: 20181013,
    name: 'UI-Router for AngularJS (二)',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular', 'router'],
    abstract: 'UI-Router is the defacto standard for routing in AngularJS-基本配置。',
    postTime: '2018-10-13 21:25:12',
    path: '/articles/frontend/AngularJS/angular-ui-router-1',
    pathName: 'angular-ui-router-1',
    component: () => import('../views/articles/frontend/AngularJS/angular-ui-router-1.vue')
  },
  {
    id: 20181013,
    name: 'UI-Router for AngularJS (一)',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular', 'router'],
    abstract: 'UI-Router is the defacto standard for routing in AngularJS-简单使用方法。',
    postTime: '2018-10-13 13:27:05',
    path: '/articles/frontend/AngularJS/angular-ui-router',
    pathName: 'angular-ui-router',
    component: () => import('../views/articles/frontend/AngularJS/angular-ui-router.vue')
  },
  {
    id: 20181010,
    name: 'AngularJS 获取 radio 选中的值',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular', 'radio'],
    abstract: 'AngularJS 获取 实时获取被选中的 radio 的值。',
    postTime: '2018-10-10 22:29:52',
    path: '/articles/frontend/AngularJS/angular-radio',
    pathName: 'angular-radio',
    component: () => import('../views/articles/frontend/AngularJS/angular-radio.vue')
  },
  {
    id: 20180922,
    name: 'AngularJS 的使用笔记',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['JavaScript','angular','scope'],
    abstract: '记录工作中的学习中遇到的重点。',
    postTime: '2018-09-22 00:05:45',
    path: '/articles/frontend/AngularJS/angular-notes',
    pathName: 'angular-notes',
    component: () => import('../views/articles/frontend/AngularJS/angular-notes.vue')
  },
  {
    id: 20180823,
    name: '搭建 webpack-angular 基础开发环境',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['webpack','angular','JavaScript','jQuery'],
    abstract: '由于公司的项目主要使用 AngularJS，所以准备搭建一个基本的开发环境，以便更好的学习和调试组件等。',
    postTime: '2018-08-23 23:33:38',
    path: '/articles/frontend/AngularJS/angular-dev',
    pathName: 'angular-dev',
    component: () => import('../views/articles/frontend/AngularJS/angular-dev.vue')
  },
  // ..........................................................................................................................frontend/CSS
  {
    id: 20181019,
    name: 'CSS Grid(网格) 布局',
    field: 'frontend',
    category: 'CSS',
    tag: ['CSS', 'grid', 'CSS3'],
    abstract: 'CSS Grid(网格) 布局（又称为 “Grid(网格)” ），是一个二维的基于网格的布局系统（在网格中，项目排列成行和列）。',
    postTime: '2018-10-19 21:36:49',
    path: '/articles/frontend/CSS/css3-grid',
    pathName: 'css3-grid',
    component: () => import('../views/articles/frontend/CSS/css3-grid.vue')
  },
  {
    id: 20180811,
    name: '详解 CSS 绝对定位',
    field: 'frontend',
    category: 'CSS',
    tag: ['CSS','绝对定位'],
    abstract: '简单介绍绝对定位的定义和用法，主要分析设置绝对定位后的影响。',
    postTime: '2018-08-11 21:54:46',
    path: '/articles/frontend/CSS/position-absolute',
    pathName: 'position-absolute',
    component: () => import('../views/articles/frontend/CSS/position-absolute.vue')
  },
  {
    id: 20180812,
    name: '外边距合并',
    field: 'frontend',
    category: 'CSS',
    tag: ['CSS','外边距'],
    abstract: '块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距，其大小取其中的最大者，这种行为称为外边距折叠。',
    postTime: '2018-08-12 16:09:58',
    path: '/articles/frontend/CSS/margin-collapsing',
    pathName: 'margin-collapsing',
    component: () => import('../views/articles/frontend/CSS/margin-collapsing.vue')
  },
  {
    id: 20180909,
    name: '伪元素 ::before 和 ::after',
    field: 'frontend',
    category: 'CSS',
    tag: ['CSS','伪类'],
    abstract: 'CSS伪元素是用来添加一些选择器的特殊效果。',
    postTime: '2018-09-09 12:34:33',
    path: '/articles/frontend/CSS/pseudo-before-after',
    pathName: 'pseudo-before-after',
    component: () => import('../views/articles/frontend/CSS/pseudo-before-after.vue')
  },
  // ..........................................................................................................................frontend/mixed
  {
    id: 20180805,
    name: 'windows 搭建开发环境之安装使用 Cmder',
    field: 'frontend',
    category: 'mixed',
    tag: ['windows','Cmder'],
    abstract: 'Cmder可以说是 Windows 下一款非常好用的 cmd 替代品，它不仅好用，而且功能强大，界面美观，非常适合在 Windows 下进行开发时使用。',
    postTime: '2018-08-25 20:11:47',
    path: '/articles/frontend/mixed/note-01-cmder',
    pathName: 'note-01-cmder',
    component: () => import('../views/articles/frontend/mixed/note-01-cmder.vue')
  }
]