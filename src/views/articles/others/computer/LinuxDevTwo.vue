<template lang="pug">
    BoWen
        template(slot="catalog")
            Steps(direction="vertical")
                Step(title="设置淘宝镜像"
                    content="设置淘宝镜像"
                    status="wait"
                    @click.native="toTop('#LinuxDev-2-1', 30)")
                Step(title="安装 Google"
                    content="安装 Google"
                    status="wait"
                    @click.native="toTop('#LinuxDev-2-2', 30)")
                Step(title="安装中文输入法"
                    content="安装中文输入法"
                    status="wait"
                    @click.native="toTop('#LinuxDev-2-3', 30)")
                Step(title="安装 vim"
                    content="安装 vim"
                    status="wait"
                    @click.native="toTop('#LinuxDev-2-4', 30)")
                Step(title="安装 yarn"
                    content="安装 yarn"
                    status="wait"
                    @click.native="toTop('#LinuxDev-2-5', 30)")
                Step(title="其它"
                    content="其它"
                    status="wait"
                    @click.native="toTop('#LinuxDev-2-6', 30)")
        .py-3.text-center
            h1
                Icon(type="ios-book-outline")
                font  搭建 Linux(ubuntu) 系统开发环境（二）
            p.pt-1 记录如何在 Linux(ubuntu) 系统中搭建基本开发环境
        h3#LinuxDev-2-1.ml-1
            Icon(type="logo-buffer")
            font  设置淘宝镜像
        Divider
        p 在使用 nvm 安装时，我们可以通过淘宝镜像进行安装，只需要执行：
        pre.mt-1.ml-5(v-highlight)
            code.bash.
                $ NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install &lt;v4.5.0&gt;
        p 当然，这样每次安装都需要输入这么唱的命令比较麻烦，因此我们对此进行设置，因为系统每次启动系统的时候会去执行 nvm.sh 文件，所以我们在 ~/.bashrc 文件的最后加上上面语句中的内容并重启终端：
        pre.mt-1.ml-5(v-highlight)
            code.bash.
                export NVM_DIR="/root/.nvm"
                // 下面是新加的内容
                export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
        p 另外我们也可以通过安装 nrm 来对 npm 源进行有效的管理，这里我们可以 直接通过 npm 来进行安装：
        pre.mt-1.ml-5(v-highlight)
            code.bash.
                $ npm install nrm -g
        p 常用 nrm 命令如下所示：
        table.table.table-hover
            thead
                tr
                    th(scope="col") #
                    th(scope="col") 选项
                    th(scope="col") 描述
            tbody
                tr(v-for="(item, $index) in nrmInfo")
                    th(scope="row") {{ $index + 1}}
                    td {{ item.command }}
                    td {{ item.description }}
        p.text-info 也许我们在通过 npm 安装 nrm 时反应就比较慢，甚至无反应，此时我们可以直接通过以下命令来直接设置为淘宝源：
        pre.mt-1.ml-5(v-highlight)
            code.bash.
                $ npm config set registry https://registry.npm.taobao.org
        h3#LinuxDev-2-2.ml-1
            Icon(type="logo-buffer")
            font  安装 Google
        Divider
        ul
            li
                font 将下载源加入到系统的源列表：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ sudo wget http://www.linuxidc.com/files/repo/google-chrome.list -P /etc/apt/sources.list.d/
            li
                font 导入谷歌软件的公钥，用于下面步骤中对下载软件进行验证：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ wget -q -O - https://dl.google.com/linux/linux_signing_key.pub  | sudo apt-key add -
            li
                font 对当前系统的可用更新列表进行更新：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ sudo apt-get update
            li
                font 执行对谷歌 Chrome 浏览器（稳定版)的安装：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ sudo apt-get install google-chrome-stable
            li
                font 启动谷歌 Chrome 浏览器（固定：在 Launcher 上的图标上右键——“添加到收藏夹”）：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ /usr/bin/google-chrome-stable
        h3#LinuxDev-2-3.ml-1
            Icon(type="logo-buffer")
            font  安装中文输入法
        Divider
        p.text-muted 由于搜狗输入法依赖 fcitx，所以首先对其进行安装：
            kbd sudo apt install fcitx-bin
        p.text-muted 接下来直接安装输入法：
            kbd sudo apt install fcitx-table
        p 安装完成之后我们需要进行相应的设置，在设置之前先重启一下，然后在系统设置里将键盘输入法系统改为 fcitx，并在 fcitx 设置中选择需要的输入法。
        p 输入法的安装由于是第一次安装，所以相关的操作比较混乱，所以安装介绍比较模糊，具体的安装步骤可以参考 
            a(href="https://blog.csdn.net/rznice/article/details/79841790") Ubuntu 18.04添加中文输入法
            font  和 
            a(href="https://blog.csdn.net/fx_yzjy101/article/details/80243710") 解决Ubuntu 18.04中文输入法的问题，安装搜狗拼音
            | 。
        p 由于我在安装 Ubuntu 系统时选择的是中文，所以中文输入法的使用只需要通过右上角来切换并可以直接使用。
        h3#LinuxDev-2-4.ml-1
            Icon(type="logo-buffer")
            font  安装 Vim
        Divider
        ul
            li
                font 安装VIM：
                kbd sudo apt-get install vim
        h3#LinuxDev-2-5.ml-1
            Icon(type="logo-buffer")
            font  安装 yarn
        Divider
        p 前面我们已经安装过了 Npm，为什么这里还要安装 Yarn 呢？
        p 首先 Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
        p 其次在执行代码之前，Yarn 会通过算法校验每个安装包的完整性，所以更加安全。
        p 最后，使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作，所以更加可靠。
        p 参见官方介绍的安装方法我们需要依次执行以下几条步骤：
        ul
            li
                font 安装 cURL，一个利用 URL 语法在命令行下工作的文件传输工具：
                kbd kbd apt install curl
            li
                font 在 Debian 或 Ubuntu 上，需要用我们的 Debian 包仓库来安装 Yarn。 首先需要配置仓库：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
                span.px-1
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
            li
                font 最后，更新数据库列表并安装 yarn：
                kbd sudo apt update && sudo apt install yarn
        p 安装完成后我们可以通过运行命令来测试 Yarn 是否安装：
            kbd yarn --version
        p 之前我们在安装 npm 后为其安装了 nrm(一个 NPM 源管理器，允许你快速地在如下 NPM 源间切换)，对应的 yarn 也拥有与之对应的源管理工具 yrm。，，现在我们就来对它也进行安装。
        p 要安装 yrm 比较简单只需要通过 npm 执行该命令即可：
            kbd npm install -g yrm
        p 当然，两个分别拥有自己的源管理工具，大家可能会觉得麻烦，这里推荐另外一个双源管理工具 cgr，其安装命令也特别简单：
            kbd npm install -g cgr
            font 几个源管理工具的使用方法都很类似，使用起来非常方便。需要哪个，全凭个人啦。
        p.text-right 参考资料
            a(href="https://yarn.bootcss.com/") Yarn 中文文档
            span.px-1
            a(href="https://www.npmjs.com/package/cgr") CGR
        h3#LinuxDev-2-6.ml-1
            Icon(type="logo-buffer")
            font  其它
        Divider
        p 开启 Ubuntu Dock（位于屏幕左侧的任务栏）点击切换最大和最小化，在终端允许：
        pre.mt-1.ml-5(v-highlight)
            code.bash.
                $ gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'
        p
            font.text-info 安装 VSCode，
            font 首先需要去 
            a(href="https://code.visualstudio.com/") 官网
            font  下载对应的 .deb 文件。然后执行命令：
            kbd sudo apt install ./&lt;file&gt;.deb
            font.text-info  需要注意的是执行命令时，对刚刚下载好的文件的使用需要改为你当前位置的相对路径或它的绝对路径。
        p 等到 VSCode 安装完成后我们可以到应用程序中找到它来使用，或者直接使用命令 code 来执行。
        p 
            font.text-info 安装 sublime text 3
            font ，首先安装
        ul
            li
                font 安装 GPG 密钥，等待返回 ok：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
            li
                font 确保apt已设置为使用https源：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ sudo apt-get install apt-transport-https
            li
                font 选择安装稳定版：
                pre.mt-1.ml-5(v-highlight)
                    code.bash.
                        $ echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
            li
                font 更新仓库列表：
                kbd sudo apt-get update
            li.mt-1
                font 安装 Sublime Text：
                kbd sudo apt-get install sublime-text
        p 等到 sublime-text 安装完成后我们可以到应用程序中找到它来使用，或者直接使用命令 subl 来执行。
        p 配置 sublime text 3 配合 React 进行开发，首先安装 babel-sublime 译支持 ES6， React.js, jsx 代码高亮， 
            kbd ctrl+shift+p
            font  打开命令输入框，输入 install，选择 install package，输入 babel 进行安装，安装完成后打开 .js或.jsx 后缀的文件，然后打开菜单view， Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel)，选择 babel 为默认 javascript 打开 syntax，这样就实现了对 jsx 语法的支持。
        p 安装 sublimeLinter-jsxhint 实现 JSX 代码审查，实时提示语法错误，按照上面同样的步骤安装 sublimeLinter-jsx，然后我们还需要通过 npm 来全局安装 jsxhint 这个包。
        p 安装 JsFormat 格式化 js 代码，以同样的步骤安装 JsFormat，安装完成后对其进行简单的配置：打开 preferences -> Package Settings -> JsFormat -> Setting - Users，输入以下代码：
        pre.ml-2(v-highlight)
            code.js.
                {
                    "e4x": true, // 支持 jsx
                    // jsformat options
                    "format_on_save": true // 保存时自动格式化
                }
        p 解决 Ubuntu下Sublime Text 3 无法输入中文，点击 
            a(href="https://github.com/lyfeyaj/sublime-text-imfix") 查看
            font  根据提示进行安装即可。
        p 到这里开发环境的基本搭建就算结束了，如果有时间和新的发现，我会继续在这里更新，以记录和分享开发的点滴。
        FooterDivider
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop,
            nrmInfo: [
                {command: 'nrm add <regionName> <url>', description: '添加路径为 <url>，名为 <regionName> 的源。'},
                {command: 'nrm del <regionName>', description: '删除 <regionName> 源。'},
                {command: 'nrm use <regionName>', description: '将 npm 下载源切换成指定的源。'},
                {command: 'nrm ls', description: '查看所有的支持源（有*号的表示当前所使用的源,以下[name]表示源的名称）。'},
                {command: 'nrm help', description: '查看nrm帮助。'},
                {command: 'nrm test [regionName]', description: 'Show the response time for one or all region'},
                {command: 'nrm home <regionName>', description: '跳转到指定源的官网。'}
            ]
        }
    }
}
</script>
