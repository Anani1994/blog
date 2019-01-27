import Vue from 'vue';
import Vuex from 'vuex';
import articles from './articles';
import setting from './setting';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
    },
    getters: {
        //
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        // 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
        // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
        // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来
        articles,
        setting,
    }
});

export default store;
