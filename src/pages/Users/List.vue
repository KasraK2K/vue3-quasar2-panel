<template>
  <bread-crumbs :data="breadcrumbs" />
  <q-card class="q-ma-lg">
    <q-table
      :rows="rows"
      :columns="columns"
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
import { defineComponent, onMounted, ref } from "vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import useUser from "./UserHook";

export default defineComponent({
  name: "UserList",

  components: {
    BreadCrumbs,
  },

  setup() {
    const breadcrumbs = [
      {
        label: "Dashboard",
        icon: "dashboard",
        component: "Dashboard",
      },
      {
        label: "Users",
        icon: "people",
        component: "",
      },
    ];
    const columns = [
      {
        name: "id",
        required: true,
        label: "ID",
        align: "left",
        field: "id",
        sortable: false,
      },
      {
        name: "name",
        required: true,
        label: "Name",
        align: "left",
        field: "name",
        sortable: true,
      },
      {
        name: "access",
        required: true,
        label: "Access",
        align: "left",
        field: "access",
        sortable: true,
      },
      {
        name: "password",
        required: true,
        label: "Password",
        align: "left",
        field: "password",
        sortable: true,
      },
    ];
    const rows = ref([]);

    onMounted(async () => {
      const { getUsers } = await useUser();
      const { users } = await getUsers();
      rows.value = users.data;
    });

    return {
      breadcrumbs,
      columns,
      rows,
    };
  },
});
</script>
