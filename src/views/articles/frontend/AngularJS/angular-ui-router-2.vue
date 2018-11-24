<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="基本概念"
                    content="基本概念"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-2-1', 30)")
                Step(title="路径传参"
                    content="路径传参"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-2-2', 30)")
                Step(title="配合 params 属性传参"
                    content="配合 params 属性传参"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-2-3', 30)")
                Step(title="获取父级的参数"
                    content="获取父级的参数"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-2-4', 30)")
                Step(title="传递对象"
                    content="传递对象"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-2-5', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;UI-Router for AngularJS (三)
                p.pt-1 UI-Router is the defacto standard for routing in AngularJS
            h3#angular-ui-router-2-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本概念
            Divider
            p 通常，URL 具有动态部分，被称为参数，这在现在的单页面程序开发中使用的很多。
            p 比如在一个商品展示的网页，当我们点击一件商品进入详情页时，它们所用的页面通常是同一个，只是获取的数据不同，为了给每件商品提供正确的详情数据，因此我们需要提供动态的数据去区别它们。
            p 页面传参的方式一般具有两种，一种是 url 传参，这样传递的参数会在 url 中显示出来，另外一种传递参数的方式是直接在路由配置中通过指定 params 属性，这样传递的参数不会出现在 url 中。
            h3#angular-ui-router-2-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;路径传参
            Divider
            p 路由配置。
            pre.ml-2(v-highlight)
                code.js // basic params
                    | 
                    | $stateProvider
                    |     .state('home.products', {
                    |         url: "/home/:productId", // 也可以换作：url: "/home/{productId}"
                    |         templateUrl: 'home.detail.html',
                    |         controller: function ($stateParams) {
                    |             // If we got here from a url of /home/1
                    |             console.log($stateParams.productId); // 1
                    |         }
                    |     });
                    | 
                    | // query params
                    | $stateProvider
                    |     .state('home.products', {
                    |         url: "/products?myParam" // will match to url of "/products?myParam=value"
                    |     });
                    | $stateProvider
                    |     .state('home.products', {
                    |         url: "/products?myParam1&myParam2" // will match to url of "/products?myParam1=value1&myParam2=value2"
                    |     });
            p 在页面中传参。
            pre.ml-2(v-highlight)
                code.html &lt;!-- The value for id can be anything in scope. --&gt;
                    |
                    | &lt;a ui-sref="home.products({productId: id})"&gt;View product&lt;/a&gt;
                    |
                    | &lt;!-- 多个参数 --&gt;
                    | &lt;a ui-sref="home.products({myParam1=value1, myParam2=value2})"&gt;View product&lt;/a&gt;
            pre.ml-2(v-highlight)
                code.js // 或者您也可以将它们传递给$ state.go（）
                    |
                    | $state.go('products', {param1: value1});
                    | 
                    | // 多个参数
                    | $state.go('products', {param1: value1, param2: value2});
            h3#angular-ui-router-2-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配合 params 属性传参
            Divider
            p 就像前面所说的，配合 params 属性传参的参数不会暴露在 url 中，其用法区别仅在于在配置路由时，预先设置参数的值为 null 即可。
            pre.ml-2(v-highlight)
                code.js .state('products', {
                    | 
                    |     url: "/products",
                    |     params: {
                    |         param1: null
                    |     },
                    |     templateUrl: 'products.html'
                    | });
                    |
                    | // 多个参数
                    | .state('products', {
                    |     url: "/products",
                    |     params: {
                    |         param1: null,
                    |         param2: null
                    |     },
                    |     templateUrl: 'products.html'
                    | });
            h3#angular-ui-router-2-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;获取父级的参数
            Divider
            p $StateParams 仅包含注册在当前状态下的参数，不包含其他状态下的参数，即使是上级的 url 参数也获取不到。
            pre.ml-2(v-highlight)
                code.js $stateProvider.state('products.detail', {
                    | 
                    |     url: '/products/:productId',
                    |     controller: function ($stateParams) {
                    |         $stateParams.productId  //*** Exists! ***//
                    |     }
                    | }).state('products.detail.subitem', {
                    |     url: '/item/:itemId', 
                    |     controller: function ($stateParams) {
                    |         $stateParams.productId //*** Watch Out! DOESN'T EXIST!! ***//
                    |         $stateParams.itemId //*** Exists! ***//  
                    |     }
                    | })
                    | 
            p 若想让下级获取到当前状态的参数，需使用 resolve()。该函数会在画面渲染出来前先执行完成。
            pre.ml-2(v-highlight)
                code.js $stateProvider.state('products.detail', {
                    |
                    |     url: '/products/:productId',
                    |     controller: function ($stateParams) {
                    |         $stateParams.productId  //*** Exists! ***//
                    |     },
                    |     resolve:{
                    |         productId: ['$stateParams', function ($stateParams) {
                    |             return $stateParams.productId;
                    |         }]
                    |     }
                    | }).state('products.detail.subitem', {
                    |     url: '/item/:itemId', 
                    |     controller: function ($stateParams, productId){
                    |         productId //*** Exists! ***//
                    |         $stateParams.itemId //*** Exists! ***//  
                    |     }
                    | })
            h3#angular-ui-router-2-5.ml-1
                Icon(type="logo-buffer")
                | &nbsp;传递对象
            Divider
            p 传递。
            pre.ml-2(v-highlight)
                code.js var obj = {
                    |
                    |     name: 'Anani',
                    |     age: 24
                    | };
                    | $state.go("home.person", {object: JSON.stringify(obj)});
            p 接收。
            pre.ml-2(v-highlight)
                code.js JSON.parse($state.params.object);
            p.text-right 还没有看够？请点击
                a(href="/#/articles/frontend/AngularJS/angular-ui-router-3")  UI-Router for AngularJS (四) 
                | 查看更多内容。
            p.text-right 参考资料：
                a(href="https://github.com/angular-ui/ui-router/wiki/URL-Routing") https://github.com/angular-ui/ui-router/wiki/URL-Routing
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
