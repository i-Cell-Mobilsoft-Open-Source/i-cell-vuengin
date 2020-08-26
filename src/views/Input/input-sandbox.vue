<template>
  <section>
    <div class="columns">
      <div class="column is-6">
        <input-playground></input-playground>
      </div>
      <div class="column is-6">
        <input-password></input-password>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import playgroundComponent from './components/input-playground/input-playground.vue';
import passwordComponent from './components/input-password/input-password.vue';
// import checkableComponent from './components/table-checkable/table-checkable.vue';
// import editColumnsComponent from './components/table-edit-columns/table-edit-columns.vue';
// import searchableComponent from './components/table-searchable/table-searchable.vue';
// import paginationComponent from './components/table-pagination/table-pagination.vue';
// import sortingComponent from './components/table-sorting/table-sorting.vue';
// import stickyComponent from './components/table-sticky/table-sticky.vue';

export default {
  components: {
    'input-playground': playgroundComponent,
    'input-password': passwordComponent
  }
};
</script>
