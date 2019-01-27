<template lang="pug">
    .container-fluid
        .py-3.position-sticky.top-0.border-bottom.article-list-badge-container.an-scrollbar
            span.badge.badge-pill.badge-light.p-2.border.mr-sm.mt-sm(v-for="(item, index) in selector"
                                                                     :key="item.id"
                                                                     @click="changeSourceBy(index)"
                                                                     :class="activeClass(index)")
                font {{item.name}}
        .shadow.p-3.mb-3.border-top(v-for="item in articleList", :key="item.id")
            .h5 {{item.name}}
            p.text-muted {{item.abstract}}
            .clearfix.m-p-0
                p.float-left
                    small posted @ {{item.postTime}}
                p.float-right
                    router-link.nav-link.p-0(:to="item.path")
                        font 阅读全文
                        font-awesome-icon(:icon="['fas', 'angle-double-right']")
</template>

<script>
export default {
    name: 'ArticleList',
    props: {
        articleList: Array,
        selector: Array
    },
    data() {
        return {
            toPage: this.$util.toPage,
            selectorBy: [0]
        };
    },
    methods: {
        changeSourceBy: function (arg) {
            if (this.selectorBy.includes(arg)) {
                $(window.event.target).parent().removeClass('bg-active');
                // 如果数组内包含此项则删除
                // find/findIndex中使用箭头函数不会在第一个满足条件项停止
                let index = this.selectorBy.findIndex(function (item) {
                    return item === arg;
                });
                this.selectorBy.splice(index, 1);
            } else {
                if (!$(window.event.target).parent().hasClass('bg-active')) {
                    $(window.event.target).parent().addClass('bg-active');
                }
                this.selectorBy.push(arg);
            }
            this.$emit('changeSourceBy', this.selectorBy);
        },
        activeClass: function (arg) {
            if (arg === 0) {
                return {
                    'bg-active': true
                }
            } else {
                return {
                    'bg-active': false
                }
            }
        }
    },
    created() {
        this.activeClass();
    }
}
</script>

<style lang="less">
.article-list-badge-container {
    margin-bottom: 16px;
    width: 100%;
    max-height: 80px;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
