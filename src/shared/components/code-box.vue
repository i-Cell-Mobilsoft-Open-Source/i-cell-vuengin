<template>
  <b-collapse :open="open">
    <div class="collapse-container">
      <div class="copy-btn" @click="copyToClipboard" v-if="copy">Copy</div>
      <pre class="pre-container">{{ code }}</pre>
    </div>
  </b-collapse>
</template>
<script lang="ts">
import { ToastProgrammatic as Toast } from 'buefy';
export default {
  name: 'code-box',
  props: {
    copy: Boolean,
    code: {
      type: [String, Number, Date, Array, Object],
      default: '<>'
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  setup(props: any) {
    const copyToClipboard = () => {
      const el = document.createElement('textarea');
      el.value = props.code;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      Toast.open({ message: 'Code copied to clipboard!', type: 'is-primary' });
    };
    return {
      copyToClipboard
    };
  }
};
</script>
<style scoped></style>
