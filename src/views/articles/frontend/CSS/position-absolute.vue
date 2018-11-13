<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="基本定义和用法"
                    content="简单介绍绝对定位的定义和基础用法"
                    status="wait"
                    @click.native="toTop('#position-absolute-basis', 30)">
                </Step>
                <Step
                    title="有无定位值的区别"
                    content="分析绝对定位元素有无定位值的区别"
                    status="wait"
                    @click.native="toTop('#position-absolute-0', 30)">
                </Step>
                <Step
                    title="绝对定位元素的百分比定位"
                    content="分析绝对定位元素设置的定位值为百分比时的计算"
                    status="wait"
                    @click.native="toTop('#position-absolute-1', 30)">
                    <Steps direction="vertical">
                        <Step
                            title="父元素有内边界"
                            content="父元素有内边界时百分比定位值的计算"
                            status="wait"
                            @click.native.stop="toTop('#position-absolute-1-0', 30)">
                        </Step>
                        <Step
                            title="父元素有边框"
                            content="父元素有边框时百分比定位值的计算"
                            status="wait"
                            @click.native.stop="toTop('#position-absolute-1-1', 30)">
                        </Step>
                    </Steps>
                </Step>
                <Step
                    title="绝对定位元素的百分比宽高"
                    content="分析绝对定位元素设置的宽高为百分比时的计算"
                    status="wait"
                    @click.native="toTop('#position-absolute-2', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 详解 CSS 绝对定位</h1>
                <p class="pt-1">进一步分析 CSS 绝对定位的相关问题</p>
            </div>
            <h3 id="position-absolute-basis" class="ml-1"><Icon type="logo-buffer" /> 基本定义和用法</h3>
            <Divider />
            <p>在 <code>CSS</code> 中，<code>position</code> 属性指定一个元素（静态的，相对的，绝对或固定，以及粘性定位）的定位方法的类型。</p>
            <p>当设置 <code>position</code> 属性的值为 <code>absolute</code> 时，生成绝对定位的元素，将该元素从文档流中删除，原来的占位不再存在，并相对于 <code>static</code> 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。</p>
            <ul class="ml-2 mb-1" style="list-style-position: inside;">
                <li>如果这个父元素是块级元素，包含块则设置为该元素的 <code>border-box</code>。</li>
                <li>如果这个父元素是行内元素，包含块则设置为该父元素元素的内容边界。</li>
                <li>如果元素没有已定位的父元素，那么它的位置相对于 <code>&lt;html&gt;</code>。</li>
            </ul>
            <pre class="ml-2" v-highlight><code class="css">.box {
    position: relative;
    margin: 0 auto;
    padding: 10px;
    width: 300px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.box-item {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="position: relative;margin: 0 auto;padding: 10px;width: 300px;height: 200px;background: rgb(66, 98, 104);border: 10px solid rgb(117, 141, 145);">
                我是块级元素。
                <div style="position: absolute;top: 50px;left: 50px;width: 100px;height: 100px;background: rgb(65, 116, 126);">您可以打开开发者工具对我进行调试。比如取消父元素内边界，查看绝对定位元素的位置变化。</div>
            </div>
            <h3 id="position-absolute-0" class="ml-1 mt-1"><Icon type="logo-buffer" /> 有无定位值的区别</h3>
            <Divider />
            <p><code>position</code> 为 <code>absolute</code> 的元素如果没有设置 <code>left</code>, <code>top</code> 等值与 <code>left:0; top:0;</code> 的的效果一样吗？</p>
            <p>答案是不一样的，一个没有设置 <code>left</code> 和 <code>right</code> 值的绝对定位的元素就像是一个行内块元素，其表现得依旧在 <code>DOM tree</code> 中，对 <code>margin</code> 等属性敏感，但是其实际宽高已经丢失，如果没有设置高度，则其高度由其中的内容决定。</p>
            <pre class="ml-2" v-highlight><code class="css">.box {
    position: relative;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.container {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background: rgb(68, 155, 172);
}
.box-item {
    position: absolute;
    width: 20%;
    height:20%;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="position: relative;margin: 0 auto;width: 200px;height: 200px;background: rgb(66, 98, 104);">
                <div style="margin: 0 auto;width: 100px;height: 100px;background: rgb(68, 155, 172);">
                    <div style="position: absolute;width: 20%;height: 20%;background: rgb(65, 116, 126);"></div>
                </div>
            </div>
            <p class="mt-1">对于设置了 <code>left:0; top:0;</code> 的绝对定位的元素，这个元素将会从 DOM 树中脱离，独立于文档流，然后会根据相对于 <code>static</code> 定位以外的第一个父元素进行定位。</p>
            <p>所以没有定位值的 <code>absolute</code> 元素可以说是个更加变态(没有实际宽度)的 <code>float</code> 元素(实际占据高度为 0)，所以浮动元素干的某些事情绝对定位元素也能做到。</p>
            <h3 id="position-absolute-1" class="ml-1"><Icon type="logo-buffer" /> 绝对定位元素的百分比定位</h3>
            <Divider />
            <p><code>CSS</code> 设置绝对定位后 <code>top,bottom</code> 设置百分比定位是按父元素的高度来计算的，同样 <code>left,right</code> 设置百分比定位是按父元素的宽度度来计算的。</p>
            <pre class="ml-2" v-highlight><code class="css">.box {
    position: relative;
    margin: 0 auto;
    width: 300px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.box-item {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="position: relative;margin: 0 auto;width: 300px;height: 200px;background: rgb(66, 98, 104);">
                <div style="position: absolute;top: 10%;left: 10%;width: 100px;height: 100px;background: rgb(65, 116, 126);">您可以打开开发者工具对我进行查看。</div>
            </div>
            <h3 id="position-absolute-1-0" class="ml-1 mt-1"><Icon type="logo-buffer" /> 父元素有内边界</h3>
            <Divider />
            <p>如果父元素设置有 padding 值，则子元素定位 <code>top,bottom</code> 设置百分比定位是按父元素的高度 + 垂直内边界来计算的，同样 <code>left,right</code> 设置百分比定位是按父元素的宽度 + 水平内边界来计算的。</p>
            <pre class="ml-2" v-highlight><code class="css">/* box-sizing: content-box; */
.box {
    position: relative;
    margin: 0 auto;
    padding: 10px 20px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
}
.box-item {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="position: relative;margin: 0 auto;padding: 10px 20px;width: 200px;height: 200px;background: rgb(66, 98, 104);">
                <div style="position: absolute;top: 10%;left: 10%;width: 100px;height: 100px;background: rgb(65, 116, 126);">您可以打开开发者工具对我进行查看。</div>
            </div>
            <p class="mt-1 text-warn">当 <code>box-sizing: border-box;</code> 时，其计算与内边界无关。</p>
            <h3 id="position-absolute-1-1" class="ml-1"><Icon type="logo-buffer" /> 父元素有边框</h3>
            <Divider />
            <p>如果父元素设置有 border 值，则子元素定位设置的百分比定位值的计算与边框无关。</p>
            <pre class="ml-2" v-highlight><code class="css">/* box-sizing: content-box; */
.box {
    position: relative;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
    border: 10px solid rgb(117, 141, 145);
}
.box-item {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 100px;
    height: 100px;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="position: relative;margin: 0 auto;width: 200px;height: 200px;background: rgb(66, 98, 104);border: 10px solid rgb(117, 141, 145);">
                <div style="position: absolute;top: 10%;left: 10%;width: 100px;height: 100px;background: rgb(65, 116, 126);">您可以打开开发者工具对我进行查看。</div>
            </div>
            <p class="mt-1 text-warn">当 <code>box-sizing: border-box;</code> 时，如果父元素设置有 border 值，则子元素定位 <code>top,bottom</code> 设置百分比定位是按父元素的高度 - 垂直边框来计算的，同样 <code>left,right</code> 设置百分比定位是按父元素的宽度 - 水平边框来计算的。</p>
            <h3 id="position-absolute-2"><Icon type="logo-buffer" /> 绝对定位元素的百分比宽高</h3>
            <Divider />
            <p>绝对定位元素的百分比宽高是相对于其最近的父级别定位元素的 <code>padding-box</code> 的大小来计算的。</p>
            <pre class="ml-2" v-highlight><code class="css">/* box-sizing: content-box; */
.box {
    position: relative;
    margin: 0 auto;
    padding: 20px;
    width: 200px;
    height: 200px;
    background: rgb(66, 98, 104);
    border: 10px solid rgb(117, 141, 145);
}
.container {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background: rgb(68, 155, 172);
}
.box-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height:20%;
    background: rgb(65, 116, 126);
}</code></pre>
            <div style="position: relative;margin: 0 auto;padding: 20px;width: 200px;height: 200px;background: rgb(66, 98, 104);border: 10px solid rgb(117, 141, 145);">
                <div style="margin: 0 auto;width: 100px;height: 100px;background: rgb(68, 155, 172);">
                    <div style="position: absolute;top: 0;left: 0;width: 20%;height: 20%;background: rgb(65, 116, 126);"></div>
                </div>
            </div>
            <p class="mt-1 text-warn">当 box-sizing: border-box; 时，依然遵循上面的原则，所以计算绝对定位元素的百分比宽高时，应由 <code>height - border</code> 作为基础。</p>
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
