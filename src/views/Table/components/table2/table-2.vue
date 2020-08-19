<template>
  <div class="box">
    <div class="padding-content">
      <div class="title is-4">Table - Selection</div>
      <v-icell-table :data="data" :columns="columns" :selected="isSelected ? selectedValue : null" @onSelectChange="onSelectChange($event)">
      </v-icell-table>
      <div class="setting-content">
        <b-field grouped group-multiline>
          <div class="control">
            <b-switch v-model="isSelected" :size="'is-small'">Selected</b-switch>
          </div>
        </b-field>
      </div>
    </div>

    <div class="code-content">
      <v-collapse
        class="collapse-container"
        :classes="'is-small'"
        :label="'show code'"
        :hideLabel="'hide source'"
        :contentId="'basic-table'"
        :content="selectedValue"
      ></v-collapse>
    </div>

    <div class="code-content">
      <v-collapse
        class="collapse-container"
        :classes="'is-small'"
        :label="'show code'"
        :hideLabel="'hide source'"
        :contentId="'basic-table'"
        :content="code"
      ></v-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { schema } from '../table2/schema';
import { data } from '../data';

export const columns = [
  {
    field: 'id',
    label: 'ID',
    width: '40'
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
    label: 'Date'
  },
  {
    field: 'gender',
    label: 'Gender'
  }
];

export default {
  data() {
    return {
      data: data,
      columns: columns
    };
  },
  setup() {
    const code = ref(schema);
    const isSelected = ref(true);
    const selectedValue = ref(data[0]);
    const onSelectChange = (value: any) => {
      selectedValue.value = value;
    };
    return {
      code,
      selectedValue,
      isSelected,
      onSelectChange
    };
  }
};
</script>

<style scoped></style>
