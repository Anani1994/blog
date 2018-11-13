<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="背景"
                    content="问题产生的背景"
                    status="wait"
                    @click.native="toTop('#trigger-event-cacus', 30)">
                </Step>
                <Step
                    title="解决思路"
                    content="解决问题的着重点"
                    status="wait"
                    @click.native="toTop('#trigger-event-think', 30)">
                </Step>
                <Step
                    title="解决方法"
                    content="解决问题的具体措施"
                    status="wait"
                    @click.native="toTop('#trigger-event-method', 30)">
                    <Steps direction="vertical">
                        <Step
                            title="jquery"
                            content="利用 jQuery 中的 trigger() 方法"
                            status="wait"
                            @click.native.stop="toTop('#trigger-event-method-jq', 30)">
                        </Step>
                        <Step
                            title="原生 JavaScript"
                            content="利用 JavaScript 中的原生方法"
                            status="wait"
                            @click.native.stop="toTop('#trigger-event-method-js', 30)">
                        </Step>
                    </Steps>
                </Step>
                <Step
                    title="提示"
                    content="简单注明注意事项"
                    status="wait"
                    @click.native="toTop('#trigger-event-tips', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 手动触发事件</h1>
                <p class="pt-1">简要介绍手动触发 JavaScript 事件的方法</p>
            </div>
            <h3 id="trigger-event-cacus"><Icon type="logo-buffer" /> 背景</h3>
            <Divider />
            <p>在使用一个 UI 组件库(iview) 中的走马灯时，由于项目的需要，必须重写指示器，或者说需要提供新的指示器来改变幻灯片当前显示的元素。其提供的 <code>API</code> 中包含有一个 <code>value</code> 属性，表示幻灯片展示元素的索引，可由 <code>v-model</code> 实现双向绑定，所以首先想到了通过函数改变这个值来达到想要的效果。</p>
            <p>在通过给新创建的指示器元素绑定 <code>click</code> 事件后，经测试可行，但是有一个很严重的 <code>bug</code> 就是不能像原始的指示器一样重置计时器，所以有时点击切换后会立马再次切换，给用户带来了极差的体验。</p>
            <h3 id="trigger-event-think"><Icon type="logo-buffer" /> 解决思路</h3>
            <Divider />
            <p>既然原始的指示器可以重置计时器，如果有一种方法可以通过函数去手动的触发对应指示器的事件，那么也就解决了上面出现的尴尬问题，这也就引出了本文的主题。</p>
            <P>我们通过创建对应个数的新指示器，然后对其绑定点击事件，事件执行的函数内容就是去触发对应原始指示器上绑定的事件，这样好像切换幻灯片的事件就在新创建的指示器元素上一样。</P>
            <h3 id="trigger-event-method"><Icon type="logo-buffer" /> 解决方法</h3>
            <Divider />
            <p>手动触发事件的实现主要有两种方式，其一是通过 jQuery 提供的 trigger() 方法，再者就是使用原生 JavaScript 实现。</p>
            <h4 id="trigger-event-method-jq" class="m-1"><Icon type="logo-buffer" /> jQuery</h4>
            <p><code>trigger()</code> 方法触发被选元素上指定的事件以及事件的默认行为（比如表单提交）。</p>
            <pre class="ml-2" v-highlight><code class="js">// 语法
$(selector).trigger(event,eventObj,param1,param2,...)
// 参数：event	必需。规定指定元素上要触发的事件。包括自定义事件和其它标准事件。
// 参数：param1,param2,...	可选。传递到事件处理程序的参数</code></pre>
            <h4 id="trigger-event-method-js" class="m-1"><Icon type="logo-buffer" /> 原生 JavaScript</h4>
            <p>使用原生 JavaScript 手动触发事件大概包括创建一个事件对象、初始化该事件对象、最后就是触发它。这其中涉及到的方法包括：<code>createEvent</code> <code>initEvent</code> <code>dispatchEvent</code>。其大致步骤如下所示。</p>
            <pre class="ml-2" v-highlight><code class="js">function trigger (selector, eveType) {
    // 获取 DOM 元素：用于绑定或触发事件的 DOM 节点
    let ele = document.querySelector(selector);
    // 创建一个新的事件（Event）
    let eve = document.createEvent('Event') 
    // 初始化事件对象
    // 参数：evetype 事件的类型（DOMString 类型的字段）
    // 参数：bubbles 事件是否应该向上冒泡（boolean值）
    // 参数：cancelable 事件的默认动作是否可以被取消（boolean值）
    eve.initEvent(eveType, true, true);
    // 触发事件监听
    // 参数：eve 派发的事件对象，即上面创建并被初始化的事件对象
    if (ele.fireEvent) {
        // IE浏览器特有，不会触发事件的默认行为
        ele.fireEvent(`on${eveType}`);
    } else {
        ele.dispatchEvent(eve);
    }
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
    let eve = document.createEvent('Event') 
    eve.initEvent(eveType, true, true);
    if (ele.fireEvent) {
        ele.fireEvent(`on${eveType}`);
    } else {
        ele.dispatchEvent(eve);
    }
}
document.querySelector('#target').onclick = function sayHello () {
    alert('Hello');
}
document.querySelector('button').onclick = function () {
    trigger ('#target', 'click');
}
&lt;/script&gt;
&lt;/html&gt;</code></pre>
            <p>到此对于手动触发函数的关键知识已经完结了，后面对 trigger() 函数进行了改进。</p>
            <pre class="ml-2" v-highlight><code>function trigger (selector, eveType, bubbles, cancelable, method) {
    // 获取 DOM 元素：用于绑定或触发事件的 DOM 节点
    let ele = document.querySelector(selector);
    // 创建一个新的事件（Event）
    let eve = document.createEvent('Event') 
    // 初始化事件对象
    // 参数：evetype 事件的类型（DOMString 类型的字段）
    // 参数：bubbles 事件是否应该向上冒泡（boolean值）
    // 参数：cancelable 事件的默认动作是否可以被取消（boolean值）
    eve.initEvent(eveType, bubbles = true, cancelable = true);
    // 绑定对该事件的监听
    if (method) {
        if (ele.addEventListener) {
            // method 中的第一个参数即为 event，也就是创建的事件对象，浏览器会将它变得更加丰富
            ele.addEventListener(eveType, method)
        } else {
            // IE8及早期版本特有的替代性标准
            ele.attachEvent(eveType, method)
        }
    }
    // 触发事件监听
    // 参数：eve 派发的事件对象，即上面创建并被初始化的事件对象
    if (ele.fireEvent) {
        // IE浏览器特有，不会触发事件的默认行为
        ele.fireEvent(`on${eveType}`);
    } else {
        ele.dispatchEvent(eve);
    }
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
function trigger (selector, eveType, bubbles, cancelable, method) {
    let ele = document.querySelector(selector);
    let eve = document.createEvent('Event') 
    eve.initEvent(eveType, bubbles = true, cancelable = true);
    if (method) {
        if (ele.addEventListener) {
            ele.addEventListener(eveType, method)
        } else {
            ele.attachEvent(eveType, method)
        }
    }
    if (ele.fireEvent) {
        ele.fireEvent(`on${eveType}`);
    } else {
        ele.dispatchEvent(eve);
    }
}
function sayHello () {
    alert('Hello');
}
document.querySelector('button').onclick = function () {
    trigger ('#target', 'click', true, true, sayHello);
}
&lt;/script&gt;
&lt;/html&gt;</code></pre>
            <h3 id="trigger-event-tips"><Icon type="logo-buffer" /> 提示</h3>
            <Divider />
            <p class="text-warn">文章中涉及到的方法包括：<code>createEvent</code> <code>initEvent</code> <code>dispatchEvent</code>，已知的其中前两者已经过时，但很多浏览器目前仍然支持它，但不建议使用，推荐使用 event 构造函数来替代。</p>
            <div class="ml-2">点击 <Tag color="success" @click.native="toPage('new-trigger-event')">查看新方法</Tag> 最新的实现方法。</div>
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

