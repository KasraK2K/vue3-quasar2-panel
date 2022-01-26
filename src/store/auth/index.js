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

    [AUTH.CLEAR_TOKEN]: (state) => {
      state.token = null;
    },
  },

  actions: {
    [AUTH.SET_TOKEN]: ({ commit }, token) => {
      commit(AUTH.SET_TOKEN, token);
    },

    [AUTH.CLEAR_TOKEN]: ({ commit }) => {
      commit(AUTH.CLEAR_TOKEN);
    },
  },

  state: {
    // token: "this token should be deleted and get from api",
  },
};
