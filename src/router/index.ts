import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue')
  },
  {
    path: '/dynamic-form',
    name: 'Dynamic Form',
    component: () => import('@/views/DynamicForm.vue')
  }
  /*{
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/Vuex.vue')
  },*/
  /*{
    path: '/dynamic-component',
    name: 'DynamicComponent',
    component: () => import('@/views/ContainerComponent.vue')
  },*/
  /*{
    path: '/playground',
    name: 'Playground',
    component: () => import('../views/PlayGround.vue')
  }*/
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
