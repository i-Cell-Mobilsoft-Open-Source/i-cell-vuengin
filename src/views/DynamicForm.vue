<template>
  <div class="dynamicFormComponent">
    <div class="notification">
      <form class="fromContent box" v-on:submit.prevent="onSubmit">
        <!-- Dynamic Component -->
        <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
          <!--Component container-->
          <component
            v-for="(item, index) in config"
            v-bind:is="`v-icell-${item.type}`"
            v-bind:key="index"
            :type="item.subType"
            :value="item.value"
            :id="item.id"
            :capitalize="item.capitalize"
            :custom-class="item.customClass"
            :label="item.label"
            :placeHolder="item.placeHolder"
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
</template>

<script lang="ts">
export default {
  name: 'DynamicForm',
  data: () => {
    return {
      config: [
        {
          type: 'input',
          subType: 'text',
          label: 'Input',
          name: 'Name',
          placeHolder: 'Type name',
          required: true,
          disabled: false,
          value: ''
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
          required: true,
          disabled: false,
          value: '' // new Date()
        },
        {
          type: 'checkbox',
          label: 'Checkbox',
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
.submit-content {
  padding-top: 15px;
}
</style>
