<template>
  <div id="app" class="container">
    <section>
      <v-icell-input
        :type="'text'"
        :label="'Karosszéria lakatos neve'"
        :value="'Tóth Béla'"
        :placeHolder="'Ide írd be a nevet légy oly kedves'"
        :required="true"
      ></v-icell-input>
    </section>
  </div>
</template>
<script lang="ts">
  import { computed, reactive } from '@vue/composition-api';

  export default {
    name: 'BuefyCompoents',
    setup() {
      const formGroup = reactive({
        name: '',
      });
      const formData = computed(() => formGroup);
      return {
        formGroup,
        formData,
      };
    },
  };
</script>
