import { api } from "../boot/axios";

const modulPath = "users";

export const user = {
  async find() {
    return await api.get(modulPath);
  },
};
