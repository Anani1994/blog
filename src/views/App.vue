<template lang="pug">
    .container.h-100.px-0
        layout
            #app-nav.navbar.navbar-expand-lg.fixed-top.container.navbar-light.border-bottom(slot="header")
                a.navbar-brand(href="/") {{ $t("message.basic_title") }}
                button.navbar-toggler(type="button"
                                    @click="addBgColor()"
                                    data-toggle="collapse"
                                    data-target="#appNavbar"
                                    aria-controls="appNavbar"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation")
                    span.navbar-toggler-icon
                #appNavbar.collapse.navbar-collapse.justify-content-end
                    ul.navbar-nav
                        li.nav-item.active
                            a.nav-link(href="https://github.com/Anani1994") GitHub
                        li.nav-item.active
                            a.nav-link(href="http://www.cnblogs.com/anani/") {{ $t("message.cnblogs") }}
                        li.nav-item.dropdown
                            a.nav-link.dropdown-toggle(href="#"
                                                    id="appNavbarDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false") {{ $t("message.item_demo") }}
                            .dropdown-menu(aria-labelledby="appNavbarDropdown")
                                a.dropdown-item(href='http://dongwh.coding.me/blog/#/build/items/vue-market/index.html') {{ $t("message.shop_mall") }}
                        li.nav-item.active
                            a.nav-link(href="#") {{ $t("message.bo_wen") }}
                        li.nav-item.dropdown
                            a.nav-link.dropdown-toggle(href="#"
                                                    id="appNavbarLangDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false") {{ $t("message.language") }}
                            .dropdown-menu(style="left: auto;right: 0;"
                                           aria-labelledby="appNavbarLangDropdown")
                                a.dropdown-item.text-md-right(href="#"
                                                           @click="changeLanguage('cn-US')") English
                                .dropdown-divider
                                a.dropdown-item.text-md-right(href="#"
                                                           @click="changeLanguage('zh-CN')") 简体中文
                        li.nav-item.active
                            a.nav-link(href="#") {{ $t("message.others") }}
            .w-100.h-100(slot="body")
                router-view
            .w-100.h-100(slot="footer")
                p.m-0.py-1.text-center
                    small
                        span Copyright © 2018-2018 {{ $t("message.author") }}
                        span.border-right.mx-2
                        span#app-footer-time
                        span.border-right.mx-2.d-none.d-md-inline
                        span.d-none.d-md-inline
                            font#busuanzi_container_site_uv 您是本站的第 
                            font#busuanzi_value_site_uv
                            font  位访问者。
</template>


<script>
export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    methods: {
         changeLanguage: function (lang) {
            this.$i18n.locale = lang;
            let newTitle = this.$t("message.basic_title") + ' - ' + this.$t((`message.${this.$route.meta.title.key}`));
            window.document.title = newTitle;
        },
        // 在手机模式打开顶部下拉 navbar 菜单添加背景颜色
        addBgColor: function () {
            if (this.isShow) {
                $('#app-nav').removeClass('app-nav');
            } else {
                $('#app-nav').addClass('app-nav');
            }
            this.isShow = !this.isShow;
        }
    },
    mounted() {
        // 底部显示的时间
        setInterval(() => { 
            let time = this.$util.formatDate();
            $('#app-footer-time').html(time);
        }, 1000);
    }
}
</script>

<style lang="less">
html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
