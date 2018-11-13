<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="传统的 jsonp 服务"
                    content="传统的 jsonp 服务"
                    status="wait"
                    @click.native="toTop('#RequireJS-3-1', 30)")
                Step(title="RequireJS 的 jsonp 服务"
                    content="RequireJS 的 jsonp 服务"
                    status="wait"
                    @click.native="toTop('#RequireJS-3-2', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;RequireJS (四)
                p.pt-1 RequireJS 实现 jsonp 服务
            h3#RequireJS-3-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;传统的 jsonp 服务
            Divider
            p 由于浏览器同源策略的影响，Ajax 请求不能跨域获取数据。
            p 所谓"同源"指的是"三个相同"：
                ul.ml-1
                    li 协议相同
                    li 域名相同
                    li 端口相同
            p 同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。如果非同源，共有三种行为受到限制：
                ul.ml-1
                    li Cookie、LocalStorage 和 IndexDB 无法读取。
                    li DOM 无法获得。
                    li AJAX 请求不能发送。
            p 那么 Ajax 请求如何规避这个限制呢？我们知道 JSONP 是服务器与客户端跨源通信的常用方法。它的基本思想是，网页通过添加一个 
                code &lt;script&gt; 
                | 元素，向服务器请求 JSON 数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。
            pre.ml-2(v-highlight)
                code.js /**
                    |
                    |  * @param src 请求地址
                    |  * @param callback 请求完成后执行的回调函数的函数名，这里设置为 loaded
                    |  */
                    | function getDataByJsonp (src, callback) {
                    |     var url = src + '?callback=' + callback;
                    |     var script = document.createElement('script');
                    |     script.setAttribute("type","text/javascript");
                    |     script.src = url;
                    |     document.body.appendChild(script);
                    | }
                    |
                    | // 后台接收到请求后返回立即执行的函数，函数名为请求中所带参数指定的函数(callback)，本次实例即为 loaded
                    | // 并把需要获取的数据以参数的形式传入该函数
                    | // 后台返回的数据形式
                    | loaded({
                    |    id: 1,
                    |    userName: 'Anani',
                    |    age: 24
                    | })
                    |
                    | // 最后申明一个 callback 函数，这里即为 loaded 函数，它将会在请求成功后立即执行
                    | function loaded (arg) {
                    |     console.log(arg);
                    | }
            h3#RequireJS-3-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;RequireJS 的 jsonp 服务
            Divider
            p 前面介绍到 RequireJS 的运行机制是通过 script 标签来加载模块，所以我们也可以通过 RequireJS 来实现 jsonp 服务。
            p 在使用 RequireJS 实现 jsonp 服务时，我们需要把后台返回的数据写成 define() 函数的形式。
            pre.ml-2(v-highlight)
                code.js // 后台的数据形式
                    | 
                    | define({
                    |     id: 1,
                    |     userName: 'Anani',
                    |     age: 24
                    | });
                    | 
                    | // RequireJS 跨域获取数据
                    | require(['url'], function (arg) {
                    |     console.log(arg);
                    | });
            p.text-right 还没有看过？点击 
                a(href="/#/articles/frontend/JS/RequireJS-4") RequireJS (五) 
                | 查看更多内容。
            p.text-right 参考资料：
                a.mr-1(href="http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html") 阮一峰的网络日志
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
