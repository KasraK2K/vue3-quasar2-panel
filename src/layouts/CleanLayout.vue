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
import useAuth from "/src/hooks/useAuth";

export default defineComponent({
  name: "CleanLayout",

  components: {
    SettingProvider,
  },

  setup() {
    const { checkToken } = useAuth();
    checkToken();
  },
});
</script>
