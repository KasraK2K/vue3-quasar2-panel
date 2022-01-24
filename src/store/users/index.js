import { USER } from "../constant";
import { embargoClient } from "boot/axios";

export default {
  namespaced: true,

  getters: {
    [USER.GET]: (state) => state.user,
    [USER.GET_LIST]: (state) => state.users,
  },

  mutations: {
    [USER.SET]: (state, payload) => {
      state.user = payload;
    },
    [USER.SET_LIST]: (state, payload) => {
      state.users = payload;
    },
  },

  actions: {
    [USER.SET]: ({ commit }, payload) => {
      commit(USER.SET, payload);
    },
    [USER.SET_LIST]: ({ commit }) => {
      // TODO:  Use service.user.list instead of embargoClient.
      embargoClient
        .post("/mng-users/list")
        .then((response) => {
          // FIXME: Make Vuex Async
          commit(USER.SET_LIST, response.data);
        })
        .catch((error) => console.log("USER.SET_LIST", error.message));
    },
  },

  state: {
    user: {},
    users: {},
  },
};
