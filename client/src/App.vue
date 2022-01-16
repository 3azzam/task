<template>
  <div id="app">
    <div class="container">
      <GenericTable
        title="Products"
        v-bind:data="ListData"
        v-bind:columns="columns"
      />
    </div>
  </div>
</template>

<script>
import GenericTable from "./components/GenericTable/GenericTable.vue";
import { ListData, columns } from "./mockingData/tableData";

export default {
  name: "App",
  components: {
    GenericTable,
  },
  data: function () {
    return {
      ListData,
      columns,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
