<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { USER, namespace } from "/src/store/constant";
// import { service } from "boot/service";

export default async function userHook() {
  const store = useStore();

  await store.dispatch(namespace(USER, USER.SET_LIST));
  const usersList = store.getters[namespace(USER, USER.GET_LIST)];
  const users = ref(usersList);

  return { users };
}
</script>
