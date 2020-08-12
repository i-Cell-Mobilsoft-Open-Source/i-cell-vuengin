<template>
  <div :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-field :label="label" :label-for="id">
        <b-datepicker
          icon="calendar-today"
          v-model="model"
          :show-week-number="false"
          :placeholder="placeHolder"
          :disabled="disabled"
          @input="onInputChange($event)"
          trap-focus
        >
        </b-datepicker>
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-date',
  props: ['ui', 'label', 'placeHolder', 'required', 'value', 'disabled', 'classes', 'id'],
  data: () => ({
    menu: false,
    modal: false,
    menu2: false
  }),
  setup(props: any, attr: any) {
    const model = props.value ? ref(props.value) : null;
    const isRequired = () => (props.required ? 'required' : '');
    const onInputChange = (ev: InputEvent) => {
      attr.emit('getDateTimeAction', ev); // TODO: valueChange
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
