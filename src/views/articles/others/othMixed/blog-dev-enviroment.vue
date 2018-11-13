<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="安装步骤"
                    content="安装步骤"
                    status="wait"
                    @click.native="toTop('#blog-dev-01', 30)">
                </Step>
                <Step
                    title="特别说明"
                    content="更多参考说明"
                    @click.native="toTop('#blog-dev-02', 30)">
                </Step>
                <Step
                    title="详细步骤"
                    content="搭建博客开发的基础环境"
                    @click.native="toTop('#blog-dev-03', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 博客开发环境搭建</h1>
                <p class="pt-1">记录博客开发的基础环境的搭建</p>
            </div>
            <h3 id="blog-dev-01" class="ml-1"><Icon type="logo-buffer" /> 安装步骤</h3>
            <Divider />
            <pre v-highlight><code class="js"># 安装依赖
$ yarn install

# 服务器默认运行在 http://localhost:8080
$ yarn run dev

# 创建项目
$ yarn run build</code></pre>
            <h3 id="blog-dev-02" class="ml-1"><Icon type="logo-buffer" /> 特别说明</h3>
            <Divider />
            <p>博客项目的创建是在项目 webpack-iview-vue 上的改进，从而产生需要的博客开发环境，如要查看最初的环境配置，请点击按钮 <a href="https://github.com/Anani1994/hello-world/tree/master/webpack-iview-vue">webpack-iview-vue</a> 进行查看。</p>
            <h3 id="blog-dev-03" class="ml-1"><Icon type="logo-buffer" /> 详细步骤</h3>
            <Divider />
            <h4 id="blog-dev-031" class="m-1"><Icon type="logo-buffer" /> 更新 .gitignore</h4>
            <pre v-highlight><code class="js">.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln</code></pre>
            <h4 id="blog-dev-032" class="m-1"><Icon type="logo-buffer" /> 配置 clean-webpack-plugin</h4>
            <pre v-highlight><code class="js">// 将 webpack.prod.config.js 中对应部分更新到 webpack.base.config.js 并删除源
const cleanWebpackPlugin = require('clean-webpack-plugin');
plugins: [
  ...
  new cleanWebpackPlugin(['blog/*','index.html'], {
    root: path.resolve(__dirname, '../')
  })
  ...
]</code></pre>
            <h4 id="blog-dev-033" class="m-1"><Icon type="logo-buffer" /> 修改 build 文件名为 config</h4>
            <pre v-highlight><code class="js">// 同时修改 package.json 下的配置
"dev": "webpack-dev-server --base ./dist --open --inline --hot --compress --config config/webpack.dev.config.js",
"build": "webpack --config config/webpack.prod.config.js"</code></pre>
            <h4 id="blog-dev-034" class="m-1"><Icon type="logo-buffer" /> 修改 webpack.base.config.js 文件</h4>
            <pre v-highlight><code class="js">// 将输出路径放到根目录
path: path.join(__dirname,'../'), // 输出文件所在目录

```

```bash

// 修改 url-loader 配置
{
  test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: 'url-loader',
      options: { // 配置参数
        limit: 1024 // 比较标准，小于标准的图片转换为 base64 代码
      }
    }
  ]
},
// 删除 file-loader 配置</code></pre>
            <h4 id="blog-dev-035" class="m-1"><Icon type="logo-buffer" /> 修改 webpack.dev.config.js 配置</h4>
            <pre v-highlight><code class="js">// 将出口文件置于 blog 文件夹
output: {
  publicPath: 'https://anani1994.github.io',
  filename: 'blog/js/[hash].js',
  chunkFilename: 'blog/js/[hash]-chunk.js'
}

```

```bash

// 由于两个 .html 文件在一个路径下，改名以免覆盖
plugins: [
  ...
  new HTMLWebpackPlugin({
    filename: 'index.html',
    template: 'index-ori.html',
    inject: true, //
    favicon: path.resolve('favicon.ico')
  })
  ...
],</code></pre>
            <h4 id="blog-dev-036" class="m-1"><Icon type="logo-buffer" /> 配置 webpack.prod.config.js 参照 webpack.dev.config.js 配置</h4>
            <pre v-highlight><code class="js">output: {
  ...
  // https://...这部分为你的服务器域名
  publicPath: 'https://anani1994.github.io',
  // 取消 devserve 的配置
  ...
}</code></pre>
            <h4 id="blog-dev-037" class="m-1"><Icon type="logo-buffer" /> 配置 mini-css-extract-plugin</h4>
            <pre v-highlight><code class="js">// 安装
$ yarn add -D mini-css-extract-plugin

//引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

// 在 webpack.base.config.js 下配置
plugins: [
  ...
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "blog/css/[name].[hash].css",
    chunkFilename: "[id].[hash].css"
  }),
  ...
]
//
{
  test: /\.less/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // you can specify a publicPath here
        // by default it use publicPath in webpackOptions.output
        // publicPath: '../'
      }
    },
    // 'style-loader',
    'css-loader',
    'postcss-loader',
    'less-loader' // loader 由下往上依次开始处理
  ]
},</code></pre>
            <h4 id="blog-dev-038" class="m-1"><Icon type="logo-buffer" /> 配置 highlight.js</h4>
            <pre v-highlight><code class="js">// 安装
$ yarn add highlight.js

// 封装成插件-0:创建 scr/highlight/highlight.js
import Vue from 'vue';
import Hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
let Highlight = {};
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    });
  });
};
export default Highlight;

// 在入口文件使用插件
import Highlight from 'path/to/Highlight.js'
Vue.use(Highlight)</code></pre>
            <pre v-highlight><code class="html">// 在组件中使用
&lt;pre v-highlight&lg;
  &lt;code &lg;
    /* code */
  &lt;/code&lg;
&lt;/pre&lg;</code></pre>
            <h4 id="blog-dev-039" class="m-1"><Icon type="logo-buffer" /> 配置 mini-css-extract-plugin 会导致 webpack-dev-serve 无法监听 css 的更新</h4>
            <pre v-highlight><code class="js">// 在 webpack.config.js 配置
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
 
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  }
}</code></pre>
            
            <h4 id="blog-dev-03a" class="m-1"><Icon type="logo-buffer" /> 配置 babel-plugin-syntax-dynamic-import 支持路由懒加载中的写法</h4>
            <pre v-highlight><code class="js">// 在写路由时，我们可以先引入在书写，但为了方便我们常常会这样写
component: import('@/views/index.vue')

//但如果使用 babel 就需要安装此插件才能使 Babel 可以正确地解析语法
$ yarn add -D babel-plugin-syntax-dynamic-import

// 配置
{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: [
  {
    loader: 'babel-loader',
    options: {
    presets: ['env'],
    // 支持路由懒加载
    plugins: ['syntax-dynamic-import']
    }
  }
  ]
},</code></pre>
            <h4 id="blog-dev-03a" class="m-1"><Icon type="logo-buffer" /> 使用 pug 高效开发</h4>
            <pre v-highlight><code class="js">// 安装依赖
yarn add -D pug pug-plain-loader

// webpack.base.config.js -> module.rules
{
  test: /\.pug$/,
  loader: 'pug-plain-loader'
}</code></pre>
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
