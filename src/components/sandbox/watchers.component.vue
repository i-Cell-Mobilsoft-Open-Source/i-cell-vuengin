<template>
  <div class="watchersComponent">Watchers: {{ count }}</div>
</template>

<script>
  import { onMounted, onUpdated, onUnmounted, ref, watchEffect, watch } from '@vue/composition-api';

  export default {
    props: {
      count: Number,
    },
    setup(props) {
      const counter = ref(props.count);
      const stopWatchEffect = watchEffect(() => {
        // TODO: onInvalidate - async await promise cancel and stop watcher
        console.log('watchEffect: ', props.count);
      });
      const stopWatch = watch(
        () => counter.value,
        (newVal, oldVal) => {
          console.log('watch: ', 'newVal ', newVal, '   --   ', 'oldVal', oldVal);
        }
      );

      onMounted(() => {
        console.log('onMounted!');
      });

      onUpdated(() => {
        // update if value changed in template
        console.log('onUpdated!');
        counter.value++;
      });

      onUnmounted(() => {
        stopWatchEffect();
        stopWatch();
      });
      return {};
    },
  };
</script>
