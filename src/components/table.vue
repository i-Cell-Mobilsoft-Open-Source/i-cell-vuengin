<template>
  <b-table :data="data" :bordered="bordered" :columns="columns"> </b-table>
</template>

<script>
export default {
  name: 'v-table',
  props: {
    data: Array,
    columns: Array,
    bordered: Boolean
  },
  setup() {
    return {};
  }
};
</script>

<style scoped></style>
