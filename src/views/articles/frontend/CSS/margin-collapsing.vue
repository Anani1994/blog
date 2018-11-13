<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="基本概念"
                    content="简要说明外边距合并的概念"
                    status="wait"
                    @click.native="toTop('#margin-collapsing-basis', 30)">
                </Step>
                <Step
                    title="合并详情"
                    content="主要就外边距的正负值进行分析"
                    status="wait"
                    @click.native="toTop('#margin-collapsing-detail', 30)">
                    <Steps direction="vertical">
                        <Step
                            title="两两为正"
                            content="上边距和下边距的值皆为正值"
                            status="wait"
                            @click.native.stop="toTop('#margin-collapsing-pp', 30)">
                        </Step>
                        <Step
                            title="两两为负"
                            content="上边距和下边距的值皆为负值"
                            status="wait"
                            @click.native.stop="toTop('#margin-collapsing-nn', 30)">
                        </Step>
                        <Step
                            title="一正一负"
                            content="上边距和下边距的值为一正一负"
                            status="wait"
                            @click.native.stop="toTop('#margin-collapsing-pn', 30)">
                        </Step>
                    </Steps>
                </Step>
                <Step
                    title="解决方法"
                    content="分析几种解决外边距合并的方法"
                    status="wait"
                    @click.native="toTop('#margin-collapsing-solve', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 外边距合并</h1>
                <p class="pt-1">块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距</p>
            </div>
            <h3 id="margin-collapsing-basis" class="ml-1"><Icon type="logo-buffer" /> 基本概念</h3>
            <Divider />
            <p>块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距，其大小取其中的最大者，这种行为称为外边距折叠（margin collapsing），有时也翻译为外边距合并。</p>
            <p>发生外边距折叠的三种基本情况如下所示。</p>
            <ul class="ml-2 mb-1" style="list-style-position: inside">
                <li>相邻元素之间。
                    <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="up"&gt;&lt;/div&gt;
&lt;div class="down"&gt;&lt;/div&gt;</code></pre>
                    <pre class="ml-2" v-highlight><code class="css">/* css */
.outer {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.inner {
    margin: 0 auto;
    margin-top: 5px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
                    <div style="margin: 0 auto;margin-bottom: 10px;width: 200px;height: 200px;background: rgb(66, 98, 104);"></div>
                    <div style="margin: 0 auto;margin-top: 5px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
                </li>
                <li>父元素与其第一个或最后一个子元素之间。
                    <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="outer"&gt;
    &lt;div class="inner"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                    <pre class="ml-2" v-highlight><code class="css">/* css */
.up {
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.down {
    margin-top: 20px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
                    <div class="border-white m-auto" style="width: 300px;height: 300px;">
                        <div style="width: 200px;height: 200px;background: rgb(66, 98, 104);">
                            <div style="margin-top: 20px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
                        </div>
                    </div>
                </li>
                <li>空的块级元素。
                    <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="demo"&gt;&lt;/div&gt;</code></pre>
                    <pre class="ml-2" v-highlight><code class="css">/* css */
.demo {
    margin: 10px;
    background: rgb(66, 98, 104);
}</code></pre>
                    <div style="margin: 10px;background: rgb(66, 98, 104);"></div>
                    <p>该元素上下边距合并，在文档中占据的高度为 10 像素。</p>
                </li>
            </ul>
            <h3 id="margin-collapsing-detail" class="ml-1"><Icon type="logo-buffer" /> 合并详情</h3>
            <p class="mt-1">当上边距和下边距的值的正负号不同时，最终的处理方式大同小异，以下对其中几种情况作一个详细的分析。</p>
            <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="up"&gt;&lt;/div&gt;
&lt;div class="down"&gt;&lt;/div&gt;</code></pre>
            <h4 id="margin-collapsing-pp" class="ml-1"><Icon type="logo-buffer" /> 两两为正</h4>
            <p class="mt-1">如果所有参与折叠的外边距都为正，折叠后的外边距的值为两者中最大的值。</p>
            <pre class="ml-2" v-highlight><code class="css">.up {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.down {
    margin: 0 auto;
    margin-top: 5px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="margin: 0 auto;margin-bottom: 10px;width: 200px;height: 200px;background: rgb(66, 98, 104);"></div>
            <div style="margin: 0 auto;margin-top: 5px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
            <h4 id="margin-collapsing-nn" class="ml-1"><Icon type="logo-buffer" /> 两两为负</h4>
            <p class="mt-1">如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。</p>
            <pre class="ml-2" v-highlight><code class="css">.up {
    margin: 0 auto;
    margin-bottom: -10px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.down {
    margin: 0 auto;
    margin-top: -5px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="margin: 0 auto;margin-bottom: -10px;width: 200px;height: 200px;background: rgb(66, 98, 104);"></div>
            <div style="margin: 0 auto;margin-top: -5px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
            <h4 id="margin-collapsing-pn" class="ml-1"><Icon type="logo-buffer" /> 一正一负</h4>
            <p class="mt-1">如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和。</p>
            <pre class="ml-2" v-highlight><code class="css">.up {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.down {
    margin: 0 auto;
    margin-top: -5px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="margin: 0 auto;margin-bottom: 10px;width: 200px;height: 200px;background: rgb(66, 98, 104);"></div>
            <div style="margin: 0 auto;margin-top: -5px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
            <pre class="ml-2" v-highlight><code class="css">.up {
    margin: 0 auto;
    margin-bottom: -10px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.down {
    margin: 0 auto;
    margin-top: 5px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="margin: 0 auto;margin-bottom: -10px;width: 200px;height: 200px;background: rgb(66, 98, 104);"></div>
            <div style="margin: 0 auto;margin-top: 5px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
            <h3 id="margin-collapsing-solve" class="ml-1"><Icon type="logo-buffer" /> 解决方法</h3>
            <Divider />
            <p>由于外边距折叠（Margin collapsing）只会发生在属于同一 <code>BFC</code> 的块级元素之间，所以解决外边距折叠的方法就是设置边框或内边距、触发块格式化上下文。</p>
            <p>块格式化上下文（Block Formatting Context，BFC） 是 <code>Web</code> 页面的可视化 <code>CSS</code> 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。</p>
            <p>常见创建 <code>BFC</code> 的方式如下所示。</p>
            <ul class="ml-2" style="list-style-position: inside;">
                <li>浮动元素（元素的 <code>float</code> 不是 <code>none</code>）。</li>
                <li><code>overflow</code> 值不为 <code>visible</code> 的块元素。</li>
                <li>绝对定位元素（元素的 <code>position</code> 为 <code>absolute</code> 或 <code>fixed</code>）。</li>
                <li>元素的 <code>display</code> 为 <code>inline-block</code> <code>table-cell</code> <code>table-caption</code>。</li>
                <li><code>display</code> 为 <code>flex</code> 或 <code>inline-flex</code> 或 <code>grid</code> 或 <code>inline-grid</code> 元素的直接子元素。</li>
            </ul>
            <p class="mt-1">具体措施：</p>
            <ul class="ml-2" style="list-style-position: inside">
                <li>相邻元素之间。
                    <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="container"&gt;
    &lt;div class="up"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="down"&gt;&lt;/div&gt;</code></pre>
                    <pre class="ml-2" v-highlight><code class="css">/* css */
.container {
    overflow: hidden; /* 创建 BFC */
}
.up {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.down {
    margin: 0 auto;
    margin-top: 5px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
                    <div style="margin: 0 auto;margin-bottom: 10px;width: 200px;height: 200px;background: rgb(66, 98, 104);"></div>
                    <div style="overflow: hidden">
                        <div style="margin: 0 auto;margin-top: 5px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
                    </div>
                </li>
                <li>父元素与其第一个或最后一个子元素之间。
                    <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="outer"&gt;
    &lt;div class="inner"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                    <pre class="ml-2" v-highlight><code class="css">/* css */
.outer {
    overflow: hidden; /* 创建 BFC */
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.inner {
    margin-top: 20px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
                    <div class="border-white m-auto" style="width: 300px;height: 300px;">
                        <div style="overflow: hidden;width: 200px;height: 200px;background: rgb(66, 98, 104);">
                            <div style="margin-top: 20px;width: 100px;height: 100px;background: rgb(65, 116, 126);"></div>
                        </div>
                    </div>
                    <p>更多方案：</p>
                    <ul class="ml-2 mb-1" style="list-style-position: inside;">
                        <li>外层元素由 <code>padding</code> 代替。</li>
                        <li>外层元素设置 <code>overflow: hidden;</code></li>
                        <li>外层元素设置边框。</li>
                        <li>内存元素设置 <code>display: inline-block;</code></code></li>
                        <li>内层元素存在浮动。</li>
                        <li>内层元素设置绝对定位。</li>
                    </ul>
                </li>
                <li>空的块级元素。
                    <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="demo"&gt;&lt;/div&gt;</code></pre>
                    <pre class="ml-2" v-highlight><code class="css">/* css */
.demo {
    margin: 10px;
    background: rgb(66, 98, 104);
    border: 1px solid white;
}</code></pre>
                    <div style="margin: 10px;background: rgb(66, 98, 104);border: 1px solid white;"></div>
                    <p>该元素上下边距合并，在文档中占据的高度为 12 像素。</p>
                </li>
            </ul>
            <p class="text-right">参考资料：<a href="https://developer.mozilla.org/zh-CN/">MDN</a></p>
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
