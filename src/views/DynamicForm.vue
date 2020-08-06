<template>
  <div class="dynamicFormComponent">
    <div class="container is-fluid">
      <div class="notification">
        <form class="fromContent box" v-on:submit.prevent="onSubmit">
          <!-- Dynamic Component -->
          <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
            <!--Component container-->
            <component
              v-for="(item, index) in config"
              v-bind:is="`v-${item.type}`"
              v-bind:key="index"
              :type="item.type"
              :label="item.label"
              :placeHolder="item.placeHolder"
              :value="item.value"
              :name="item.name"
              :option="item.option"
              :expanded="item.expanded"
              :disabled="item.disabled"
              :required="item.required"
            >
            </component>
            <!-- Submit content-->
            <div class="submit-content">
              <b-button tag="input" native-type="submit" :disabled="!formValidate.valid">Submit</b-button>
            </div>
          </ValidationObserver>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', required);
extend('length', length);

export default {
  name: 'DynamicForm',
  data: () => {
    return {
      config: [
        {
          type: 'input',
          label: 'Input',
          name: 'Name',
          placeHolder: 'Type name',
          required: true,
          value: '',
          disabled: false
        },
        {
          type: 'select',
          label: 'Select',
          name: 'City',
          expanded: true,
          placeHolder: 'Select city',
          option: ['Budapest', 'Győr', 'Pécs', 'Miskolc', 'Szeged', 'Debrecen'],
          required: true,
          disabled: false,
          value: ''
        },
        {
          type: 'date',
          label: 'Datepicker',
          placeHolder: 'Click to select',
          required: false,
          disabled: false,
          value: '' // new Date()
        },
        {
          type: 'datetime',
          label: 'Datetimepicker',
          placeHolder: 'Click to select',
          required: false,
          disabled: false,
          value: '' // new Date()
        },
        {
          type: 'checkbox',
          label: 'Checkbox',
          required: true,
          disabled: false,
          value: null
        }
      ]
    };
  },
  setup() {
    const onSubmit = () => {
      console.log('onSubmit');
    };
    return { onSubmit };
  }
};
</script>

<style scoped>
.input-item {
  padding-bottom: 10px;
}

.submit-content {
  padding-top: 15px;
}

.form-validate {
  padding-top: 15px;
}
</style>

<!-- Basic Component -->
<!--<ValidationObserver ref="observer" rules="required" v-slot="formValidate">
  &lt;!&ndash; Input content&ndash;&gt;
  <div class="item-content">
    <div class="input-item" v-for="(item, index) in config" v-bind:key="index">
      <ValidationProvider rules="required" v-slot="error">
        <b-field :label="item.label">
          <b-input
              :type="item.type"
              :placeholder="item.placeHolder"
              v-model="item.value"
          >
          </b-input>
        </b-field>
        <div>valid: {{ error.valid }}</div>
      </ValidationProvider>
    </div>
  </div>
  &lt;!&ndash; Submit content&ndash;&gt;
  <div class="submit-content">
    <b-button tag="input" native-type="submit" :disabled="!formValidate.valid">Submit</b-button>
  </div>
  <div class="form-validate">Form valid: {{ formValidate.valid }}</div>
</ValidationObserver>-->
