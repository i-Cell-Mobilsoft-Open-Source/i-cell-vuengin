<template>
  <b-steps v-model="model" :animated="true" :rounded="true" :has-navigation="true" :label-position="'bottom'">
    <template v-for="item in steps">
      <b-step-item :step="item.i" :key="item.i" :label="item.label" :clickable="true">
        <h1 class="title has-text-centered">{{ item.text }}</h1>
        {{ item.desc }}
      </b-step-item>
    </template>

    <template v-if="customNavigation" slot="navigation" slot-scope="{ previous, next }">
      <b-button
        outlined
        type="is-danger"
        icon-pack="fas"
        icon-left="backward"
        :disabled="previous.disabled"
        @click.prevent="previous.action"
      >
        Previous
      </b-button>
      <b-button
        outlined
        type="is-success"
        icon-pack="fas"
        icon-right="forward"
        :disabled="next.disabled"
        @click.prevent="next.action"
      >
        Next
      </b-button>
    </template>
  </b-steps>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';
  import { BSteps } from 'buefy/src/components/steps';

  export default {
    name: 'v-icell-steps',
    components: {
      [BSteps.name]: BSteps,
    },
    props: {
      steps: Array,
      customNavigation: Boolean,
    },
    setup(props: any, attr: any) {
      const defaultValue = props.multiple ? [] : null;
      const model = props.value ? ref(props.value) : defaultValue;
      return {
        model,
      };
    },
  };
</script>

<style scoped></style>
