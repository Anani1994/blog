(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{356:function(t,e,i){"use strict";i.r(e);var s=i(502),n=i(404);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var r=i(0),o=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);o.options.__file="src/views/articles/others/computer/LinuxDev.vue",e.default=o.exports},404:function(t,e,i){"use strict";i.r(e);var s=i(405),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e.default=n.a},405:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop,aptInfo:[{command:"sudo apt update/apt-get update",description:"更新包列表。"},{command:"sudo apt upgrade/apt-get upgrade",description:"更新已安装的包。"},{command:"sudo apt full-upgrade/apt-get dist-upgrade",description:"可能会增加或删除包以满足新的依赖项。"},{command:"sudo apt install <package_string>",description:"从存储库安装包。"},{command:"sudo apt remove <package_string>/sudo apt-get remove <package_string>",description:"移除指定的软件包。"},{command:"sudo apt-get autoremove",description:"删除不需要的包。"},{command:"sudo apt purge <package_string>",description:"彻底删除该 package（包含配置文件）。"},{command:"apt search <search_string>/apt-cache search <search_string>",description:"搜索某个包。"},{command:"dpkg -s <package_string>",description:"显示包的当前安装状态。"},{command:"apt show <package_string>/apt-cache show <package_string>",description:"查看某个软件包的信息。"}]}}}},502:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("BoWen",[i("template",{slot:"catalog"},[i("Steps",{attrs:{direction:"vertical"}},[i("Step",{attrs:{title:"包管理系统",content:"包管理系统",status:"wait"},nativeOn:{click:function(e){t.toTop("#LinuxDev-1-1",30)}}}),i("Step",{attrs:{title:"更换源",content:"更换源",status:"wait"},nativeOn:{click:function(e){t.toTop("#LinuxDev-1-2",30)}}}),i("Step",{attrs:{title:"安装 Git",content:"安装 Git",status:"wait"},nativeOn:{click:function(e){t.toTop("#LinuxDev-1-3",30)}}}),i("Step",{attrs:{title:"安装 nvm、node、npm",content:"安装 nvm、node、npm",status:"wait"},nativeOn:{click:function(e){t.toTop("#LinuxDev-1-4",30)}}})],1)],1),i("div",{staticClass:"py-3 text-center"},[i("h1",[i("Icon",{attrs:{type:"ios-book-outline"}}),i("font",[t._v(" 搭建 Linux(ubuntu) 系统开发环境（一）")])],1),i("p",{staticClass:"pt-1"},[t._v("记录如何在 Linux(ubuntu) 系统中搭建基本开发环境")])]),i("h3",{staticClass:"ml-1",attrs:{id:"LinuxDev-1-1"}},[i("Icon",{attrs:{type:"logo-buffer"}}),i("font",[t._v(" 包管理系统")])],1),i("Divider"),i("p",[t._v("现代类 Unix 操作系统大多都提供了一个集中的软件包管理机制，以帮助用户搜索、安装和管理软件。而软件通常以「包」的形式存储在仓库中，对软件包的使用和管理被称为包管理。而 Linux 包的基本组成部分通常有：共享库、应用程序、服务和文档。")]),i("p",[t._v("如今流行的 Linux 发行版在包管理工具、方式和形式都大同小异，这里主要就 Ubuntu 做一个说明。")]),i("p",[t._v("最近发布的 debian 衍生版(如Ubuntu、Raspbian等)大多数都包含了 apt 命令，它提供了一个简洁统一的接口，可用于通常由 apt-get 和 apt-cache 命令处理的常见操作。")]),i("p",[t._v("这里就 apt 相关常用命令做了一个简单的描述：")]),i("table",{staticClass:"table table-hover"},[i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("#")]),i("th",{attrs:{scope:"col"}},[t._v("选项")]),i("th",{attrs:{scope:"col"}},[t._v("描述")])])]),i("tbody",t._l(t.aptInfo,function(e,s){return i("tr",[i("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),i("td",[t._v(t._s(e.command))]),i("td",[t._v(t._s(e.description))])])}))]),i("h3",{staticClass:"ml-1",attrs:{id:"LinuxDev-1-2"}},[i("Icon",{attrs:{type:"logo-buffer"}}),i("font",[t._v(" 更换源")])],1),i("Divider"),i("p",[t._v("由于国外源太慢了，所以在我们安装完 Ubuntu 系统后先将 Ubuntu 18.04 修改默认源为国内源。")]),i("p",[t._v("首先我们对 /etc/apt 下的 sources.list 文件进行备份，以免误操作：")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1 ml-5"},[i("code",{staticClass:"bash"},[t._v("$ cp /etc/apt/sources.list /etc/apt/sources.list.bak")])]),i("p",[t._v("然后 在 /etc/apt/sources.list 文件前面添加如下内容：")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-5"},[i("code",{staticClass:"markdown"},[t._v("deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse")])]),i("p",{staticClass:"text-warning"},[t._v("在使用 vi/vim 编辑 sources.list 文件时需要 root 权限，通过切换到 root 用户或在命令前面加上 sudo 进行编辑。")]),i("p",[t._v("最后使用 "),i("kbd",[t._v("sudo apt update")]),i("font",[t._v(" 和 ")]),i("kbd",[t._v("sudo apt upgrade")]),i("font",[t._v(" 进行更新。 ")])],1),i("h3",{staticClass:"ml-1",attrs:{id:"LinuxDev-1-3"}},[i("Icon",{attrs:{type:"logo-buffer"}}),i("font",[t._v(" 安装 Git")])],1),i("Divider"),i("p",[t._v("Git 是一个免费的开源分布式版本控制系统，旨在快速，高效地处理从小型到大型项目的所有事务，具有廉价本地分支，便捷的临时区域和多个工作流程等功能。")]),i("p",[t._v("由于它可以有效、高速地处理从很小到非常大的项目版本管理，这对我们开发工作的进行异常有利，所以这里我们先对它进行安装。")]),i("p",[t._v("首先安装 Git："),i("kbd",[t._v("sudo apt-get install git")])]),i("p",[t._v("然后配置用户信息：")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1 ml-5"},[i("code",{staticClass:"bash"},[t._v('$ git config --global user.name "Your Name"\n$ git config --global user.email "email@example.com"')])]),i("p",[t._v("最后我们来生成和配置Git SSH密钥，在生成密钥之前我们先检测之前是否生成过 SSh 密钥，其原理就是检测家目录下 .ssh 文件是否存在，所以我们可以通过直接切换"),i("kbd",[t._v("cd ~/.ssh")]),i("font",[t._v(" 或者查看家目录 ")]),i("kbd",[t._v("ls -a ~/")]),t._v("。")],1),i("p",[t._v("如果不存在则通过该命令生成："),i("kbd",[t._v('ssh-keygen -t rsa -C "youremail@example.com"')]),t._v("。")]),i("p",[t._v("然后你就会看到家目录下多了.ssh目录，其中包含 id_rsa(私钥)和 id_rsa.pub(公钥)两个文件，我们要做的就是对 id_rsa.pub 文件中的内容进行拷贝。")]),i("p",[t._v("最后，进入自己的 Github，依次点击 Settings->SSH and GPG keys->New SSH key，把刚才复制的内容粘贴在 key 中，点击 Add SSH key 按钮添加，完成。之后，我们 push 就不用再输入用户和密码。 ")]),i("h3",{staticClass:"ml-1",attrs:{id:"LinuxDev-1-4"}},[i("Icon",{attrs:{type:"logo-buffer"}}),i("font",[t._v(" 安装 nvm、node、npm")])],1),i("Divider"),i("p",[t._v("接下来我们需要安装 Node 和 Npm，在这里我们需要了解一下 Nvm，Nvm 是一个可以让你在同一台机器上安装和切换不同版本 Node 的工具，为了便于对不对版本 Node 的管理，所以这里我们直接安装 Nvm。")]),i("p",[t._v("Ubuntu 下安装：")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1 ml-5"},[i("code",{staticClass:"bash"},[t._v("$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash")])]),i("p",{staticClass:"text-warning"},[t._v("安装成功后，需要关闭终端，重新启动。Nvm 才会生效。")]),i("p",[t._v("Nvm 操作 Node 的常用命令：")]),i("ul",[i("li",[i("kbd",[t._v("nvm current")]),i("font",[t._v(" 查看当前使用的版本。")])],1),i("li",[i("kbd",[t._v("nvm ls-remote")]),i("font",[t._v(" 查看可安装的版本。")])],1),i("li",[i("kbd",[t._v("nvm ls")]),i("font",[t._v(" 已安装的版本。")])],1),i("li",[i("kbd",[t._v("nvm install <v4.5.0>")]),i("font",[t._v(" 安装指定版本。")])],1),i("li",[i("kbd",[t._v("nvm use <v4.5.0>")]),i("font",[t._v(" 切换版本。")])],1),i("li",[i("kbd",[t._v("nvm uninstall <v4.5.0>")]),i("font",[t._v(" 卸载版本。")])],1)]),i("p",[t._v("Node.js 是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。")]),i("p",[t._v("我们这里安装现在最新稳定版 v10.14.2，使用命令 "),i("kbd",[t._v("nvm install v10.14.2")])]),i("p",[t._v("由于 npm 会跟随 node 一起被安装，所以我们无需单独对它进行安装。")]),i("FooterDivider")],2)},n=[];s._withStripped=!0,i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n})}}]);