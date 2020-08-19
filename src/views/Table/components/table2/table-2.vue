<template>
  <div class="box">
    <div class="padding-content">
      <div class="title is-4">Basic</div>
      <v-icell-table :data="data" :bordered="false" :columns="columns"> </v-icell-table>
    </div>
    <v-collapse
      class="collapse-container"
      :classes="'is-small'"
      :label="'show code'"
      :hideLabel="'hide source'"
      :contentId="'basic-table'"
      :content="code"
    ></v-collapse>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { tableData } from './data';
import { tableCode } from './code';

export default {
  data() {
    return {
      data: tableData,
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'first_name',
          label: 'First Name'
        },
        {
          field: 'last_name',
          label: 'Last Name'
        },
        {
          field: 'date',
          label: 'Date',
          centered: true
        },
        {
          field: 'gender',
          label: 'Gender'
        }
      ]
    };
  },
  setup() {
    const code = ref(tableCode);
    return {
      code
    };
  }
};
</script>

<style scoped></style>
