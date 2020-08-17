<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <div class="padding-content">
            <div class="title">Input</div>
            <v-icell-input :name="'userName'" :placeHolder="'Felhasználó neve'" :value="'Jóska'"></v-icell-input>
          </div>
          <v-collapse
            class="collapse-container"
            :classes="'is-small is-light'"
            :label="'show code'"
            :hideLabel="'hide source'"
            :contentId="'basic-table'"
            :content="code"
          ></v-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const code = ref(
      '<template>\n' +
        '  <v-icell-input\n' +
        '    :name="userName"\n' +
        '    :placeHolder="Felhasználó neve">\n' +
        '    :value="Jóska"\n' +
        '  </v-icell-input>\n' +
        '</template>'
    );
    return {
      code
    };
  }
};
</script>
