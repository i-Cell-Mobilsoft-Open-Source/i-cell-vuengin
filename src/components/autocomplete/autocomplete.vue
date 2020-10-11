<template>
  <section :options="options">
    Selected:{{ state.selected }}
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-autocomplete
        rounded
        v-model="state.value"
        :data="filteredDataArray"
        :placeholder="placeholder"
        icon="magnify"
        clearable
        @input="onInput($event)"
        @select="onSelected($event)"
      >
        <template slot="empty">No results found</template>
      </b-autocomplete>
    </ValidationProvider>
  </section>
</template>
<script lang="ts">
  import { ref, computed, reactive } from '@vue/composition-api';
  import { BAutocomplete } from 'buefy/src/components/autocomplete';

  export default {
    name: 'v-icell-autocomplete',
    components: {
      [BAutocomplete.name]: BAutocomplete,
    },
    props: {
      placeholder: String,
      options: Array,
      required: Boolean,
      value: String,
    },
    setup(props: any, attr: any) {
      const defaultValue = props.multiple ? [] : null;
      const model = props.value ? ref(props.value) : defaultValue;
      const isRequired = () => (props.required ? 'required' : '');

      const state = reactive({
        data: [],
        value: '',
        selected: '',
      });

      state.data = props.options;
      state.value = props.value;

      const filteredDataArray = computed(() => {
        return state.data.filter((option: String) => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(state.value.toLowerCase()) >= 0
          );
        });
      });

      const onInput = (value: string) => {
        attr.emit('input', value);
      };

      const onSelected = (value: string) => {
        state.selected = value;
        attr.emit('selected', value);
      };

      return {
        state,
        filteredDataArray,
        model,
        isRequired,
        onInput,
        onSelected,
      };
    },
  };
</script>

<style scoped></style>
