<template>
  <b-button :type="classes" :native-type="type" :disabled="disabled">{{ label }}</b-button>
</template>

<script>
  import { BButton } from 'buefy/src/components/button';

  export default {
    name: 'v-icell-button',
    components: {
      [BButton.name]: BButton,
    },
    props: {
      ui: String,
      classes: String,
      label: String,
      type: String,
      disabled: Boolean,
    },
    setup() {
      return {};
    },
  };
</script>

<style scoped></style>
