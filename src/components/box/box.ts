import Box from './box.vue';

const BoxPlugin = {
  install(Vue: any) {
    Vue.component(Box.name, Box);
  },
};

export default BoxPlugin;

export { Box as VIcellBox };
