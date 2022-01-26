<template>
  <bread-crumbs :data="state.breadcrumbs" />
  <div class="q-ma-lg">
    <q-card class="q-pa-lg">
      <q-form @submit="onSubmit" @reset="onReset">
        <div class="q-col-gutter-x-md row items-star">
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model.trim="state.name"
              label="Name *"
              lazy-rules
              :rules="[(val) => validation.isString(val) || 'Please type name']"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model.trim="state.email"
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
              v-model.trim="state.password"
              label="Password *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type password',
              ]"
            />
          </div>

          <!-- FIXME: add some checkbox as access CRUD permision -->
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
import { defineComponent, reactive } from "vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import userUserCreateHook from "./create-hook";

export default defineComponent({
  name: "CreateUser",

  components: {
    BreadCrumbs,
  },

  setup() {
    const state = reactive({});
    const hookReturn = userUserCreateHook(state);
    return {
      state,
      ...hookReturn,
    };
  },
});
</script>
