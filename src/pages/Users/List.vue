<template>
  <bread-crumbs :data="state.breadcrumbs" />
  <q-card class="q-ma-lg">
    <q-table
      :rows="state.rows"
      :columns="state.columns"
      row-key="name"
      :rows-per-page-options="[10, 20, 50, 100]"
    >
      <template v-slot:top>
        <div
          class="text-primary text-bold text-uppercase"
          style="font-size: 1.5em"
        >
          users
        </div>
        <q-space />
        <q-icon
          name="add"
          size="md"
          color="primary"
          class="pointer"
          @click="$router.push({ name: 'CreateUser' })"
        />
      </template>
    </q-table>
  </q-card>
</template>

<script>
import { defineComponent, reactive } from "vue";
import BreadCrumbs from "src/components/bread-crumbs.vue";
import useUserListHook from "./list-hook";

export default defineComponent({
  name: "UserList",

  components: {
    BreadCrumbs,
  },

  setup() {
    const state = reactive({});
    const hookReturn = useUserListHook(state);
    return { state, ...hookReturn };
  },
});
</script>
