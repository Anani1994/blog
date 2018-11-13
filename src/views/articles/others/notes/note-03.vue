<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="CSS 引用图片后找不到文件资源的问题"
                    content="在 Vue 项目中 CSS 引用图片后找不到文件资源的问题"
                    status="wait"
                    @click.native="toTop('#note-031', 30)">
                </Step>
                <Step
                    title="[vue/no-parsing-error] Parsing error: x-invalid-end-tag."
                    content="[vue/no-parsing-error] Parsing error: x-invalid-end-tag."
                    status="wait"
                    @click.native="toTop('#note-032', 30)">
                </Step>
                <Step
                    title="VS code 占用 cpu 过高"
                    content="如何处理 VS code 占用 cpu 过高"
                    status="wait"
                    @click.native="toTop('#note-033', 30)">
                </Step>
                <Step
                    title="球体链接"
                    content="JS 实现球体链接"
                    status="wait"
                    @click.native="toTop('#note-034', 30)">
                </Step>
                <Step
                    title="error: pathspec 'message' did not match any file(s) known to git."
                    content="error: pathspec 'message' did not match any file(s) known to git."
                    status="wait"
                    @click.native="toTop('#note-035', 30)">
                </Step>
            </Steps>
        </div>
        <div class="pt-3 text-center">
            <h1>
                <Icon type="ios-book-outline" /> 问题收录集（2）</h1>
            <p class="pt-1">收集整理开发路上遇到的各种问题。</p>
        </div>
        <div class="markdown-content">
            <h5 id="note-031">CSS 引用图片后找不到文件资源的问题</h5>
            <pre v-highlight><code class="js">// 显然在 webpack 4 下使用 mini-css-extract-plugin 插件分离 css 后，原先图片的相对引入路径在打包后的位置不再生效，
// 因为 mini-css-extract-plugin 默认的 publicPath 是在 webpackOptions.output 下设置的，因此我们有时候需要在 rules 中配置合适的。
// 配置后的 publicPath 会加载设置的图片处理后的输出路径的前面。

module.exports = {
    module: {
        rules: [
            {
                test: /\.less/,
                use: [
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                              // you can specify a publicPath here
                              // by default it use publicPath in webpackOptions.output
                              publicPath: &#39;../../&#39;
                        }
                      },
                  &#39;css-loader&#39;,
                ]
              },
              {
                test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
                use: [
                      {
                        loader: &#39;url-loader&#39;,
                        options: {
                              limit: 1024,
                              name:&#39;dist/images/[name].[hash].[ext]&#39;
                        }
                      }
                ]
            }
        ]
    }
}

// 在 .vue 中
.css {
    background: url(path/to/img);
}

// 在打包后的 .css 中
.css {
    background: url(publicPath/dist/images/img);
}

// 理解上面显示的打包后的路径参考插件配置时的路径
new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: &quot;dist/css/[name].[hash].css&quot;,
      chunkFilename: &quot;[id].[hash].css&quot;
}),
</code></pre>
            <h5 id="note-032">[vue/no-parsing-error] Parsing error:
                x-invalid-end-tag.</h5>
            <pre v-highlight><code class="js">// vetur 中 eslint 的问题，在 vscode 设置
&quot;vetur.validation.template&quot;: false,
</code></pre>
            <h5 id="note-033">VS code 占用 cpu 过高</h5>
            <pre v-highlight><code class="js">// 在 VS code 设置
// 控制是否在搜索中跟踪符号链接。
// 修复编辑器内存占用过大的问题
&quot;search.followSymlinks&quot;: false,
</code></pre>
            <h5 id="note-034">球体链接</h5>
            <pre v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div class=&quot;link-ball-container&quot;&gt;
    &lt;div class=&quot;link-ball&quot;&gt;
        &lt;a href=&quot;&quot;&gt;somthing&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            <pre v-highlight><code class="css">/* css */
.link-ball-container {
    padding: 100px;
}
.link-ball {
    position: relative;
    width: 450px;
    height: 360px;  
}
.link-ball a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px;
}</code></pre>
            <pre v-highlight><code class="js">//引入 以下JavaScript
export const linkBall = { };

linkBall.setLinkBall = (parmas ={}) =&gt; {
    let coordinateArr = [];
    // 焦距
    let radius = parmas.radius;
    // 储存各链接的空间位置
    let focalLength = parmas.focalLength;
    // 球
    let ball = document.querySelector(&#39;.link-ball&#39;);
    // 球心：(ball.width/2,ball.height/2)
    let ballCenterX = ball.offsetWidth/2;
    let ballCenterY = ball.offsetHeight/2;
    // getBoundingClientRect() 返回元素的大小及其相对于视口的位置
    let viewportX = ball.getBoundingClientRect().left + ballCenterX;
    let viewportY = ball.getBoundingClientRect().top + ballCenterY;
    // 所有链接元素
    let linkes = document.querySelectorAll(&#39;.link-ball a&#39;);
    // 创建一个文档片段保存排序后的结构
    let temp = linkBall.randomSort(linkes);
    // 将文档片段附加到DOM树
    // createDocumentFragment() 创建一个新的空白的文档片段
    // 文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流
    let docFrag = document.createDocumentFragment();
    for(let i = 0; i &lt; temp.length; i++) {
        docFrag.appendChild( temp[i] );
    };
    ball.appendChild(docFrag);
    // 设置平均坐标
    linkBall.randomCoordinate(ball,linkes,radius,focalLength,coordinateArr);
    // 根据鼠标位置动态设置各链接的最新空间位置
    linkBall.addMousemove(coordinateArr,linkes,radius,ballCenterX,ballCenterY,focalLength,viewportX,viewportY);
}

// 随机排序
linkBall.randomSort = (arr) =&gt; {
    let temp = [];
    for(let i = 0; i &lt; arr.length; i++) {
        temp.push( arr[i] );
    }
    temp.sort(function(){
        return Math.random() &lt; 0.5 ? 1 : -1;
    });
    return temp;
};

linkBall.randomCoordinate = (ball,linkes,radius,focalLength,coordinateArr) =&gt; {
    for(let i = 1; i &lt; linkes.length + 1; i++) {
        //生成随机 θ
        let theta = Math.acos((2*i-1)/linkes.length -1);
        // 生成对应的 Φ
        let phi = theta * Math.sqrt(linkes.length * Math.PI);
        // 坐标转换
        let x = radius * Math.sin(theta) * Math.cos(phi);
        let y = radius * Math.sin(theta) * Math.sin(phi);
        let z = radius * Math.cos(theta);
        let newObj = linkBall.creatObj(linkes[i-1],x,y,z);
        coordinateArr.push(newObj);
        // 生成随机颜色
        linkes[i-1].style.color = &#39;#&#39; + Math.floor(Math.random() * 0xffffff).toString(16);
        // 设置坐标
        linkes[i-1].style.left = x + ball.offsetWidth / 2 - linkes[i-1].offsetWidth/2 + &quot;px&quot;;
        linkes[i-1].style.top = y + ball.offsetHeight / 2 - linkes[i-1].offsetHeight/2 + &quot;px&quot;;
        // 根据 z 形成一递增函数来设置透明度
        let alpha = (z + radius) / (2 * radius);
        linkes[i-1].style.opacity = alpha + 0.5;
        // 根据 z 形成一递增函数来设置
        let scale = focalLength / (focalLength - z);
        linkes[i-1].style.fontSize = 14 * scale + &quot;px&quot;;
        linkes[i-1].style.zIndex = parseInt(scale * 100);
    }
};

linkBall.addMousemove = (coordinateArr,linkes,radius,ballCenterX,ballCenterY,focalLength,viewportX,viewportY) =&gt; {
    let ele = document.querySelector(&#39;.link-ball-container&#39;);
    ele.addEventListener(&#39;mousemove&#39;,function(event) {
        let eve = window.enent || event;
        // if (eve.target.nodeName !== &#39;SECTION&#39;) {
        //     return;
        // }
        if(event.target === this) {
            let x = eve.clientX - viewportX;
            let y = eve.clientY - viewportY;
            let angleX = 0.00005 * x;
            let angleY = 0.0001 * y;
            linkBall.rotateX(angleX,coordinateArr);
            linkBall.rotateY(angleY,coordinateArr);
            coordinateArr.forEach(function(currVal) {
                let scale = focalLength/(focalLength - currVal.z);
                let alpha = (currVal.z + radius)/(2 * radius);
                currVal.ele.style.fontSize = 15 * scale + &quot;px&quot;;
                currVal.ele.style.opacity = alpha + 0.5;
                currVal.ele.style.zIndex = parseInt(scale*100);
                currVal.ele.style.left = currVal.x + ballCenterX - currVal.ele.offsetWidth/2 +&quot;px&quot;;
                currVal.ele.style.top = currVal.y + ballCenterY - currVal.ele.offsetHeight/2 +&quot;px&quot;;
            });
        };
    });
};

// 创建一个对象用来保存各链接的空间坐标，用于后期实现滚动
linkBall.creatObj = (ele,x,y,z) =&gt; {
    return {
        ele : ele,
        x : x,
        y : y,
        z : z,
    }
};

// 绕x轴旋转
// y = ycosθ - zsinθ;
// z = ysinθ + zcosθ;
linkBall.rotateX = (angleX,arr) =&gt; {
    let newY;
    let newZ;
    // let  角度的正负值控制旋转方向，大小控制旋转速度
    let cos = Math.cos(angleX);
    let sin = Math.sin(angleX);
    arr.forEach(function(currVal) {
        newY = currVal.y * cos - currVal.z * sin;
        newZ = currVal.z * cos + currVal.y * sin;
        currVal.y = newY;
        currVal.z = newZ;
    });
};

// 绕y轴旋转
// x = xcosθ - zsinθ;
// z = xsinθ + zcosθ;
linkBall.rotateY = (angleY,arr) =&gt; {
    let newX;
    let newZ;
    // angleY 角度的正负值控制旋转方向，大小控制旋转速度
    let cos = Math.cos(angleY);
    let sin = Math.sin(angleY);
    arr.forEach(function(currVal) {
        newX = currVal.x * cos - currVal.z * sin;
        newZ = currVal.z * cos + currVal.x * sin;
        currVal.x = newX;
        currVal.z = newZ;
    });
};

// 然后再页面中通过以下启动，参数是一个包含半径和储存各链接的空间位置的对象
linkBall.setLinkBall(parmas);
</code></pre>
            <h5 id="note-035">error: pathspec &#39;message&#39; did not match
                any file(s) known to git.</h5>
            <p>在 windows 系统使用 控制台提交(git commit -m &#39;message&#39;)报以上错误</p>
            <pre v-highlight><code class="js">// 改用 git bash提交
Git Bash，是git for windows自带的一组程序，提供了Linux风格的shell，在该环境下，您可以直接用上面提到的命令。打开它的方法很简单，在任意位置单击右键，选择“Git Bash Here”即可。
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
