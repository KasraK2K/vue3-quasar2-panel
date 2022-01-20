<template>
  <q-page class="flex flex-center">
    <h1>Home Page {{ settings.company }}</h1>
  </q-page>
</template>

<script>
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "Dashboard",

  setup() {
    const settings = inject("settings");
    return { settings };
  },
});
</script>
