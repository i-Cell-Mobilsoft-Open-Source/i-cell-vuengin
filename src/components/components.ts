import Box from './box/box.vue';
export { Box as VIcellBox };
import Button from './button/button.vue';
export { Button as VIcellButton };
import Checkbox from './checkbox/checkbox.vue';
export { Checkbox as VIcellCheckbox };
import Datepicker from './datepicker/datepicker.vue';
export { Datepicker as VIcellDatepicker };
import Datetimepicker from './datetimepicker/datetimepicker.vue';
export { Datetimepicker as VIcellDatetimepicker };
import Input from './input/input.vue';
export { Input as VIcellInput };
import Legend from './legend/legend.vue';
export { Legend as VIcellLegend };
import Select from './select/select.vue';
export { Select as VIcellSelect };
import Steps from './steps/steps.vue';
export { Steps as VIcellSteps };
import Table from './table/table.vue';
export { Table as VIcellTable };

const ComponentsPlugin = {
  install(Vue: any) {
    Vue.component(Box.name, Box);
    Vue.component(Button.name, Button);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Datepicker.name, Datepicker);
    Vue.component(Datetimepicker.name, Datetimepicker);
    Vue.component(Input.name, Input);
    Vue.component(Legend.name, Legend);
    Vue.component(Select.name, Select);
    Vue.component(Steps.name, Steps);
    Vue.component(Table.name, Table);
  },
};

export default ComponentsPlugin;
