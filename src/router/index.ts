import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/input',
    name: 'Input',
    component: () => import('@/views/Input/input-sandbox.vue'),
  },
  {
    path: '/datepicker',
    name: 'Datepicker',
    component: () => import('@/views/Datetpicker/datepicker-sandbox.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/Table/table-sandbox.vue'),
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('@/views/Select/select-sandbox.vue'),
  },
  {
    path: '/steps',
    name: 'Steps',
    component: () => import('@/views/Steps/steps-sandbox.vue'),
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('@/views/Checkbox/checkbox-sandbox.vue'),
  },
  {
    path: '/basic-form',
    name: 'Basic Form',
    component: () => import('@/views/Concepts/BasicForm.vue'),
  },
  {
    path: '/dynamic-form',
    name: 'Dynamic Form',
    component: () => import('@/views/Concepts/DynamicForm.vue'),
  },
  {
    path: '/layout-form',
    name: 'Layout Form',
    component: () => import('@/views/Concepts/LayoutForm.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/info.vue'),
  },
  {
    path: '/*',
    redirect: '/info',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
