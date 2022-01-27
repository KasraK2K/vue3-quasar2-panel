import { boot } from "quasar/wrappers";
import axios from "axios";
import Store from "/src/store";
import { AUTH, namespace } from "/src/store/constant";

/* ------------------------------- Server One ------------------------------- */
const embargoClient = axios.create({
  baseURL: process.env.EMBARGO_BASE_UIL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* ------------------------------- Server Two ------------------------------- */
const api2 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* ----------------------------- Default Client ----------------------------- */
const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" });

/* ---------------------------- Add Bearer Token ---------------------------- */
[embargoClient, api, api2].forEach((apiClient) => {
  apiClient.interceptors.request.use((config) => {
    !config.data && (config.data = {});
    Object.assign(config.data, {
      api_key: process.env.API_KEY,
      source: process.env.SOURCE,
    });
    const token = Store().getters[namespace(AUTH, AUTH.GET_TOKEN)];
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
      config.data.token = token;
    }
    return config;
  });
});

/* --------------- Change response.data.data to response.data --------------- */
// embargoClient.interceptors.response.use((response) => {
//   if (response.data && response.data.data) response.data = response.data.data;
//   return response;
// });

/* ---------------------------- Register / Export --------------------------- */
export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  app.config.globalProperties.$api2 = api2;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, embargoClient, api2 };
