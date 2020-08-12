import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/input',
    name: 'Input View',
    component: () => import('@/views/ViewInput.vue')
  },
  {
    path: '/datepicker',
    name: 'Datepicker View',
    component: () => import('@/views/ViewDatepicker.vue')
  },
  {
    path: '/datetimepicker',
    name: 'Datetimepicker View',
    component: () => import('@/views/ViewDatetimepicker.vue')
  },
  {
    path: '/table',
    name: 'Table View',
    component: () => import('@/views/ViewTable.vue')
  },
  {
    path: '/*',
    redirect: '/input'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
