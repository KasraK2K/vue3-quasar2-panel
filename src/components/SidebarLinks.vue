<template>
  <!-- START: Item -->
  <q-item
    v-if="!menuObject.submenu"
    clickable
    v-ripple
    :to="menuObject.component ? { name: menuObject.component } : ''"
    exact
  >
    <q-item-section avatar>
      <q-icon :name="menuObject.icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ menuObject.title }}</q-item-label>
      <q-item-label caption>{{ menuObject.caption }}</q-item-label>
    </q-item-section>
  </q-item>
  <!-- END: Item -->

  <!-- START: Expantion Item -->
  <q-expansion-item
    v-if="menuObject.submenu"
    :header-inset-level="0"
    :content-inset-level="0.5"
    expand-separator
    :icon="menuObject.icon"
    :label="menuObject.title"
    :caption="menuObject.caption"
  >
    <!-- START: Nested Submenu Items -->
    <template v-for="(menuItem, index) in menuObject.submenu" :key="index">
      <sidebar-links :menu-object="menuItem" />
    </template>
    <!-- END: Nested Submenu Items -->
  </q-expansion-item>
  <!-- END: Expantion Item -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarLinks",

  props: {
    menuObject: {
      type: Object,
      required: true,
    },
  },
});
</script>
