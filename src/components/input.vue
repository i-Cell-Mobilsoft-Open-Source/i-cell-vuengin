<template>
  <div :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-field :label="label" :label-for="id">
        <b-input
          v-model="model"
          :type="type"
          :capitalize="capitalize"
          :custom-class="customClass"
          :label-for="labelFor"
          :disabled="disabled"
          :id="id"
          :name="name"
          :placeholder="placeHolder"
          :required="required"
          @input.native="onInputChange($event)"
        />
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-input',
  props: {
    ui: String,
    type: String,
    name: String,
    id: [String, Number],
    classes: String,
    label: String,
    labelFor: String,
    capitalize: String,
    customClass: String,
    placeHolder: String,
    validationPattern: Function,
    required: Boolean,
    disabled: Boolean,
    value: [String, Number, Object, Date]
  },
  setup(props: any, attr: any) {
    const model = ref(props.value);
    const isRequired = () => (props.required ? 'required' : '');
    const onInputChange = (ev: InputEvent) => {
      attr.emit('getInputAction', ev); // TODO: valueChange
    };
    return {
      isRequired,
      onInputChange,
      model
    };
  }
};
</script>
<style scoped></style>
