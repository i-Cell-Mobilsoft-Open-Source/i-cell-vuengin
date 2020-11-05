import Legend from './legend.vue';

const LegendPlugin = {
  install(Vue: any) {
    Vue.component(Legend.name, Legend);
  },
};

export default LegendPlugin;

export { Legend as VIcellLegend };
