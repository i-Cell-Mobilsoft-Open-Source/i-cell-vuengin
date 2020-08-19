<template>
  <div class="box">
    <div class="padding-content">
      <div class="title-content">
        <div class="title-label">Table</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting">
            code
            <!--<i class="mdi mdi-cog"></i>-->
          </span>

          <!--FOlyt köv!!-->
          <!--<button class="delete is-small"></button>-->
        </div>
      </div>

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

      <b-field grouped group-multiline>
        <div class="">
          <b-switch v-model="isBordered" :size="switcherClass">Bordered</b-switch>
        </div>
        <div class="">
          <b-switch v-model="isStriped" :size="switcherClass">Striped</b-switch>
        </div>
        <div class="">
          <b-switch v-model="isNarrowed" :size="switcherClass">Narrowed</b-switch>
        </div>
        <div class="">
          <b-switch v-model="isHoverable" :size="switcherClass">Hoverable</b-switch>
        </div>
        <div class="">
          <b-switch v-model="isFocusable" :size="switcherClass">Focusable</b-switch>
        </div>
        <div class="">
          <b-switch v-model="isLoading" :size="switcherClass">Spinner</b-switch>
        </div>
        <div class="">
          <b-switch v-model="isMobilCards" :size="switcherClass">Mobile cards</b-switch>
        </div>
      </b-field>
    </div>
    <b-collapse :animation="'none'" :open="isOpenSetting">
      <div class="collapse-container">
        <pre>{{ code }}</pre>
      </div>
    </b-collapse>
    <!--  <div class="data-content">
        <v-collapse
          class="collapse-container"
          :classes="'is-small'"
          :label="'show code'"
          :open="true"
          :hideLabel="'hide source'"
          :contentId="'basic-table'"
          :content="code"
        ></v-collapse>
      </div>-->
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { schema } from './schema';
import { data } from '../data';

const columns = [
  {
    field: 'id',
    label: 'ID'
    // width: '40'
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
      columns: columns,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      isMobilCards: true,
      isOpenSetting: false
    };
  },
  setup() {
    const switcherClass = 'is-small';
    const tabIndex = ref(0);
    const code = ref(schema);
    // const onTrigger = () => {};
    return {
      code,
      switcherClass,
      tabIndex
      // onTrigger
    };
  }
};
</script>
<style scoped></style>

<!--  <b-tabs v-model="tabIndex">
     <b-tab-item>
       item 1
     </b-tab-item>
     <b-tab-item>
       item 2
     </b-tab-item>
   </b-tabs>-->

<!--:selected="selected"-->
<!--@onSelectChange="selectChange($event)"-->

<!-- <b-button
   :class="`tag-btn ${tabIndex ? 'active' : ''}`"
   :type="'is-light'"
   :label="tabIndex ? '< back' : 'code'"
   :hovered="tabIndex"
   @click="onChangeTab">
 </b-button>-->
