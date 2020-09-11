import Steps from './steps.vue';

const StepsPlugin = {
  install(Vue: any) {
    Vue.component(Steps.name, Steps);
  },
};

export default StepsPlugin;

export { Steps as VIcellSteps };
