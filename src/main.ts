import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionApi from '@vue/composition-api';

// Import UI
import Buefy from 'buefy';
import vuetify from './plugins/vuetify';

// Import Style
import './assets/scss/app.scss';

// Import Component
import Box from './components/box/Box.vue';
import ChildComponent from './components/sandbox/child.component.vue';
import ClassApiComponent from './components/sandbox/class-api.component.vue';
import WatchersComponent from './components/sandbox/watchers.component.vue';
import DIComponent from './components/sandbox/dependency-injection.component.vue';

// Import Entry Components
import InputComponent from '@/shared/components/entry/input.vue';
import SelectComponent from '@/shared/components/entry/select.vue';
import DateTimeComponent from '@/shared/components/entry/datepicker.vue';
import DateTimePickerComponent from '@/shared/components/entry/datetimepicker.vue';
import CheckboxComponent from '@/shared/components/entry/checkbox.vue';
import LegendComponent from '@/shared/components/entry/legend.vue';
import ButtonComponent from '@/shared/components/entry/button.vue';

// Validators extension
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
extend('required', required);
extend('length', length);

Vue.use(Buefy);
Vue.use(VueCompositionApi);
// Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.component('Box', Box);
Vue.component('ChildComponent', ChildComponent);
Vue.component('ClassApiComponent', ClassApiComponent);
Vue.component('WatchersComponent', WatchersComponent);
Vue.component('DIComponent', DIComponent);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Entry Componenty
Vue.component('v-icell-input', InputComponent);
Vue.component('v-icell-select', SelectComponent);
Vue.component('v-icell-date', DateTimeComponent);
Vue.component('v-icell-datetime', DateTimePickerComponent);
Vue.component('v-icell-checkbox', CheckboxComponent);
Vue.component('v-icell-legend', LegendComponent);
Vue.component('v-icell-button', ButtonComponent);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
