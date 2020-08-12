<template>
  <ValidationProvider :rules="isRequired()" v-slot="">
    <b-field :label="label" :label-for="id">
      <b-select v-model="model" :id="id" :placeholder="placeHolder" :expanded="expanded">
        <option v-for="(item, index) in option" :value="item" :key="index">
          {{ item }}
        </option>
      </b-select>
    </b-field>
  </ValidationProvider>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-select',
  props: {
    ui: String,
    label: String,
    id: [String, Number],
    placeHolder: String,
    name: String,
    option: Array,
    expanded: Boolean,
    required: Boolean,
    disabled: Boolean,
    value: [String, Number, Object, Array]
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
