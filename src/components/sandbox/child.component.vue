<template>
  <div class="childComponent">
    <button @click="onClickEmit">Emit data</button>
    <div>ChildComponent: @Input: Count value from parent: {{ count }}</div>
  </div>
</template>
<script>
  export default {
    props: {
      count: Number,
    },
    setup(props, { emit }) {
      const onClickEmit = () => {
        emit('count-changed', Math.random() * 100); // @Output data to parent component
      };
      return {
        onClickEmit,
      };
    },
  };
</script>
