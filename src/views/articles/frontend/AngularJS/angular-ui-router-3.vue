<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="嵌套路由"
                    content="嵌套路由"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-3-1', 30)")
                Step(title="多命名视图"
                    content="多命名视图"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-3-2', 30)")
                    Steps(direction="vertical")
                        Step(title="基本使用"
                            content="基本使用"
                            status="wait"
                            @click.native.stop="toTop('#angular-ui-router-3-2-1', 30)")
                        Step(title="相对命名和绝对命名"
                            content="相对命名和绝对命名"
                            status="wait"
                            @click.native.stop="toTop('#angular-ui-router-3-2-2', 30)")
                        Step(title="继承依赖"
                            content="继承依赖"
                            status="wait"
                            @click.native.stop="toTop('#angular-ui-router-3-2-3', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;UI-Router for AngularJS (四)
                p.pt-1 UI-Router is the defacto standard for routing in AngularJS
            h3#angular-ui-router-3-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;嵌套路由
            Divider
            p 嵌套路由共有四种方法，由 'dot notation'，parent property（其值可以为字符串和对象），第三方模块(stateHelper)，这里不对 stateHelper 进行介绍，需要的同学可点击
                a(href="https://github.com/marklagendijk/ui-router.stateHelper")  stateHelper
                |  查看。
            h4.mb-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;dot notation
            p 使用嵌套路由时，默认行为是子状态将其 url 附加到其每个父状态的 url，定义的方式很简单，就是状态名的格式设置格式为  
                pre.custom-pre &lt;parentName&gt;.&lt;sonName&gt;
            pre.ml-2(v-highlight)
                code.js $stateProvider
                    | 
                    |     .state('products', {
                    |         url: '/products',
                    |         ...
                    |     })
                    |     .state('products.list', {
                    |         url: '/list',
                    |         ...
                    |     });
            p 它们路径表现为：
                ul.ml-1
                    li 'products' state matches "/products"
                    li 'products.list' state matches "/products/list".
            p 当然我们也可以为其设置绝对路径，这样就不会受父路由的影响，而操作的方式就是在配置 url 是在前面添加 ^ 即可。
            pre.ml-2(v-highlight)
                code.js $stateProvider
                    | 
                    |     .state('products', {
                    |         url: '/products',
                    |         ...
                    |     })
                    |     .state('products.list', {
                    |         url: '^/list',
                    |         ...
                    |     });
            p 它们路径表现为：
                ul.ml-1
                    li 'products' state matches "/products"
                    li 'products.list' state matches "/list".
            h4.mb-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;parent property
            p 通过设置 parent 属性来指定它的父状态。
            pre.ml-2(v-highlight)
                code.js // parent 的值可以是父状态的名称
                    | 
                    | $stateProvider
                    |     .state('products', {
                    |         url: '/products',
                    |         ...
                    |     })
                    |     .state('list', {
                    |         url: '/list',
                    |         parent: 'products'
                    |         ...
                    |     });
                    |
                    | // parent 的值也可以是一个描述状态的对象
                    | var products = { 
                    |     name: 'products',
                    |     templateUrl: 'products.html'
                    | }
                    | var productsList = { 
                    |     name: 'list',
                    |     parent: products,
                    |     templateUrl: 'products.list.html'
                    | }
                    | 
                    | $stateProvider
                    |   .state(products)
                    |   .state(productsList)
            p.text-info 父子状态的定义顺序可以随意，因为创建它们时会自动为其排队，首先创建父级状态。
            p.text-warn 如果我们定义了子状态，那么其父级状态必须存在。
            p.text-warn 状态的名称不能重复，即使它们身处不同的父级状态下。
            p.text-info 当子状态被激活时，其父级状态也会被激活。
            p.text-info 当子状态被激活时，将会加载其 template 显示在父级的 ui-view 中，当没被指定父级状态时，显示在index.html 的 ui-view 中。
            h3#angular-ui-router-3-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;多命名视图
            Divider
            p 你可以给的视图进行命名，这样在一个模板里你可以拥有多个视图。
            h4#angular-ui-router-3-2-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本使用
            Divider
            p 要创建命名视图只需要在设置路由对象时添加 views 属性。需要注意的是如果你设置了 views 属性，那么路由的 template，templateUrl，templateProvider 将会被忽略，因此你可以创建一个抽象路由来包含模板，子路由都定义在 views 属性里。
            pre.ml-2(v-highlight)
                code.html &lt;!-- index.html --&gt;
                    |
                    | &lt;body&gt;
                    | &lt;div ui-view="viewName1"&gt;&lt;/div&gt;	
                    | &lt;div ui-view="viewName2"&gt;&lt;/div&gt;
                    | &lt;div ui-view="viewName3"&gt;&lt;/div&gt;
                    | &lt;/body&gt;
            pre.ml-2(v-highlight)
                code.js $stateProvider
                    | 
                    |     .state('report', {
                    |         views: {
                    |             'viewName1': {},
                    |             'viewName2': {},
                    |             'viewName3': {}
                    |         }
                    |     });
            p 在每个视图中可以设置自己的模板(template，templateUrl，templateProvider)和控制器(controller)。
            pre.ml-2(v-highlight)
                code.js $stateProvider
                    | 
                    |     .state('report', {
                    |         views: {
                    |             'viewName1': {
                    |                 templateUrl: 'view1.html',
                    |                 controller: 'ViewOneCtrl'
                    |             },
                    |             'viewName2': {
                    |                 templateUrl: 'view2.html',
                    |                 controller: 'ViewTwoCtrl'
                    |             },
                    |             'viewName3': {
                    |                 templateUrl: 'view3.html',
                    |                 controller: 'ViewThreeCtrl'
                    |             }
                    |         }
                    |     });
            h4#angular-ui-router-3-2-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;相对命名和绝对命名
            Divider
            p 在定义 views 属性时，如果视图名称中包含 @，那么视图名称就是绝对命名的方式，否则就是相对命名的方式。
            p 相对命名的意思是相对于父模板中的 ui-view，而绝对命名则指定了相对于哪个状态的模板。
            p 在定义 views 属性后，其内部如果包含了 @，那么 @ 前面部分为空表示未命名的 ui-view，@ 后面为空则表示相对于根模板，通常是 index.html。
            p.text-warn 请注意，一旦使用了 @ 则表示绝对命名的方式。
            pre.ml-2(v-highlight)
                code.html &lt;!-- index.html --&gt;
                    | 
                    | &lt;body ng-app&gt;
                    | &lt;div ui-view&gt;&lt;/div&gt;
                    | &lt;div ui-view="status"&gt;&lt;/div&gt;
                    | &lt;/body&gt;
                    | &lt;!-- products.html --&gt;
                    | &lt;h1&gt;My Products&lt;/h1&gt;
                    | &lt;div ui-view&gt;&lt;/div&gt;
                    | &lt;div ui-view="detail"&gt;&lt;/div&gt;
                    | &lt;!-- products.detail.html --&gt;
                    | &lt;h1&gt;Products Details&lt;/h1&gt;
                    | &lt;div ui-view="info"&gt;&lt;/div&gt;
            pre.ml-2(v-highlight)
                code.js $stateProvider
                    | 
                    |     .state('products', {
                    |         // 加载到 index.html 中未命名视图(ui-view)中
                    |         templateUrl: 'products.html'
                    |     })
                    |     .state('products.detail', {
                    |         views: {
                    |             // 相对命名
                    |             // products.html 中 &lt;div ui-view='detail'/&gt;
                    |             "detail": {},
                    |             // 相对命名
                    |             // 对应 products.html 中的未命名 ui-view &lt;div ui-view/&gt;
                    |             "": {},
                    |             // 绝对命名
                    |             // 对应 products.detail.html 中 &lt;div ui-view='info'/&gt;
                    |             "info@products.detail": {},
                    |             // 绝对命名
                    |             // 对应 products.html 中 &lt;div ui-view='detail'/&gt;
                    |             "detail@products": {},
                    |             // 绝对命名
                    |             // 对应 products.html 中的未命名视图： &lt;div ui-view/&gt;
                    |             "@products": {},
                    |             // 绝对命名
                    |             // 对应根模板(index.html) 中名为 status 的视图： &lt;div ui-view='status'/&gt;
                    |             "status@": {},
                    |             // 绝对命名
                    |             // 对应 index.html 中未命名视图：&lt;div ui-view/&gt;
                    |             "@": {}
                    |         }
                    |     });
            h4#angular-ui-router-3-2-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;继承依赖
            Divider
            p 视图可以从它们所属的状态继承解析的依赖关系，但可能不继承它们的兄弟视图的那些。
            pre.ml-2(v-highlight)
                code.js $stateProvider.state('multipleViews', {
                    | 
                    |     resolve: {
                    |         data1: function () {
                    |             return {};
                    |         }
                    |     },
                    |     views: {
                    |         'view1@multipleViews': {
                    |             templateUrl: 'multiple-views-view1.html',
                    |             controller: function ($scope, data1, data2) {
                    |                 /* has access to data1 and data2,
                    |                    but *not* data3 */
                    |             },
                    |             resolve: {
                    |                 data2: function () {
                    |                     return {};
                    |                 }
                    |             },
                    |         },
                    |         'view2@multipleViews': {
                    |             templateUrl: 'multiple-views-view2.html',
                    |             controller: function ($scope, data1, data3) {
                    |                 /* has access to data1 and data3,
                    |                    but *not* data2 */
                    |             },
                    |             resolve: {
                    |                 data3: function () {
                    |                     return { value: 'view2' };
                    |                 },
                    |             },
                    |         },
                    |     }
                    | });
            p.text-right 还没有看够？请点击
                a(href="/#/articles/frontend/AngularJS/angular-ui-router-4")  UI-Router for AngularJS (五) 
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
