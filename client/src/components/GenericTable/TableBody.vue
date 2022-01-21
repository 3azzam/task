<template>
  <tbody>
    <tr v-for="(item, index) in data" v-bind:key="`${item}${index}`">
      <td
        v-html="column.reference(item)"
        v-for="(column, index2) in columns"
        v-bind:key="`${item}${index2}`"
      >
        {{ column.reference(item) }}
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