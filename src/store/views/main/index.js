export default {
    state: {
        articleType: [
            {id: 1, name: 'HTML/CSS'},
            {id: 2, name: 'JavaScript'},
            {id: 3, name: 'VueJS'},
            {id: 4, name: 'AngularJS'},
            {id: 5, name: 'Git'},
            {id: 6, name: 'othMixed'},
            {id: 7, name: 'computer'},
            {id: 8, name: 'canvas'},
            {id: 9, name: 'React'}
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
            {id: 16, name: 'computer'},
            {id: 17, name: 'canvas'},
            {id: 18, name: 'React'}
        ],
        dateDivider: [
            {id: 1, name: '2018-8'},
            {id: 2, name: '2018-9'},
            {id: 3, name: '2018-10'},
            {id: 4, name: '2018-11'}
        ],
        sourceBy: [0],
        selectorBy: 'articleType',
        selectorInfo: '',
    },
    mutations: {
        setSelector(state, { selectorBy }) {
            state.selectorBy = selectorBy;
        },
        changeSourceBy(state, { sourceBy }) {
            if (state.sourceBy.includes(sourceBy)) {
                $(window.event.target).parent().removeClass('bg-active');
                // 如果数组内包含此项则删除
                // find/findIndex中使用箭头函数不会在第一个满足条件项停止
                let index = state.sourceBy.findIndex(function (item) {
                    return item === sourceBy;
                });
                state.sourceBy.splice(index, 1);
            } else {
                if (!$(window.event.target).parent().hasClass('bg-active')) {
                    $(window.event.target).parent().addClass('bg-active');
                }
                state.sourceBy.push(sourceBy);
            }
        }
    },
    actions: {
        //
    },
    getters: {
        selector(state) {
            switch (state.selectorBy) {
                case 'dateDivider':
                state.selectorInfo = state.dateDivider;
                break;
                case 'tags':
                state.selectorInfo = state.tags;
                break;
                default:
                state.selectorInfo = state.articleType;
            }
            return state.selectorInfo;
        },
        getArticlesList(state, getters, rootState) {
            let totalArticles = rootState.articles.list;
            let totalArticlesFiltered;
            if (state.selectorBy === 'articleType') {
                totalArticlesFiltered = totalArticles.filter((item1) => {
                    let include = false;
                    state.sourceBy.forEach(item2 => {
                        if (item1.category === state.articleType[item2].name) {
                            include = true;
                            return;
                        }
                    });
                    return include;
                });
            }
            else if (state.selectorBy === 'tags') {
                let localSourceBy = [];
                // 遍历取值
                for (let value of state.sourceBy.values()) {
                    localSourceBy.push(state.tags[value].name);
                }
                totalArticlesFiltered = totalArticles.filter((item) => {
                    let include = false;
                    item.tag.forEach((item2) => {
                        if (localSourceBy.includes(item2)) {
                            include = true;
                        }
                    });
                    return include;
                });
            }
            return totalArticlesFiltered;
        },
    }
};
