import Checkbox from './checkbox.vue';

const CheckboxPlugin = {
  install(Vue: any) {
    Vue.component(Checkbox.name, Checkbox);
  },
};

export default CheckboxPlugin;

export { Checkbox as VIcellCheckbox };
