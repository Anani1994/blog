<template lang="pug">
    BoWen
        div(slot="catalog")
            Steps(direction="vertical")
                Step(title="压缩文件、目录"
                    content="压缩文件、目录"
                    status="wait"
                    @click.native="toTop('#zip-1', 30)")
            Steps(direction="vertical")
                Step(title="打包和解包"
                    content="打包和解包"
                    status="wait"
                    @click.native="toTop('#zip-2', 30)")
            Steps(direction="vertical")
                Step(title="包结合压缩"
                    content="包结合压缩"
                    status="wait"
                    @click.native="toTop('#zip-3', 30)")
        .py-3.text-center
            h1
                Icon(type="ios-book-outline")
                font  压缩命令
            p.pt-1 对文件或目录进行解压缩
        h3#zip-1.ml-1
            Icon(type="logo-buffer")
            font  压缩文件、目录
        Divider
        ul
            li 
                font.text-info .zip 格式压缩，包括对对文件的压缩和对目录的压缩
                pre.mt-1(v-highlight)
                    code.bash.
                        # 压缩文件
                        $ zip 压缩文件名 源文件
                        # 压缩目录
                        $ zip -r 压缩文件名 源目录
                font.text-onfo .zip 格式解压缩
                pre.mt-1(v-highlight)
                    code.bash.
                        $ unzip 压缩文件
            li
                font.text-info .gz 格式压缩，它可以压缩文件，压缩目录时，不会压缩目录，指挥压缩目录下的所有子文件
                pre.mt-1(v-highlight)
                    code.bash.
                        # 压缩文件：源文件会消失
                        $ gzip 源文件
                        # 压缩文件：保留源文件
                        $ gzip -c 源文件 &gt; 压缩文件
                        # 压缩目录下的所有文件，但不能压缩目录
                        $ gzip -r 目录
                font.text-onfo .gz 格式解压缩
                pre.mt-1(v-highlight)
                    code.bash.
                        # 解压缩文件
                        $ gzip -d 压缩文件
                        # 解压缩文件
                        $ gunzip 压缩文件
            li
                font.text-info .bz2 格式压缩，不能压缩目录
                pre.mt-1(v-highlight)
                    code.bash.
                        # 不保留源文件
                        $ bzip2 源文件
                        # 保留源文件
                        $ bzip2 -k 源文件
                font.text-onfo .bz2 格式解压缩
                pre.mt-1(v-highlight)
                    code.bash.
                        # 解压缩文件，保留压缩文件
                        $ bzip2 -d 压缩文件
                        # 解压缩文件，保留压缩文件
                        $ bunzip2 压缩文件
        h3#zip-2.ml-1
            Icon(type="logo-buffer")
            font  打包和解包
        Divider
        ul
            li
                font.text-info tar 打包
                pre.mt-1(v-highlight)
                    code.bash.
                        # 格式：-c=&gt;打包,-v=&gt;显示过程,-f=&ft;指定打包后的文件名
                        $ tar -cvf 打包文件名 源文件
                font.text-info tar 解包
                pre.mt-1(v-highlight)
                    code.bash.
                        # 格式：-x=&gt;解包,-v=&gt;显示过程,-f=&ft;指定打包后的文件名
                        $ tar -xvf 包文件
        h3#zip-2.ml-1
            Icon(type="logo-buffer")
            font  包结合压缩
        Divider
        p 实质就是先打包再压缩和先解压后解包。
        ul
            li
                font.text-info .tar.gz 压缩
                pre.mt-1(v-highlight)
                    code.bash.
                        # 格式：-c=&gt;打包,-v=&gt;显示过程,-f=&ft;指定打包后的文件名
                        $ tar -zcvf 压缩包名 源文件
                font.text-info .tar.gz 解压
                pre.mt-1(v-highlight)
                    code.bash.
                        # 格式：-x=&gt;解包,-v=&gt;显示过程,-f=&ft;指定打包后的文件名
                        $ tar -zxvf 压缩包文件
        ul
            li
                font.text-info .tar.bz2 压缩
                pre.mt-1(v-highlight)
                    code.bash.
                        # 格式：-c=&gt;打包,-v=&gt;显示过程,-f=&ft;指定打包后的文件名
                        $ tar -jcvf 压缩包名 源文件
                font.text-info .tar.bz2 解压
                pre.mt-1(v-highlight)
                    code.bash.
                        # 格式：-x=&gt;解包,-v=&gt;显示过程,-f=&ft;指定打包后的文件名
                        $ tar -jxvf 压缩包文件
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
