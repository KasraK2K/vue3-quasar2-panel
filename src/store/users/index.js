import Constant from "./constant";

export default {
  namespaced: true,

  getters: {
    [Constant.GET_USER]: (state) => state.user,
  },

  mutations: {
    [Constant.SET_USER]: (state, payload) => {
      state.user = payload;
    },
  },

  actions: {
    [Constant.SET_USER]: ({ commit }, payload) => {
      commit(Constant.SET_USER, payload);
    },
  },

  state: {
    user: null,
  },
};
