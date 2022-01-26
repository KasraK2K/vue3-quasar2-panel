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
import SettingProvider from "src/components/setting-provider.vue";
import useAuthorization from "/src/hooks/use-authorization";

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
