<template>
  <section>
    <div class="columns">
      <div class="column is-6">
        <select-single></select-single>
      </div>
      <div class="column is-6">
        <select-multi></select-multi>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import selectSingleComponent from './components/select-single/select-single.vue';
import selectMultiSingleComponent from './components/select-multi/select-multi.vue';

export default {
  components: {
    'select-single': selectSingleComponent,
    'select-multi': selectMultiSingleComponent
  }
};
</script>
