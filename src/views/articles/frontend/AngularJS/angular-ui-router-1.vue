<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="状态名和路径"
                    content="状态名和路径"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1-1', 30)")
                Step(title="Templates 模板"
                    content="Templates 模板"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1-2', 30)")
                Step(title="Controllers 控制器"
                    content="Controllers 控制器"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1-3', 30)")
                Step(title="Resolve 预载入"
                    content="Resolve 预载入"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1-4', 30)")
                Step(title="为 $state 对象提供自定义数据"
                    content="为 $state 对象提供自定义数据"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1-5', 30)")
                Step(title="Abstract States"
                    content="Abstract States"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1-6', 30)")
                Step(title="参数列表"
                    content="列举参数列表"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1-6', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;UI-Router for AngularJS (二)
                p.pt-1 UI-Router is the defacto standard for routing in AngularJS
            h3#angular-ui-router-1-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;状态名和路径
            Divider
            pre.ml-2(v-highlight)
                code.js // 基于字符串定义 state?
                    | 
                    | $stateProvider.state('home', {
                    |     url: '/home' // string
                    |     // more config
                    | });
                    | 
                    | // or 基于对象定义 state?
                    | var home = {
                    |     name: 'home',
                    |     url: '/home' // string
                    |     // more config
                    | }
                    | $stateProvider.state(home);
            h3#angular-ui-router-1-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;Templates 模板
            Divider
            ul.ml-2.mt-1
                li 指定一段 HTML 字符串，这也是设置模板的最简单的方式。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     url: '/home',
                        |     template: '&lt;div&gt;Hello world&lt;/div&gt;'
                        | });
            ul.ml-2.mt-1
                li 配置 templateUrl 属性来加载指定位置的模板，这是设置模板的常用方法。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     url: '/home',
                        |     template: 'home.html'
                        | });
                div templateUrl 的值也可以是一个函数返回的 url，函数带一个预设参数 stateParams。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     url: '/home',
                        |     template: function (stateParams) {
                        |         return 'stateParams.templateName' + '.html';
                        |     }
                        | });
            ul.ml-2.mt-1
                li 通过 templateProvider 函数返回模板的 HTML。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     url: '/home',
                        |     templateProvider: function ($timeout, $stateParams) {
                        |         return $timeout(function () {
                        |             return '&lt;div&gt;Hello world&lt;/div&gt;';
                        |         });
                        |     }
                        | });
            h3#angular-ui-router-1-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;Controllers 控制器
            Divider
            ul.ml-2.mt-1 为模板指定一个控制器（controller）。
                span.text-warn 如果模板没有定义，控制器不会被实例化。
                li.mt-1 设置控制器。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     template: ...,
                        |     controller: function ($scope) {
                        |         $scope.title = 'UI router';
                        |     }
                        | });
                li 如果在模块中已经定义了一个控制器，只需要指定控制器的名称即可。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     template: ...,
                        |     controller: 'HomeCtrl'
                        | });
                li 使用 controllerAs 语法。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     template: ...,
                        |     controller: 'HomeCtrl as home'
                        | });
                li 对于更高级的需要，可以使用 controllerProvider 来动态返回一个控制器函数或字符串。
                pre(v-highlight)
                    code.js $stateProvider.state('home', {
                        | 
                        |     template: ...,
                        |     controllerProvider: function ($stateParams) {
                        |         var ctrlName = $stateParams.type + "Ctrl";
                        |         return ctrlName;
                        |     }
                        | })
                span 控制器可以使用$scope.on()方法来监听事件状态转换。
            h3#angular-ui-router-1-4.ml-1.mt-1
                Icon(type="logo-buffer")
                | &nbsp;Resolve 预载入
            Divider
            p 使用预载入功能可以预先载入一系列依赖或者数据，然后注入到控制器中。
            p resolve 配置项是一个由 key/value 构成的对象。
                ul.ml-1
                    li key – { string } ：注入控制器的依赖项名称。
                    li factory - { string | function } ：
                        ul.ml-1
                            li string：一个服务的别名。
                            li function：函数的返回值将作为依赖注入项，如果函数是一个耗时的操作，那么控制器必须等待该函数执行完成（be resolved）才会被实例化。
                            pre.ml-1(v-highlight)
                                code.js $stateProvider.state('home', {
                                    | 
                                    |     resolve: {
                                    |         // 此函数只是简单的返回了值，所以会被立即载入
                                    |         user: function () {
                                    |             return {
                                    |                 name: 'Anani',
                                    |                 age: 24
                                    |             }
                                    |         },
                                    |         // 可以给函数注入任何想要的服务依赖，比如这里的 $http
                                    |         userData: function ($http) {
                                    |             return $http({
                                    |                 method: 'get',
                                    |                 url: '/users'
                                    |             });
                                    |         },
                                    |         // 如果想对返回结果进行处理， 可以使用 .then 方法
                                    |         userFiltered: function ($http) {
                                    |             return $http({
                                    |                 method: 'get',
                                    |                 url: '/users'
                                    |             }).then(function (data) {
                                    |                 return dosomething(data);
                                    |             });
                                    |         },
                                    |         // 前一个数据保证也可作为依赖注入到其他数据保证中
                                    |         detailData: function ($http, userFiltered) {
                                    |             return $http({
                                    |                 method: 'get',
                                    |                 url: '/users',
                                    |                 params: {
                                    |                     name: userFiltered.data.user[0]
                                    |                 }
                                    |             });
                                    |         },
                                    |         // Example using a service by name as string.
                                    |         // This would look for a 'translations' service
                                    |         // within the module and return it.
                                    |         // Note: The service could return a promise and
                                    |         // it would work just like the example above
                                    |         translations: "translations",
                                    |         // Example showing injection of service into
                                    |         // resolve function. Service then returns a
                                    |         // promise. Tip: Inject $stateParams to get
                                    |         // access to url parameters.
                                    |         translations2: function(translations, $stateParams){
                                    |             // Assume that getLang is a service method
                                    |             // that uses $http to fetch some translations.
                                    |             // Also assume our url was "/:lang/home".
                                    |             return translations.getLang($stateParams.lang);
                                    |         },
                                    |         // Example showing returning of custom made promise
                                    |         greeting: function($q, $timeout){
                                    |             var deferred = $q.defer();
                                    |             $timeout(function() {
                                    |                 deferred.resolve('Hello!');
                                    |             }, 1000);
                                    |             return deferred.promise;
                                    |         }
                                    |     },
                                    |     // 控制器将等待上面的解决项都被解决后才被实例化
                                    |     controller: function ($scope, user, userData, userFiltered, detailData) {
                                    |         $scope.name = user.name;
                                    |         $scope.age = userData.age;
                                    |         $scope.user = userFiltered.name;
                                    |         $scope.age = detailData.age;
                                    |     }
                                    | });
            h3#angular-ui-router-1-5.ml-1
                Icon(type="logo-buffer")
                | &nbsp;为 $state 对象提供自定义数据
            Divider
            pre.ml-2(v-highlight)
                code.js // 基于对象和基于字符串定义 state
                    |
                    | var home = { 
                    |     name: 'home',
                    |     templateUrl: 'home.html',
                    |     data: {
                    |         name: 'Anani',
                    |         age: 24
                    |     }  
                    | };
                    | $stateProvider
                    |     .state(home)
                    |     .state('home.girlFriend', {
                    |         templateUrl: 'home.girlFriend.html',
                    |         data: {
                    |             name: 'Sharon',
                    |             age: 23
                    |         } 
                    | });
            p 我们可以通过下面的方式来访问上面定义的数据：
            pre.ml-2(v-highlight)
                code.js function dataCtrl ($state) {
                    | 
                    |     console.log($state.current.data.name);
                    |     console.log($state.current.data.age);
                    | }
            h3#angular-ui-router-1-6.ml-1
                Icon(type="logo-buffer")
                | &nbsp;Abstract States
            Divider
            p 抽象模板不能被激活，但是它的子模板可以被激活，从而被隐式激活。
            ul.ml-2.mb-1 在以下情况您可能需要用到它：
                li 为所有子状态 URLs 预置一个 URL。
                    pre(v-highlight)
                        code.js $stateProvider
                            | 
                            |     .state('products', {
                            |         abstract: true,
                            |         url: '/products',
                            | 
                            |         // Note: abstract still needs a ui-view for its children to populate.
                            |         // You can simply add it inline here.
                            |         template: '<ui-view/>'
                            |     })
                            |     .state('products.list', {
                            |         // url will become '/products/list'
                            |         url: '/list'
                            |         //...more
                            |     })
                            |     .state('products.detail', {
                            |         // url will become '/products/detail'
                            |         url: '/detail',
                            |         //...more
                            |     });
                li To insert a template with its own ui-view(s) that its child states will populate.
                    pre(v-highlight)
                        code.js $stateProvider
                            | 
                            |     .state('products', {
                            |         abstract: true,
                            |         templateUrl: 'products.html'
                            |     })
                            |     .state('products.list', {
                            |         // loaded into ui-view of parent's template
                            |         templateUrl: 'products.list.html'
                            |     })
                            |     .state('products.detail', {
                            |         // loaded into ui-view of parent's template
                            |         templateUrl: 'products.detail.html'
                            |     });
                    pre(v-highlight)
                        code.html &lt;!-- products.html --&gt;
                            | 
                            | &lt;h1&gt;Products Page&lt;/h1&gt;
                            | &lt;div ui-view&gt;&lt;/div&gt;
                li 通过 resolve 为子状态提供依赖。
                li 通过 data 提供自定义数据给子状态或事件侦听器使用。
                li 运行一个 Onter 或 OnEnter 函数，可以以某种方式修改应用程序。
            h3#angular-ui-router-1-7.ml-1
                Icon(type="logo-buffer")
                | &nbsp;参数列表
            Divider
            ul.ml-2
                li 
                    pre.custom-pre name
                    | ：状态的名称。
                li 
                    pre.custom-pre template
                    | ： string/function，html模板字符串，或者一个返回html模板字符串的函数。
                li 
                    pre.custom-pre templateUrl
                    | ：string/function，模板路径的字符串，或者返回模板路径字符串的函数。
                li 
                    pre.custom-pre templateProvider
                    | ：function，返回html模板字符串或模板路径的服务。
                li 
                    pre.custom-pre controller
                    | ：string/function，新注册一个控制器函数或者一个已注册的控制器的名称字符串。
                li 
                    pre.custom-pre controllerProvider
                    | ：function，返回控制器或者控制器名称的服务
                li 
                    pre.custom-pre controllerAs
                    | ：string，控制器别名。
                li 
                    pre.custom-pre parent
                    | ：string/object，手动指定该状态的父级。
                li 
                    pre.custom-pre resolve
                    | ：object，将会被注入controller去执行的函数，&lt;string,function&gt;形式。
                li 
                    pre.custom-pre url
                    | ：string，当前状态的对应url。
                li 
                    pre.custom-pre views
                    | ：object，视图展示的配置。&lt;string,object&gt;形式。
                li 
                    pre.custom-pre abstract
                    | ：boolean，一个永远不会被激活的抽象的状态，但可以给其子级提供特性的继承。默认是true。
                li 
                    pre.custom-pre onEnter
                    | ：function，当进入一个状态后的回调函数。
                li 
                    pre.custom-pre onExit
                    | ：function，当退出一个状态后的回调函数。
                li 
                    pre.custom-pre reloadOnSearch
                    | ：boolean，如果为false，那么当一个search/query参数改变时不会触发相同的状态，用于当你修改$location.search()的时候不想重新加载页面。默认为true。
                li 
                    pre.custom-pre data
                    | ：object，任意对象数据，用于自定义配置。继承父级状态的data属性。换句话说，通过原型继承可以达到添加一个data数据从而整个树结构都能获取到。
                li 
                    pre.custom-pre params
                    | ：url里的参数值，通过它可以实现页面间的参数传递。
            p.text-right 还没有看够？请点击
                a(href="/#/articles/frontend/AngularJS/angular-ui-router-2")  UI-Router for AngularJS (三) 
                | 查看更多内容。
            p.text-right 参考资料：
                a(href="https://ui-router.github.io/") https://ui-router.github.io/
            p.text-right
                a(href="https://github.com/angular-ui/ui-router/wiki") https://github.com/angular-ui/ui-router/wiki
            p.text-right
                a(href="http://bubkoo.com/2014/01/02/angular/ui-router/guide/index/") http://bubkoo.com/2014/01/02/angular/ui-router/guide/index/
            <FooterDivider></FooterDivider>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
