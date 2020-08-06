<template>
  <div class="dynamicComponent">
    <div class="container is-fluid">
      <div class="notification">
        <div class="btn-content">
          <b-button class="btn-style" @click="onChangeComponent('component1')">Component 1</b-button>
          <b-button class="btn-style" @click="onChangeComponent('component2')">Component 2</b-button>
        </div>
        <h3 class="subtitle">Default:</h3>
        <div class="box">
          <component v-bind:is="componentInstanceName"></component>
        </div>

        <h3 class="subtitle">Keep Alive:</h3>
        <div class="box">
          <!-- if it has changed data stored in it -->
          <keep-alive>
            <component v-bind:is="componentInstanceName"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  components: {
    component1: () => import('@/shared/components/component-1.vue'),
    component2: () => import('@/shared/components/component-2.vue')
  },
  setup() {
    // default component instance
    const componentInstanceName = ref('component1');
    // change dynamic components
    const onChangeComponent = (instanceName: string) => {
      componentInstanceName.value = instanceName;
    };
    return {
      componentInstanceName,
      onChangeComponent
    };
  }
};
</script>
<style scoped>
h1 {
  font-size: 32px;
}

.btn-content {
  padding-bottom: 15px;
}

.btn-style {
  margin-right: 5px;
}
</style>
