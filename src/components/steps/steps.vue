<template>
  <b-steps
    v-model="model"
    :animated="animated"
    :rounded="rounded"
    :has-navigation="hasnavigation"
    :label-position="labelposition"
    :type="type"
    :size="size"
    :destroy-on-hide="destroyonhide"
    :vertical="vertical"
    :mobile-mode="mobilemode"
    @input="onInput($event)"
  >
    <template v-for="item in steps">
      <b-step-item :key="item.i" :label="item.label" :clickable="item.clickable">
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
  import { configure } from 'vee-validate';

  export default {
    name: 'v-icell-steps',
    components: {
      [BSteps.name]: BSteps,
    },
    props: {
      value: Number,
      steps: Array,
      customNavigation: Boolean,
      animated: {
        type: Boolean,
        default: true,
      },
      rounded: {
        type: Boolean,
        default: true,
      },
      hasnavigation: {
        type: Boolean,
        default: true,
      },
      labelposition: {
        type: String,
        default: 'bottom',
      },
      type: {
        type: String,
        default: 'is-green',
      },
      size: {
        type: String,
        default: 'is-medium',
      },
      destroyonhide: {
        type: Boolean,
        default: true,
      },
      vertical: {
        type: Boolean,
        default: false,
      },
      position: {
        //szerintem ez nem annyira működik
        type: String,
        default: 'is-right',
      },
      mobilemode: {
        type: String,
        default: 'minimalist', //compact, null
      },
    },
    setup(props: any, attr: any) {
      const defaultValue = props.multiple ? [] : null;
      const model = props.value ? ref(props.value) : defaultValue;
      const onInput = (value: any) => {
        attr.emit('input', value);
      };

      return {
        onInput,
        model,
      };
    },
  };
</script>

<style scoped></style>
