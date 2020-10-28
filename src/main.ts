import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

import App from './App.vue';
import router from './router';
import store from './store';

// Import UI
import Buefy from 'buefy';

// Import Style
import './assets/scss/app.scss';

// Import Plugins
// import InputPlugin from '@/components/input/input';
import { ComponentsPlugin } from '@i-cell/vuengin';
console.log(ComponentsPlugin);

// Import Components
// import BoxComponent from '@/components/box/Box.vue';
// import ButtonComponent from '@/components/button.vue';
// import SelectComponent from '@/components/select.vue';
// import DateTimeComponent from '@/components/datepicker.vue';
// import DateTimePickerComponent from '@/components/datetimepicker.vue';
// import CheckboxComponent from '@/components/checkbox.vue';
// import LegendComponent from '@/components/legend.vue';
// import TableComponent from '@/components/table.vue';
// import StepsComponent from '@/components/steps.vue';
import CodeBoxComponent from '@/shared/components/code-box/code-box.vue';
import NavBarComponent from '@/shared/components/nav-bar/nav-bar.vue';
import SideMenuComponent from '@/shared/components/side-menu/side-menu.vue';

// Validation
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', required);
extend('length', length);

Vue.use(Buefy, {
  defaultDayNames: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
  defaultMonthNames: [
    'Január',
    'Február',
    'Március',
    'Április',
    'Május',
    'Június',
    'Július',
    'Augusztus',
    'Szeptember',
    'Október',
    'November',
    'December',
  ],
  defaultFirstDayOfWeek: 1,
  defaultTrapFocus: true,
  defaultDatepickerYearsRange: [-100, 60],
});
Vue.use(VueCompositionApi);

// Vue.use(InputPlugin);
Vue.use(ComponentsPlugin);

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationObserver', ValidationObserver);

// Shared Components
Vue.component('side-menu', SideMenuComponent);
Vue.component('bue-nav-bar', NavBarComponent);
Vue.component('code-box', CodeBoxComponent);

// Vue.component('Box', BoxComponent);

// Entry Components

// Vue.component('v-icell-select', SelectComponent);
// Vue.component('v-icell-date', DateTimeComponent);
// Vue.component('v-icell-datetime', DateTimePickerComponent);
// Vue.component('v-icell-checkbox', CheckboxComponent);
// Vue.component('v-icell-legend', LegendComponent);
// Vue.component('v-icell-button', ButtonComponent);
// Vue.component('v-icell-table', TableComponent);
// Vue.component('v-icell-steps', StepsComponent);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
