import Datetimepicker from './datetimepicker.vue';

const DatetimepickerPlugin = {
  install(Vue: any) {
    Vue.component(Datetimepicker.name, Datetimepicker);
  },
};

export default DatetimepickerPlugin;

export { Datetimepicker as VIcellDatetimepicker };
