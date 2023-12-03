import { createStore } from 'vuex'
import actions from "./actions";

export default createStore({
  state: {
    userData:null,
    trailerVideoUrl: '',
  },
  getters: {
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
    setTrailerVideoUrl(state, payload) {
        state.trailerVideoUrl = payload;
    }
  },
  actions: actions,
  modules: {
  }
})
