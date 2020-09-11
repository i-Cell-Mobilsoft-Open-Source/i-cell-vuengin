import Datepicker from './datepicker.vue';

const DatepickerPlugin = {
  install(Vue: any) {
    Vue.component(Datepicker.name, Datepicker);
  },
};

export default DatepickerPlugin;

export { Datepicker as VIcellDatepicker };
