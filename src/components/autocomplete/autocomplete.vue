<template>
  <section :options="options">
    Selected:{{ state.selected }}
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-autocomplete
        rounded
        v-model="state.value"
        :data="filteredDataArray"
        :placeholder="placeHolder"
        :keep-first="keepFirst"
        :open-on-focus="openOnFocus"
        :clearable="clearable"
        :ref="autoCompleteRef"
        icon="magnify"
        @input="onInput($event)"
        @select="onSelected($event)"
      >
        <template slot="header">
          <a @click="addNewName">
            <span>Add new...</span>
          </a>
        </template>
        <template slot="empty">No results found</template>
      </b-autocomplete>
    </ValidationProvider>
  </section>
</template>
<script lang="ts">
  //https://fantashit.com/add-example-on-how-to-use-with-vue-composition-api/
  import { ref, computed, reactive } from '@vue/composition-api';
  import { BAutocomplete } from 'buefy/src/components/autocomplete';
  import { DialogProgrammatic as Dialog } from 'buefy';

  export default {
    name: 'v-icell-autocomplete',
    components: {
      [BAutocomplete.name]: BAutocomplete,
    },
    props: {
      placeHolder: String,
      options: Array,
      value: String,

      keepFirst: Boolean,
      openOnFocus: Boolean,
      clearable: Boolean,
    },

    setup(props: any, { refs, emit }: any) {
      console.log('refs', refs);
      const autoCompleteRef = ref('autocomplete_reference');
      const defaultValue = props.multiple ? [] : null;
      const model = props.value ? ref(props.value) : defaultValue;
      const isRequired = () => (props.required ? 'required' : '');

      //VUE 3 const autocomplete_reference_ref = ref(null);

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

      const addNewName = () => {
        Dialog.prompt({
          message: `Add New Name`,
          inputAttrs: {
            placeholder: 'Susanna',
            maxlength: 20,
            value: state.value,
          },
          confirmText: 'Add',
          onConfirm: value => {
            state.data.push(value as never);
            refs.autocomplete_reference.setSelected(value);
          },
        });
      };

      const onInput = (value: string) => {
        emit('input', value);
      };

      const onSelected = (value: string) => {
        state.selected = value;
        emit('selected', value);
      };

      return {
        state,
        filteredDataArray,
        model,
        autoCompleteRef,
        isRequired,
        onInput,
        onSelected,
        addNewName,
      };
    },
  };
</script>

<style scoped></style>
