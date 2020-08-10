<template>
  <div>
    <section class="hero buefy-content">
      <div class="hero-head">
        <div class="container">
          <div class="box">
            <div class="title">Buefy</div>
            <div class="subtitle is-6">Form</div>
            <form v-on:submit.prevent="onSubmit">
              <!-- Input content -->
              <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
                <div class="input-item">
                  <v-icell-date :label="'Date'" :placeHolder="'Choose date'" :value="formGroup.date" :required="false"></v-icell-date>
                </div>

                <div class="input-item">
                  <v-icell-datetime
                    :label="'Datetime'"
                    :placeHolder="'Choose datetime'"
                    :value="formGroup.dateTime"
                    :required="false"
                  ></v-icell-datetime>
                </div>

                <div class="input-item">
                  <v-icell-input
                    :label="'Text'"
                    :type="'text'"
                    :placeHolder="'Text'"
                    :required="true"
                    :value="formGroup.text"
                  ></v-icell-input>
                </div>
                <div class="input-item">
                  <v-icell-input
                    :label="'Number'"
                    :placeHolder="'Number'"
                    :type="'number'"
                    :value="formGroup.number"
                    :required="false"
                  ></v-icell-input>
                </div>

                <div class="input-item">
                  <v-icell-select
                    :label="'Select'"
                    :option="['Budapest', 'Győr', 'Pécs', 'Miskolc', 'Szeged', 'Debrecen']"
                    :expanded="true"
                    :placeHolder="'Select'"
                    :value="formGroup.select"
                    :required="false"
                  ></v-icell-select>
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
            <div class="subtitle is-6">Form</div>
            <form v-on:submit.prevent="onSubmit">
              <!-- Input content -->
              <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
                <div class="input-item">
                  <v-icell-date :ui="'material'" :label="'Date'" :value="formGroup.date" :required="false"></v-icell-date>
                </div>

                <div class="input-item">
                  <v-icell-select
                    :ui="'material'"
                    :label="'Select'"
                    :option="['Budapest', 'Győr', 'Pécs', 'Miskolc', 'Szeged', 'Debrecen']"
                    :value="formGroup.select"
                    :expanded="true"
                    :required="false"
                  ></v-icell-select>
                </div>

                <div class="input-item">
                  <v-icell-input :ui="'material'" :label="'Text'" :type="'text'" :required="true" :value="formGroup.text"></v-icell-input>
                </div>

                <div class="input-item">
                  <v-icell-input
                    :ui="'material'"
                    :label="'Number'"
                    :type="'number'"
                    :value="formGroup.number"
                    :required="false"
                  ></v-icell-input>
                </div>

                <!-- Submit content-->
                <div class="submit-content">
                  <v-icell-button :ui="'material'" :type="'submit'" :label="'Submit'" :disabled="!formValidate.valid"> </v-icell-button>
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
import { computed, reactive } from '@vue/composition-api';

export default {
  name: 'Forms',
  setup() {
    const formGroup = reactive({
      text: '',
      number: 0,
      select: '',
      date: '',
      dateTime: ''
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
