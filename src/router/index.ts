import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/layout-form',
    name: 'layout-form',
    component: () => import('@/views/LayoutForm.vue')
  },
  {
    path: '/basic-form',
    name: 'Basic Form',
    component: () => import('@/views/BasicForm.vue')
  },
  {
    path: '/dynamic-form',
    name: 'Dynamic Form',
    component: () => import('@/views/DynamicForm.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

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
/* {
  path: '/playground',
  name: 'Playground',
  component: () => import('@/views/PlayGround.vue')
}*/
