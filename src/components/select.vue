<template>
  <ValidationProvider :rules="isRequired()" v-slot="">
    <b-field :label="label" :label-for="id">
      <b-select placeholder="Select a name" v-model="model" :id="id" :expanded="expanded" :multiple="multiple" @input="onInput($event)">
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
    multiple: Boolean,
    value: [String, Number, Object, Array]
  },
  setup(props: any, attr: any) {
    const model = props.value ? ref(props.value) : [];
    const isRequired = () => (props.required ? 'required' : '');
    const onInput = (value: any) => {
      attr.emit('input', value);
    };

    return {
      isRequired,
      onInput,
      model
    };
  }
};
</script>

<style scoped></style>
