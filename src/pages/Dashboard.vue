<template>
  <q-page class="flex flex-center">
    <h1>Home Page {{ settings.company }}</h1>
  </q-page>
</template>

<script>
import { defineComponent, inject, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { USER, namespace } from "/src/store/constant";
import useUsers from "/src/hooks/useUsers";

export default defineComponent({
  name: "Dashboard",

  setup() {
    const settings = inject("settings");
    const store = useStore();
    const setUser = (payload) =>
      store.dispatch(namespace(USER, USER.SET), payload);
    const getUser = computed(() => store.getters[namespace(USER, USER.GET)]);

    onMounted(async () => {
      setUser({
        name: "John Doe",
      });
      const user = getUser.value;
      console.log("vuex user", user);

      const { users } = await useUsers();
      console.log("users", users.value);
    });

    return {
      settings,
      setUser,
      getUser,
    };
  },
});
</script>
