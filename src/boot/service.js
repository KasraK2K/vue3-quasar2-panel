import { boot } from "quasar/wrappers";
import * as Services from "../services";

const service = {
  user: Services.user,
};

export default boot(({ app }) => {
  app.config.globalProperties.$service = service;
});

export { service };
