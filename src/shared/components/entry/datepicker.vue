<template>
  <div class="datePickerComponent" :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <template v-if="ui === 'material'">
        <v-app>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="model"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="model" :label="label" v-bind="attrs" v-on="on" readonly></v-text-field>
            </template>
            <v-date-picker v-model="model" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(model)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-app>
      </template>

      <template v-else>
        <b-field :label="label" :label-for="id">
          <b-datepicker
            icon="calendar-today"
            v-model="model"
            :show-week-number="false"
            :placeholder="placeHolder"
            :disabled="disabled"
            @input="onInputChange($event)"
            trap-focus
          >
          </b-datepicker>
        </b-field>
      </template>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-icell-date',
  props: ['ui', 'label', 'placeHolder', 'required', 'value', 'disabled', 'classes', 'id'],
  data: () => ({
    menu: false,
    modal: false,
    menu2: false
  }),
  setup(props: any, attr: any) {
    const model = props.value ? ref(props.value) : null;
    const isRequired = () => (props.required ? 'required' : '');
    const onInputChange = (ev: InputEvent) => {
      attr.emit('getDateTimeAction', ev); // TODO: valueChange
    };
    return {
      isRequired,
      onInputChange,
      model
    };
  }
};
</script>

<style scoped></style>
