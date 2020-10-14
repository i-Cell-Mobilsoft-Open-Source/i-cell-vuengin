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
        ref="autocomplete_reference"
        icon="magnify"
        @input="onInput($event)"
        @select="onSelected($event)"
      >
        <template slot="header">
          <a @click="showAddFruit">
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

    setup(props: any, attr: any) {
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

      const showAddFruit = () => {
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
            //this.$refs.autocomplete_reference.setSelected(value)
          },
        });
      };

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
        showAddFruit,
      };
    },
  };
</script>

<style scoped></style>
