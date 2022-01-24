<template>
  <q-breadcrumbs class="q-mt-lg q-ml-lg">
    <q-breadcrumbs-el
      v-for="(item, index) in data"
      :key="index"
      :label="item.label"
      :icon="item.icon"
      :to="{ name: item.component }"
      :class="!item.component ? 'disabled' : 'text-primary text-bold'"
    />
  </q-breadcrumbs>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BreadCrumbs",

  props: {
    data: {
      type: Array,
      required: false,
    },
  },
});
</script>
