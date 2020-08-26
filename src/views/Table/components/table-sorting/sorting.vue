<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Sorting</div>
        <div class="tags-content">
          <!--<span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>-->
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>
      <!-- Content -->
      <div class="table-content">
        <v-icell-table :data="data" :columns="columns"> </v-icell-table>
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
import { data, columnsSorting } from '@/views/Table/components/data';

export default {
  data() {
    return {
      data: data,
      columns: columnsSorting,
      isOpenSetting: false,
      isOpenCode: false
    };
  },
  setup() {
    const code = ref(templateCode);
    return {
      code
    };
  }
};
</script>
<style scoped></style>
