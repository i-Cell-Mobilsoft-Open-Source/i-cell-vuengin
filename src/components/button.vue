<template>
  <section>
    <template v-if="ui === 'material'">
      <v-app>
        <v-btn :disabled="disabled" :native-type="type" max-width="90px">
          {{ label }}
        </v-btn>
      </v-app>
    </template>
    <template v-else>
      <b-button :type="classes" :native-type="type" :disabled="disabled">
        {{ label }}
      </b-button>
    </template>
  </section>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    ui: String,
    classes: String,
    label: String,
    type: String,
    disabled: Boolean
  },
  setup() {
    return {};
  }
};
</script>

<style scoped></style>
