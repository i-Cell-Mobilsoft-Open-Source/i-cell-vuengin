import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionApi from '@vue/composition-api';

// Buefy
import Buefy from '@flnf/buefy';

// BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vuetify
// https://medium.com/@attiewilly/how-i-married-vuetify-with-typescript-d6441dedd16
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Style
import './assets/scss/app.scss';
// Components
import Box from './components/box/Box.vue';
import ChildComponent from './components/sandbox/child.component.vue';
import ClassApiComponent from './components/sandbox/class-api.component.vue';
import WatchersComponent from './components/sandbox/watchers.component.vue';
import DIComponent from './components/sandbox/dependency-injection.component.vue';
// Validators extension
import { ValidationProvider, ValidationObserver } from 'vee-validate';

// USE Buefy
Vue.use(Buefy, {});
Vue.use(VueCompositionApi);

// USE BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Vuetify
Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.component('Box', Box);
Vue.component('ChildComponent', ChildComponent);
Vue.component('ClassApiComponent', ClassApiComponent);
Vue.component('WatchersComponent', WatchersComponent);
Vue.component('DIComponent', DIComponent);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
