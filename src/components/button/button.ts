import Button from './button.vue';

const ButtonPlugin = {
  install(Vue: any) {
    Vue.component(Button.name, Button);
  },
};

export default ButtonPlugin;

export { Button as VIcellButton };
