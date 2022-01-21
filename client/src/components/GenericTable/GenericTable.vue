<template>
  <div>
    <div class="border border-info rounded-2 overlay">
      <p v-if="title" class="bg-info text-white d-flex p-2 fw-bold">
        {{ title }}
      </p>
      <table class="table table-striped">
        <TableHeader v-bind:columns="columns" />
        <TableBody v-bind:data="data" v-bind:columns="columns" />
      </table>
      <div class="d-flex justify-content-end mb-2">
        <TablePagination
          v-bind:activePage="pagination.activePage"
          v-bind:totalPages="pagination.totalPages"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TableBody from "./TableBody.vue";
import TableHeader from "./TableHeader.vue";
import TablePagination from "./TablePagination.vue";

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
    pagination: {
      validator: function (object) {
        return object.totalPages && object.activePage;
      },
    },
  },
  components: {
    TableBody,
    TableHeader,
    TablePagination,
  },
  name: "GenericTable",
};
</script>

<style scoped>
.overlay {
  overflow: overlay;
}
</style>

