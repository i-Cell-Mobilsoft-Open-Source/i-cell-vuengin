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

export default {
  components: {
    'input-playground': playgroundComponent,
    'input-password': passwordComponent
  }
};
</script>
