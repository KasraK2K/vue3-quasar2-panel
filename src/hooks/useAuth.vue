<script>
import { useStore } from "vuex";
import { AUTH, namespace } from "/src/store/constant";
import { useRouter } from "vue-router";

export default function useAuth() {
  const store = useStore();
  const router = useRouter();

  /* -------------------------------------------------------------------------- */
  /*                                  Get Token                                 */
  /* -------------------------------------------------------------------------- */
  function getToken() {
    const token = store.getters[namespace(AUTH, AUTH.GET_TOKEN)];
    return token;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Set Token                                 */
  /* -------------------------------------------------------------------------- */
  function setToken(token) {
    store.dispatch(namespace(AUTH, AUTH.SET_TOKEN), token);
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Check Token                                */
  /* -------------------------------------------------------------------------- */
  function checkToken() {
    const token = getToken();
    const component = router.currentRoute.value.name;
    const isInAuthPages = component === "Login" || component === "Register";
    if (!token && !isInAuthPages) router.push({ name: "Login" });
    if (token && isInAuthPages) router.push({ name: "Dashboard" });
  }

  return { getToken, setToken, checkToken, setToken };
}
</script>
