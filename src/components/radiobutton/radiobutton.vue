<template>
  <b-field :label="label">
    <div class="block">
      <div class="block">
        <template v-for="item in elements">
          <b-radio
            :value="model"
            :key="item.i"
            :native-value="item.value"
            :size="size"
            :type="type"
            :name="name"
            @input="onInput($event)"
          >
            {{ item.descreption }}
          </b-radio>
        </template>
      </div>
    </div>
  </b-field>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';
  import { BRadio } from 'buefy/src/components/radio';

  export default {
    name: 'v-icell-radiobutton',
    components: {
      [BRadio.name]: BRadio,
    },
    props: {
      value: String,
      elements: Array,
      label: String,
      size: String,
      type: String,
      name: String,
    },
    setup(props: any, attr: any) {
      const model = props.value ? ref(props.value) : false;
      const isRequired = () => (props.required ? 'required' : '');

      const onInput = (value: any) => {
        attr.emit('input', value);
      };

      return {
        isRequired,
        model,
        onInput,
      };
    },
  };
</script>

<style scoped></style>
