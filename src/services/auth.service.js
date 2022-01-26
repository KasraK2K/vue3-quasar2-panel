import { embargoClient } from "../boot/axios";

const modulPath = "auth";

export const auth = {
  async login(data) {
    return await embargoClient.post(`${modulPath`/login`}`, data);
  },

  async logout(token) {
    return await embargoClient.post(`${modulPath}/logout`, token);
  },
};
