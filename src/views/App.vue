<template lang="pug">
    .container.h-100.px-0.app
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
                        li.nav-item.dropdown
                            a.nav-link.dropdown-toggle(href="#"
                                                    id="appNavbarDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false") {{ $t("message.item_demo") }}
                            .dropdown-menu(aria-labelledby="appNavbarDropdown")
                                a.dropdown-item(href='https://anani1994.github.io/anani1994.github.io/projects/vue-market/index.html') {{ $t("message.shop_mall") }}
                        li.nav-item.dropdown
                            a.nav-link.dropdown-toggle(href="#"
                                                    id="appNavbarDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false") {{ $t("message.blog") }}
                            .dropdown-menu(aria-labelledby="appNavbarDropdown")
                                a.dropdown-item(href="https://anani1994.github.io/anani1994.github.io/projects/BlogV2.0.0/index.html") {{ $t("message.blog_two") }}
                                a.dropdown-item(href="https://anani1994.github.io/anani1994.github.io/projects/BlogV1.0.0/index.html") {{ $t("message.blog_one") }}
                                a.dropdown-item(href="http://www.cnblogs.com/anani/") {{ $t("message.cnblogs") }}
                        li.nav-item.active
                            a.nav-link(href="https://anani1994.github.io/notebook/") {{ $t("message.bo_wen") }}
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
                            a.nav-link(href="#") {{ $t("message.app_setting") }}
            .w-100.h-100(slot="body")
                router-view
            .w-100.h-100(slot="footer")
                canvas#app-bg.position-fixed.top-0.left-0 Sorry,There is a drawing about a clock,But your browser does not support Canvas.
                p.m-0.py-1.text-center
                    small
                        span Copyright © 2018-2018 {{ $t("message.author") }}
                        span.border-right.mx-2
                        span#app-footer-time
                    //
                        span.border-right.mx-2.d-none.d-md-inline
                        span.d-none.d-md-inline
                            font#busuanzi_container_site_uv 您是本站的第 
                            font#busuanzi_value_site_uv
                            font  位访问者。
        template(v-if="showSearch")
            .search-container
                .search-content
                    input.w-100.p-3(type="text", v-model="searchValues", placeholder="多个关键字使用空格分开或按 Esc 键退出")
                    .search-result-container
                        .search-result
                            li.border-bottom.rounded-0.pb-2.mb-3(v-for="(item, index) in filteredQuestionArticlesInfo" :key="index")
                                pre.mr-2.pr-2.custom-pre(@click="searchToPage(item.pathName)", v-html="highLightKeyword(item.name)")
                                .py-1.text-white.text-indent(v-html="highLightKeyword(item.abstract)")
                                span.d-block.float-right.mr-2.text-light
                                    font.content-colon 标签
                                    font.ml-1(v-for="(item2, index2) in item.tag" :key="index2") /{{item2}}
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isShow: false,
            searchValues : ''
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
        },
        searchToPage: function (pathName) {
            this.$util.toPage(pathName, {}, this);
            this.showSearch = false;
        }
    },
    mounted () {
        // 底部显示的时间
        setInterval(() => { 
            let time = this.$util.formatDate();
            $('#app-footer-time').html(time);
        }, 1000);
        // 背景动画
        this.$nextTick(() => {
            // this.$canvas.createStarrySky(document.querySelector('#app-bg'));
        });
    },
    created () {
        document.onkeyup = (event) => {
            if (event.ctrlKey && 32 === event.keyCode) {
                if (!this.showSearch) {
                    this.$store.commit('toggleSearch');
                }
            }
            if (27 === event.keyCode) {
                if (this.showSearch) {
                    this.$store.commit('toggleSearch');
                }
            }
        }
    },
    computed: {
        // 根据全局搜索输入框的值筛选文章
        filteredQuestionArticlesInfo: function () {
            let data = this.$store.state.articles.list;
            let filteredData;
            let searchArr = this.searchValues.split(" ");
            filteredData = data.filter((item1) => {
                let result = false;
                var index = searchArr.findIndex((item2) => {
                    return item1.name.includes(item2) || item1.tag.includes(item2) || item1.abstract.includes(item2);
                });
                if (!index) {
                    result = true;
                }
                return result;
            });
            return filteredData;
        },
        // 高亮搜索结果中的关键字
        highLightKeyword () {
            return function (content) {
                if ('undefined' === typeof content) {
                    return;
                }
                let searchArr = this.searchValues.split(" ");
                // 过滤空元素
                searchArr = searchArr.filter((item) => {
                    return Boolean(item);
                });
                let result = content;
                searchArr.forEach((item) => {
                    let pattern;
                    try {
                        pattern = new RegExp(item, 'gi');
                    } catch (e) {
                        return result;
                    }
                    if (result) {
                        result = result.replace(pattern, `<span class="mark">${item}</span>`);
                    } else {
                        result = content.replace(pattern, `<span class="mark">${item}</span>`);
                    }
                });
                return result;
            };
        },
        // 是否打开搜索
        showSearch() {
            return this.$store.state.setting.searchIsOpen;
        }
    }
}
</script>

<style lang="less">
html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
canvas#app-bg {
    opacity: .1;
    z-index: -9999;
}
.search-container {
    z-index: 9999;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    .search-content {
        width: 50%;
        height: 100%;
        margin: 90px auto 0;
        input {
            border: none;
            outline:none; // 解决点击后产生边框
            border-radius: 18px;
        }
        .search-result-container {
            overflow: hidden;
            padding-top: 15px;
            width: 100%;
            height: calc(100% - 157px);
            .search-result {
                overflow-x: hidden;
                overflow-y: scroll;
                padding-top: 16px;
                width: calc(100% + 17px);
                height: 100%;
                li {
                    overflow-x: auto;
                    margin-bottom: 5px;
                    list-style-type: none;
                    &:hover {
                        border-radius: 5px;
                    }
                    pre:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
