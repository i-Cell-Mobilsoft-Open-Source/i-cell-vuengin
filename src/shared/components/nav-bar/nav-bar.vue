<template>
  <b-navbar class="navbar is-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo.png" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <div class="logo-title title is-5">Icell Vue Component</div>
    </template>
    <template slot="end">
      <!--      <div v-for></div>-->
      <b-navbar-item
        v-for="(item, index) in menuItem"
        tag="router-link"
        :key="index"
        :active="item.active"
        :to="{ path: item.path }"
      >
        {{ item.name }}
      </b-navbar-item>
      <!--<b-navbar-item tag="router-link" :to="{ path: '/input' }">Input</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/select' }">Select</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/datepicker' }">Datepicker</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/table' }">Table</b-navbar-item>-->
    </template>
  </b-navbar>
</template>

<script lang="ts">
  import router from '@/router';
  import { reactive, ref } from '@vue/composition-api';

  export default {
    setup() {
      const data = ref(['1', '2', '3']);
      const menuItem = reactive({
        input: {
          path: '/input',
          name: 'Input',
          active: false,
        },
        select: {
          path: '/select',
          name: 'Select',
          active: false,
        },
        datepicker: {
          path: '/datepicker',
          name: 'Datepicker',
          active: false,
        },
        table: {
          path: '/table',
          name: 'Table',
          active: false,
        },
      });

      const changeMenuActivation = (item: any, active: boolean) => {
        Object.assign(item, {
          ...item,
          active: active,
        });
      };

      router.afterEach((to, from) => {
        const routeFrom = from.path.slice(1);
        const routeTo = to.path.slice(1);
        if (routeFrom) {
          changeMenuActivation(menuItem[routeFrom], false);
        }
        changeMenuActivation(menuItem[routeTo], true);
      });
      return {
        data,
        menuItem,
      };
    },
  };
</script>

<style scoped></style>
