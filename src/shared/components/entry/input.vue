<template>
  <div class="inputComponent" :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <div class="label-content">
        <strong>{{ label }}</strong>
        <div class="required-icon" v-if="required">*</div>
      </div>
      <b-field>
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
    type: String,
    value: [String, Number, Object, Date],
    name: String,
    id: String,
    classes: String,
    label: String,
    labelFor: String,
    capitalize: String,
    customClass: String,
    placeHolder: String,
    validationPattern: Function,
    required: Boolean,
    disabled: Boolean
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

<style scoped>
.required-icon {
  margin-left: 5px;
  color: red;
}
.label-content {
  display: flex;
  align-content: center;
}
</style>
