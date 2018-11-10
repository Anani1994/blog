<template lang="pug">
    .container-fluid
        ul.nav.align-items-center.flex-row.flex-md-column.footer-nav.border-top
            li.nav-item
                a.nav-link.text-dark.pr-0(href="#", @click="changeSelector()") 
                    font-awesome-icon(:icon="['fas', 'book']")
                    font.ml-sm {{$t('message.article_type')}}
            li.nav-item
                a.nav-link.text-dark.pr-0(href="#", @click="changeSelector('tags')")
                    font-awesome-icon(:icon="['fas', 'tags']")
                    font.ml-sm {{$t('message.article_label')}}
            li.nav-item
                a.nav-link.text-dark.pr-0(href="#", @click="changeSelector('dateDivider')")
                    font-awesome-icon(:icon="['far', 'clock']")
                    font.ml-sm {{$t('message.article_date')}}
            li.nav-item
                a.nav-link.text-dark.pr-0(href="#", @click="")
                    font-awesome-icon(:icon="['fas', 'search']")
                    font.ml-sm {{$t('message.article_search')}}

</template>

<script>
export default {
    name: 'ArticlesInfo',
    methods: {
        changeSelector: function (arg="articleType") {
            this.$emit('setSelector', arg);
        }
    }
}
</script>

<style lang="less" scoped>
@media (max-width: 768px) {
    .container-fluid {
        padding: 0;
        .footer-nav {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0;
            justify-content: space-around;
            background: #FFF;
            a {
                padding-left: 0;
            }
        }
    }
}
</style>
