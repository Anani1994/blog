<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="基本 API"
                    content="基本 API"
                    status="wait"
                    @click.native="toTop('#RequireJS-1-1', 30)")
                Step(title="主模块"
                    content="主模块的加载"
                    status="wait"
                    @click.native="toTop('#RequireJS-1-2', 30)")
                Step(title="模块的加载"
                    content="加载其它模块"
                    status="wait"
                    @click.native="toTop('#RequireJS-1-3', 30)")
                Step(title="基本配置"
                    content="设置 RequireJS 的基本配置"
                    status="wait"
                    @click.native="toTop('#RequireJS-1-4', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;RequireJS (二)
                p.pt-1 RequireJS 的基本使用方法
            h3#RequireJS-1-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本 API
            Divider
            p.text-info RequireJS 会定义三个变量：define，require，requirejs，其中 require === requirejs，由于 require 更加简短，语义化也更好，所以我们一般见到和用得最多的就是 require。
            p define() 函数是用来定义一个模块，可以接受三个参数。第一个参数是模块名，一般模块名不需要被指定，由相关工具自动为其命名；第二个参数是一个数组，指明了此模块的依赖；第三个参数就是此模块的具体实现。它大概就像下图一样：
            p.text-warn 如果我们定义了模块名，则在指定依赖这个模块时，必须使用同名模块名。
            img.d-block.ml-2.mb-1(src="../.././../../assets/images/acticles/frontend/js/require-define.png", alt="模块的定义", style="height: 200px")
            p require() 函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
            p require 通过异步加载依赖的模块，从而解决了 JS 阻塞页面渲染，另外指定的回调函数会在其依赖的所有模块加载完之后再执行，从而又解决了依赖性的问题。
            h3#RequireJS-1-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;主模块
            Divider
            p.text-info "主模块"，意思是整个网页的入口代码，所有代码都从这儿开始运行。
            p 我们可以在主模块里设置 require 的全局配置，并通过设置脚本的 script 标签的 data-main 属性来引入主模块，因为这个属性指定的 js 文件将在加载完 reuqire.js 后处理，在我们把 require.config 的配置加入到其中后，就可以使每一个页面都使用这个配置。
            p 另外，data-main 属性还有一个重要的功能，当在 script 标签指定 data-main 属性时，require 会默认的将 data-main 指定的 js 为根路径。
            p 当然我们也可以直接再使用另外一个 script 标签来引入主模块，不过此时默认的根路径则为页面所在的路径。
            p 就像下面这个例子一样：
            pre.ml-2(v-highlight)
                code.Markdown # 目录结构
                        |
                        | └─ test.html
                        | └─text.txt
                        | └─js
                        |    └─main.js
                        |    └─ require.js
                        |    └─say.hello.js
            pre.ml-2(v-highlight)
                code.html &lt;!DOCTYPE html&gt;
                        | 
                        | &lt;html&gt;
                        | &lt;head&gt;
                        |     &lt;meta charset="utf-8" /&gt;
                        |     &lt;title&gt;RequireJS&lt;/title&gt;
                        |     &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
                        |     &lt;!-- 通过 script 标签的 src 属性引入 RequireJS --&gt;
                        |     &lt;!-- 通过 script 标签的 data-main 属性引入主模块，此时根路径为 js 目录 --&gt;
                        |     &lt;!-- 加载完 reuqire.js 后执行 main.js --&gt;
                        |     &lt;script src="js/require.js" data-main="js/main"&gt;&lt;/script&gt;
                        | &lt;/head&gt;
                        | &lt;body&gt;
                        |     &lt;div&gt;Hello world&lt;/div&gt;
                        | &lt;/body&gt;
                        | &lt;/html&gt;
            h3#RequireJS-1-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;模块的加载
            Divider
            p 在加载本地的模块时，我们可以在 require() 函数的第一个参数里指明模块的加载路径。比如上面在 main.js 文件里依赖 say.hello.js 文件，我们可以这样写：
            pre.ml-2(v-highlight)
                code.js // main.js
                        |
                        | require(['say.hello'], function () {
                        |     console.log('success');
                        | });
            pre.ml-2(v-highlight)
                code.js // say.hello.js
                        |
                        | define(function () {
                        |     function sayHello () {
                        |         alert('Hello');
                        |     }
                        | 
                        |     sayHello();
                        | });
            p 安装如前展示的目录将几个文件对应放置后，用浏览器打开 test.html 文件，此时会在加载完 require.js 文件后执行 main.js(主模块)，由于主模块依赖 say.hello.js(其它模块) 文件，所以主模块中的回调函数会在其它它依赖模块加载完后执行，也就是只有当我们确认弹出框后，控制台才会打印 success。
            h3#RequireJS-1-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本配置
            Divider
            p 首先我们前面提到的，根据主模块引入方式的差异，RequireJS 的根路径也会存在不同，那么有没有什么方法让它不受引入方式的影响呢，这就需要使用到 RequireJS 的 require.config() 方法来进行配置。
            p 自然我们也可以在每个页面中加入配置，但那样会显得十分麻烦，所以可以把全局配置写在主模块里。
            p.text-info
                strong 配置模块路径
                | ：简单点说就是给模块起一个更短更好记的名字，不需要在写依赖时写一串的路径。
            p 比如我们需要下载 CDN 上的 jQuery 时，我们可以照下面这样写：
            pre.ml-2(v-highlight)
                code.js // main.js
                        | 
                        | require.config({
                        |     paths : {
                        |         // 本地文件可以配置
                        |         // 配置的路径可以是一个
                        |         "sayHello": "say.hello",
                        |         // 服务器上的也可以配置
                        |         // 配置的路径也可以是一个数组，如果前一个路径获取失败会尝试依次从后面的路径下载
                        |         // 直到下载成功或读取完整个数组
                        |         // 注意配置的路径中不能有 .js 后缀
                        |         "jquery" : ["https://cdn.bootcss.com/jquery/1.10.2/jquery.min"]
                        |     }
                        | });
                        | require(["jquery", "sayHello"], function ($) {
                        |     $(function() {
                        |         console.log('success');
                        |     });
                        | });
            p.text-warn 在使用 RequireJS 时，加载模块时不能写 .js 后缀。
            p 上面例子中的 callback 函数中发现有 $ 参数，这个就是依赖的 jquery 模块的输出变量，如果你依赖多个模块，可以依次写入多个参数来使用，由于sayHello 模块不存在输出变量，所以上面的回调函数只有一个参数。
                span.text-warn 参数的放置顺序应该与前面依赖模块的书写顺序一致。
            p.text-right 还没有看够？点击 
                a(href="/#/articles/frontend/JS/RequireJS-2") RequireJS (三) 
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
