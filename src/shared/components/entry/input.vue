<template>
  <div class="inputComponent" :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="error">
      <template v-if="ui === 'material'">
        <v-app>
          <v-text-field
            v-model="model"
            :type="type"
            :label="label"
            :disabled="disabled"
            :placeholder="placeHolder"
            :rules="isRequired() ? [!!model || isRequired()] : []"
          ></v-text-field>
        </v-app>
      </template>

      <template v-if="!ui">
        <b-field :label="label" :label-for="id" :type="setFieldType(error)">
          <b-input
            v-model="model"
            :type="type"
            :capitalize="capitalize"
            :custom-class="customClass"
            :label-for="labelFor"
            :disabled="disabled"
            :id="id"
            :name="name"
            :placeholder="placeHolder"
            :required="required"
            @input.native="onInputChange($event)"
          />
        </b-field>
      </template>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';

  export default {
    name: 'v-icell-input',
    props: {
      ui: String,
      type: String,
      value: [String, Number, Object, Date],
      name: String,
      id: [String, Number],
      classes: String,
      label: String,
      labelFor: String,
      capitalize: String,
      customClass: String,
      placeHolder: String,
      validationPattern: Function,
      required: Boolean,
      disabled: Boolean,
      labeltype: String, //is-danger, is-success, Password
    },
    setup(props: any, attr: any) {
      const model = ref(props.value);
      const isRequired = () => (props.required ? 'required' : '');
      const onInputChange = (ev: InputEvent) => {
        attr.emit('getInputAction', ev); // TODO: valueChange
      };
      const setFieldType = (error: any) => {
        return !error.valid ? 'is-danger' : 'is-success';
      };
      return {
        isRequired,
        onInputChange,
        model,
        setFieldType,
      };
    },
  };
</script>

<style scoped></style>

<!--<template v-if="ui === 'boostrap'">
  <b-form-group
    :label="label"
    :label-for="id">
    <b-form-input
      v-model="model"
      :id="id"
      :type="type"
      :disabled="disabled"
      :name="name"
      :placeholder="placeHolder"
    ></b-form-input>
  </b-form-group>
</template>-->
