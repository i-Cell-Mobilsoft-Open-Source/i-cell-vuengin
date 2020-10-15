<template>
  <b-field :label="label">
    <b-checkbox
      v-model="model"
      :true-value="trueValue"
      :false-value="falseValue"
      :disabled="disabled"
      :size="size"
      :indeterminate="indeterminate"
      :type="type"
      @input="onInput"
    >
      {{ model }}
    </b-checkbox>
  </b-field>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';
  import { BCheckbox } from 'buefy/src/components/checkbox';

  export default {
    name: 'v-icell-checkbox',
    components: {
      [BCheckbox.name]: BCheckbox,
    },
    props: {
      ui: String,
      label: String,
      type: String,
      indeterminate: Boolean,
      required: Boolean,
      disabled: Boolean,
      trueValue: String,
      falseValue: String,
      size: String,
      value: [Boolean, String, Number, Object],
    },
    setup(props: any, { emit }) {
      const model = props.value ? ref(props.value) : false;
      const isRequired = () => (props.required ? 'required' : '');
      const onInput = (value) => emit('input', value);
      return {
        isRequired,
        onInput,
        model,
      };
    },
  };
</script>

<style scoped></style>
