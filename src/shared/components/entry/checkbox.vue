<template>
  <div class="checkboxComponent">
    <template v-if="ui === 'material'">
      <v-app>
        <v-checkbox :label="label" v-model="model"></v-checkbox>
      </v-app>
    </template>

    <template v-else>
      <b-field :label="label">
        <b-checkbox :disabled="disabled" v-model="model">{{ model }} </b-checkbox>
      </b-field>
    </template>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-checkbox',
  props: {
    ui: String,
    label: String,
    type: String,
    required: Boolean,
    disabled: Boolean,
    value: Boolean || String || Number || Object
  },
  setup(props: any) {
    const model = props.value ? ref(props.value) : false;
    const isRequired = () => (props.required ? 'required' : '');
    return {
      isRequired,
      model
    };
  }
};
</script>

<style scoped>
.label-content {
  /*display: flex;*/
  /*align-content: center;*/
}
</style>
