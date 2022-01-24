<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Embrago Panel</q-toolbar-title>

        <q-toggle
          v-model="isDark"
          @click="toggleDarkMode"
          class="q-mr-lg"
          color="white"
        />
        <q-icon
          name="logout"
          size="sm"
          class="pointer"
          @click="logOut"
        ></q-icon>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <sidebar-links
          v-for="(menuObject, index) in sidebarLinks"
          :key="index"
          :menu-object="menuObject"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <setting-provider>
        <router-view />
      </setting-provider>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import SettingProvider from "components/SettingProvider.vue";
import SidebarLinks from "src/components/SidebarLinks.vue";
import { useQuasar } from "quasar";

const linksList = [
  {
    title: "Dashboard",
    caption: "It shows some chart",
    icon: "dashboard",
    component: "Dashboard",
  },
  {
    title: "Users",
    caption: "List of users",
    icon: "people",
    component: "",
    submenu: [
      {
        title: "list",
        caption: "",
        icon: "list",
        component: "UsersList",
      },
    ],
  },
];

export default defineComponent({
  name: "DefaultLayout",

  components: {
    SettingProvider,
    SidebarLinks,
  },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      // TODO: Add settings.leftDrawer to Site Settings
    };
    const isDark = ref(false);
    const toggleDarkMode = reactive(() => {
      $q.dark.toggle();
      // TODO: Add settings.dark to Site Settings
    });

    const logOut = () => {
      $q.dialog({
        title: "Confirm",
        message: "Are you sure you want to exit?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        console.log("write exit code");
        $q.notify({
          color: "primary",
          message: "You Successfully Exit, Bye Bye",
        });
      });
    };

    return {
      sidebarLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer,
      isDark,
      toggleDarkMode,
      logOut,
    };
  },
});
</script>
