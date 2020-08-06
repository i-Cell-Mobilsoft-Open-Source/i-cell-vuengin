<template>
  <div class="selectComponent">
    <ValidationProvider :rules="isRequired()" v-slot="error">
      <b-field :label="label">
        <b-select :placeholder="placeHolder" :expanded="expanded" v-model="model">
          <option v-for="(item, index) in option" :value="item" :key="index">{{ item }} </option>
        </b-select>
      </b-field>
      <div v-if="required">valid: {{ error.valid }}</div>
    </ValidationProvider>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-select',
  props: {
    label: String,
    placeHolder: String,
    name: String,
    option: Array,
    expanded: Boolean,
    value: String || Number || Object,
    required: Boolean,
    disabled: Boolean
  },
  setup(props: any) {
    const model = props.value ? ref(props.value) : null;
    const isRequired = () => (props.required ? 'required' : '');
    return {
      isRequired,
      model
    };
  }
};
</script>

<style scoped></style>
