<template lang="pug">
    .container.h-100.px-0
        layout
            .navbar.navbar-expand-lg.navbar-light(slot="header")
                a.navbar-brand(href="#") {{ $t("message.basic_title") }}
                button.navbar-toggler(type="button"
                                    data-toggle="collapse"
                                    data-target="#appNavbar"
                                    aria-controls="appNavbar"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation")
                    span.navbar-toggler-icon
                #appNavbar.collapse.navbar-collapse.justify-content-end
                    ul.navbar-nav
                        li.nav-item.active
                            a.nav-link(href="") GitHub
                        li.nav-item.active
                            a.nav-link(href="") {{ $t("message.cnblogs") }}
                        li.nav-item.dropdown
                            a.nav-link.dropdown-toggle(href="#"
                                                    id="appNavbarDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false") {{ $t("message.item_demo") }}
                            .dropdown-menu(aria-labelledby="appNavbarDropdown")
                                a.dropdown-item(href="#") {{ $t("message.shop_mall") }}
                                .dropdown-devider
                                a.dropdown-item(href="#") {{ $t("message.old_blog") }}
                        li.nav-item.active
                            a.nav-link(href="") {{ $t("message.bo_wen") }}
                        li.nav-item.dropdown
                            a.nav-link.dropdown-toggle(href="#"
                                                    id="appNavbarLangDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false") {{ $t("message.language") }}
                            .dropdown-menu(style="left: auto;right: 0;"
                                           aria-labelledby="appNavbarLangDropdown")
                                a.dropdown-item.text-right(href="#"
                                                           @click="changeLanguage('cn-US')") English
                                .dropdown-devider
                                a.dropdown-item.text-right(href="#"
                                                           @click="changeLanguage('zh-CN')") 简体中文
                        li.nav-item.active
                            a.nav-link(href="") {{ $t("message.others") }}
            .w-100.h-100(slot="body")
                router-view
            .w-100.h-100(slot="footer")
                p.m-0.py-1.text-center
                    small
                        span Copyright © 2018-2018 {{ $t("message.author") }}
                        span.border-right.mx-2
                        span#app-footer-time
</template>


<script>
export default {
    name: 'App',
    data() {
        return {
        }
    },
    methods: {
         changeLanguage: function(lang) {
            this.$i18n.locale = lang;
            let newTitle = this.$t("message.basic_title") + ' - ' + this.$t((`message.${this.$route.meta.title.key}`));
            window.document.title = newTitle;
        }
    },
    mounted() {
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
