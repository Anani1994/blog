/**
 * 使用 VUEX 进行状态管理
 * 中文文档：https://vuex.vuejs.org/zh/
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        /**
         * Vuex 使用单一状态树，每个应用将仅仅包含一个 store 实例
         * 由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
         */
    },
    getters: {
        /**
         * Getter 就像是 store 的计算属性
         * 其返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
         * 同样接受 state 作为其第一个参数
         * Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值
         * Getter 也可以接受其他 getter 作为第二个参数
         * 你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用
         */
    },
    mutations: {
        /**
         * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)
         * 回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
         * Mutation 必须是同步函数
         * 在组件中使用 this.$store.commit('xxx', {}) 提交 mutation，第二个参数为可选的额外参数，通常是一个对象
         */
    },
    actions: {
        /**
         * Action 提交的是 mutation，而不是直接变更状态
         * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation
         * 或者通过 context.state 和 context.getters 来获取 state 和 getters
         * Action 通过 store.dispatch 方法触发，第一个参数为需要触发的 action，第二个参数为可选的额外参数
         * Action 可以包含任意异步操作
         */
    },
    modules: {
        // 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
        // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：({ state, commit, rootState })
        // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：(state, getters, rootState)
    }
});

export default store;
