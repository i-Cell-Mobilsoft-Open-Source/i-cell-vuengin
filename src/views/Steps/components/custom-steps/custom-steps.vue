<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Steps</div>
        <div class="tags-content">
          <!--<span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>-->
          <span class="tag is-light" @click="isOpenData = !isOpenData" :class="isOpenData ? 'active' : ''">
            <i class="mdi mdi-code-greater-than"></i>
          </span>
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="input-content">
        <v-icell-steps
          v-model="state.value"
          :steps="state.steps"
          :animated="true"
          :rounded="true"
          :has-navigation="true"
          :label-position="'bottom'"
          :type="'is-green'"
          :size="'is-medium'"
          :destroy-on-hide="true"
          :vertical="false"
          :mobile-mode="'minimalist'"
          @input="onInput"
        ></v-icell-steps>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.passwordReveal" :size="'is-small'">Password reveal</b-switch>
            </div>
          </b-field>
        </div>
      </b-collapse>
    </div>
    <!-- Data -->
    <div class="data-content">
      <code-box :open="isOpenData" :code="state.value"></code-box>
    </div>
    <!-- Code -->
    <div class="code-content">
      <code-box :open="isOpenCode" :code="code" copy></code-box>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, reactive } from '@vue/composition-api';
  import { templateCode } from './template-code';

  export default {
    data() {
      return {
        isOpenSetting: false,
        isOpenCode: false,
        isOpenData: false,
      };
    },
    setup() {
      const code = ref(templateCode);
      const state = reactive({
        steps: [
          { i: 1, label: 'A', text: 'A', desc: 'Apple', clickable: true },
          { i: 2, label: 'B', text: 'B', desc: 'Bar', clickable: false },
          { i: 3, label: 'C', text: 'C', desc: 'Cyber', clickable: true },
        ],
        value: 2,
      });

      const onInput = (value: any) => {
        state.value = value;
      };

      return {
        code,
        state,
        onInput,
      };
    },
  };
</script>
<style scoped></style>
