<template>
  <div class="flex justify-center items-center" style="height: 100vh">
    <q-card bordered style="width: 400px">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6 text-grey">Login</div>
          </div>
        </div>
      </q-card-section>

      <!-- START: Form -->
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="q-col-gutter-x-md items-star">
            <q-input
              v-model.trim="state.userName"
              outlined
              label="Username or Email *"
              lazy-rules
              class="q-mb-md"
            />
            <q-input
              v-model.trim="state.password"
              outlined
              type="password"
              label="Password *"
              lazy-rules
            />
          </div>

          <q-card-actions align="center" class="q-mt-md">
            <q-btn color="primary" type="submit" label="Login" />
            <q-btn flat label="Reset" type="reset" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import useLoginHook from "./login-hook";

export default defineComponent({
  name: "Login",
  setup() {
    const state = reactive({});
    const hookReturn = useLoginHook(state);
    return { state, ...hookReturn };
  },
});
</script>
