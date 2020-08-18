<template>
  <div class="columns">
    <div class="column is-12">
      <table-1></table-1>
    </div>
  </div>
</template>

<script lang="ts">
import table1 from './components/table1/table-1.vue';
import Table2 from './components/table1/table-2.vue';

export default {
  components: {
    'table-1': table1
    // 'table-2': Table2
  },
  setup() {
    return {};
  }
};
</script>
