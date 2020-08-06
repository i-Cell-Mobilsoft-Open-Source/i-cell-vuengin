<template>
  <div class="formsComponent">
    <div class="container is-fluid">
      <div class="notification">
        <div class="formGroupContent box">
          <v-form v-on:submit.prevent="onSubmit">
            <!-- Input content -->
            <!-- Valami miatt jobbra igazítja a labeleket.  -->
            <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
              <div class="input-item">
                <ValidationProvider rules="required" v-slot="nameValidate">
                  <v-text-field label="Name" v-model="formGroup.name" @input="onChange"> </v-text-field>
                  <div>valid: {{ nameValidate.valid }}</div>
                </ValidationProvider>
              </div>

              <div class="input-item">
                <ValidationProvider rules="required" v-slot="cityValidate">
                  <v-text-field label="City" v-model="formGroup.city" @input="onChange"> </v-text-field>
                  <div>valid: {{ cityValidate.valid }}</div>
                </ValidationProvider>
              </div>

              <!-- Submit content-->
              <div class="submit-content">
                <v-btn native-type="submit" :disabled="!formValidate.valid">Sumbit</v-btn>
              </div>
              <div class="form-validate">Form valid: {{ formValidate.valid }}</div>
            </ValidationObserver>
          </v-form>
        </div>
      </div>
      <div class="notification">
        <div class="debugger-content">
          Output:
          <pre>{{ formData }}</pre>
        </div>
      </div>
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
