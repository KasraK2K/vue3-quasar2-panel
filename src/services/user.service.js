import { api } from "../boot/axios";

const modulPath = "users";

export const user = {
  async find() {
    return await api.get(modulPath);
  },

  async findOne(id) {
    return await api.get(`${modulPath}/${id}`);
  },

  async create(data) {
    return await api.post(modulPath, data);
  },

  async update(id, data) {
    return await api.patch(`${modulPath}/${id}`, data);
  },

  async delete(id) {
    return await api.delete(`${modulPath}/${id}`);
  },
};
