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
          class="text-primary text-bold text-capitalize"
          style="font-size: 1.5em"
        >
          Users List
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

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>

          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>

          <q-td key="access" :props="props">
            {{ props.row.access }}
          </q-td>

          <q-td key="password" :props="props">
            {{ props.row.password }}
          </q-td>

          <q-td key="options" :props="props">
            <q-btn
              flat
              icon="edit"
              color="secondary"
              class="q-px-sm"
              :to="{ name: 'EditUser', params: { id: props.row.id } }"
            />
            <q-btn flat icon="delete" color="negative" class="q-px-sm" />
          </q-td>
        </q-tr>
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
