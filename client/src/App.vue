<template>
  <div id="app">
    <div v-if="showLoader" class="loading-screen">
      <Loader />
    </div>
    <div class="container pb-5">
      <SearchHeader v-bind:applyFilter="applyFilter" />
      <GenericTable
        title="Products"
        v-bind:data="ListData"
        v-bind:columns="columns"
        v-bind:pagination="meta"
      />
    </div>
  </div>
</template>

<script>
import SearchHeader from "./components/SearchHeader.vue";
import GenericTable from "./components/GenericTable/GenericTable.vue";
import Loader from "./components/Loader.vue";
// import { ListData, columns } from "./mockingData/tableData";
import axios from "axios";

export default {
  name: "App",
  components: {
    GenericTable,
    SearchHeader,
    Loader,
  },
  data: function () {
    return {
      ListData: [],
      columns: [],
      showLoader: false,
      meta: {
        activePage: 1,
        totalPages: 5,
      },
    };
  },
  methods: {
    constructOptionalFileds(filters) {
      const allowedFields = ["seller_count", "price"];
      const query = allowedFields
        .filter((key) => filters[key] === "yes")
        .join(",");
      return query.length ? `fields=${query}` : ``;
    },
    constructQueryFields(filters) {
      const allowedFields = ["q"];
      let query = "";
      allowedFields.forEach((key) => {
        query = filters[key] ? `${key}=${filters[key]}&` : "";
      });
      return query;
    },
    applyFilter(filters) {
      const query = `${this.constructQueryFields(
        filters
      )}${this.constructOptionalFileds(filters)}`;

      this.getProducts(query);
    },
    getProducts(searchQuery = "") {
      this.showLoader = true;
      axios
        .get(
          `${process.env.VUE_APP_BACK_END_API}/product/search?${searchQuery}`
        )
        .then((res) => {
          const { data } = res.data;
          this.showLoader = false;
          this.ListData = data;
          this.columns = [
            { name: "id", reference: (row) => row.id },
            { name: "name", reference: (row) => row.name },
            {
              name: "image",
              reference: (row) =>
                `<img style="width:50px;height:50px;border-radius:50%" src=${row.image} />`,
            },
            { name: "trademark", reference: (row) => row.trademark },
            { name: "manufactureres", reference: (row) => row.manufactureres },
          ];
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
.loading-screen {
  background-color: #1413138f;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
