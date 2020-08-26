<template>
  <section>
    <div class="columns">
      <div class="column is-12">
        <table-playground></table-playground>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <table-selection></table-selection>
      </div>
      <div class="column is-6">
        <table-checkable></table-checkable>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <table-sorting></table-sorting>
      </div>
      <div class="column is-6">
        <table-edit-columns></table-edit-columns>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <table-searchable></table-searchable>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <table-paginated></table-paginated>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <table-sticky></table-sticky>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import playgroundComponent from './components/table-playground/playground.vue';
import selectionComponent from './components/table-selection/selection.vue';
import checkableComponent from './components/table-checkable/checkable.vue';
import editColumnsComponent from './components/table-edit-columns/edit-columns.vue';
import searchableComponent from './components/table-searchable/searchable.vue';
import paginationComponent from './components/table-pagination/pagination.vue';
import sortingComponent from './components/table-sorting/sorting.vue';
import stickyComponent from './components/table-sticky/sticky.vue';

export default {
  components: {
    'table-playground': playgroundComponent,
    'table-selection': selectionComponent,
    'table-checkable': checkableComponent,
    'table-edit-columns': editColumnsComponent,
    'table-searchable': searchableComponent,
    'table-paginated': paginationComponent,
    'table-sorting': sortingComponent,
    'table-sticky': stickyComponent
  }
};
</script>
