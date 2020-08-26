<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Selection</div>
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
          :selected="isSelected ? selectedValue : null"
          @onSelectChange="onSelectChange($event)"
        >
        </v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="isSelected" :size="'is-small'">Selected</b-switch>
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
            <pre>{{ selectedValue }}</pre>
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
import { data, columns } from '@/views/Table/components/data';

export default {
  data() {
    return {
      data: data,
      columns: columns,
      isOpenSetting: false,
      isOpenCode: false,
      isOpenData: false
    };
  },
  setup() {
    const code = ref(templateCode);
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
