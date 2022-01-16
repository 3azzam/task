<template>
  <tbody>
    <tr v-for="(item, index) in data" v-bind:key="`${item}${index}`">
      <td v-for="(column, index2) in columns" v-bind:key="`${item}${index2}`">
        {{ item[column.reference] || "-" }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["columns", "data"],
  name: "TableBody",
};
</script>