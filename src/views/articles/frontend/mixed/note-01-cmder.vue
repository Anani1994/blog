<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="简介"
                    content="简略介绍 Cmder 的概念和安装内容"
                    status="wait"
                    @click.native="toTop('#note-01-cmder-des', 30)">
                </Step>
                <Step
                    title="安装"
                    content="简介安装的步骤"
                    status="wait"
                    @click.native="toTop('#note-01-cmder-set', 30)">
                </Step>
                <Step
                    title="设置快捷操作"
                    content="设置快捷操作，以便使用"
                    status="wait"
                    @click.native="toTop('#note-01-cmder-quick', 30)">
                </Step>
                <Step
                    title="解决中文乱码"
                    content="解决输出中文时会乱码"
                    status="wait"
                    @click.native="toTop('#note-01-cmder-lang', 30)">
                </Step>
                <Step
                    title="修改符号"
                    content="修改默认显示的符号为美元符号"
                    status="wait"
                    @click.native="toTop('#note-01-cmder-symbol', 30)">
                </Step>
                <Step
                    title="常用命令"
                    content="列举开发常用的 Linux 命令"
                    status="wait"
                    @click.native="toTop('#note-01-cmder-order', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> windows 搭建开发环境之安装使用 Cmder</h1>
                <p class="pt-1">简单介绍安装和使用 Cmder（cmd 替代者）</p>
            </div>
            <h3 id="note-01-cmder-des" class="ml-1"><Icon type="logo-buffer" /> 简介</h3>
            <Divider />
            <p>众所周知，Windows 的 cmd 非常的丑陋，使用起来极为不便，而且不支持 Linux 命令行的使用，这对于经常使用 Linux 命令行的朋友来说是一个极为糟糕的信息，好在在 Windows 有许多支持 Linux 命令行的工具，而 Cmder 就是其中之一，且极为优秀。</p>
            <p>Cmder 可以说是 Windows 下一款非常好用的 cmd 替代品，它不仅好用，而且功能强大，界面美观，非常适合在 Windows 下进行开发时使用。</p>
            <div class="pb-1">系统：<Tag color="default">windows 10</Tag> Cmder版本：<Tag color="default">v1.3.6</Tag></div>
            <h3 id="note-01-cmder-set" class="ml-1"><Icon type="logo-buffer" /> 安装</h3>
            <Divider />
            <p>Cmder 官网地址：<a href="http://cmder.net/">传送门</a></p>
            <p>进入官网之后，可见在官网有两个版本，分别是 mini 与 full 版；唯一的差别就在于有没有内建 msysgit 工具，这是 Git for Windows 的标准配备；这里我选择的时 full 版本。</p>
            <p>点击下载之后，将其解压到你需要放置的位置，由于它是即压即用的存在，所以点击 Cmder.exe 即可运行。</p>
            <h3 id="note-01-cmder-quick" class="ml-1"><Icon type="logo-buffer" /> 设置快捷操作</h3>
            <Divider />
            <ul class="ml-2">
                <li使 >Win + R 下输入 cmder 生效
                    <p>把 Cmder.exe 存放的目录添加到系统的环境变量中。</p>
                </li>
                <li>添加 Cmder 到右键菜单
                    <div class="ml-2 mb-1">以管理员身份运行系统的 cmd，输入 <Tag color="default">Cmder.exe /REGISTER ALL</Tag> 运行。</div>
                </li>
            </ul>
            <h3 id="note-01-cmder-lang" class="ml-1"><Icon type="logo-buffer" /> 解决中文乱码</h3>
            <Divider />
            <pre v-highlight><code class="js">// Settings->Startup->Environment 添加
set LANG=zh_CN.UTF-8
set LC_ALL=zh_CN.utf8</code></pre>
            <h3 id="note-01-cmder-symbol" class="ml-1"><Icon type="logo-buffer" /> 修改符号</h3>
            <Divider />
            <p>在 vendor/clink.lua 注释如下所示的第一行，并添加第二行，就可以将默认的符号改为美元符号。</p>
            <pre v-highlight><code class="lua">-- local cmder_prompt = "\x1b[1;32;40m{cwd} {git}{hg}{svn} \n\x1b[1;39;40m{lamb} \x1b[0m"
local cmder_prompt = "\x1b[1;32;40m{cwd} {git}{hg}{svn} \n\x1b[1;37;40m$ \x1b[0m"</code></pre>
            <h3 id="note-01-cmder-order" class="ml-1"><Icon type="logo-buffer" /> 常用命令</h3>
            <Divider />
            <h4 class="ml-2">系统信息</h4>
            <pre v-highlight><code class="md"><Tag color="default">arch</Tag> 显示机器的处理器架构(1) 
<Tag color="default">uname -r</Tag> 显示正在使用的内核版本 
<Tag color="default">uname -m</Tag> 显示机器的处理器架构(2) 
<Tag color="default">dmidecode -q</Tag> 显示硬件系统部件 - (SMBIOS / DMI) 
<Tag color="default">hdparm -i /dev/hda</Tag> 罗列一个磁盘的架构特性 
<Tag color="default">hdparm -tT /dev/sda</Tag> 在磁盘上执行测试性读取操作 
<Tag color="default">cat /proc/cpuinfo</Tag> 显示CPU info的信息 
<Tag color="default">cat /proc/interrupts</Tag> 显示中断 
<Tag color="default">cat /proc/meminfo</Tag> 校验内存使用 
<Tag color="default">cat /proc/swaps</Tag> 显示哪些swap被使用 
<Tag color="default">cat /proc/version</Tag> 显示内核的版本 
<Tag color="default">cat /proc/net/dev</Tag> 显示网络适配器及统计 
<Tag color="default">cat /proc/mounts</Tag> 显示已加载的文件系统 
<Tag color="default">lspci -tv</Tag> 罗列 PCI 设备 
<Tag color="default">lsusb -tv</Tag> 显示 USB 设备 
<Tag color="default">date</Tag> 显示系统日期 
<Tag color="default">cal 2007</Tag> 显示2007年的日历表 
<Tag color="default">date 041217002007.00</Tag> 设置日期和时间 - 月日时分年.秒 
<Tag color="default">clock -w</Tag> 将时间修改保存到 BIOS </code></pre>
            <h4 class="ml-2">文件和目录操作</h4>
            <pre v-highlight><code class="md"><Tag color="default">cd /home</Tag> 进入 '/ home' 目录' 
<Tag color="default">cd ..</Tag> 返回上一级目录 
<Tag color="default">cd ../..</Tag> 返回上两级目录 
<Tag color="default">cd</Tag> 进入个人的主目录 
<Tag color="default">cd ~user1</Tag> 进入个人的主目录 
<Tag color="default">cd -</Tag> 返回上次所在的目录 
<Tag color="default">pwd</Tag> 显示工作路径 
<Tag color="default">ls</Tag> 查看目录中的文件 
<Tag color="default">ls -F</Tag> 查看目录中的文件 
<Tag color="default">ls -l</Tag> 显示文件和目录的详细资料 
<Tag color="default">ls -a</Tag> 显示隐藏文件 
<Tag color="default">ls *[0-9]*</Tag> 显示包含数字的文件名和目录名 
<Tag color="default">tree</Tag> 显示文件和目录由根目录开始的树形结构(1) 
<Tag color="default">lstree</Tag> 显示文件和目录由根目录开始的树形结构(2) 
<Tag color="default">mkdir dir1</Tag> 创建一个叫做 'dir1' 的目录' 
<Tag color="default">mkdir dir1 dir2</Tag> 同时创建两个目录 
<Tag color="default">mkdir -p /tmp/dir1/dir2</Tag> 创建一个目录树 
<Tag color="default">rm -f file1</Tag> 删除一个叫做 'file1' 的文件' 
<Tag color="default">rmdir dir1</Tag> 删除一个叫做 'dir1' 的目录' 
<Tag color="default">rm -rf dir1</Tag> 删除一个叫做 'dir1' 的目录并同时删除其内容 
<Tag color="default">rm -rf dir1 dir2</Tag> 同时删除两个目录及它们的内容 
<Tag color="default">mv dir1 new_dir</Tag> 重命名/移动 一个目录 
<Tag color="default">cp file1 file2</Tag> 复制一个文件 
<Tag color="default">cp dir/* .</Tag> 复制一个目录下的所有文件到当前工作目录 
<Tag color="default">cp -a /tmp/dir1 .</Tag> 复制一个目录到当前工作目录 
<Tag color="default">cp -a dir1 dir2</Tag> 复制一个目录 
<Tag color="default">ln -s file1 lnk1</Tag> 创建一个指向文件或目录的软链接 
<Tag color="default">ln file1 lnk1</Tag> 创建一个指向文件或目录的物理链接 
<Tag color="default">touch -t 0712250000 file1</Tag> 修改一个文件或目录的时间戳 - (YYMMDDhhmm) 
<Tag color="default">iconv -l</Tag> 列出已知的编码</code></pre>
            <h4 class="ml-2">文件搜索</h4>
            <pre v-highlight><code class="md"><Tag color="default">find / -name file1</Tag> 从 '/' 开始进入根文件系统搜索文件和目录 
<Tag color="default">find / -user user1</Tag> 搜索属于用户 'user1' 的文件和目录 
<Tag color="default">find /home/user1 -name \*.bin</Tag> 在目录 '/ home/user1' 中搜索带有'.bin' 结尾的文件 
<Tag color="default">find /usr/bin -type f -atime +100</Tag> 搜索在过去100天内未被使用过的执行文件 
<Tag color="default">find /usr/bin -type f -mtime -10</Tag> 搜索在10天内被创建或者修改过的文件 
<Tag color="default">find / -xdev -name \*.rpm 搜索以 '.rpm'</Tag> 结尾的文件，忽略光驱、捷盘等可移动设备 
<Tag color="default">locate \*.ps 寻找以 '.ps'</Tag> 结尾的文件 - 先运行 'updatedb' 命令 
<Tag color="default">whereis halt</Tag> 显示一个二进制文件、源码或man的位置 
<Tag color="default">which halt</Tag> 显示一个二进制文件或可执行文件的完整路径 </code></pre>
            <h4 class="ml-2">系统关闭</h4>
            <pre v-highlight><code class="md"><Tag color="default">shutdown -h now</Tag> 关闭系统(1) 
<Tag color="default">init 0</Tag> 关闭系统(2) 
<Tag color="default">telinit 0</Tag> 关闭系统(3) 
<Tag color="default">shutdown -h hours:minutes &</Tag> 按预定时间关闭系统 
<Tag color="default">shutdown -c</Tag> 取消按预定时间关闭系统 
<Tag color="default">shutdown -r now</Tag> 重启(1) 
<Tag color="default">reboot</Tag> 重启(2) 
<Tag color="default">logout</Tag> 注销 </code></pre>
            <p class="text-warn">以上列举的常用命令并没有一一尝试，所以可能有的命令会无效，可作为日常使用过程中的参考模板。</p>
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
