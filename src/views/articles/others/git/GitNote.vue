<template lang="pug">
    BoWen
        .py-3.text-center
            h1
                Icon(type="ios-book-outline")
                font  Git 学习笔记
            p.pt-1 记录学习和工作中遇到的 Git 相关的零散知识
        h3#ComputerSystem-1.ml-1
            Icon(type="logo-buffer")
            font  随录
        Divider
        ul
            li.mb-3
                span 重新命名远程仓库，比如将 比如想把 old_name 改成 new_name：
                    pre.custom-pre git remote rename old_name new_name
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
