<template>
  <b-table
    :data="data"
    :bordered="bordered"
    :striped="striped"
    :hoverable="hoverable"
    :focusable="focusable"
    :loading="loading"
    :narrowed="narrowed"
    :mobile-cards="mobileCards"
    :selected="selected ? selectValue : {}"
    :checkable="checkable"
    :checkbox-position="checkboxPosition"
    :checked-rows="checkedRows ? checkedRowsValue : []"
    :is-row-checkable="isRowCheckable"
    :header-checkable="headerCheckable"
    @select="onSelect"
    @check="onCheck"
  >
    <!--:columns="columns"-->
    <template v-slot="props">
      <template v-for="(column, index) in columns">
        <b-table-column :key="index" :field="column.field" :label="column.label" :searchable="column.searchable" :visible="column.visible">
          {{ props.row[column.field] }}
        </b-table-column>
      </template>
    </template>
  </b-table>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
// onUpdated, onUnmounted, watchEffect
export default {
  name: 'v-table',
  props: {
    data: Array,
    columns: Array,

    bordered: Boolean,
    striped: Boolean,
    narrowed: Boolean,
    hoverable: Boolean,
    loading: Boolean,
    focusable: Boolean,

    /* Checkbox */
    detailed: Boolean,
    checkable: Boolean,
    checkboxPosition: String,
    checkedRows: Array,
    isRowCheckable: Function,
    headerCheckable: Boolean,
    customIsChecked: Function,

    /* Select */
    selected: Object,
    isRowSelectable: Function,

    mobileCards: Boolean,
    defaultSort: [String, Array],
    defaultSortDirection: String,
    sortIcon: String,
    sortIconSize: String,
    sortMultiple: Boolean,
    sortMultipleData: Array,
    sortMultipleKey: String,
    paginated: Boolean,
    currentPage: Number,
    perPage: [Number, String],
    showDetailIcon: Boolean,
    paginationSimple: Boolean,
    paginationSize: String,
    paginationPosition: String,
    backendSorting: Boolean,
    backendFiltering: Boolean,
    rowClass: Function,
    openedDetailed: Array,
    hasDetailedVisible: Function,
    detailKey: String,
    customDetailRow: Boolean,
    backendPagination: Boolean,
    total: [Number, String],
    iconPack: String,
    mobileSortPlaceholder: String,
    customRowKey: String,
    draggable: Boolean,
    scrollable: Boolean,
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String,
    stickyHeader: Boolean,
    height: [Number, String],
    filtersEvent: String,
    cardLayout: Boolean
  },

  setup(props: any, attr: any) {
    const selectValue = ref(props.selected);
    const checkedRowsValue = ref(props.checkedRows);

    const onSelect = (value: any) => {
      selectValue.value = value;
      attr.emit('onSelectChange', value);
    };
    const onCheck = (value: any) => {
      checkedRowsValue.value = value;
      attr.emit('onCheckedChange', value);
    };

    return {
      onSelect,
      onCheck,
      selectValue,
      checkedRowsValue
    };
  }
};
</script>

<style scoped></style>

<!-- onUpdated(() => {});-->
<!-- onUnmounted(() => {});-->
<!--
const stopWatchEffect = watchEffect(() => {
if (props.selected) {
selectValue.value = props.selected;
}
});-->
