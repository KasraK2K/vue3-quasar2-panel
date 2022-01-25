<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { USER, namespace } from "/src/store/constant";

export default async function useUser() {
  const store = useStore();

  await store.dispatch(namespace(USER, USER.SET_LIST));
  const usersList = store.getters[namespace(USER, USER.GET_LIST)];
  const users = reactive(usersList);

  return { users };
}
</script>
