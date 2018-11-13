<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="提示"
                    content="新发布文章的要点"
                    status="wait"
                    @click.native="toTop('#note-tips', 30)">
                </Step>
                <Step
                    title="尚存的 BUG"
                    content="现有的缺陷还未被解决"
                    @click.native="toTop('#note-buging', 30)">
                </Step>
                <Step
                    title="解决的 BUG"
                    content="已经解决的缺陷"
                    @click.native="toTop('#note-buged', 30)">
                </Step>
                <Step
                    title="操作日志"
                    content="记录一些重要的操作"
                    @click.native="toTop('#note-log', 30)">
                </Step>
                <Step
                    title="分支开发"
                    content="如何部署在 conding 和 GitHub"
                    @click.native="toTop('#note-branch', 30)">
                </Step>
            </Steps>
        </div>
        <div class="p-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 博客开发记录</h1>
                <p class="pt-1">记录博客开发中遇到的问题和解决方法等</p>
            </div>
            <!-- 第一部分 -->
            <h3 id="note-tips"><Icon type="logo-buffer" /> 提示</h3>
            <Divider />
            <p>发布文章时需要在 <code>articles.js</code> 文件下根据第一条内容写下新建文章的相关信息，并在对应路径下创建文章的组件。</p>
            <p>程序会根据所填信息自动创建路由，所以定要确保相关信息与第一条规范相匹配。</p>
            <!-- 第二部分 -->
            <h3 id="note-buging"><Icon type="logo-buffer" /> 尚存的 BUG</h3>
            <Divider />
            <ul>
                <li>刷新子组件（文章）后导航栏高亮的元素不正确，会直接高亮首页。</li>
            </ul>
            <!-- 第三部分 -->
            <h3 id="note-buged"><Icon type="logo-buffer" /> 解决的 BUG</h3>
            <Divider />
            <ul>
                <li>从父路由点进子组件(（frontend 及其同级）下的组件)正常渲染，刷新页面后子组件内的内容直接消失，页面地址没变。解决措施：修改子组件的路由中的 path 形如： <pre class="ml-1">articles/others/notes/note-00 => /articles/others/notes/note-00</pre>
                </li>
            </ul>
            <h3 id="note-log"><Icon type="logo-buffer" /> 操作日志</h3>
            <Divider />
            <ul>
                <li>
                    配置 jQuery
                    <pre v-highlight><code class="js">// 安装
yarn add jquery
// 配置 webpack.base.config.js
const webpack = require('webpack');
module.exports = {
    ...
    plugins: [
        ...
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
        ...
    ]
}</code></pre>
                </li>
            </ul>
            <h3 id="note-branch"><Icon type="logo-buffer" /> 分支开发</h3>
            <Divider />
            <p>由于在国内访问 <code>GitHub</code> 较慢，所以决定将博客同时部署在 <code>coding.net</code> 上，由此有了分支开发的工作。在发布到 <code>GitHub</code> 上的内容不包括已完成的一些项目，而部署在 <code>coding.net</code> 上的内容不包括旧的博客。也因在不同的网站上部署，所以在打包时需要有相应的改动，发布到 <code>GitHub</code> 只需要在原来的基础来检查 <code>.gitignore</code> 文件是否正确，发布到 <code>coding.net</code> 具体如下所示。</p>
            <p><code>coding</code> 分支为部署 <code>coding.net</code> 诞生，当需要部署到  <code>coding.net</code> 上时，首要需要在 master 分支 执行 <code>yarn run build</code> 命令后基于 master 创建并进入一个临时分支。</p>
            <p>其次切换分支后需要修改 .gitignore 文件中的忽略的目录（忽略 old-blog，移除对已完成项目的忽略）。</p>
            <p>切换到 coding 分支，合并临时分支后删除临时分支</p>
            <p><code>coding</code> 分支打包：<code>yarn run buildCoding</code></p>
            <p>推送 <code>coding</code> 分支：<code>git push coding coding:master</code></p>
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

<style lang="less" scoped>
ul {
    list-style-position: inside;
    li {
        margin-left: 2rem;
        margin-bottom: 1rem;
    }
}
</style>
