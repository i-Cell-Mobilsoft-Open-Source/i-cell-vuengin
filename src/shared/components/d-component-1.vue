<template>
  <div class="dynamic-component">
    <h3 class="subtitle">Component 1</h3>
    <div class="button-content">
      <b-button class="btn-style" @click="addCount">+</b-button>
      <b-button class="btn-style" @click="removeCount">-</b-button>
    </div>
    <div class="count-content">
      <div>Component 1 count value: {{ state.count }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/composition-api';

export default {
  name: 'd-component-1',
  setup() {
    const state = reactive({ count: 0 });
    const addCount = () => {
      state.count++;
    };
    const removeCount = () => {
      state.count--;
    };
    return {
      addCount,
      removeCount,
      state
    };
  }
};
</script>

<style scoped>
.btn-style {
  margin-right: 5px;
}
.count-content {
  padding-top: 10px;
}
</style>
