<template>
  <div class="dateTimePickerComponent">
    <ValidationProvider :rules="isRequired()" v-slot="error">
      <b-field :label="label">
        <b-datetimepicker
          v-model="model"
          :show-week-number="false"
          :placeholder="placeHolder"
          :disabled="disabled"
          icon="calendar-today"
          trap-focus
        >
        </b-datetimepicker>
      </b-field>
      <div v-if="required">valid: {{ error.valid }}</div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-datetime',
  props: ['label', 'placeHolder', 'required', 'value', 'disabled'],
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
