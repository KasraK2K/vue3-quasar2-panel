import { AUTH } from "../constant";

export default {
  namespaced: true,

  getters: {
    [AUTH.GET_TOKEN]: (state) => state.token,
  },

  mutations: {
    [AUTH.SET_TOKEN]: (state, token) => {
      state.token = token;
    },
  },

  actions: {
    [AUTH.SET_TOKEN]: ({ commit }, token) => {
      commit(AUTH.SET_TOKEN, token);
    },
  },

  state: {
    // token: "this token should be deleted and get from api",
    token: "",
  },
};
