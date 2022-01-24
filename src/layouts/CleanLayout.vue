<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <setting-provider>
        <router-view />
      </setting-provider>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import SettingProvider from "components/SettingProvider.vue";

export default defineComponent({
  name: "CleanLayout",

  components: {
    SettingProvider,
  },
});
</script>
