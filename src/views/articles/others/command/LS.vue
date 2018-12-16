<template lang="pug">
    BoWen
        div(slot="catalog")
            Steps(direction="vertical")
                Step(title="命令格式"
                    content="命令格式"
                    status="wait"
                    @click.native="toTop('#LS-1', 30)")
            Steps(direction="vertical")
                Step(title="常用选项介绍"
                    content="常用选项介绍"
                    status="wait"
                    @click.native="toTop('#LS-2', 30)")
        .py-3.text-center
            h1
                Icon(type="ios-book-outline")
                font  查询目录中的内容
            p.pt-1 ls 命令将每个由 Directory 参数指定的目录或者每个由 File 参数指定的名称写到标准输出
        h3#LS-1.ml-1
            Icon(type="logo-buffer")
            font  命令格式
        Divider
        p
            kbd ls [选项] [文件或目录]
        h3#LS-2.ml-1
            Icon(type="logo-buffer")
            font  常用选项介绍
        Divider
        table.table.table-hover
            thead
                tr
                    th(scope="col") #
                    th(scope="col") 选项
                    th(scope="col") 描述
            tbody
                tr(v-for="(item, $index) in lsInfo")
                    th(scope="row") {{ $index + 1}}
                    td {{ item.option }}
                    td {{ item.description }}
        FooterDivider
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop,
            lsInfo: [
                {option: '-a', description: '显示所有文件(包括隐藏文件)。'},
                {option: '-l', description: '显示详细信息。'},
                {option: '-d', description: '查看目录属性。'},
                {option: '-h', description: '人性化显示文件大小。'},
                {option: '-i', description: '输出文件的 i 节点的索引信息(即 inode)。'}
            ]
        }
    }
}
</script>
