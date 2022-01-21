import { USER } from "../constant";

export default {
  namespaced: true,

  getters: {
    [USER.GET]: (state) => state.user,
  },

  mutations: {
    [USER.SET]: (state, payload) => {
      state.user = payload;
    },
  },

  actions: {
    [USER.SET]: ({ commit }, payload) => {
      commit(USER.SET, payload);
    },
  },

  state: {
    user: {
      name: "alice",
    },
  },
};
