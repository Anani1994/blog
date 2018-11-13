<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="简介"
                    content="简单介绍该类伪元素"
                    status="wait"
                    @click.native="toTop('#pseudo-before-after-intro', 30)">
                </Step>
                <Step
                    title="content 属性"
                    content="分析两种伪元素独有的属性"
                    status="wait"
                    @click.native="toTop('#pseudo-before-after-pro', 30)">
                </Step>
                <Step
                    title="常见的使用方式"
                    content="列举两种伪类的常见使用方式"
                    status="wait"
                    @click.native="toTop('#pseudo-before-after-use', 30)">
                </Step>
                <Step
                    title="最后"
                    content="想到什么说什么"
                    status="wait"
                    @click.native="toTop('#pseudo-before-after-end', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 伪元素 ::before 和 ::after</h1>
                <p class="pt-1">CSS伪元素是用来添加一些选择器的特殊效果</p>
            </div>
            <h3 id="pseudo-before-after-intro" class="ml-1"><Icon type="logo-buffer" /> 简介</h3>
            <Divider />
            <p><code>CSS</code> 伪元素是添加到选择器的关键字，它允许您设置所选元素的特定部分的样式。</p>
            <p>而这两个伪元素还允许创作人员在元素内容的最前面插入生成内容。默认地，这个伪元素是行内元素，不过可以使用属性 <code>display</code> 改变这一点。</p>
            <p>现在所有主流浏览器都支持 <code>::before</code> 伪元素。</p>
            <p class="text-info">通常(css3)伪元素应当使用双冒号，伪类使用单冒号。由于 <code>W3C</code> 规范的旧版本中不存在这种区别(css2)，所以多数浏览器都支持这两写法。</p>
            <h3 id="pseudo-before-after-pro" class="ml-1"><Icon type="logo-buffer" /> content 属性</h3>
            <Divider />
            <p>content 属性设置文本或图像出现（浮动）在另一个元素中的什么地方。</p>
            <Table
                class="ml-2"
                :columns="columns"
                :data="data"
                border></Table>
            <h4 id="pseudo-before-after-str" class="my-1 ml-2"><Icon type="logo-buffer" /> <strong>[String]</strong> -向元素内容中添加字符串</h4>
            <p>代码：</p>
            <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class="content"&gt;文本内容&lt;/div&gt;</code></pre>
            <pre class="ml-2" v-highlight><code class="css">/* css */
.content {
    color: #fff;
}
.content::before {
    content: '添加在前面的文本';
    color: #19be6b;
}
.content::after {
    content: '添加在后面的文本';
    color: #ff9900 ;
}</code></pre>
            <p>渲染结果：</p>
            <div class="bg-hljs ml-2"><span class="text-success">添加在前面的文本</span>文本内容<span class="text-warn">添加在后面的文本</span></div>
            <h4 id="pseudo-before-after-url" class="my-1 ml-2"><Icon type="logo-buffer" /> <strong>url</strong> -引用媒体文件</h4>
            <p>代码：</p>
            <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;a href="anani1994.github.io"&gt;首页&lt;/a&gt;</code></pre>
            <pre class="ml-2" v-highlight><code class="css">/* css */
a::before {
    url("https://www.baidu.com/images/image-name.jpg");
}</code></pre>
            <p>渲染结果：会在首页的前面显示通过 url 指定的图片。</p>
            <h4 id="pseudo-before-after-counter" class="my-1 ml-2"><Icon type="logo-buffer" /> <strong>counter/counters</strong> -使用 css 中的计时器</h4>
            <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;ul&gt;
    &lt;li&gt;内容&lt;/li&gt;
    &lt;li&gt;内容&lt;/li&gt;
    &lt;ul&gt;
        &lt;li&gt;内容&lt;/li&gt;
        &lt;li&gt;内容&lt;/li&gt;
        &lt;ul&gt;
            &lt;li&gt;内容&lt;/li&gt;
            &lt;li&gt;内容&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/ul&gt;
&lt;/ul&gt;</code></pre>
            <pre class="ml-2" v-highlight><code class="css">/* css */
ul {
    margin-left: 2rem;
    counter-reset: order;
    list-style-type: none;
}
ul li::before {
    counter-increment: order 1;
    content: counters(order, '-') '. ';
}</code></pre>
            <p>渲染结果：</p>
            <ul>
                <li>内容</li>
                <li>内容</li>
                <ul>
                    <li>内容</li>
                    <li>内容</li>
                    <ul>
                        <li>内容</li>
                        <li>内容</li>
                    </ul>
                </ul>
            </ul>
            <h4 id="pseudo-before-after-attr" class="my-1 ml-2"><Icon type="logo-buffer" /> <strong>attr()</strong> -调用当前元素的属性</h4>
            <p>代码：</p>
            <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;a href="anani1994.github.io"&gt;首页&lt;/a&gt;</code></pre>
            <pre class="ml-2" v-highlight><code class="css">/* css */
a::after { content:"(" attr(href) ")"; }</code></pre>
            <p>渲染结果：</p>
            <div class="bg-hljs ml-2" style="color: blue">首页(anani1994.github.io)</div>
            <h3 id="pseudo-before-after-use" class="ml-1 mt-1"><Icon type="logo-buffer" /> 常见的使用方式</h3>
            <Divider />
            <h4 id="pseudo-before-after-use-1" class="ml-2 my-1"><Icon type="logo-buffer" /> 清除浮动</h4>
            <p>代码：</p>
            <pre class="ml-2" v-highlight><code class="css">/* css */
.clearfix {
    *overflow: hidden;
    *zoom: 1;
}
.clearfix::after {
    display: block;
    content: "";
    clear: both;
}</code></pre>
            <h4 id="pseudo-before-after-use-2" class="ml-2 my-1"><Icon type="logo-buffer" /> 超链接特效</h4>
            <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;a href="anani1994.github.io"&gt;鼠标移上去出现方括号&lt;/a&gt;</code></pre>
            <pre class="ml-2" v-highlight><code class="css">/* css */
a {
    display: inline-block;
    position: relative;
    text-decoration: none;
}

a:hover::before,
a:hover::after {
    position: absolute;
}

a:hover::before {
    content: "\5B";
    left: -10px;
}

a:hover::after {
    content: "\5D";
    right: -10px;
}</code></pre>
            <div class="bg-hljs ml-2">渲染结果：<a class="ml-1" href="anani1994.github.io">鼠标移上去出现方括号</a></div>
            <h4 id="pseudo-before-after-use-2" class="ml-2 my-1"><Icon type="logo-buffer" /> 分割线</h4>
            <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;p class="text-line"&gt;something&lt;/p&gt;</code></pre>
            <pre class="ml-2" v-highlight><code class="css">/* css */
.text-line {
    overflow: hidden;
    position: relative;
    margin: auto;
    width: 100%;
    line-height: 20px;
    text-align: center;
}
.text-line::before, .text-line::after {
    position: absolute;
    top: 10px;
    content: '';
    height: 1px;
    width: 50%;
    background: #000;
}
.text-line::before {
    right: calc(50% + 50px);
}
.text-line::after {
    left: calc(50% + 50px);
}</code></pre>
            <p>渲染结果：</p>
            <p class="text-line">something</p>
            <h3 id="pseudo-before-after-end" class="ml-1"><Icon type="logo-buffer" /> 最后</h3>
            <Divider />
            <p>伪元素，修饰不在文档树中的部分，并不是真实存在的，利用 js 无法获取其中的内容。</p>
            <p>以下内容仅作参考，且所提及伪元素仅指本文介绍的两个伪元素：</p>
            <p>伪元素初始表现为 <code>display: inline;</code> 其中的内容会呈现在元素(content-box)内的内容的前后，也就是在 <code>padding-box</code> 内。</p>
            <p>当设置伪元素为 <code>display: inline-block;</code> 比上一条多出一个行内块元素的表现，便具有了宽高等属性。</p>
            <p>当设置伪元素为 <code>display: block;</code> 会比上一条多出一个块元素的表现。</p>
            <p>当设置元素为相对定位，伪元素为绝对定位时，此时伪元素具有了宽高等属性，就像是更具破坏性的浮动。如果元素此时没有内容，两伪元素的初始位置皆位于元素上，并处于 <code>padding-box</code> 内。(就像是相对于 <code>content-box</code> 的绝对定位 <code>top: 0; left: 0;</code>)，此时 top 和 left 的表现与元素之间的设置一样。且无论元素有无内容 <code>::before</code> 设置的 left 或 right 总相对于元素内边界(padding-box)。而在元素含有内容时，<code>::after</code> 会跟在内容得后面，设置 left 或 right 又会跟 <code>::before</code> 一致。</p>
            <p>伪元素的百分比宽度是相对与元素的宽度。</p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop,
            columns: [
                {
                    title: '值',
                    key: 'value',
                    width: 300,
                    render: (h, params) => {
                        return h ('i-button', {
                            props: {
                                type: 'text'
                            },
                            style: {
                                color: '#fff',
                                background: 'rgb(109,109,109)'
                            },
                            nativeOn: {
                                click: () => {
                                    if (params.row.id) {
                                        this.$util.toTop(params.row.id, 30);
                                    } else {
                                        this.$Message.error('暂无相关信息。');
                                    }
                                }
                            }
                        },params.row.value)
                    }
                },
                {
                    title: '描述',
                    key: 'des'
                }
            ],
            data: [
                {
                    value: 'string',
                    des: '定义文本内容。',
                    id: '#pseudo-before-after-str'
                },
                {
                    value: 'url',
                    des: '定义 url。',
                    id: '#pseudo-before-after-url'
                },
                {
                    value: 'counter()/counters()',
                    des: '在 content 上应用 counter() 或 counters() 函数来显示在页面',
                    id: '#pseudo-before-after-counter'
                },
                {
                    value: 'attr(X)',
                    des: '定义显示在该选择器之前或之后的选择器的属性。',
                    id: '#pseudo-before-after-attr'
                },
                {
                    value: 'open-quote',
                    des: ''
                },
                {
                    value: 'close-quote',
                    des: ''
                },
                {
                    value: 'no-open-quote',
                    des: ''
                },
                {
                    value: 'no-close-quote',
                    des: ''
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
ul {
    margin-left: 2rem;
    list-style-type: none;
    counter-reset: order;
}
li::before {
    counter-increment: order 1;
    content: counters(order, '-') '. ';
}
a {
    display: inline-block;
    position: relative;
    text-decoration: none;
}
a:hover::before, a:hover::after {
    position: absolute;
}
a:hover::before {
    content: "\5B";
    left: -10px;
}
a:hover::after {
    content: "\5D";
    right: -10px;
}
.text-line {
    overflow: hidden;
    position: relative;
    margin: auto;
    width: 100%;
    line-height: 20px;
    text-align: center;
    text-indent: 0;
}
.text-line::before, .text-line::after {
    position: absolute;
    top: 10px;
    content: '';
    height: 1px;
    width: 50%;
    background: #000;
}
.text-line::before {
  right: calc(50% + 50px);
}
.text-line::after {
  left: calc(50% + 50px);
}
</style>

