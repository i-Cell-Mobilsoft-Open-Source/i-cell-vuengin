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
          :month-names="hungaryMonthNames"
          :day-names="huungaryDayNames"
          :first-day-of-week="1"
          @input="onInputChange($event)"
          @change-month="onChangeMonth($event)"
          @change-year="onChangeYear($event)"
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
  setup(props: any, attr: any) {
    const hungaryMonthNames = [
      'Január',
      'Február',
      'Március',
      'Április',
      'Május',
      'Június',
      'Júlis',
      'Augusztus',
      'Szeptember',
      'Október',
      'November',
      'December'
    ];
    const huungaryDayNames = ['V', 'H', 'K', 'Sze', 'C', 'P', 'Szo'];
    const model = props.value ? ref(props.value) : null;
    const isRequired = () => (props.required ? 'required' : '');

    const onInputChange = (ev: InputEvent) => {
      attr.emit('valueChange', ev); // TODO: valueChange
    };

    const onChangeMonth = (month: number) => {
      attr.emit('changeMonth', month);
    };

    const onChangeYear = (year: number) => {
      attr.emit('changeYear', year);
    };

    return {
      huungaryDayNames,
      hungaryMonthNames,
      isRequired,
      onInputChange,
      onChangeMonth,
      onChangeYear,
      model
    };
  }
};
</script>

<style scoped></style>
