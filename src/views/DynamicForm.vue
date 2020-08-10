<template>
  <div>
    <section class="hero buefy-content">
      <div class="hero-head">
        <div class="container">
          <div class="box">
            <div class="title">Buefy</div>
            <div class="subtitle is-6">Dynmaic form</div>
            <form class="" v-on:submit.prevent="onSubmit">
              <!-- Dynamic Component -->
              <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
                <!--Component container-->
                <div class="input-item" v-for="(item, index) in configBuefy" :key="index">
                  <component
                    v-bind:is="`v-icell-${item.type}`"
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
                </div>

                <!-- Submit content-->
                <div class="submit-content">
                  <v-icell-button :type="'submit'" :label="'Submit'" :disabled="!formValidate.valid"> </v-icell-button>
                </div>
              </ValidationObserver>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="hero vuetify-content">
      <div class="hero-head">
        <div class="container">
          <div class="box">
            <div class="title">Vuetify</div>
            <div class="subtitle is-6">Dynamic form</div>
            <form class="" v-on:submit.prevent="onSubmit">
              <!-- Dynamic Component -->
              <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
                <!--Component container-->
                <div class="input-item" v-for="(item, index) in configVuetify" :key="index">
                  <component
                    v-bind:is="`v-icell-${item.type}`"
                    :ui="item.ui"
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
                </div>

                <!-- Submit content-->
                <div class="submit-content">
                  <v-icell-button :type="'submit'" :label="'Submit'" :disabled="!formValidate.valid"> </v-icell-button>
                </div>
              </ValidationObserver>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DynamicForm',
  data: () => {
    return {
      configBuefy: [
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
      ],

      configVuetify: [
        {
          type: 'input',
          ui: 'material',
          subType: 'text',
          label: 'Input',
          name: 'Name',
          required: true,
          disabled: false,
          value: ''
        },
        {
          type: 'select',
          ui: 'material',
          label: 'Select city',
          name: 'City',
          expanded: true,
          option: ['Budapest', 'Győr', 'Pécs', 'Miskolc', 'Szeged', 'Debrecen'],
          required: true,
          disabled: false,
          value: ''
        },
        {
          type: 'date',
          ui: 'material',
          label: 'Choose Date',
          required: false,
          disabled: false,
          value: ''
        },
        {
          ui: 'material',
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

<style scoped></style>
