<template>
  <div class="datePickerComponent">
    <ValidationProvider :rules="isRequired()" v-slot="error">
      <b-field :label="label">
        <b-datepicker
          v-model="model"
          :show-week-number="false"
          :placeholder="placeHolder"
          :disabled="disabled"
          icon="calendar-today"
          trap-focus
        >
        </b-datepicker>
      </b-field>
      <div v-if="required">valid: {{ error.valid }}</div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-date',
  props: ['label', 'placeHolder', 'required', 'value', 'disabled'],
  /* props: {
    label: String,
    placeHolder: String,
    required: Boolean,
    disabled: Boolean,
    value: String || Date
  },
  */
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
