import { embargoClient } from "../boot/axios";

const modulPath = "mng-users";

export const user = {
  async list() {
    return await embargoClient.post(`${modulPath}/list`);
  },

  // async findOne(id) {
  //   return await embargoClient.get(`${modulPath}/${id}`);
  // },

  async create(data) {
    return await embargoClient.post(`${modulPath}/add-user`, data);
  },

  // async update(id, data) {
  //   return await embargoClient.patch(`${modulPath}/${id}`, data);
  // },

  // async delete(id) {
  //   return await embargoClient.delete(`${modulPath}/${id}`);
  // },
};
