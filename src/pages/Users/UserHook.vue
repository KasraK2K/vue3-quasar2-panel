<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { USER, namespace } from "/src/store/constant";
import { service } from "boot/service";

export default async function useUser() {
  const store = useStore();

  /* -------------------------------------------------------------------------- */
  /*                                Get all users                               */
  /* -------------------------------------------------------------------------- */
  async function getUsers() {
    await store.dispatch(namespace(USER, USER.SET_LIST));
    const usersList = store.getters[namespace(USER, USER.GET_LIST)];
    const users = reactive(usersList);
    return { users };
  }

  /* -------------------------------------------------------------------------- */
  /*                               Create new user                              */
  /* -------------------------------------------------------------------------- */
  async function createUser(data) {
    try {
      const response = await service.user.create(data);
      return { response };
    } catch (error) {
      return { error };
    }
  }

  return {
    getUsers,
    createUser,
  };
}
</script>
