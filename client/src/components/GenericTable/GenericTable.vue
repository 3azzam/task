<template>
  <div>
    <SearchHeader />
    <div class="border border-info rounded-2 overlay">
      <p v-if="title" class="bg-info text-white d-flex p-2 fw-bold">
        {{ title }}
      </p>
      <table class="table table-striped">
        <TableHeader v-bind:columns="columns" />
        <TableBody v-bind:data="data" v-bind:columns="columns" />
      </table>
    </div>
  </div>
</template>

<script>
import SearchHeader from "./SearchHeader.vue";
import TableBody from "./TableBody.vue";
import TableHeader from "./TableHeader.vue";

export default {
  props: {
    title: { type: String, required: true },
    data: { type: Array },
    columns: {
      validator: function (object) {
        return (
          Array.isArray(object) &&
          object.every((item) => item.name && item.reference)
        );
      },
    },
  },
  components: {
    SearchHeader,
    TableBody,
    TableHeader,
  },
  name: "GenericTable",
};
</script>

<style scoped>
.overlay {
  overflow: overlay;
}
</style>

