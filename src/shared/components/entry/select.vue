<template>
  <div class="selectComponent">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <div class="label-content">
        <strong>{{ label }}</strong>
        <div class="required-icon" v-if="required">*</div>
      </div>
      <b-field>
        <b-select :placeholder="placeHolder" :expanded="expanded" v-model="model">
          <option v-for="(item, index) in option" :value="item" :key="index">{{ item }}</option>
        </b-select>
      </b-field>
    </ValidationProvider>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-select',
  props: {
    label: String,
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
