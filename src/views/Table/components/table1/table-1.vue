<template>
  <div class="box">
    <div class="padding-content">
      <div class="title is-4">Table - sandbox</div>
      <v-icell-table
        :data="data"
        :columns="columns"
        :bordered="isBordered"
        :striped="isStriped"
        :narrowed="isNarrowed"
        :loading="isLoading"
        :hoverable="isHoverable"
        :focusable="isFocusable"
        :selected="data[0]"
      >
      </v-icell-table>

      <div class="switcher-content">
        <b-field grouped group-multiline>
          <div class="control">
            <b-switch v-model="isBordered">Bordered</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="isStriped">Striped</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="isNarrowed">Narrowed</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="isHoverable">Hoverable</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="isFocusable">Focusable</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="isLoading">Loading</b-switch>
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
        :content="code"
      ></v-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { tableData } from './data';
import { tableCode } from './code';

export default {
  data() {
    return {
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      isSelected: 'selected',
      data: tableData,
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40'
          // numeric: true
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
          // centered: true
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
