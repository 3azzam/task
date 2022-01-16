<template>
  <thead>
    <tr>
      <th v-for="(column, index) in columns" v-bind:key="`${column.name}${index}`">
        {{ column.name }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: ["columns"],
  name: "TableColumns",
};
</script>

