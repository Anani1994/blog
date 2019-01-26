(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{342:function(t,e,r){"use strict";r.r(e);var a=r(488),i=r(376);for(var s in i)"default"!==s&&function(t){r.d(e,t,function(){return i[t]})}(s);var n=r(0),l=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);l.options.__file="src/views/articles/frontend/AngularJS/angular-ui-router.vue",e.default=l.exports},376:function(t,e,r){"use strict";r.r(e);var a=r(377),i=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,function(){return a[t]})}(s);e.default=i.a},377:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},488:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BoWen",[r("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[r("Steps",{attrs:{direction:"vertical"}},[r("Step",{attrs:{title:"原生路由",content:"粗略介绍原生路由的使用",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1",30)}}}),r("Step",{attrs:{title:"简单使用",content:"UI roter 简单使用的步骤",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-2",30)}}})],1)],1),r("div",{staticClass:"px-1"},[r("div",{staticClass:"py-3 text-center"},[r("h1",[r("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" UI-Router for AngularJS (一)")],1),r("p",{staticClass:"pt-1"},[t._v("UI-Router is the defacto standard for routing in AngularJS")])]),r("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-1"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 原生路由")],1),r("Divider"),r("p",[t._v("如果使用原生路由的话，Angular 的视图是通过 ng-view 这个指令进行加载的。比如："),r("pre",{staticClass:"custom-pre"},[t._v("<div ng-view></div>")]),t._v(" ，通常，我们都会把这个指令放在 index.html 这个文件里面。")]),r("p",[t._v("然后具体的路由信息在 js 文件中进行配置：")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v("// 引入文件 \n<script type=\"text/javascript\" src=\"JS/angular.min.js\"><\/script>\n<script type=\"text/javascript\" src=\"JS/angular-ui-router.min.js\"><\/script>\n \n// 配置路由\n<script type=\"text/javascript\">\nangular.module('app', [])\n    .config('AppCtrl', ['$routeProvider', function ( $routeProvider ) {\n        $routeProvider\n            .when('/', {\n                templateUrl: 'views/page-a.html',\n                controller: 'PageACtrl'\n            })\n            .when('/next', {\n                templateUrl: 'views/page-b.html',\n                controller: 'PageBCtrl'\n            })\n \n        /* 对其他不合法的路由进行处理 */\n        $routeProvider.otherwise('/404');\n    }]);\n<\/script>")])]),r("p",[t._v("原生路由由于不支持嵌套路由，所以每次切换路由时都会刷新整个页面，因此，ui-router 插件应运而生。")]),r("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-2"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" UI router 简单使用")],1),r("Divider"),r("ul",{staticClass:"ml-2"},[r("li",[t._v("引入文件"),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"js"},[t._v('// routine web page? \n<script type="text/javascript" src="JS/angular.min.js"><\/script>\n<script type="text/javascript" src="JS/angular-ui-router.min.js"><\/script>')])]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"js"},[t._v("// webpack + angular? \n// main.js-入口文件\nimport Angular from 'angular'; // 引入angular\nimport uiRoute from 'angular-ui-router'; // 引入 angular-ui-router")])])]),r("li",[t._v("注入依赖"),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"js"},[t._v("// routine web page? \nvar app = angular.module('app', ['ui.router']);")])]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"js"},[t._v("// webpack + angular? \n// main.js-入口文件\nlet App = Angular.module('app', [uiRoute]);")])])]),r("li",[t._v("配置路由"),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"js"},[t._v("// routine web page? \napp.config([\"$stateProvider\", function ($stateProvider){\n    $stateProvider     \n    .state(\"home\", { // 路由名\n        url: '/',    // 路径 \n        template: '<div>Hello world</div>'\n    })      \n}]);")])]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"js"},[t._v("// webpack + angular? \n// JS/route.js    \nfunction router ($stateProvider, $urlRouterProvider) {\n    // $urlRouterProvider-路由重定向\n    $urlRouterProvider.when('', '/index'); // 对非法路由进行重定向\n    $stateProvider\n        .state('home', {    // 路由名\n            url: '/index',  // 路径\n            template: '<div>Hello world</div>', // 模板\n        })\n    $urlRouterProvider.otherwise('/page-404');\n}\nexport default router;\n \n// main.js\nimport router from 'JS/index.js'; // 引入路由配置\nApp.config(['$stateProvider', '$urlRouterProvider', router]); // 配置路由")])])]),r("li",[t._v("定义视图"),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"html"},[t._v("\x3c!-- routine web page? or webpack + angular? --\x3e \n<div ui-view></div>")])])]),r("li",[t._v("使用路由"),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"js"},[t._v("// .js 中\nvar stateName = 'home'; // 值为在路由配置中设置的路由名\n$state.go(stateName);")])]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[r("code",{staticClass:"html"},[t._v('\x3c!-- .html 中 --\x3e\n<a ui-sref="stateName">跳转</a>\n\x3c!-- 值依旧为在路由配置中设置的路由名 --\x3e')])])])]),r("p",{staticClass:"text-right"},[t._v("还没有看够？查看详细介绍请点击"),r("a",{attrs:{href:"/#/articles/frontend/AngularJS/angular-ui-router-1"}},[t._v(" UI-Router for AngularJS (二) ")]),t._v("查看更多内容。")]),r("p",{staticClass:"text-right"},[t._v("参考资料："),r("a",{attrs:{href:"https://ui-router.github.io/"}},[t._v("https://ui-router.github.io/")])]),r("p",{staticClass:"text-right"},[r("a",{attrs:{href:"http://hao.jobbole.com/angular-ui-router/"}},[t._v("http://hao.jobbole.com/angular-ui-router/")])]),r("p",{staticClass:"text-right"},[r("a",{attrs:{href:"https://blog.csdn.net/shenlei19911210/article/details/51325707/"}},[t._v("https://blog.csdn.net/shenlei19911210/article/details/51325707/")])]),r("p",{staticClass:"text-right"},[r("a",{attrs:{href:"https://blog.csdn.net/zcl_love_wx/article/details/52034193"}},[t._v("https://blog.csdn.net/zcl_love_wx/article/details/52034193")])]),r("FooterDivider")],1)])},i=[];a._withStripped=!0,r.d(e,"a",function(){return a}),r.d(e,"b",function(){return i})}}]);