<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Playground</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>

      <!-- Table -->
      <div class="table-content">
        <v-icell-table
          :data="data"
          :columns="columns"
          :bordered="isBordered"
          :striped="isStriped"
          :narrowed="isNarrowed"
          :loading="isLoading"
          :hoverable="isHoverable"
          :focusable="isFocusable"
          :mobileCards="isMobilCards"
        >
        </v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="isBordered" :size="switcherClass">Bordered</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="isStriped" :size="switcherClass">Striped</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="isNarrowed" :size="switcherClass">Narrowed</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="isHoverable" :size="switcherClass">Hoverable</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="isFocusable" :size="switcherClass">Focusable</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="isLoading" :size="switcherClass">Spinner</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="isMobilCards" :size="switcherClass">Mobile cards</b-switch>
            </div>
          </b-field>
        </div>
      </b-collapse>
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
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      isMobilCards: true,

      isOpenSetting: false,
      isOpenCode: false,
      isOpenData: false
    };
  },
  setup() {
    const switcherClass = 'is-small';
    const tabIndex = ref(0);
    const code = ref(templateCode);
    return {
      code,
      switcherClass,
      tabIndex
    };
  }
};
</script>
<style scoped></style>
