<template>
  <ValidationProvider :rules="isRequired()" v-slot="">
    <b-field :label="label" :label-for="id">
      <b-select
        v-model="model"
        :id="id"
        :placeholder="placeholder"
        :expanded="expanded"
        :multiple="multiple"
        @input="onSelectChange($event)"
      >
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
    placeholder: String,
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

    const onSelectChange = (ev: InputEvent) => {
      attr.emit('valueChange', ev);
    };

    return {
      isRequired,
      onSelectChange,
      model
    };
  }
};
</script>

<style scoped></style>
