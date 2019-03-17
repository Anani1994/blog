(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{353:function(t,e,a){"use strict";a.r(e);var r=a(501),s=a(388);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var i=a(0),l=Object(i.a)(s.default,r.a,r.b,!1,null,null,null);l.options.__file="src/views/articles/frontend/AngularJS/angular-ui-router-1.vue",e.default=l.exports},388:function(t,e,a){"use strict";a.r(e);var r=a(389),s=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e.default=s.a},389:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},501:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BoWen",[a("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[a("Steps",{attrs:{direction:"vertical"}},[a("Step",{attrs:{title:"状态名和路径",content:"状态名和路径",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1-1",30)}}}),a("Step",{attrs:{title:"Templates 模板",content:"Templates 模板",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1-2",30)}}}),a("Step",{attrs:{title:"Controllers 控制器",content:"Controllers 控制器",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1-3",30)}}}),a("Step",{attrs:{title:"Resolve 预载入",content:"Resolve 预载入",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1-4",30)}}}),a("Step",{attrs:{title:"为 $state 对象提供自定义数据",content:"为 $state 对象提供自定义数据",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1-5",30)}}}),a("Step",{attrs:{title:"Abstract States",content:"Abstract States",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1-6",30)}}}),a("Step",{attrs:{title:"参数列表",content:"列举参数列表",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-1-6",30)}}})],1)],1),a("div",{staticClass:"px-1"},[a("div",{staticClass:"py-3 text-center"},[a("h1",[a("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" UI-Router for AngularJS (二)")],1),a("p",{staticClass:"pt-1"},[t._v("UI-Router is the defacto standard for routing in AngularJS")])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-1-1"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 状态名和路径")],1),a("Divider"),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"js"},[t._v("// 基于字符串定义 state? \n$stateProvider.state('home', {\n    url: '/home' // string\n    // more config\n});\n \n// or 基于对象定义 state?\nvar home = {\n    name: 'home',\n    url: '/home' // string\n    // more config\n}\n$stateProvider.state(home);")])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-1-2"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Templates 模板")],1),a("Divider"),a("ul",{staticClass:"ml-2 mt-1"},[a("li",[t._v("指定一段 HTML 字符串，这也是设置模板的最简单的方式。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    url: '/home',\n    template: '<div>Hello world</div>'\n});")])])]),a("ul",{staticClass:"ml-2 mt-1"},[a("li",[t._v("配置 templateUrl 属性来加载指定位置的模板，这是设置模板的常用方法。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    url: '/home',\n    template: 'home.html'\n});")])]),a("div",[t._v("templateUrl 的值也可以是一个函数返回的 url，函数带一个预设参数 stateParams。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    url: '/home',\n    template: function (stateParams) {\n        return 'stateParams.templateName' + '.html';\n    }\n});")])])]),a("ul",{staticClass:"ml-2 mt-1"},[a("li",[t._v("通过 templateProvider 函数返回模板的 HTML。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    url: '/home',\n    templateProvider: function ($timeout, $stateParams) {\n        return $timeout(function () {\n            return '<div>Hello world</div>';\n        });\n    }\n});")])])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-1-3"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Controllers 控制器")],1),a("Divider"),a("ul",{staticClass:"ml-2 mt-1"},[t._v("为模板指定一个控制器（controller）。"),a("span",{staticClass:"text-warn"},[t._v("如果模板没有定义，控制器不会被实例化。")]),a("li",{staticClass:"mt-1"},[t._v("设置控制器。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    template: ...,\n    controller: function ($scope) {\n        $scope.title = 'UI router';\n    }\n});")])]),a("li",[t._v("如果在模块中已经定义了一个控制器，只需要指定控制器的名称即可。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    template: ...,\n    controller: 'HomeCtrl'\n});")])]),a("li",[t._v("使用 controllerAs 语法。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    template: ...,\n    controller: 'HomeCtrl as home'\n});")])]),a("li",[t._v("对于更高级的需要，可以使用 controllerProvider 来动态返回一个控制器函数或字符串。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    template: ...,\n    controllerProvider: function ($stateParams) {\n        var ctrlName = $stateParams.type + \"Ctrl\";\n        return ctrlName;\n    }\n})")])]),a("span",[t._v("控制器可以使用$scope.on()方法来监听事件状态转换。")])]),a("h3",{staticClass:"ml-1 mt-1",attrs:{id:"angular-ui-router-1-4"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Resolve 预载入")],1),a("Divider"),a("p",[t._v("使用预载入功能可以预先载入一系列依赖或者数据，然后注入到控制器中。")]),a("p",[t._v("resolve 配置项是一个由 key/value 构成的对象。"),a("ul",{staticClass:"ml-1"},[a("li",[t._v("key – { string } ：注入控制器的依赖项名称。")]),a("li",[t._v("factory - { string | function } ："),a("ul",{staticClass:"ml-1"},[a("li",[t._v("string：一个服务的别名。")]),a("li",[t._v("function：函数的返回值将作为依赖注入项，如果函数是一个耗时的操作，那么控制器必须等待该函数执行完成（be resolved）才会被实例化。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-1"},[a("code",{staticClass:"js"},[t._v("$stateProvider.state('home', { \n    resolve: {\n        // 此函数只是简单的返回了值，所以会被立即载入\n        user: function () {\n            return {\n                name: 'Anani',\n                age: 24\n            }\n        },\n        // 可以给函数注入任何想要的服务依赖，比如这里的 $http\n        userData: function ($http) {\n            return $http({\n                method: 'get',\n                url: '/users'\n            });\n        },\n        // 如果想对返回结果进行处理， 可以使用 .then 方法\n        userFiltered: function ($http) {\n            return $http({\n                method: 'get',\n                url: '/users'\n            }).then(function (data) {\n                return dosomething(data);\n            });\n        },\n        // 前一个数据保证也可作为依赖注入到其他数据保证中\n        detailData: function ($http, userFiltered) {\n            return $http({\n                method: 'get',\n                url: '/users',\n                params: {\n                    name: userFiltered.data.user[0]\n                }\n            });\n        },\n        // Example using a service by name as string.\n        // This would look for a 'translations' service\n        // within the module and return it.\n        // Note: The service could return a promise and\n        // it would work just like the example above\n        translations: \"translations\",\n        // Example showing injection of service into\n        // resolve function. Service then returns a\n        // promise. Tip: Inject $stateParams to get\n        // access to url parameters.\n        translations2: function(translations, $stateParams){\n            // Assume that getLang is a service method\n            // that uses $http to fetch some translations.\n            // Also assume our url was \"/:lang/home\".\n            return translations.getLang($stateParams.lang);\n        },\n        // Example showing returning of custom made promise\n        greeting: function($q, $timeout){\n            var deferred = $q.defer();\n            $timeout(function() {\n                deferred.resolve('Hello!');\n            }, 1000);\n            return deferred.promise;\n        }\n    },\n    // 控制器将等待上面的解决项都被解决后才被实例化\n    controller: function ($scope, user, userData, userFiltered, detailData) {\n        $scope.name = user.name;\n        $scope.age = userData.age;\n        $scope.user = userFiltered.name;\n        $scope.age = detailData.age;\n    }\n});")])])])])])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-1-5"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 为 $state 对象提供自定义数据")],1),a("Divider"),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"js"},[t._v("// 基于对象和基于字符串定义 state\nvar home = { \n    name: 'home',\n    templateUrl: 'home.html',\n    data: {\n        name: 'Anani',\n        age: 24\n    }  \n};\n$stateProvider\n    .state(home)\n    .state('home.girlFriend', {\n        templateUrl: 'home.girlFriend.html',\n        data: {\n            name: 'Sharon',\n            age: 23\n        } \n});")])]),a("p",[t._v("我们可以通过下面的方式来访问上面定义的数据：")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"js"},[t._v("function dataCtrl ($state) { \n    console.log($state.current.data.name);\n    console.log($state.current.data.age);\n}")])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-1-6"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Abstract States")],1),a("Divider"),a("p",[t._v("抽象模板不能被激活，但是它的子模板可以被激活，从而被隐式激活。")]),a("ul",{staticClass:"ml-2 mb-1"},[t._v("在以下情况您可能需要用到它："),a("li",[t._v("为所有子状态 URLs 预置一个 URL。"),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider \n    .state('products', {\n        abstract: true,\n        url: '/products',\n \n        // Note: abstract still needs a ui-view for its children to populate.\n        // You can simply add it inline here.\n        template: '"),a("ui-view"),t._v("'\n    })\n    .state('products.list', {\n        // url will become '/products/list'\n        url: '/list'\n        //...more\n    })\n    .state('products.detail', {\n        // url will become '/products/detail'\n        url: '/detail',\n        //...more\n    });")],1)])]),a("li",[t._v("To insert a template with its own ui-view(s) that its child states will populate."),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"js"},[t._v("$stateProvider \n    .state('products', {\n        abstract: true,\n        templateUrl: 'products.html'\n    })\n    .state('products.list', {\n        // loaded into ui-view of parent's template\n        templateUrl: 'products.list.html'\n    })\n    .state('products.detail', {\n        // loaded into ui-view of parent's template\n        templateUrl: 'products.detail.html'\n    });")])]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"html"},[t._v("\x3c!-- products.html --\x3e \n<h1>Products Page</h1>\n<div ui-view></div>")])])]),a("li",[t._v("通过 resolve 为子状态提供依赖。")]),a("li",[t._v("通过 data 提供自定义数据给子状态或事件侦听器使用。")]),a("li",[t._v("运行一个 Onter 或 OnEnter 函数，可以以某种方式修改应用程序。")])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-1-7"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 参数列表")],1),a("Divider"),a("ul",{staticClass:"ml-2"},[a("li",[a("pre",{staticClass:"custom-pre"},[t._v("name")]),t._v("：状态的名称。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("template")]),t._v("： string/function，html模板字符串，或者一个返回html模板字符串的函数。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("templateUrl")]),t._v("：string/function，模板路径的字符串，或者返回模板路径字符串的函数。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("templateProvider")]),t._v("：function，返回html模板字符串或模板路径的服务。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("controller")]),t._v("：string/function，新注册一个控制器函数或者一个已注册的控制器的名称字符串。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("controllerProvider")]),t._v("：function，返回控制器或者控制器名称的服务")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("controllerAs")]),t._v("：string，控制器别名。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("parent")]),t._v("：string/object，手动指定该状态的父级。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("resolve")]),t._v("：object，将会被注入controller去执行的函数，<string,function>形式。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("url")]),t._v("：string，当前状态的对应url。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("views")]),t._v("：object，视图展示的配置。<string,object>形式。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("abstract")]),t._v("：boolean，一个永远不会被激活的抽象的状态，但可以给其子级提供特性的继承。默认是true。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("onEnter")]),t._v("：function，当进入一个状态后的回调函数。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("onExit")]),t._v("：function，当退出一个状态后的回调函数。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("reloadOnSearch")]),t._v("：boolean，如果为false，那么当一个search/query参数改变时不会触发相同的状态，用于当你修改$location.search()的时候不想重新加载页面。默认为true。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("data")]),t._v("：object，任意对象数据，用于自定义配置。继承父级状态的data属性。换句话说，通过原型继承可以达到添加一个data数据从而整个树结构都能获取到。")]),a("li",[a("pre",{staticClass:"custom-pre"},[t._v("params")]),t._v("：url里的参数值，通过它可以实现页面间的参数传递。")])]),a("p",{staticClass:"text-right"},[t._v("还没有看够？请点击"),a("a",{attrs:{href:"/#/articles/frontend/AngularJS/angular-ui-router-2"}},[t._v(" UI-Router for AngularJS (三) ")]),t._v("查看更多内容。")]),a("p",{staticClass:"text-right"},[t._v("参考资料："),a("a",{attrs:{href:"https://ui-router.github.io/"}},[t._v("https://ui-router.github.io/")])]),a("p",{staticClass:"text-right"},[a("a",{attrs:{href:"https://github.com/angular-ui/ui-router/wiki"}},[t._v("https://github.com/angular-ui/ui-router/wiki")])]),a("p",{staticClass:"text-right"},[a("a",{attrs:{href:"http://bubkoo.com/2014/01/02/angular/ui-router/guide/index/"}},[t._v("http://bubkoo.com/2014/01/02/angular/ui-router/guide/index/")])]),a("FooterDivider")],1)])},s=[];r._withStripped=!0,a.d(e,"a",function(){return r}),a.d(e,"b",function(){return s})}}]);