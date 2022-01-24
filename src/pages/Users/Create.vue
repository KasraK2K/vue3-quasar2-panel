<template>
  <div class="q-ma-lg">
    <q-card class="q-pa-lg">
      <q-form @submit="onSubmit" @reset="onReset">
        <div class="q-col-gutter-x-md row items-star">
          <div class="col col-md-6">
            <q-input
              outlined
              v-model.trim="user.firstName"
              label="First Name *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type something',
              ]"
            />
          </div>

          <div class="col col-md-6">
            <q-input
              outlined
              v-model.trim="user.lastName"
              label="Last Name *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type something',
              ]"
            />
          </div>

          <div class="col col-md-6">
            <q-input
              outlined
              v-model.trim="user.phoneNumber"
              label="Phone *"
              lazy-rules
              :rules="[
                (val) => validation.isString(val) || 'Please type something',
              ]"
            />
          </div>

          <div class="col col-md-6">
            <q-input
              outlined
              type="number"
              v-model.number="user.age"
              label="Your age *"
              lazy-rules
              :rules="[
                (val) => validation.isNumber(val) || 'Please type your age',
                (val) => validation.isAge(val) || 'Please type a real age',
              ]"
            />
          </div>
        </div>

        <div class="row">
          <q-toggle v-model="accept" label="I accept the license and terms" />
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

export default defineComponent({
  name: "CreateUser",

  setup() {
    const $q = useQuasar();

    const user = ref({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      age: null,
    });
    const accept = ref(false);
    const onSubmit = () => {
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    };
    const onReset = () => {
      user.value = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: null,
      };
      accept.value = false;
    };

    return {
      user,
      accept,
      onSubmit,
      onReset,
      validation,
    };
  },
});
</script>
