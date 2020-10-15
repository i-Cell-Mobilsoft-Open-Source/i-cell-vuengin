<template>
  <b-menu>
    <b-menu-list v-for="(group, index) in getMenuGroups()" :key="index" :label="group">
      <b-menu-item
        v-for="(item, idx) in getMenuItems(group)"
        tag="router-link"
        :key="idx"
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
      const menuItems = reactive({
        info: {
          path: '/info',
          name: 'Info',
          active: false,
          icon: 'information-outline',
          group: 'menu',
          group_order: 1,
        },
        'basic-form': {
          path: '/basic-form',
          name: 'Basic',
          active: false,
          icon: 'file-table-box-outline',
          group: 'concepts',
          group_order: 2,
        },
        'dynamic-form': {
          path: '/dynamic-form',
          name: 'Dynamic',
          active: false,
          icon: 'file-table-box-multiple-outline',
          group: 'concepts',
          group_order: 2,
        },
        'layout-form': {
          path: '/layout-form',
          name: 'Layout',
          active: false,
          icon: 'file-table-outline',
          group: 'concepts',
          group_order: 2,
        },
        input: {
          path: '/input',
          name: 'Input',
          active: false,
          icon: 'form-textbox',
          group: 'components',
          group_order: 3,
        },
        select: {
          path: '/select',
          name: 'Select',
          active: false,
          icon: 'form-select',
          group: 'components',
          group_order: 3,
        },
        datepicker: {
          path: '/datepicker',
          name: 'Datepicker',
          active: false,
          icon: 'calendar-clock',
          group: 'components',
          group_order: 3,
        },
        steps: {
          path: '/steps',
          name: 'Steps',
          active: false,
          icon: 'wizard-hat',
          group: 'components',
          group_order: 3,
        },
        checkbox: {
          path: '/checkbox',
          name: 'Checkbox',
          active: false,
          icon: 'checkbox-marked',
          group: 'components',
          group_order: 3,
        },
        radiobutton: {
          path: '/radiobutton',
          name: 'Radiobutton',
          active: false,
          icon: 'radiobox-marked',
          group: 'components',
          group_order: 3,
        },
        autocomplete: {
          path: '/autocomplete',
          name: 'Autocomplete',
          active: false,
          icon: 'alphabetical',
          group: 'components',
          group_order: 3,
        },
        table: {
          path: '/table',
          name: 'Table',
          active: false,
          icon: 'table',
          group: 'components',
          group_order: 3,
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

      function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
          const key = keyGetter(item);
          const collection = map.get(key);
          if (!collection) {
            map.set(key, [item]);
          } else {
            collection.push(item);
          }
        });
        return map;
      }

      const getMenuGroups = () => {
        const menus = Object.keys(menuItems)
          .map((prop) => ({ key: prop, ...menuItems[prop] }))
          .sort((a, b) => a.group_order - b.group_order);
        return Array.from(groupBy(menus, (item) => item.group).keys());
      };

      const getMenuItems = (group: string) => {
        return Object.keys(menuItems)
          .map((prop) => ({ key: prop, ...menuItems[prop] }))
          .filter((item: any) => item.group === group);
      };

      router.afterEach((to, from) => {
        const routeFrom = from.path.slice(1);
        const routeTo = to.path.slice(1);
        if (routeFrom) {
          changeMenuActivation(menuItems[routeFrom], false);
        }
        changeMenuActivation(menuItems[routeTo], true);
      });

      return {
        menuItems,
        getMenuGroups,
        getMenuItems,
      };
    },
  };
</script>
