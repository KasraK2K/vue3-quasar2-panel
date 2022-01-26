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
              outlined
              label="Username or Email *"
              lazy-rules
              class="q-mb-md"
            />
            <q-input outlined type="password" label="Password *" lazy-rules />
          </div>
        </q-form>
        <div
          class="q-mt-md pointer text-primary"
          @click="$router.push({ name: 'Register' })"
        >
          Register a new account
        </div>
      </q-card-section>
      <!-- END: Form -->

      <q-card-section>
        <q-card-actions align="center">
          <q-btn color="primary">Submit</q-btn>
          <q-btn flat>Reset</q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>
