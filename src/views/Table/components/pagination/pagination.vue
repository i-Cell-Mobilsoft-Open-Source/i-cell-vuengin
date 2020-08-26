<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Pagination</div>
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
        <v-icell-table
          :data="data"
          :columns="columns"
          :paginated="isPaginated"
          :pagination-simple="isPaginationSimple"
          :pagination-position="paginationPosition"
          :pagination-size="paginationSize"
          :per-page="perPage"
          :current-page="currentPage"
          @pageChange="onPageChange"
        >
        </v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="select-content"></div>
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-select v-model="perPage" :size="'is-small'">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
              </b-select>
            </div>

            <div class="settings-item">
              <b-select v-model="paginationPosition" :size="'is-small'">
                <option value="bottom">pagination: bottom</option>
                <option value="top">pagination: top</option>
                <option value="both">pagination: both</option>
              </b-select>
            </div>

            <div class="settings-item">
              <b-button :label="'Set page to 2'" :size="'is-small'" @click="currentPage = 2"> </b-button>
            </div>

            <div class="settings-item">
              <b-switch v-model="isPaginated" :size="'is-small'">
                Paginated
              </b-switch>
            </div>

            <div class="settings-item">
              <b-switch v-model="isPaginationSimple" :size="'is-small'">
                Pagination {{ !isPaginationSimple ? 'basic' : 'simple' }}
              </b-switch>
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
import { templateCode } from '@/views/Table/components/pagination/template-code';
import { dataBig, columnsBig } from '@/views/Table/components/data';

export default {
  data() {
    return {
      data: dataBig,
      columns: columnsBig,
      isOpenSetting: false,
      isOpenCode: false,

      isPaginated: true,
      isPaginationSimple: true,

      paginationPosition: 'bottom',
      paginationSize: 'is-small',
      perPage: 5
    };
  },
  setup() {
    const code = ref(templateCode);
    const currentPage = ref(1);

    const onPageChange = (page: number) => {
      currentPage.value = page;
    };
    return {
      code,
      currentPage,
      onPageChange
    };
  }
};
</script>
<style scoped></style>
