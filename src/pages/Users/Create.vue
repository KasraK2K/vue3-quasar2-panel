<template>
  <bread-crumbs :data="breadcrumbs" />
  <div class="q-ma-lg">
    <q-card class="q-pa-lg">
      <q-form @submit="onSubmit" @reset="onReset">
        <div class="q-col-gutter-x-md row items-star">
          <div class="col-12 col-md-6">
            <q-select
              outlined
              v-model.trim="user.source"
              :options="['mnt']"
              label="Source"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please select something',
              ]"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model.trim="user.name"
              label="Name *"
              lazy-rules
              :rules="[(val) => validation.isString(val) || 'Please type name']"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model.trim="user.email"
              label="Email *"
              lazy-rules
              :rules="[
                (val) => validation.isEmail(val) || 'Please type valid email',
              ]"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model.trim="user.password"
              label="Password *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type password',
              ]"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model.trim="user.access"
              label="Access *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type access',
              ]"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model.trim="user._user_id"
              label="User ID *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type user_id',
              ]"
            />
          </div>

          <div class="col-12">
            <q-input
              outlined
              v-model.trim="user.api_key"
              label="API Key *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type api_key',
              ]"
            />
          </div>
        </div>

        <div class="row">
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { validation } from "boot/validation";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { service } from "boot/service";

export default defineComponent({
  name: "CreateUser",

  components: {
    BreadCrumbs,
  },

  setup() {
    const $q = useQuasar();

    const breadcrumbs = [
      {
        label: "Dashboard",
        icon: "dashboard",
        component: "Dashboard",
      },
      {
        label: "Users",
        icon: "people",
        component: "UsersList",
      },
      {
        label: "Create User",
        icon: "add",
      },
    ];
    const user = ref({});

    const onSubmit = () => {
      service.user
        .create(user.value)
        .then((response) => {
          $q.notify({
            progress: true,
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
          user.value = {};
        })
        .catch((error) => {
          $q.notify({
            progress: true,
            color: "red-4",
            textColor: "white",
            icon: "cloud_off",
            message: "Error",
          });
        });
    };
    const onReset = () => {
      this.user.value = {};
    };

    return {
      breadcrumbs,
      user,
      onSubmit,
      onReset,
      validation,
    };
  },
});
</script>
