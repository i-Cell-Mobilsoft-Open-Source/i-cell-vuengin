<template>
  <div class="cardItemComponent">
    <div>@Input: Count value from parent: {{ count }}</div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated, ref } from '@vue/composition-api';

export default {
  props: {
    count: Number
  },
  /* data() {
       return {
         count: 0,
       }
     },
     */
  setup(props, { emit }) {
    onMounted(() => {
      // console.log('mounted!');
    });
    onUpdated(() => {
      emit('count-changed', -100); // @Output data to parent component
    });
    onUnmounted(() => {
      // console.log('unmounted!');
    });

    return {};
  }
};
</script>
