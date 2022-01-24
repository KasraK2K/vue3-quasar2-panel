export const USER = {
  NAMESPACE: "user",
  GET: "get_user",
  SET: "set_user",
  SET_LIST: "set_user_list",
  GET_LIST: "get_user_list",
};

export const AUTH = {
  NAMESPACE: "auth",
  SET: "set_token",
  GET: "get_token",
};

export const namespace = (module, name) => `${module.NAMESPACE}/${name}`;
