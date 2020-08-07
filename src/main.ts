import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionApi from '@vue/composition-api';
import Buefy from '@flnf/buefy';

// Style
import './assets/scss/app.scss';
// Components
import Box from './components/box/Box.vue';
import ChildComponent from './components/sandbox/child.component.vue';
import ClassApiComponent from './components/sandbox/class-api.component.vue';
import WatchersComponent from './components/sandbox/watchers.component.vue';
import DIComponent from './components/sandbox/dependency-injection.component.vue';

// Entry Components
import InputComponent from '@/shared/components/entry/input.vue';
import SelectComponent from '@/shared/components/entry/select.vue';
import DateTimeComponent from '@/shared/components/entry/datepicker.vue';
import DateTimePickerComponent from '@/shared/components/entry/datetimepicker.vue';
import CheckboxComponent from '@/shared/components/entry/checkbox.vue';
import LegendComponent from '@/shared/components/entry/legend.vue';

// Validators extension
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', required);
extend('length', length);

Vue.use(Buefy, {});
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;
Vue.component('Box', Box);
Vue.component('ChildComponent', ChildComponent);
Vue.component('ClassApiComponent', ClassApiComponent);
Vue.component('WatchersComponent', WatchersComponent);
Vue.component('DIComponent', DIComponent);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Entry Componenty
Vue.component('v-input', InputComponent);
Vue.component('v-select', SelectComponent);
Vue.component('v-date', DateTimeComponent);
Vue.component('v-datetime', DateTimePickerComponent);
Vue.component('v-checkbox', CheckboxComponent);
Vue.component('v-legend', LegendComponent);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
