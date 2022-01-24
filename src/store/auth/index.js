import { AUTH } from "../constant";

export default {
  namespaced: true,

  getters: {
    [AUTH.GET]: (state) => state.token,
  },

  mutations: {
    [AUTH.SET]: (state, token) => {
      state.token = token;
    },
  },

  actions: {
    [AUTH.SET]: ({ commit }, token) => {
      commit(AUTH.SET, token);
    },
  },

  state: {
    token: "",
  },
};
