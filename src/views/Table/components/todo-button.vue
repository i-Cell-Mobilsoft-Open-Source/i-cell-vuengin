<template>
  <div class="products">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'todo-button',
  data() {
    return {
      user: {
        firstName: 'Gabeszka'
      }
    };
  }
};
</script>

<style scoped></style>
