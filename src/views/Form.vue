<template>
  <div class="formsComponent">
    <div class="container is-fluid">
      <div class="notification">
        <div class="formGroupContent box">
          <form v-on:submit.prevent="onSubmit">
            <!-- Input content -->
            <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
              <div class="input-item">
                <b-field label="Name">
                  <ValidationProvider rules="required" v-slot="nameValidate">
                    <b-input :type="'text'" :placeholder="'placeholder'" v-model="formGroup.name" @input="onChange"></b-input>
                    <div>valid: {{ nameValidate.valid }}</div>
                  </ValidationProvider>
                </b-field>
              </div>

              <div class="input-item">
                <b-field label="City">
                  <ValidationProvider rules="required" v-slot="cityValidate">
                    <b-input :type="'text'" :placeholder="'placeholder'" v-model="formGroup.city" @input="onChange"></b-input>
                    <div>valid: {{ cityValidate.valid }}</div>
                  </ValidationProvider>
                </b-field>
              </div>

              <!-- Submit content-->
              <div class="submit-content">
                <b-button tag="input" native-type="submit" :disabled="!formValidate.valid">Submit</b-button>
              </div>
              <!--<div class="form-validate">Form valid: {{ formValidate.valid }}</div>-->
            </ValidationObserver>
          </form>
        </div>
      </div>
      <!--<div class="debugger-content">
        Output:
        <pre>{{ formData }}</pre>
      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

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
    return {
      formGroup,
      formData,
      onChange,
      onSubmit
    };
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
