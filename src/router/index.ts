import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/input',
    name: 'Input View',
    component: () => import('@/views/input-container.vue')
  },
  {
    path: '/datepicker',
    name: 'Datepicker View',
    component: () => import('@/views/datepicker-container.vue')
  },
  {
    path: '/datetimepicker',
    name: 'Datetimepicker View',
    component: () => import('@/views/datetimepicker-container.vue')
  },
  {
    path: '/table',
    name: 'Table View',
    component: () => import('@/views/table-container.vue')
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
