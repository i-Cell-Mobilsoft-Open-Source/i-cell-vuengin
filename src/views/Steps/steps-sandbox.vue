<template>
  <section>
    <div class="columns">
      <div class="column is-12">
        <custom-steps></custom-steps>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import customStepsSingleComponent from './components/custom-steps/custom-steps.vue';

  export default {
    components: {
      'custom-steps': customStepsSingleComponent,
    },
  };
</script>
