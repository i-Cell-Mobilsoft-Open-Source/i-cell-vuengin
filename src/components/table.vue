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
    @select="onSelect"
    :columns="columns"
  >
  </b-table>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

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

    detailed: Boolean,
    checkable: Boolean,
    headerCheckable: Boolean,
    checkboxPosition: String,
    selected: Object,
    isRowSelectable: Function,
    customIsChecked: Function,
    isRowCheckable: Function,
    checkedRows: Array,
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
    const onSelect = (value: any) => {
      selectValue.value = value;
      attr.emit('onSelectChange', value);
    };
    return {
      onSelect,
      selectValue
    };
  }
};
</script>

<style scoped></style>
