<template>
  <q-page class="flex flex-center">
    <h1>Home Page {{ settings.company }}</h1>
  </q-page>
</template>

<script>
import { defineComponent, inject, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { USER, namespace } from "/src/store/constant";

export default defineComponent({
  name: "Dashboard",

  setup() {
    const settings = inject("settings");

    /* ---------------------------------- VUEX ---------------------------------- */
    const store = useStore();
    const setUser = (payload) =>
      store.dispatch(namespace(USER, USER.SET), payload);
    const getUser = computed(() => store.getters[namespace(USER, USER.GET)]);

    onMounted(() => {
      setUser({
        name: "John Doe",
      });
      const user = getUser.value;
    });

    return {
      settings,
      setUser,
      getUser,
    };
  },
});
</script>
