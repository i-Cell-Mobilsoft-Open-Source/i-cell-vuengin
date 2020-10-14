<template>
  <section>
    <div class="columns">
      <div class="column is-12">
        <custom-checkbox></custom-checkbox>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import customCheckBoxComponent from './components/custom-checkbox/custom-checkbox.vue';

  export default {
    components: {
      'custom-checkbox': customCheckBoxComponent,
    },
  };
</script>
