<template>
  <bread-crumbs :data="state.breadcrumbs" />
  <div class="q-ma-lg">
    <q-card class="q-pa-lg">
      <q-form @submit="onSubmit" @reset="onReset">
        <div
          class="text-primary text-bold text-capitalize q-mb-md"
          style="font-size: 1.5em"
        >
          Edit User
        </div>

        <div class="q-col-gutter-x-md row items-star">
          <!-- Name -->
          <div class="col-12 col-md-4">
            <q-input
              outlined
              v-model.trim="state.name"
              label="Name *"
              lazy-rules
              :rules="[(val) => validation.isString(val) || 'Please type name']"
            />
          </div>

          <!-- Email -->
          <div class="col-12 col-md-4">
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

          <!-- Password -->
          <div class="col-12 col-md-4">
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

          <!-- Access -->
          <div class="col-12 q-gutter-sm q-pb-md">
            <q-checkbox
              v-model="state.selection"
              :val="1"
              label="Read"
              color="primary"
            />
            <q-checkbox
              v-model="state.selection"
              :val="10"
              label="Write"
              color="primary"
            />
            <q-checkbox
              v-model="state.selection"
              :val="100"
              label="Update"
              color="primary"
            />
            <q-checkbox
              v-model="state.selection"
              :val="1000"
              label="Delete"
              color="primary"
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
import { defineComponent, reactive } from "vue";
import BreadCrumbs from "src/components/bread-crumbs.vue";
import userUserEditHook from "./edit-hook";

export default defineComponent({
  name: "EditUser",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  components: {
    BreadCrumbs,
  },

  setup(props) {
    const state = reactive({ id: props.id });
    const hookReturn = userUserEditHook(state);
    return {
      state,
      ...hookReturn,
    };
  },
});
</script>
