<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="Event 构造函数"
                    content="新式的事件创建和分发"
                    status="wait"
                    @click.native="toTop('#trigger-event-event', 30)">
                </Step>
                <Step
                    title="CustomEvent"
                    content="通过 CustomEvent 向事件对象添加更多数据"
                    status="wait"
                    @click.native="toTop('#trigger-event-cusEve', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 手动触发事件（新）</h1>
                <p class="pt-1">简要介绍手动触发 JavaScript 事件的新方法</p>
            </div>
            <h3 id="trigger-event-event"><Icon type="logo-buffer" /> Event 构造函数</h3>
            <Divider />
            <div class="ml-2">绝大多数现代浏览器中都会支持这个构造函数（Internet Explorer 例外）。想要了解 <Tag @click.native="toPage('trigger-event')">过时的方法</Tag> 请参考上面的描述。</div>
            <pre class="ml-2" v-highlight><code class="js">function trigger (selector, eveType, setting) { // eveType：所创事件的名称，setting：详见下面的实例
    let ele = document.querySelector(selector);
    let eve = new Event(eveType, setting);
    // 添加对该事件的监听
    ele.addEventListener(eveType, function() {
        //do something
    })
    ele.dispatchEvent(eve);
}</code></pre>
            <p>测试代码如下所示。</p>
            <pre class="ml-2" v-highlight><code class="js">&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
    &lt;title&gt;测试&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="parent"&gt;
	&lt;div id="target"&gt;我是目标元素。&lt;/div&gt;
&lt;/div&gt;
&lt;button&gt;测试&lt;/button&gt;
&lt;/body&gt;
&lt;script&gt;
function trigger (selector, eveType, setting) {
    let ele = document.querySelector(selector);
    let eve = new Event(eveType, setting);
    ele.addEventListener(eveType, function() {
        console.log(1);
    })
    ele.dispatchEvent(eve);
}
document.querySelector('#parent').onclick = function () {
    console.log(0);
}
document.querySelector('button').onclick = function () {
    // setting 中：
    // bubbles(boolean): 是否冒泡
    // cancelable(boolean): 事件能否被取消
    // composed(boolean): 事件是否会在影子DOM根节点之外触发侦听器
    trigger ('#target', 'click', {"bubbles":true, "cancelable":true, "composed":false});
}
&lt;/script&gt;
&lt;/html&gt;
</code></pre>
            <p>我们也可以触发某个元素上已经监听的事件，测试代码如下所示。</p>
            <pre class="ml-2" v-highlight><code class="html">&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
    &lt;title&gt;测试&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="target"&gt;我是目标元素。&lt;/div&gt;
&lt;button&gt;测试&lt;/button&gt;
&lt;/body&gt;
&lt;script&gt;
function trigger (selector, eveType) {
    let ele = document.querySelector(selector);
    let eve = new Event(eveType);
    ele.dispatchEvent(eve);
}
document.querySelector('#target').onclick = function sayHello () {
    alert('Hello');
}
document.querySelector('button').onclick = function () {
    trigger ('#target', 'click');
}
&lt;/script&gt;
&lt;/html&gt;
</code></pre>
            <h3 id="trigger-event-cusEve"><Icon type="logo-buffer" /> CustomEvent</h3>
            <Divider />
            <P>要向事件对象添加更多数据，可以使用 <code>CustomEvent</code>，<code>detail</code> 属性可用于传递自定义数据 <code>CustomEvent</code> 接口可以为 <code>event</code> 对象添加更多的数据。</P>
            <pre class="ml-2" v-highlight><code class="js">function trigger (selector, eveType) {
    let ele = document.querySelector(selector);
    let eve = new CustomEvent('click', { 'sayHello': 'Hello' });
    ele.addEventListener(eveType, function(event) {
        alert(event.sayHello);
    });
    ele.dispatchEvent(eve);
}</code></pre>
            <p>测试代码如下所示。</p>
            <pre class="ml-2" v-highlight><code class="html">&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
    &lt;title&gt;测试&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="target"&gt;我是目标元素。&lt;/div&gt;
&lt;button&gt;测试&lt;/button&gt;
&lt;/body&gt;
&lt;script&gt;
function trigger (selector, eveType) {
    let ele = document.querySelector(selector);
    let eve = new CustomEvent('click', { detail: 'Hello' });
    ele.addEventListener(eveType, function(event) {
        alert(event.detail);
    });
    ele.dispatchEvent(eve);
}
document.querySelector('button').onclick = function () {
    trigger ('#target', 'click');
}
&lt;/script&gt;
&lt;/html&gt;</code></pre>
            <p>总结 CustomEvent 的用法：</p>
            <pre class="ml-2"><code>event = new CustomEvent(typeArg, customEventInit);</code></pre>
            <p><code>customEventInit</code> 是可选的，包括"detail"，可选的默认值是 <code>null</code> 的任意类型数据，是一个与 <code>event</code> 相关的值；<code>bubbles</code> 一个布尔值，表示该事件能否冒泡；<code>cancelable</code> 一个布尔值，表示该事件是否可以取消。</p>
            <p class="text-right">参考资料：<a href="https://developer.mozilla.org/zh-CN/">MDN</a></p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop,
            toPage: this.$util.toPage
        }
    }
}
</script>

