<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="配置 baseUrl"
                    content="配置加载文件的根路径"
                    status="wait"
                    @click.native="toTop('#RequireJS-2-1', 30)")
                Step(title="加载第三方模块"
                    content="配置不支持 AMD 的库和插件"
                    status="wait"
                    @click.native="toTop('#RequireJS-2-2', 30)")
                Step(title="配置 map"
                    content="解决模块升级带来的兼容问题"
                    status="wait"
                    @click.native="toTop('#RequireJS-2-3', 30)")
                Step(title="其它常用配置"
                    content="其它常用配置"
                    status="wait"
                    @click.native="toTop('#RequireJS-2-4', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;RequireJS (三)
                p.pt-1 RequireJS 的基本配置
            h3#RequireJS-2-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置 baseUrl
            Divider
            p 我们知道当我们不使用 data-main 属性，也不设置 baseUrl 的值时，这时加载模块的路径(baseUrl)默认是在 .html 文件所在目录。而当我们使用 data-main 属性时，加载 js 文件的根路径就变成了 data-main 属性所指定 js 文件所在目录。
            p 这里我们将介绍的是如何手动的配置 baseUrl，我们可以在前面提到的主模块里进行配置。
            pre.ml-2(v-highlight)
                code.js // main.js
                    | 
                    | require.config({
                    |     baseUrl: '/js'
                    | });
            p 另外需要提到的是 RequireJS 的加载机制：
                ul.ml-1
                    li RequireJS 使用 head.appendChild() 将每一个依赖加载为一个 script 标签。
                    li 加载后立即执行。
            h3#RequireJS-2-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;加载第三方模块
            Divider
            p RequireJS 加载的模块，采用 AMD 规范。也就是说，模块必须按照 AMD 的规定来写，也就是使用 define() 来申明的模块。
            p 但是部分时候需要加载非 AMD 规范的 JavaScript，比如老版本的 jQuery、bootstrap以及 Modernizr.js，那么，RequireJS 是否能够加载这些非规范的模块呢？答案是可以的，不过我们需要对其进行相应的配置。
            p 这里我们以 Modernizr.js 为例来认识以下 shim。
            img.d-block.ml-2.mb-1(src="../.././../../assets/images/acticles/frontend/js/require-shim.png", alt="模块的定义", style="height: 200px")
            p 这样配置后，我们就可以在其他模块中引用 Modernizr 模块：
            pre.ml-2(v-highlight)
                code.js require(["Modernizr"], function (Modernizr) {
                    |
                    |     // do something
                    | });
            p 对于像 bootstrap 这样只有依赖没有输出的我们只需要注明它的依赖。就像下面这样：
            pre.ml-2(v-highlight)
                code.js // main.js
                    | 
                    | requirejs.config({
                    |     shim: {
                    |         'bootstrap': ['jquery']
                    |     }
                    | });
            p 当然你也可以像下面这么写，不过上面的写法看起来更简洁：
            pre.ml-2(v-highlight)
                code.js // main.js
                    | 
                    | requirejs.config({
                    |     shim: {
                    |         'bootstrap': {
                    |              deps: ['jquery']
                    |          }
                    |     }
                    | });
            h3#RequireJS-2-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置 map
            Divider
            p 在进行项目开发的时候，我们经常会遇到这样的问题，在项目开发的初期我们使用了模块的最新且稳定的版本，然而模块随时可能会更新，当我们需要相应模块最新版本的功能时，却又担心升级后之前项目依赖的低版本会产生问题，这时候就陷入了两难的抉择。
            p 这时候就需要用到 map 配置，在这里我们以需要不同版本的 jQuery 为例。
            pre.ml-2(v-highlight)
                code.js // main.js
                    | 
                    | requirejs.config({
                    |     map: {
                    |         'app/login': {
                    |             'jquery': './lib/jquery'
                    |         },
                    |         'app/index': {
                    |             'jquery': './lib/jquery2'
                    |         }
                    |     }
                    | });
            p 根据以上的配置虽然 app/login 和 app/index 这两个模块都加载了 jQuery，但 app/login 加载 jQuery 模块时，将加载 jquery.js，而 app/index 加载 jQuery 模块时，将加载 jquery2.js。
            pre.ml-2(v-highlight)
                code.js // main.js
                    | 
                    | requirejs.config({
                    |     map: {
                    |         '*': {
                    |             'jquery': './lib/jquery'
                    |         },
                    |         'app/index': {
                    |             'jquery': './lib/jquery2'
                    |         }
                    |     }
                    | });
            p 当我们像上面这么配置时，除了加载 app/index 模块会加载 jquery2.js外，其它模块加载 jQuery 模块时，都会去加载 jquery.js。
            h3#RequireJS-2-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;其它常用配置
            Divider
            p
                ul.ml-1
                    li
                        strong waitSeconds
                        | ：设置加载 js 的等待时间，默认为 7 秒，超出后将会报错；如果设置为 0，则禁用等待超时。
                    li
                        strong urlArgs
                        | ：加载文件时，在 url 后面添加额外的 query 参数。
            p.text-right 还没有看够？点击 
                a(href="/#/articles/frontend/JS/RequireJS-3") RequireJS (四) 
                | 查看更多内容。
            p.text-right 参考资料：
                a.mr-1(href="http://www.runoob.com/w3cnote/requirejs-tutorial-1.html") 菜鸟教程
                a.mr-1(href="https://www.ibm.com/developerworks/cn/web/1209_shiwei_requirejs/index.html") IBM
                a.mr-1(href="http://www.ruanyifeng.com/blog/2012/11/require_js.html") 阮一峰的网络日志
                a(href="https://www.imooc.com/learn/787") 慕课网
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
