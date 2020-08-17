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
      '<template>\n' +
        '  <v-icell-input\n' +
        '    :type="text"\n' +
        '    :label="Falhasználó neve"\n' +
        '    :name="userName"\n' +
        '    :placeHolder="Felhasználó neve">\n' +
        '    :value="formGroup.name"\n' +
        '  </v-icell-input>\n' +
        '</template>'
    );

    const code_SampleB = ref(
      '<template>\n' +
        '  <v-icell-input\n' +
        '    :type="password"\n' +
        '    :label="Jelszó"\n' +
        '    :name="password"\n' +
        '    :placeHolder="jelszó">\n' +
        '  </v-icell-input>\n' +
        '</template>'
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
