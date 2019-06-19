<template lang="pug">
    .container.h-100.px-0
        layout
            #app-nav.navbar.navbar-expand-lg.navbar-light.border-bottom(
                :class="{'app-nav': isShow}"
                slot="header"
            )
                router-link.navbar-brand(:to="{name: 'index'}") {{ $t("message.basic_title") }}
                button.navbar-toggler(
                    type="button"
                    @click="isShow = !isShow"
                    data-toggle="collapse"
                    data-target="#appNavbar"
                    aria-controls="appNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                )
                    span.navbar-toggler-icon
                #appNavbar.collapse.navbar-collapse.justify-content-end
                    ul.navbar-nav
                        li.nav-item.active
                            a.nav-link(href="https://github.com/Anani1994") GitHub
                        li.nav-item.active
                            router-link.nav-link(:to="{name: 'itemSet'}") {{ $t("message.item_demo") }}
                        li.nav-item.active
                            a.nav-link(href="https://anani1994.github.io/notebook/") {{ $t("message.bo_wen") }}
                        //- li.nav-item.dropdown
                        //-     a.nav-link.dropdown-toggle(
                        //-         href="#"
                        //-         id="appNavbarDropdown"
                        //-         role="button"
                        //-         data-toggle="dropdown"
                        //-         aria-haspopup="true"
                        //-         aria-expanded="false"
                        //-     ) {{ $t("message.blog") }}
                        //-     .dropdown-menu(aria-labelledby="appNavbarDropdown")
                        //-         a.dropdown-item(href="http://www.cnblogs.com/anani/") {{ $t("message.cnblogs") }}
                        //-         a.dropdown-item(href="https://anani1994.github.io/anani1994.github.io/projects/BlogV1.0.0/index.html") {{ $t("message.blog_one") }}
                        //-         a.dropdown-item(href="https://anani1994.github.io/anani1994.github.io/projects/BlogV2.0.0/index.html") {{ $t("message.blog_two") }}
                        li.nav-item.dropdown
                            a.nav-link.dropdown-toggle(
                                href="#"
                                id="appNavbarLangDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            ) {{ $t("message.language") }}
                            .dropdown-menu(
                                style="left: auto;right: 0;"
                                aria-labelledby="appNavbarLangDropdown"
                            )
                                a.dropdown-item.text-md-right(
                                    href="#"
                                    @click="changeLanguage('cn-US')"
                                ) English
                                .dropdown-divider
                                a.dropdown-item.text-md-right(
                                    href="#"
                                    @click="changeLanguage('zh-CN')"
                                ) 简体中文
                        li.nav-item.active
                            a.nav-link(
                                href="#"
                                @click="toggleBgAnimation()"
                            ) {{ $t("message.app_setting") }}
            .h-100(slot="body")
                router-view
            .h-100(slot="footer")
                canvas#app-bg.position-fixed.top-0.left-0(v-show="!setBgAnimationContainer") Sorry,There is a drawing about a clock,But your browser does not support Canvas.
                p.m-0.py-1.text-center
                    small.text-muted
                        span Copyright © 2018-2018 {{ $t("message.author") }}
                        span.border-right.mx-2
                        span#app-footer-time(v-text="tiemNow")
</template>

<script>
import date from '../libs/utils/date';

export default {
    name: 'App',
    data() {
        return {
            // 在手机模式打开顶部下拉 navbar 菜单添加背景颜色
            isShow: false,
            // 底部显示的时间
            tiemNow: '',
        };
    },
    computed: {
        setBgAnimationContainer: function() {
            return this.$store.state.config.openBgAnimation;
        }
    },
    mounted() {
        // 更新底部时间
        setInterval(() => {
            this.tiemNow = date.formatDate();
        }, 1000);

        // 检测背景动画
        this.toggleBgAnimation();
    },
    methods: {
        // 根据语言切换更换网页标题
        changeLanguage: function (lang) {
            const { title } = this.$route.meta;
            const { i18n, content, key } = title;
            const { $i18n, $util } = this;

            $i18n.locale = lang;
            let newTitle = `${this.$t('message.basic_title')}`;
            if ($util.isEmpty(content)) {
                const ret = window.document.title = newTitle;
                return ret;
            }
            newTitle += ` - ${i18n ? this.$t(`message.${key}`) : content}`;
            window.document.title = newTitle;
        },

        // 背景动画开关
        toggleBgAnimation() {
            this.$store.commit('toggleBgAnimation');
        },
    },
};
</script>
