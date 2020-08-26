<template>
  <div :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-field :label="label" :type="fieldType" :label-for="id">
        <b-input
          v-model="model"
          :type="type"
          :capitalize="capitalize"
          :custom-class="customClass"
          :disabled="disabled"
          :id="id"
          :name="name"
          :placeholder="placeHolder"
          :loading="loading"
          :rounded="rounded"
          :size="size"
          :required="required"
          :expanded="expanded"
          :password-reveal="passwordReveal"
          @input.native="onInput($event)"
        />
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { BField } from 'buefy/src/components/field';
import { BInput } from 'buefy/src/components/input';

export default {
  components: {
    [BField.name]: BField,
    [BInput.name]: BInput
  },
  name: 'v-icell-input',
  props: {
    ui: String,
    fieldType: String,
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
    loading: Boolean,
    expanded: Boolean,
    rounded: Boolean,
    passwordReveal: Boolean,
    size: String,
    inputData: String,
    value: [String, Number, Object, Date]
  },
  setup(props: any, attr: any) {
    const model = ref(props.value);
    const isRequired = () => (props.required ? 'required' : '');
    const onInput = (ev: InputEvent) => {
      attr.emit('onInput', ev, model.value);
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
