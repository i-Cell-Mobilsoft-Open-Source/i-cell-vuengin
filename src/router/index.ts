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
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/Vuex.vue')
  },
  {
    path: '/dynamic-component',
    name: 'DynamicComponent',
    component: () => import('@/views/ContainerComponent.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('@/views/Forms.vue')
  },
  {
    path: '/formsbootstrap',
    name: 'Forms Bootstap',
    component: () => import('@/views/Forms_bootstrap.vue')
  },
  {
    path: '/formsvuetify',
    name: 'Forms Vuetify',
    component: () => import('@/views/Forms_vuetify.vue')
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/playground',
    name: 'Playground',
    component: () => import('../views/PlayGround.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
