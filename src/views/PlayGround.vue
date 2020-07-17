<template>
  <div class="playGroundComponent">
    <div class="button-content">
      <button @click="addCount">+ count</button>
      <button @click="removeCount">- count</button>
    </div>

    <!-- Template attributes -->
    <!--<div class="item-content">
            <h1>Template syntax</h1>
            <div>Default change: {{state.count}}</div>
            <div v-once>Never change: {{ state.count }}</div>
        </div>-->

    <!-- Ref & Reactive & Computed-->
    <!--<div class="item-content">
            <span>Reactive: {{state.count}}</span> |
            <span>Ref: {{count}}</span> |
            <span>Computed: {{transformCount}}</span>
        </div>-->

    <!-- @Input/@Output: Data down / Events up -->
    <PropsComponent :count="state.count" @count-changed="onCountChanged"></PropsComponent>
  </div>
</template>

<script>
import { reactive, computed, ref } from '@vue/composition-api';

export default {
  methods: {
    // Output change data event handler
    onCountChanged(newVal) {
      console.log('onCountChanged', newVal);
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

    // ha state value változik, lefut és érték transformálás lehetséges és ref-ként tér vissza
    const transformCount = computed(() => {
      return state.count + 1;
    });

    // ha state value változik, lefut és side effect lehetséges
    // watchEffect(() => {
    //   // console.log(state.count) // reactive change
    //   // console.log(transformCount.value); // ref change
    // });

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
