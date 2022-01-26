<template>
  <slot />
</template>

<script>
import { defineComponent, provide, reactive } from "vue";

export default defineComponent({
  name: "SettingProvider",

  setup() {
    const settings = reactive({ company: "Embargo" });
    provide("settings", settings);
  },
});
</script>
