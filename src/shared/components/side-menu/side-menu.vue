<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="Info"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Concepts">
      <b-menu-item icon="file-table-box-outline" label="Basic" tag="router-link" to="/basic-form"></b-menu-item>
      <b-menu-item
        icon="file-table-box-multiple-outline"
        label="Dynamic"
        tag="router-link"
        to="/dynamic-form"
      ></b-menu-item>
      <b-menu-item icon="file-table-outline" label="Layout" tag="router-link" to="/layout-form"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Components">
      <b-menu-item
        v-for="(item, index) in menuItem"
        tag="router-link"
        :key="index"
        :icon="item.icon"
        :label="item.name"
        :active="item.active"
        :to="{ path: item.path }"
      ></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
  import router from '@/router';
  import { reactive, ref } from '@vue/composition-api';

  export default {
    setup() {
      const menuItem = reactive({
        input: {
          path: '/input',
          name: 'Input',
          active: false,
          icon: 'form-textbox',
        },
        select: {
          path: '/select',
          name: 'Select',
          active: false,
          icon: 'form-select',
        },
        datepicker: {
          path: '/datepicker',
          name: 'Datepicker',
          active: false,
          icon: 'calendar-clock',
        },
        steps: {
          path: '/steps',
          name: 'Steps',
          active: false,
          icon: 'wizard-hat',
        },
        table: {
          path: '/table',
          name: 'Table',
          active: false,
          icon: 'table',
        },
      });

      const changeMenuActivation = (item: any, active: boolean) => {
        if (item) {
          Object.assign(item, {
            ...item,
            active: active,
          });
        }
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
        menuItem,
      };
    },
  };
</script>
