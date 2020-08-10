<template>
  <ValidationProvider :rules="isRequired()" v-slot="">
    <!--<template v-if="ui === 'boostrap'">
    </template>-->

    <template v-if="ui === 'material'">
      <v-app>
        <v-select
          v-model="model"
          :label="label"
          :placeholder="placeHolder"
          :items="option"
          :id="id"
          :rules="isRequired() ? [!!model || isRequired()] : []"
        ></v-select>
      </v-app>
    </template>

    <template v-else>
      <b-field :label="label" :label-for="id">
        <b-select v-model="model" :id="id" :placeholder="placeHolder" :expanded="expanded">
          <option v-for="(item, index) in option" :value="item" :key="index">
            {{ item }}
          </option>
        </b-select>
      </b-field>
    </template>
  </ValidationProvider>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-select',
  props: {
    ui: String,
    label: String,
    id: [String, Number],
    placeHolder: String,
    name: String,
    option: Array,
    expanded: Boolean,
    required: Boolean,
    disabled: Boolean,
    value: [String, Number, Object, Array]
  },
  setup(props: any) {
    const model = props.value ? ref(props.value) : null;
    const isRequired = () => (props.required ? 'required' : '');
    return {
      isRequired,
      model
    };
  }
};
</script>

<style scoped>
.required-icon {
  margin-left: 5px;
  color: red;
}

.label-content {
  display: flex;
  align-content: center;
}
</style>
