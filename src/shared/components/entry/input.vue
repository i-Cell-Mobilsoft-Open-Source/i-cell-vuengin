<template>
  <div class="inputComponent">
    <ValidationProvider :rules="isRequired()" v-slot="error">
      <b-field :label="label">
        <b-input :type="type" :placeholder="placeHolder" v-model="model" :disabled="disabled"> </b-input>
      </b-field>
      <div v-if="required">valid: {{ error.valid }}</div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-input',
  props: {
    label: String,
    type: String,
    placeHolder: String,
    name: String,
    value: String || Number || Object,
    required: Boolean,
    disabled: Boolean
  },
  setup(props: any) {
    const model = ref(props.value);
    const isRequired = () => (props.required ? 'required' : '');
    return {
      isRequired,
      model
    };
  }
};
</script>

<style scoped></style>
