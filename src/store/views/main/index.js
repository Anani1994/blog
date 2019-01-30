// 模拟初始化赋值：state.sourceBy = state.articleSourceBy
let sourceByArr = [0];

export default {
    state: {
        articleType: [
            {id: 1, name: 'HTML/CSS', active: true},
            {id: 2, name: 'JavaScript', active: false},
            {id: 3, name: 'VueJS', active: false},
            {id: 4, name: 'AngularJS', active: false},
            {id: 5, name: 'Git', active: false},
            {id: 6, name: 'othMixed', active: false},
            {id: 7, name: 'computer', active: false},
            {id: 8, name: 'canvas', active: false},
            {id: 9, name: 'React', active: false},
        ],
        tags: [
            {id: 1, name: 'HTML', active: true},
            {id: 2, name: 'CSS', active: false},
            {id: 3, name: 'JavaScript', active: false},
            {id: 4, name: 'ES6', active: false},
            {id: 5, name: 'jQuery', active: false},
            {id: 6, name: 'Git', active: false},
            {id: 7, name: 'webpack', active: false},
            {id: 8, name: 'vue', active: false},
            {id: 9, name: 'angular', active: false},
            {id: 10, name: 'template', active: false},
            {id: 11, name: 'RequireJS', active: false},
            {id: 12, name: 'issue', active: false},
            {id: 13, name: 'iview', active: false},
            {id: 14, name: 'router', active: false},
            {id: 15, name: 'windows', active: false},
            {id: 16, name: 'computer', active: false},
            {id: 17, name: 'canvas', active: false},
            {id: 18, name: 'React', active: false},
        ],
        dateDivider: [
            {id: 1, name: '2018-8', active: true},
            {id: 2, name: '2018-9', active: false},
            {id: 3, name: '2018-10', active: false},
            {id: 4, name: '2018-11', active: false},
        ],
        sourceBy: sourceByArr,
        articleSourceBy: sourceByArr,
        tagSourceBy: [0],
        dateSourceBy: [0],
        selectorBy: 'articleType',
        selectorInfo: '',
    },
    mutations: {
        setSelector(state, { selectorBy }) {
            if (state.selectorBy !== selectorBy) {
                state.selectorBy = selectorBy;
                switch (selectorBy) {
                    case 'dateDivider':
                    state.sourceBy = state.dateSourceBy;
                    break;
                    case 'tags':
                    state.sourceBy = state.tagSourceBy;
                    break;
                    default:
                    state.sourceBy = state.articleSourceBy;
                }
                // getArticlesList();
            }
            
            /* 使用单个属性记录选中的值，每次切换时重置所选项 */
            // if (state.selectorBy !== selectorBy) {
            //     state.selectorBy = selectorBy;
            //     state[selectorBy].forEach(item => item.active = false);
            //     state[selectorBy][0].active = true;
            //     state.sourceBy = [0];
            // }
        },
        changeSourceBy(state, { sourceBy }) {
            if (state.sourceBy.includes(sourceBy)) {
                // $(window.event.target).parent().removeClass('bg-active');
                // 如果数组内包含此项则删除
                // find/findIndex中使用箭头函数不会在第一个满足条件项停止
                let index = state.sourceBy.findIndex(function (item) {
                    return item === sourceBy;
                });
                if (-1 < index) {
                    let indexOriArr = state.sourceBy.splice(index, 1);
                    state.selectorInfo[indexOriArr[0]].active = false;
                }
            } else {
                // if (!$(window.event.target).parent().hasClass('bg-active')) {
                //     $(window.event.target).parent().addClass('bg-active');
                // }
                state.sourceBy.push(sourceBy);
                state.selectorInfo[sourceBy].active = true;
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
