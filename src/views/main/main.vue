<template lang="pug">
    .container-fluid.h-100
        .row.h-100
            .col-md-3.position-md-fixed.shadow
                personal-info
                articles-info(@setSelector="setSelector($event)")
            .col-md-9.p-md-0
                .layout-body
                    .layout-content
                        ArticlesList(:article-list="getArticlesList", :selector="selector", @changeSourceBy="changeSourceBy($event)")
</template>

<script>
import PersonalInfo from './components/PersonalInfo.vue';
import ArticlesInfo from './components/ArticlesInfo.vue';
import ArticlesList from './components/ArticleList.vue';
import frontArticlesListOri from '../articles//frontend/data-javascript.js';
import othersArticlesListOri from '../articles/others/data-others.js';
export default {
    data() {
        let totalArticles = [].concat(frontArticlesListOri, othersArticlesListOri);
        return {
            totalArticles: totalArticles,
            sourceBy: [0],
            selectorBy: 'articleType',
            selectorInfo: '',
            articleType: [
                {id: 1, name: 'JavaScript'},
                {id: 2, name: 'HTML/CSS'},
                {id: 3, name: 'VueJS'},
                {id: 4, name: 'AngularJS'},
                {id: 5, name: 'Git'},
                {id: 6, name: 'othMixed'},
                {id: 7, name: 'computer'}
            ],
            tags: [
                {id: 1, name: 'HTML'},
                {id: 2, name: 'CSS'},
                {id: 3, name: 'JavaScript'},
                {id: 4, name: 'ES6'},
                {id: 5, name: 'jQuery'},
                {id: 6, name: 'Git'},
                {id: 7, name: 'webpack'},
                {id: 8, name: 'vue'},
                {id: 9, name: 'angular'},
                {id: 10, name: 'template'},
                {id: 11, name: 'RequireJS'},
                {id: 12, name: 'issue'},
                {id: 13, name: 'iview'},
                {id: 14, name: 'router'},
                {id: 15, name: 'windows'},
                {id: 16, name: 'computer'}
            ],
            dateDivider: [
                {id: 1, name: '2018-8'},
                {id: 2, name: '2018-9'},
                {id: 3, name: '2018-10'},
                {id: 4, name: '2018-11'}
            ]
        }
    },
    components: {
        PersonalInfo,
        ArticlesInfo,
        ArticlesList
    },
    methods: {
        setSelector: function (arg) {
            this.selectorBy = arg;
        },
        changeSourceBy: function (arg) {
            this.sourceBy = arg;
        }
    },
    computed: {
        selector: function () {
            switch (this.selectorBy) {
                case 'dateDivider':
                this.selectorInfo = this.dateDivider;
                break;
                case 'tags':
                this.selectorInfo = this.tags;
                break;
                default:
                this.selectorInfo = this.articleType;
            }
            return this.selectorInfo;
        },
        getArticlesList: function () {
            let totalArticles = this.totalArticles;
            let totalArticlesFiltered;
            if (this.selectorBy === 'articleType') {
                totalArticlesFiltered = totalArticles.filter((item1) => {
                    let include = false;
                    this.sourceBy.forEach(item2 => {
                        if (item1.category === this.articleType[item2].name) {
                            include = true;
                            return;
                        }
                    });
                    return include;
                });
            }
            else if (this.selectorBy === 'tags') {
                let localSourceBy = [];
                // 遍历取值
                for (let value of this.sourceBy.values()) {
                    localSourceBy.push(this.tags[value].name);
                }
                totalArticlesFiltered = totalArticles.filter((item) => {
                    let include = false;
                    let intersect = item.tag.filter((item2) => {
                        if (localSourceBy.includes(item2)) {
                            include = true;
                        }
                    });
                    return include;
                });
            }
            return totalArticlesFiltered;
        }
    }
}
</script>

<style lang="less" scoped>
.layout-body {
    height: calc(100% - 10px);
}
</style>
