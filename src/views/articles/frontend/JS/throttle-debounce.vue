<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="背景"
                    content="介绍节流函数的主要应用场景"
                    status="wait"
                    @click.native="toTop('#throttle-debounce-bg', 30)">
                </Step>
                <Step
                    title="函数节流"
                    content="函数节流的定义和实现"
                    status="wait"
                    @click.native="toTop('#throttle-debounce-throttle', 30)">
                </Step>
                <Step
                    title="函数去抖"
                    content="函数去抖的定义和实现"
                    status="wait"
                    @click.native="toTop('#throttle-debounce-debounce', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> JavaScript 函数节流和函数防抖</h1>
                <p class="pt-1">通过限制函数的执行来提高应用程序的性能</p>
            </div>
            <h3 id="throttle-debounce-bg" class="ml-1"><Icon type="logo-buffer" /> 背景</h3>
            <Divider />
            <p>我们知道 <code>DOM</code> 操作时很消耗性能的，如果你为这些事件绑定一些操作DOM节点的操作的话，那就会引发大量的计算，比如以下几种场景。</p>
            <ul class="ml-2 mb-1" style="list-style-position: inside;">
                <li>通过监听 <code>keyup</code> 事件，监听输入进行模糊匹配。</li>
                <li>通过监听 <code>scroll</code> 事件，检测滚动位置，根据滚动位置显示返回顶部按钮、改变导航栏背景色等等。</li>
                <li>通过监听 <code>resize</code> 事件，对某些自适应页面调整DOM的渲染：全屏滚动项目中，窗口大小改变时重新获取视口高度。</li>
                <li>拖拽时的 <code>mousemove</code> 事件。</li>
            </ul>
            <p>在用户看来，页面可能就一时间没有响应，这样页面一下子变卡了。在IE下，如果你绑定的 <code>resize</code> 事件进行较多 <code>DOM</code> 操作，其高频率甚至可能直接就使得浏览器崩溃。</p>
            <h3 id="throttle-debounce-throttle" class="ml-1"><Icon type="logo-buffer" /> 函数节流</h3>
            <Divider />
            <p>触发函数事件后，规定时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。</p>
            <pre class="ml-2" v-highlight><code class="js">// method 回调函数
// context 执行环境
// delay 间隔时间
const throttle = function (method, context, delay) {
    let wait = false;
    return function() {
        if (!wait) {
            method.apply(context);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, delay);
        }
    };
}</code></pre>
            <h3 id="throttle-debounce-debounce" class="ml-1"><Icon type="logo-buffer" /> 函数去抖</h3>
            <Divider />
            <p>多次触发事件后，事件处理函数只在触发操作结束时执行一次。</p>
            <pre class="ml-2" v-highlight><code class="js">// method 回调函数
// context 执行环境
// delay 时间间隔
const debounce = function (method, context, delay) {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
        method.call(context);
    },delay)
}</code></pre>
            <p class="text-right">参考资料：<a href="http://www.alloyteam.com/2012/11/javascript-throttle/">浅谈javascript的函数节流 | AlloyTeam</a> <span>|</span> <a href="https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf">throttling-and-debouncing-in-javascript-codeburst</a></p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
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
