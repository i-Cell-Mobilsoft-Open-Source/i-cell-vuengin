import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionApi from '@vue/composition-api';
import Buefy from 'buefy';
import './assets/scss/app.scss';

import Drawer from './components/drawer/Drawer.vue';
import Box from './components/box/Box.vue';

Vue.use(Buefy, {});
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;
Vue.component('Drawer', Drawer);
Vue.component('Box', Box);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
