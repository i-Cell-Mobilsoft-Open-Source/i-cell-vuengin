<template>
  <div class="dateTimePickerComponent" :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <div class="label-content">
        <strong>{{ label }}</strong>
        <div class="required-icon" v-if="required">*</div>
      </div>
      <b-field>
        <b-datetimepicker
          v-model="model"
          :show-week-number="false"
          :placeholder="placeHolder"
          :disabled="disabled"
          icon="calendar-today"
          @input="onInputChange($event)"
          trap-focus
        >
        </b-datetimepicker>
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-datetime',
  props: ['label', 'placeHolder', 'required', 'value', 'disabled', 'classes'],
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
