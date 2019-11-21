import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:"347230"
  },
  mutations: {
    setId(state,id){
      state.id = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
