<template>
  <section>
    <div class="columns">
      <div class="column is-6">
        <custom-autocomplete></custom-autocomplete>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import customAutoComplete from './components/custom-autocomplete/custom-autocomplete.vue';

  export default {
    components: {
      'custom-autocomplete': customAutoComplete,
    },
  };
</script>
