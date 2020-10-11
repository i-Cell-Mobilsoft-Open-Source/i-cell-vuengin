<template>
  <section>
    <div class="columns">
      <div class="column is-10">
        <custom-radiobutton></custom-radiobutton>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import customRadiobuttonComponent from './components/custom-radiobutton/custom-radiobutton.vue';

  export default {
    components: {
      'custom-radiobutton': customRadiobuttonComponent,
    },
  };
</script>
