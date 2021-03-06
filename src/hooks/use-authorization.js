import { useStore } from "vuex";
import { AUTH, namespace } from "/src/store/constant";
import { useRouter } from "vue-router";

export default function useAuthorization() {
  const store = useStore();
  const router = useRouter();

  const getToken = () => {
    const token = store.getters[namespace(AUTH, AUTH.GET_TOKEN)];
    return token;
  };

  const setToken = (token) => {
    store.dispatch(namespace(AUTH, AUTH.SET_TOKEN), token);
  };

  const checkToken = () => {
    const token = getToken();
    const component = router.currentRoute.value.name;
    const isInAuthPages = component === "Login";
    if (!token && !isInAuthPages) router.push({ name: "Login" });
    if (token && isInAuthPages) router.push({ name: "Dashboard" });
  };

  const clearToken = () => {
    store.dispatch(namespace(AUTH, AUTH.CLEAR_TOKEN));
  };

  return { getToken, setToken, checkToken, clearToken };
}
