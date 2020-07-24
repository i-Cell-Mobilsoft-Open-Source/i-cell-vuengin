<template>
  <div class="playGroundComponent">
    <h1>PlayGorund</h1>
    <div class="button-content">
      <button @click="addCount">+ count</button>
      <button @click="removeCount">- count</button>
    </div>
    <!------------------------------------------------>

    <!-- Template attributes -->
    <div class="item-content">
      <h1>Template syntax</h1>
      <div>Default change: {{ state.count }}</div>
      <div v-once>Never change: {{ state.count }}</div>
    </div>

    <!------------------------------------------------>

    <!-- Ref & Reactive & Computed-->
    <div class="item-content">
      <span>Reactive: {{ state.count }}</span> | <span>Ref: {{ count }}</span> |
      <span>Computed: {{ transformCount }}</span>
    </div>

    <!------------------------------------------------>

    <!-- @Input/@Output: Data down / Events up -->
    <ChildComponent :count="state.count" @count-changed="onCountChanged"> </ChildComponent>

    <!------------------------------------------------>

    <!-- watchEffect, watch, lifecycle-hooks -->
    <WatchersComponent :count="state.count"></WatchersComponent>

    <!------------------------------------------------>

    <!-- Dependency Injection -->
    <!--<DIComponent></DIComponent>-->
  </div>
</template>

<script>
import { reactive, computed, ref } from '@vue/composition-api';
// import * as httpClient from '../services/http.service';
export default {
  /*provide: {
      'http': httpClient
    },*/
  methods: {
    onCountChanged(newVal) {
      // Output change data event handler
      console.log('Emit data from child component: ', newVal);
    }
  },
  setup() {
    const count = ref(0);
    const state = reactive({ count: 0 });
    const addCount = () => {
      state.count++;
      count.value++;
    };
    const removeCount = () => {
      state.count--;
      count.value--;
    };

    // Ha state value változik, lefut és érték transformálás lehetséges és ref-ként tér vissza
    const transformCount = computed(() => {
      return state.count + 1;
    });

    return {
      state,
      count,
      transformCount,
      addCount,
      removeCount
    };
  }
};
</script>
