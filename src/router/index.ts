import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/input',
    name: 'Input Sandbox',
    component: () => import('@/views/Input/input-sandbox.vue')
  },
  {
    path: '/datepicker',
    name: 'Datepicker Sandbox',
    component: () => import('@/views/Datetpicker/datepicker-sandbox.vue')
  },
  {
    path: '/datetimepicker',
    name: 'Datetimepicker Sandbox',
    component: () => import('@/views/Datetimepicker/datetimepicker-sandbox.vue')
  },
  {
    path: '/table',
    name: 'Table Sandbox',
    component: () => import('@/views/Table/table-sandbox.vue')
  },
  {
    path: '/select',
    name: 'Select Sandbox',
    component: () => import('@/views/Select/select-sandbox.vue')
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
