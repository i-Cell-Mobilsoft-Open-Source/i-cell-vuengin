<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Edit columns</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="table-content">
        <v-icell-table :data="data" :columns="columns"> </v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item" v-for="(column, index) in columns" :key="index">
              <b-switch v-model="column.visible" :size="'is-small'">
                {{ column.label }}
              </b-switch>
            </div>
          </b-field>
        </div>
      </b-collapse>
    </div>

    <!-- Data -->
    <div class="data-content">
      <div class="code-content">
        <b-collapse :open="isOpenData">
          <div class="collapse-container">
            <pre>{{ checkedRows }}</pre>
          </div>
        </b-collapse>
      </div>
    </div>

    <!-- Code -->
    <div class="code-content">
      <b-collapse :open="isOpenCode">
        <div class="collapse-container">
          <pre>{{ code }}</pre>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { templateCode } from './template-code';
import { data, columnsEdit } from '@/views/Table/components/data';

export default {
  data() {
    return {
      data: data,
      columns: columnsEdit,
      isOpenSetting: false,
      isOpenCode: false,
      isOpenData: false
    };
  },
  setup() {
    const code = ref(templateCode);
    const checkedRows = ref([data[0], data[2]]);
    const checkboxPosition = ref('left');
    const onCheckedChange = (value: any) => {
      checkedRows.value = value;
    };
    const onCheckboxPosition = (value: string) => {
      checkboxPosition.value = value === 'left' ? 'right' : 'left';
    };
    const onEnabledFirstRowCheckable = (row: any) => {
      return row.id !== 0;
    };
    const onDisabledFirstRowCheckable = (row: any) => {
      return row.id !== 1; // first row = data[0].id
    };
    return {
      code,
      checkedRows,
      checkboxPosition,
      onCheckedChange,
      onCheckboxPosition,
      onEnabledFirstRowCheckable,
      onDisabledFirstRowCheckable
    };
  }
};
</script>
<style scoped></style>
