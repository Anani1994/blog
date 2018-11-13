<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="隐藏滚动条且保持滚动"
                    content="简单实现隐藏滚动条且保持滚动"
                    status="wait"
                    @click.native="toTop('#note-021', 30)">
                </Step>
                <Step
                    title="error: pathspec 'field'' did not match any file(s) known to git."
                    content="error: pathspec 'field'' did not match any file(s) known to git."
                    @click.native="toTop('#note-022', 30)">
                </Step>
                <Step
                    title="检查是否登录后跳转，防止进入死循环"
                    content="Vue 项目中的路由问题"
                    status="wait"
                    @click.native="toTop('#note-023', 30)">
                </Step>
                <Step
                    title="BrowserslistError: Unknown browser major"
                    content="BrowserslistError: Unknown browser major"
                    status="wait"
                    @click.native="toTop('#note-024', 30)">
                </Step>
                <Step
                    title="webpack-vue 使用 font-awesome"
                    content="在 webpack-vue 如何使用 font-awesome"
                    status="wait"
                    @click.native="toTop('#note-025', 30)">
                </Step>
                <Step
                    title="刷新后导航高亮失效"
                    content="iview导航栏组件，选中当前页面之后，点刷新或点击浏览器后退按钮后，导航栏选中的就消失了"
                    status="wait"
                    @click.native="toTop('#note-026', 30)">
                </Step>
            </Steps>
        </div>
        <div class="pt-3 text-center">
            <h1>
                <Icon type="ios-book-outline" /> 问题收录集（1）</h1>
            <p class="pt-1">收集整理开发路上遇到的各种问题。</p>
        </div>
        <div class="markdown-content">
            <h5 id="note-021">隐藏滚动条且保持滚动效果</h5>
            <pre v-highlight><code class="CSS">.outer-container {
    overflow: hidden;        // 隐藏滚动条
    width: 240px;          // 内容宽度，同时配合子元素
    height: 100%;
}
.inner-container {
    overflow-x: hidden; // 隐藏水平滚动条
    overflow-y: scroll;    // 产生垂直滚动
    width: 257px;       // 比父元素宽出滚动条的宽度 17px
    height: 100%;          // 设置产生滚动条
}
.inner-container::-webkit-scrollbar {
    display: none;            //  webkit 内核的浏览器仅需设置此属性
}

// 另一种方法,在滚动的容器设置
.inner-container {
    margin-right: -17px;
}
</code></pre>
            <h5 id="note-022">error: pathspec &#39;field&#39;&#39; did not match any file(s) known to git.</h5>
            <pre v-highlight><code class="js">// 需要在提交时将描述信息放在两重引号中，原因疑是 git 无法识别 文件名或路径
git add .
git commit -m &quot;&#39;your message&#39;&quot;
git pull origin master
git push origin master
</code></pre>
            <h5 id="note-023">检查是否登录后跳转，防止进入死循环</h5>
            <pre v-highlight><code class="js">router.beforeEach((to, from, next) =&gt; {
    out //判断登录状态简单实例
    var userInfo = window.localStorage.getItem(&#39;token&#39;);
    if (userInfo) {
        next();
    } else {
        next(&#39;/login&#39;);
    }
})

// 以上会发现出现如下错误：出现 dead loop错误,解决方法如下所示
// 解决思路：排除此时地址 = 转向的地址 的情况，避免dead loop
router.beforeEach((to, from, next) =&gt; {
    var userInfo = window.localStorage.getItem(&#39;token&#39;);//获取浏览器缓存的用户信息
    if(userInfo){ //如果有就直接到首页咯
        next();
    } else {
        if(to.path==&#39;/login&#39;){ //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next(&#39;/login&#39;);
        }

    }
})
</code></pre>
            <h5 id="note-024">BrowserslistError: Unknown browser major</h5>
            <p>在 webpack 中引入使用 bootstrap
                引用 bootstrap.min.js 正常
                引用 bootstrap.min.css 报错</p>
            <pre v-highlight><code class="js">ERROR in ./node_modules/css-loader?minimize!./node_modules/autoprefixer-loader!./node_modules/bootstrap/dist/css/bootstrap.min.css
    Module build failed: BrowserslistError: Unknown browser major
        at error (E:\project\node_modules\browserslist\index.js:37:11)
        at Function.browserslist.checkName (E:\project\node_modules\browserslist\index.js:320:18)
        at Function.select (E:\project\node_modules\browserslist\index.js:438:37)
        at E:\project\node_modules\browserslist\index.js:207:41
        at Array.forEach (&lt;anonymous&gt;)
        at browserslist (E:\project\node_modules\browserslist\index.js:196:13)
        at Browsers.parse (E:\project\node_modules\autoprefixer\lib\browsers.js:44:14)
        at new Browsers (E:\project\node_modules\autoprefixer\lib\browsers.js:39:28)
        at loadPrefixes (E:\project\node_modules\autoprefixer\lib\autoprefixer.js:56:18)
        at plugin (E:\project\node_modules\autoprefixer\lib\autoprefixer.js:62:18)
        at LazyResult.run (E:\project\node_modules\postcss\lib\lazy-result.js:274:20)
        at LazyResult.sync (E:\project\node_modules\postcss\lib\lazy-result.js:261:32)
        at LazyResult.stringify (E:\project\node_modules\postcss\lib\lazy-result.js:285:14)
        at LazyResult.get (E:\project\node_modules\postcss\lib\lazy-result.js:334:25)
        at Object.module.exports (E:\project\node_modules\autoprefixer-loader\index.js:55:35)
</code></pre>
            <p>解决方法：</p>
            <pre v-highlight><code class="js">// Edit node_modules\bootstrap\package.json: Remove these lines:

&quot;last 1 major version&quot;,
&quot;&gt;= 1%&quot;,
</code></pre>
            <h5 id="note-025">webpack-vue 使用font-awesome</h5>
            <p>npm 安装font-awesome 以及需要的所有依赖 </p>
            <pre v-highlight><code class="js">npm install less less-loader css-loader style-loader file-loader font-awesome --save
</code></pre>
            <p>在入口文件中全局注册font-awesome</p>
            <pre v-highlight><code class="js">import &#39;font-awesome/css/font-awesome.min.css&#39;;
</code></pre>
            <p>配置解析</p>
            <pre v-highlight><code class="js">{
    test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
    loader: &#39;url-loader?limit=1024&#39;
},
</code></pre>
            <h5 id="note-026">iview导航栏组件，选中当前页面之后，点刷新或点击浏览器后退按钮后，导航栏选中的就消失了</h5>
            <pre v-highlight><code class="js">在vuex的 state 存储 active-name，根据路由用 computed 取出 active-name
</code></pre>
        </div>
        <FooterDivider></FooterDivider>
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
