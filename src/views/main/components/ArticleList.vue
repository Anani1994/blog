<template lang="pug">
    .container-fluid
        .py-3.position-sticky.top-0.border-bottom.article-list-badge-container.an-scrollbar
            span.badge.badge-pill.badge-light.p-2.border.mr-sm.mt-sm(v-for="(item, index) in selector"
                                                                     :key="item.id"
                                                                     @click="changeSourceBy(index)"
                                                                     :class="{ 'bg-active': item.active }")
                font {{item.name}}
        .shadow.p-3.mb-3.border-top(v-for="item in articleList", :key="item.id")
            .h5 {{item.name}}
            p.text-muted {{item.abstract}}
            .clearfix.m-p-0
                p.float-left
                    small posted @ {{item.postTime}}
                p.float-right
                    router-link.nav-link.p-0(:to="item.path")
                        font.mr-1 阅读全文
                        font-awesome-icon(:icon="['fas', 'angle-double-right']")
</template>

<script>
export default {
    name: 'ArticleList',
    data() {
        return {
            toPage: this.$util.toPage,
        };
    },
    methods: {
        changeSourceBy: function (arg) {
            this.$store.commit('changeSourceBy', { sourceBy: arg });
        },
        // activeClass: function (arg) {
        //     if (arg === 0) {
        //         return {
        //             'bg-active': true
        //         }
        //     } else {
        //         return {
        //             'bg-active': false
        //         }
        //     }
        // },
    },
    created() {
        // this.activeClass();
    },
    computed: {
        articleList() {
            return this.$store.getters.getArticlesList;
        },
        selector() {
            return this.$store.getters.selector;
        },
        selectorBy() {
            return this.$store.state.main.selectorBy;
        }
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
