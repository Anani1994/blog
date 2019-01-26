<template lang="pug">
    BoWen
        div(slot="catalog")
            Steps(direction="vertical")
                Step(title="命令格式"
                    content="命令格式"
                    status="wait"
                    @click.native="toTop('#dir-1', 30)")
            Steps(direction="vertical")
                Step(title="常用选项介绍"
                    content="常用选项介绍"
                    status="wait"
                    @click.native="toTop('#dir-2', 30)")
        .py-3.text-center
            h1
                Icon(type="ios-book-outline")
                font  目录处理命令
            p.pt-1 囊括目录的增删改查操作命令
        h3#dir-1.ml-1
            Icon(type="logo-buffer")
            font  命令格式
        Divider
        pre.mt-2(v-highlight)
            code.bash.
                $ &lt;命令&gt; [包名或路径] [选项]
        h3#dir-2.ml-1
            Icon(type="logo-buffer")
            font  常用选项介绍
        Divider
        p.text-info 创建目录
        p
            kbd mkdir
            font (单词原意：make directions)，该命令用于创建目录，后面直接跟目录的名称，当我们需要递归创建目录时必须加上 
            kbd -p
            font 参数，使用形式即：
        pre.mt-2(v-highlight)
            code.bash.
                $ mkdir [-p] &lt;目录&gt;。
        p.text-info 切换目录
        p cd(单词原意：change directory)，该命令用于切换目录，后面跟目录即可，这里需要介绍的是一些简化操作：
        ul
            li 进入当前用户的家目录：
                kbd cd ~
            li 进入上次目录：
                kbd cd -
            li 进入上一级目录：
                kbd cd ..
        p 
            font.text-info 输出当前目录：
        pre.mt-2(v-highlight)
            code.bash.
                $ pwd
        p.text-info 删除空目录
        p rmdir(单词原意：remove empty directory)，该命令用于删除空目录，用于删除非空目录时会报错，其使用方式为：
            kbd rmdir &lt;目录&gt;
        p.text-info 删除文件或目录
        p rm(单词原意：remove)，该命令用于删除文件或目录，当我们需要删除目录时需要加上 -r 参数，另外该命令每次执行时会提示是否确认删除，要取消该提示需要需要 -f 参数，所以我们在使用这条命令时，通常的使用形式为：
        pre.mt-2(v-highlight)
            code.bash.
                $ rm -rf &lt;目录&gt;
        p.text-info 复制目录
        p cp(单词原意：copy)，该命令用于复制文件或目录，它支持以下参数：
        ul
            li
                kbd -r
                font  复制目录。
            li
                kbd -p
                font  同时复制文件的属性。
            li
                kbd -d
                font  若文件是链接文件，则复制链接属性。
            li
                kbd -a
                font  其效果是以上参数的合集，相当于 
                kbd -pdr
                font 。
        p.text-info 移动/剪切/改名命令 mv，命令的原意为 move，其使用形式为
        pre.mt-2(v-highlight)
            code.bash.
                $ mv [源文件或源目录] [目标目录]
        FooterDivider
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
