import Autocomplete from './autocomplete.vue';

const AutocompletePlugin = {
  install(Vue: any) {
    Vue.component(Autocomplete.name, Autocomplete);
  },
};

export default AutocompletePlugin;

export { Autocomplete as VIcellAutocomplete };
