<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="原生路由"
                    content="粗略介绍原生路由的使用"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-1', 30)")
                Step(title="简单使用"
                    content="UI roter 简单使用的步骤"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-2', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;UI-Router for AngularJS (一)
                p.pt-1 UI-Router is the defacto standard for routing in AngularJS
            h3#angular-ui-router-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;原生路由
            Divider
            p 如果使用原生路由的话，Angular 的视图是通过 ng-view 这个指令进行加载的。比如：
                pre.custom-pre &lt;div ng-view&gt;&lt;/div&gt;
                |  ，通常，我们都会把这个指令放在 index.html 这个文件里面。
            p 然后具体的路由信息在 js 文件中进行配置：
            pre.ml-2(v-highlight)
                code.js // 引入文件
                    | 
                    | &lt;script type="text/javascript" src="JS/angular.min.js"&gt;&lt;/script&gt;
                    | &lt;script type="text/javascript" src="JS/angular-ui-router.min.js"&gt;&lt;/script&gt;
                    | 
                    | // 配置路由
                    | &lt;script type="text/javascript"&gt;
                    | angular.module('app', [])
                    |     .config('AppCtrl', ['$routeProvider', function ( $routeProvider ) {
                    |         $routeProvider
                    |             .when('/', {
                    |                 templateUrl: 'views/page-a.html',
                    |                 controller: 'PageACtrl'
                    |             })
                    |             .when('/next', {
                    |                 templateUrl: 'views/page-b.html',
                    |                 controller: 'PageBCtrl'
                    |             })
                    |  
                    |         /* 对其他不合法的路由进行处理 */
                    |         $routeProvider.otherwise('/404');
                    |     }]);
                    | &lt;/script&gt;
            p 原生路由由于不支持嵌套路由，所以每次切换路由时都会刷新整个页面，因此，ui-router 插件应运而生。
            h3#angular-ui-router-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;UI router 简单使用
            Divider
            ul.ml-2
                li 引入文件
                    pre.ml-1(v-highlight)
                        code.js // routine web page?
                            | 
                            | &lt;script type="text/javascript" src="JS/angular.min.js"&gt;&lt;/script&gt;
                            | &lt;script type="text/javascript" src="JS/angular-ui-router.min.js"&gt;&lt;/script&gt;
                    pre.ml-1(v-highlight)
                        code.js // webpack + angular?
                            | 
                            | // main.js-入口文件
                            | import Angular from 'angular'; // 引入angular
                            | import uiRoute from 'angular-ui-router'; // 引入 angular-ui-router
                li 注入依赖
                    pre.ml-1(v-highlight)
                        code.js // routine web page?
                            | 
                            | var app = angular.module('app', ['ui.router']);
                    pre.ml-1(v-highlight)
                        code.js // webpack + angular?
                            | 
                            | // main.js-入口文件
                            | let App = Angular.module('app', [uiRoute]);
                li 配置路由
                    pre.ml-1(v-highlight)
                        code.js // routine web page?
                            | 
                            | app.config(["$stateProvider", function ($stateProvider){
                            |     $stateProvider     
                            |     .state("home", { // 路由名
                            |         url: '/',    // 路径 
                            |         template: '&lt;div&gt;Hello world&lt;/div&gt;'
                            |     })      
                            | }]);
                    pre.ml-1(v-highlight)
                        code.js // webpack + angular?
                            | 
                            | // JS/route.js    
                            | function router ($stateProvider, $urlRouterProvider) {
                            |     // $urlRouterProvider-路由重定向
                            |     $urlRouterProvider.when('', '/index'); // 对非法路由进行重定向
                            |     $stateProvider
                            |         .state('home', {    // 路由名
                            |             url: '/index',  // 路径
                            |             template: '&lt;div&gt;Hello world&lt;/div&gt;', // 模板
                            |         })
                            |     $urlRouterProvider.otherwise('/page-404');
                            | }
                            | export default router;
                            | 
                            | // main.js
                            | import router from 'JS/index.js'; // 引入路由配置
                            | App.config(['$stateProvider', '$urlRouterProvider', router]); // 配置路由
                li 定义视图
                    pre.ml-1(v-highlight)
                        code.html &lt;!-- routine web page? or webpack + angular? --&gt;
                            | 
                            | &lt;div ui-view&gt;&lt;/div&gt;
                li 使用路由
                    pre.ml-1(v-highlight)
                        code.js // .js 中
                            |
                            | var stateName = 'home'; // 值为在路由配置中设置的路由名
                            | $state.go(stateName);
                    pre.ml-1(v-highlight)
                        code.html &lt;!-- .html 中 --&gt;
                            |
                            | &lt;a ui-sref="stateName"&gt;跳转&lt;/a&gt;
                            | &lt;!-- 值依旧为在路由配置中设置的路由名 --&gt;
            p.text-right 还没有看够？查看详细介绍请点击
                a(href="/#/articles/frontend/AngularJS/angular-ui-router-1")  UI-Router for AngularJS (二) 
                | 查看更多内容。
            p.text-right 参考资料：
                a(href="https://ui-router.github.io/") https://ui-router.github.io/
            p.text-right
                a(href="http://hao.jobbole.com/angular-ui-router/") http://hao.jobbole.com/angular-ui-router/
            p.text-right
                a(href="https://blog.csdn.net/shenlei19911210/article/details/51325707/") https://blog.csdn.net/shenlei19911210/article/details/51325707/
            p.text-right
                a(href="https://blog.csdn.net/zcl_love_wx/article/details/52034193") https://blog.csdn.net/zcl_love_wx/article/details/52034193
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
