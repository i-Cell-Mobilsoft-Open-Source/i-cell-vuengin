<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <div class="padding-content">
            <div class="title">Input</div>
            <v-icell-input
              :type="'text'"
              :label="'Falhasználó neve'"
              :name="'userName'"
              :placeHolder="'Felhasználó neve'"
              :value="formGroup.name"
            ></v-icell-input>
          </div>
          <v-collapse
            class="collapse-container"
            :classes="'is-small is-light'"
            :label="'show code'"
            :hideLabel="'hide source'"
            :contentId="'basic-table'"
            :content="code_SampleA"
          ></v-collapse>
        </div>

        <div class="box">
          <div class="padding-content">
            <div class="title">Input - Password</div>
            <v-icell-input
              :type="'password'"
              :label="'Jelszó'"
              :name="'password'"
              :placeHolder="'jelszó'"
              :value="formGroup.password"
            ></v-icell-input>
          </div>
          <v-collapse
            class="collapse-container"
            :classes="'is-small is-light'"
            :label="'show code'"
            :hideLabel="'hide source'"
            :contentId="'basic-table'"
            :content="code_SampleB"
          ></v-collapse>
        </div>
      </div>
    </div>
    {{ formGroup }}
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed } from '@vue/composition-api';

export default {
  name: 'InputComomentDemo',
  setup() {
    const formGroup = reactive({
      name: 'Béla',
      password: ''
    });

    const formData = computed(() => formGroup);

    const code_SampleA = ref(
      `<v-icell-input
        :type="'text'"
        :label="'Falhasználó neve'"
        :name="'userName'"
        :placeHolder="'Felhasználó neve'"
        :value="formGroup.name"
></v-icell-input>`
    );

    const code_SampleB = ref(
      `<v-icell-input
        :type="'password'"
        :label="'Jelszó'"
        :name="'password'"
        :placeHolder="'jelszó'"
        :value="formGroup.password"
></v-icell-input>`
    );

    return {
      formGroup,
      formData,
      code_SampleA,
      code_SampleB
    };
  }
};
</script>
