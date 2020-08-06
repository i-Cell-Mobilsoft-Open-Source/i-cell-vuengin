<template>
  <div class="formsComponent">
    <div class="container is-fluid">
      <div class="notification">
        <div class="formGroupContent box">
          <b-form v-on:submit.prevent="onSubmit">
            <!-- Input content -->
            <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
              <b-form-group id="input-group-1" label="Name" label-for="input-1" description="Itt kell megadni a név mező értékét">
                <ValidationProvider rules="required" v-slot="nameValidate">
                  <b-form-input id="input-1" v-model="formGroup.name" type="text" required placeholder="placeholder"></b-form-input>
                  <div>valid: {{ nameValidate.valid }}</div>
                </ValidationProvider>
              </b-form-group>

              <b-form-group id="input-group-2" label="City" label-for="input-2" description="Itt kell megadni a város mező értkét">
                <ValidationProvider rules="required" v-slot="nameValidate">
                  <b-form-input id="input-2" v-model="formGroup.city" type="text" required placeholder="placeholder"></b-form-input>
                  <div>valid: {{ nameValidate.valid }}</div>
                </ValidationProvider>
              </b-form-group>
              <div class="submit-content">
                <b-button tag="input" native-type="submit" :disabled="!formValidate.valid">Submit </b-button>
              </div>
              <div class="form-validate">Form valid: {{ formValidate.valid }}</div>
            </ValidationObserver>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

extend('required', required);
extend('length', length);
import { computed, reactive } from '@vue/composition-api';

export default {
  name: 'Forms',

  setup() {
    const formGroup = reactive({
      name: '',
      city: ''
    });
    const formData = computed(() => formGroup);

    const onChange = () => {
      console.log('onChange: ', formGroup);
    };
    const onSubmit = () => {
      console.log('onSubmit: ', formGroup);
    };

    const nameState = computed(() => formGroup.name.length > 2);

    return {
      formGroup,
      formData,
      onChange,
      onSubmit,
      nameState
    };
  }

  /*
  computed: {
    nameState() {
      return this.formGroup.name.length > 2 ? true : false
    }
  },
  */
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
