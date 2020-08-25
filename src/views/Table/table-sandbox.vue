<template>
  <section>
    <div class="columns">
      <div class="column is-6">
        <table-1></table-1>
      </div>
      <div class="column is-6">
        <table-2></table-2>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <table-3></table-3>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import table1 from './components/table1/table-1.vue';
import table2 from './components/table2/table-2.vue';
import table3 from './components/table3/table-3.vue';

export default {
  components: {
    'table-1': table1,
    'table-2': table2,
    'table-3': table3
  },
  setup() {
    return {};
  }
};
</script>
