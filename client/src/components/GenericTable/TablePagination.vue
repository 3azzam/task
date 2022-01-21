<template>
  <div class="pagination">
    <p v-if="pages.length > 1">&laquo;</p>
    <p
      v-for="page in pages"
      v-bind:key="page"
      @click="setActiveTab(page)"
      v-bind:class="page === active_page ? 'active' : ''"
    >
      {{ page }}
    </p>
    <p v-if="pages.length > 1">&raquo;</p>
  </div>
</template>
<script>
export default {
  props: ["activePage", "totalPages"],
  name: "TablePagination",
  data() {
    return {
      active_page: this.activePage,
    };
  },
  methods: {
    setActiveTab(index) {
      this.active_page = index;
    },
  },
  computed: {
    pages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1) || [];
    },
  },
};
</script>

<style scoped>
.pagination {
  display: inline-block;
}

.pagination p {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.pagination p.active {
  background-color: #4caf50;
  color: white;
}

.pagination p:hover:not(.active) {
  background-color: #ddd;
}
</style>