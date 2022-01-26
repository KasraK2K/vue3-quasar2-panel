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
import useAuthorization from "/src/hooks/useAuthorization";

export default defineComponent({
  name: "CleanLayout",

  components: {
    SettingProvider,
  },

  setup() {
    const { checkToken } = useAuthorization();
    checkToken();
  },
});
</script>
