<template>
  <div class="checkboxComponent">
    <div class="label-content">
      <strong>{{ label }}</strong>
      <div class="required-icon" v-if="required">*</div>
    </div>
    <b-field>
      <b-checkbox :disabled="disabled" v-model="model">
        {{ model }}
      </b-checkbox>
    </b-field>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-checkbox',
  props: {
    label: String,
    type: String,
    required: Boolean,
    disabled: Boolean,
    value: Boolean || String || Number || Object
  },
  setup(props: any) {
    const model = props.value ? ref(props.value) : false;
    const isRequired = () => (props.required ? 'required' : '');
    return {
      isRequired,
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
