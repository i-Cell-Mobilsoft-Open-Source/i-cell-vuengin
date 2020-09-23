import Radiobutton from './radiobutton.vue';

const RadiobuttonPlugin = {
  install(Vue: any) {
    Vue.component(Radiobutton.name, Radiobutton);
  },
};

export default RadiobuttonPlugin;

export { Radiobutton as VIcellRadiobutton };
