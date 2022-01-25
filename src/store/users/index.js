import { USER } from "../constant";
import { service } from "boot/service";

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
    [USER.SET_LIST]: async ({ commit }) => {
      try {
        const { data } = await service.user.list();
        commit(USER.SET_LIST, data);
      } catch (error) {
        console.log(error.message);
      }
    },
  },

  state: {
    user: {},
    users: {},
  },
};
