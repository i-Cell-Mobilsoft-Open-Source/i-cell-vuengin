import Table from './table.vue';

const TablePlugin = {
  install(Vue: any) {
    Vue.component(Table.name, Table);
  },
};

export default TablePlugin;

export { Table as VIcellTable };
