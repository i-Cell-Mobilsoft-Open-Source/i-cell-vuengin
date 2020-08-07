<template>
  <div class="formsComponent">
    <div class="container is-fluid">
      <div class="notification">
        <div class="formGroupContent box">
          <form v-on:submit.prevent="onSubmit">
            <!-- Input content -->

            <v-app>
              <v-text-field label="First name" required></v-text-field>
            </v-app>
            <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
              <div class="input-item">
                <v-icell-input
                  :label="'Name'"
                  :type="'text'"
                  :placeholder="'Name'"
                  :required="true"
                  :value="formGroup.name"
                ></v-icell-input>
              </div>
              <div class="input-item">
                <v-icell-input
                  :label="'City'"
                  :placeholder="'City'"
                  :type="'text'"
                  :required="true"
                  :value="formGroup.city"
                ></v-icell-input>
              </div>
              <div class="input-item">
                <v-icell-input
                  :label="'Age'"
                  :placeholder="'age'"
                  :type="'number'"
                  :required="false"
                  :value="formGroup.age"
                ></v-icell-input>
              </div>
              <!-- Submit content-->
              <div class="submit-content">
                <b-button tag="input" native-type="submit" :disabled="!formValidate.valid">
                  Submit
                </b-button>
              </div>
            </ValidationObserver>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from '@vue/composition-api';

export default {
  name: 'Forms',
  setup() {
    const formGroup = reactive({
      name: 's',
      city: '',
      age: 0
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
.vuetifyContainer {
  opacity: 0.3;
}

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
