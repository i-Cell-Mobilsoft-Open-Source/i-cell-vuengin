<template>
  <div class="cardItemComponent">
    <div>@Input: Count value from parent: {{ count }}</div>
  </div>
</template>
<script>
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
    setTimeout(() => {
      emit('count-changed', -100); // @Output data to parent component
    }, 2000);

    return {};
  }
};
</script>
