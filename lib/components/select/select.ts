import Select from './select.vue';

const SelectPlugin = {
  install(Vue: any) {
    Vue.component(Select.name, Select);
  },
};

export default SelectPlugin;

export { Select as VIcellSelect };
