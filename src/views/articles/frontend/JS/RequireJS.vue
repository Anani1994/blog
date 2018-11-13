<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="简介"
                    content="RequireJS 简介"
                    status="wait"
                    @click.native="toTop('#RequireJS-1', 30)")
                Step(title="加载 RequireJS"
                    content="加载 RequireJS"
                    status="wait"
                    @click.native="toTop('#RequireJS-2', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;RequireJS (一)
                p.pt-1 非常小巧的 JavaScript 模块载入框架
            h3#RequireJS-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;简介
            Divider
            p 随着网站功能逐渐丰富，网页中的 js 也变得越来越复杂和臃肿，原有通过 script 标签来导入一个个的 js 文件这种方式已经不能满足现在互联网开发模式。
            p 原始写法一个很明显的缺陷，加载多个文件的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；其次，由于js文件之间存在依赖关系，因此必须严格保证加载顺序，依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。
            p AMD 提出了一种基于模块的异步加载 JavaScript 代码的机制，它推荐开发人员将 JavaScript 代码封装进一个个模块，对全局对象的依赖变成了对其他模块的依赖，无须再声明一大堆的全局变量。通过延迟和按需加载来解决各个模块的依赖关系。模块化的 JavaScript 代码好处很明显，各个功能组件的松耦合性可以极大的提升代码的复用性、可维护性。
            p 这种非阻塞式的并发式快速加载 JavaScript 代码，使 Web 页面上其他不依赖 JavaScript 代码的 UI 元素，如图片、CSS 以及其他 DOM 节点得以先加载完毕，Web 页面加载速度更快，用户也得到更好的体验。
            p RequireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一。
            p 让我们先来看一段没有使用 RequireJS 的代码的情况。
            pre.ml-2(v-highlight)
                code.html &lt;!-- demo.html --&gt;
                        | &lt;!DOCTYPE html&gt;
                        | &lt;html&gt;
                        |     &lt;head&gt;
                        |         &lt;script type="text/javascript" src="js/say.hello.js"&gt;&lt;/script&gt;
                        |     &lt;/head&gt;
                        |     &lt;body&gt;
                        |         &lt;div&gt;Hello world&lt;/div&gt;
                        |     &lt;/body&gt;
                        | &lt;/html&gt;
            pre.ml-2(v-highlight)
                code.js // say.hello.js
                    |
                    | (function () {
                    |     function sayHello () {
                    |         alert('Hello');
                    |     }
                    |
                    |     sayHello();
                    | })()
            p 如上所示的代码，当执行 sayHello 函数时，页面会是一片空白，Hello world 的字样并不会被渲染出来，只有当点击确认弹出框后，才会继续渲染页面，这便是 JS 阻塞浏览器渲染导致的结果。
            h3#RequireJS-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;加载 RequireJS
            Divider
            p 首选去官网下载
                a(href="") &nbsp;RequireJS
            p 然后以传统的方式通过 script 标签的 src 属性引入，并把它放在 js 子目录下面：
            pre.ml-2(v-highlight)
                code.js // async属性表明这个文件需要异步加载，避免网页失去响应。IE 不支持这个属性，只支持 defer
                    |
                    | // 这样的写法是避免加载这个文件，造成网页失去响应
                    | // 当然把它放在网页底部加载也可以避免
                    | &lt;script src="js/require.js" defer async="true"&gt;&lt;/script&gt;
            p 此时我们用 RequireJS 再来实现上面的事情：
            pre.ml-2(v-highlight)
                code.html &lt;!-- demo.html --&gt;
                        | &lt;!DOCTYPE html&gt;
                        | &lt;html&gt;
                        |     &lt;head&gt;
                        |         &lt;script type="text/javascript" src="js/require.js" defer async="true"&gt;&lt;/script&gt;
                        |         &lt;script type="text/javascript"&gt;
                        |             require(["js/say.hello"]);
                        |         &lt;/script&gt;
                        |     &lt;/head&gt;
                        |     &lt;body&gt;
                        |         &lt;div&gt;Hello world&lt;/div&gt;
                        |     &lt;/body&gt;
                        | &lt;/html&gt;
            pre.ml-2(v-highlight)
                code.js // say.hello.js
                    |
                    | define(function () {
                    |     function sayHello () {
                    |         alert('Hello');
                    |     }
                    |
                    |     sayHello();
                    | })()
            p 现在当弹出框弹出时，浏览器并不是一片空白，Hello world 的字样会直接显示。所以我们现在可以更加直观地感受 RequireJS 带来的好处：
            ul.ml-2
                li.ml-1 使用程序调用的方式加载 js，防出页面一排 script 标签引入外部 js 的情况发生。
                li.ml-1 防止js加载阻塞页面渲染。
            p.text-right 还没有看够？点击 
                a(href="/#/articles/frontend/JS/RequireJS-1") RequireJS (二) 
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
