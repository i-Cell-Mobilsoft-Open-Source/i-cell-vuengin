<template>
  <section>
    <span :class="`tag ${classes} ${open ? 'active' : ''}`" :aria-controls="contentId" @click="open = !open">
      <template v-if="hideLabel">{{ !open ? label : hideLabel }}</template>
      <template v-else>{{ label }}</template>
    </span>
    <b-collapse :animation="'none'" :open="open" :aria-id="contentId">
      <pre>{{ content }}</pre>
    </b-collapse>
  </section>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'v-collapse',
  props: {
    classes: String,
    label: String,
    hideLabel: String,
    contentId: String,
    content: String,
    isOpen: Boolean
  },
  setup(props: any) {
    const open = ref(props.isOpen);
    return {
      open
    };
  }
};
</script>
<style scoped></style>
