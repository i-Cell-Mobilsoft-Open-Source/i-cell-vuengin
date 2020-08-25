<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Checkable</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>
          <span class="tag is-light" @click="isOpenData = !isOpenData" :class="isOpenData ? 'active' : ''">
            <i class="mdi mdi-code-greater-than"></i>
          </span>
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="table-content">
        <v-icell-table
          :data="data"
          :columns="columns"
          :checkable="checkable"
          :checked-rows="checkedRows"
          :header-checkable="headerCheckable"
          :checkbox-position="checkboxPosition"
          :is-row-checkable="isFirstRowDisabled ? onEnabledFirstRowCheckable : onDisabledFirstRowCheckable"
          @onCheckedChange="onCheckedChange"
        >
        </v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="setting-content">
          <b-field grouped group-multiline>
            <div class="">
              <b-switch v-model="checkable" :size="'is-small'">Checkable</b-switch>
            </div>
            <div class="">
              <b-switch v-model="headerCheckable" :size="'is-small'">Header checkable</b-switch>
            </div>
            <div class="">
              <b-switch @input="onCheckboxPosition(checkboxPosition)" :size="'is-small'"
                >Checkbox position:
                {{ checkboxPosition }}
              </b-switch>
            </div>
            <div class="">
              <b-switch v-model="isFirstRowDisabled" :size="'is-small'"
                >First row:
                {{ isFirstRowDisabled ? 'disable' : 'enable' }}
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
import { schema } from './schema';
import { data, columns } from '../data';

export default {
  data() {
    return {
      data: data,
      columns: columns,
      checkable: true,
      headerCheckable: true,

      isOpenSetting: false,
      isOpenCode: false,
      isOpenData: false,
      isCheckable: true,
      isFirstRowDisabled: true
    };
  },
  setup() {
    const code = ref(schema);
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
