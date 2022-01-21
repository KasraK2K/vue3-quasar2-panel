export const USER = {
  NAMESPACE: "user",
  GET: "get_user",
  SET: "set_user",
};

export const namespace = (module, name) => `${module.NAMESPACE}/${name}`;
