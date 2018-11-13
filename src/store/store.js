import Vue from 'vue';
import Vuex from 'vuex';
import articles from './module/articles';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeName: 'main',
    bgColor: '',
    bowenBgColor: '',
    allBgColor: ''
  },
  getters: {
    //
  },
  mutations: {
    setActiveName(state, name) {
      state.activeName = name;
    },
    setBgColor(state, color) {
      state.bgColor = color;
    },
    setBowenBgColor(state, color) {
      state.bowenBgColor = color
    },
    setAllBgColor(state, color) {
      state.allBgColor = color;
    }
  },
  actions: {
    //
  },
  modules: {
    articles
  }
});

export default store;