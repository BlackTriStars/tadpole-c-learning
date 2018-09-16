import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

import createPersistedState from 'vuex-persistedstate';

const state = {
  header: {
    color: '',
    title: ''
  },
  defaultColor: '#0181ca'
}

const mutations = {
  changeHeader(state, obj) {
    let o = {};
    obj.color ? o.color = obj.color : o.color = state.defaultColor;
    o.title = obj.title;
    state.header = o;
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]

})