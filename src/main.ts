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
// Validators extension
import { ValidationProvider, ValidationObserver } from 'vee-validate';

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

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
