<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="JavaScript  offset相关"
                    content="详细分析 offsetTop、offsetLeft、offsetWidth、offsetHeight 的取值。"
                    status="wait"
                    @click.native="toTop('#note-01-offset', 30)">
                </Step>
                <Step
                    title="JavaScript  scroll 相关"
                    content="详细分析 scrollTop、scrollLeft、scrollWidth、scrollHeight 的取值。"
                    @click.native="toTop('#note-01-scroll', 30)">
                </Step>
                <Step
                    title="JavaScript  client 相关"
                    content="详细分析 clientTop、clientLeft、clientWidth、clientHeight 的取值。"
                    @click.native="toTop('#note-01-client', 30)">
                </Step>
                <Step
                    title="常见的使用方式"
                    content="判断元素是否滚动到底。"
                    @click.native="toTop('#note-01-use', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 详解 offsetTop、scrollTop 等DOM属性</h1>
                <p class="pt-1">详细分析 offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop... 以及 clientTop...等 DOM 属性的值。</p>
            </div>
            <h3 id="note-01-offset"><Icon type="logo-buffer" /> JavaScript  offsetTop、offsetLeft、offsetWidth、offsetHeight</h3>
            <Divider />
            <p><code>HTMLElement.offsetTop</code> 返回当前元素相对于其 <code>offsetParent</code> 元素的顶部的距离(一个数值，单位为像素)。</p>
            <p>那么 <code>offsetParent</code> 又是什么呢？</p>
            <p><code>HTMLElement.offsetParent</code> 返回离当前元素最近的祖先级定位元素。如果没有定位的元素，则 <code>offsetParent</code> 为最近的 <code>table</code>, <code>table cell</code> 或根元素（标准模式下为 html；quirks 模式下为 body）。</p>
            <iframe height='265' scrolling='no' title='offsetTop' src='//codepen.io/Anani1994/embed/QBVWNo/?height=265&theme-id=light&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Anani1994/pen/QBVWNo/'>offsetTop</a> by Anani (<a href='https://codepen.io/Anani1994'>@Anani1994</a>) on <a href='https://codepen.io'>CodePen</a>
                <p>对不起，您的浏览器不支持 iframe 标签。</p>
            </iframe>
            <h4 class="pt-1">注意：</h4>
            <p class="text-warn">在IE7浏览器中，<code>offsetParent</code> 的返回值是距离它最近的父元素。</p>
            <p class="text-warn">如果定位的父级元素的 <code>display</code> 属性值为 <code>none</code>，则 <code>HTMLElement.offsetParent</code> 返回值为 <code>null</code>。</p>
            <p>同理 <code>HTMLElement.offsetLeft</code> 也是一个只读属性，返回元素左上角相对于 <code>HTMLElement.offsetParent</code> 节点的左边界偏移的像素值。</p>
            <p><code>HTMLElement.offsetWidth</code> 和 <code>HTMLElement.offsetHeight</code> 分别返回元素的宽度和高度，包括元素的边框、内边距和元素的滚动条（如果存在且渲染的话）。</p>
            <img class="d-block p-1 m-auto" src="../../../../assets/images/acticles/others/notes/note-01.dimensions-offset.png">
            <h4 class="pt-1">注意：</h4>
            <p class="text-warn"><code>offsetTop</code> 和 <code>offsetParent</code> <code>offsetLeft</code> <code>offsetWidth</code> <code>offsetHeight</code> 都是只读属性。</p>
            <h3 id="note-01-scroll"><Icon type="logo-buffer" /> JavaScript  scrollTop、scrollLeft、scrollWidth、scrollHeight</h3>
            <Divider />
            <p><code>Element.scrollTop</code> 属性可以用来获取或设置一个元素的内容垂直滚动的像素数（滚动条向下滚动的距离或者说是内容位于元素上边缘以外的尺寸）。</p>
            <h4 class="pt-1">注意：</h4>
            <p class="text-warn">滚动条下滑的距离与实际被遮挡内容的高度有差异。</p>
            <p class="text-warn">此属性只有内容超过元素的高度时才有效，产生滚动条的位置为 padding-box。</p>
            <p>同理 <code>Element.scrollLeft</code> 属性可以读取或设置元素滚动条到元素左边的距离。</p>
            <h4 class="pt-1">注意：</h4>
            <p class="text-warn">如果这个元素的内容排列方向（direction） 是 <code>rtl</code>，那么滚动条会位于最右侧（内容开始处），并且 <code>scrollLeft</code> 值为 0。此时，当你从右到左拖动滚动条时，<code>scrollLeft</code> 会从 0 变为负数（这个特性在 chrome 浏览器中不存在）。</p>
            <p><code>Element.scrollWidth</code> 返回元素的内容区域宽度和元素的本身的宽度中较大的值。</p>
            <p><code>Element.scrollHeight</code> 返回元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度（padding-box）。</p>
            <iframe height='265' scrolling='no' title='scrollTop' src='//codepen.io/Anani1994/embed/WKgwOd/?height=265&theme-id=light&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Anani1994/pen/WKgwOd/'>scrollTop</a> by Anani (<a href='https://codepen.io/Anani1994'>@Anani1994</a>) on <a href='https://codepen.io'>CodePen</a>
                <p>对不起，您的浏览器不支持 iframe 标签。</p>
            </iframe>
            <h4 class="pt-1">注意：</h4>
            <p class="text-warn"><code>Element.scrollWidth</code> 和 <code>Element.scrollHeight</code> 都是只读属性。</p>
            <h3 id="note-01-client"><Icon type="logo-buffer" /> JavaScript  clientTop、clientLeft、clientWidth、clientHeight</h3>
            <Divider />
            <p><code>clientTop</code> 表示元素顶部边框（border）的宽度，单位为像素。</p>
            <p><code>clientLeft</code> 表示一个元素的左边框的宽度，单位为像素。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。</p>
            <iframe height='265' scrolling='no' title='clientTop' src='//codepen.io/Anani1994/embed/PBdPXV/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Anani1994/pen/PBdPXV/'>clientTop</a> by Anani (<a href='https://codepen.io/Anani1994'>@Anani1994</a>) on <a href='https://codepen.io'>CodePen</a>
                <p>对不起，您的浏览器不支持 iframe 标签。</p>
            </iframe>
            <p><code>clientWidth</code> 表示元素的内部（padding-box）宽度。）</p>
            <p><code>clientHeight</code> 对于没有定义 <code>CSS</code> 或者内联布局盒子的元素为 0，否则为 <code>padding-box</code> 的高度减去水平滚动条高度。</p>
            <h4 class="pt-1">注意：</h4>
            <p class="text-warn"><code>clientTop</code> <code>clientLeft</code> <code>clientWidth</code> <code>clientHeight</code> 都是只读属性。</p>
            <p class="text-warn"><code>clientTop</code> <code>clientLeft</code> 不包括边距。</p>
            <h3 id="note-01-use"><Icon type="logo-buffer" /> 常见的使用方式</h3>
            <Divider />
            <pre v-highlight>
                <code class="js">// 如果元素滚动到底，下面等式返回 true，没有则返回 false.
// element.scrollHeight 整体内容的高度
// element.scrollTop 内容位于元素上边缘以外的高度
// element.clientHeight 元素可见区域高度
element.scrollHeight - element.scrollTop === element.clientHeight</code>
            </pre>
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

