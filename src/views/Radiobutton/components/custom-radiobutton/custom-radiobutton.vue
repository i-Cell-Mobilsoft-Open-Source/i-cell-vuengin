<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Radio Button</div>
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
        <v-icell-radiobutton v-model="state.value" :elements="state.elements" @input="onInput"></v-icell-radiobutton>
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
        elements: [
          { i: 1, value: 'A', descreption: 'Aladár' },
          { i: 2, value: 'B', descreption: 'Béla' },
          { i: 3, value: 'C', descreption: 'Cecil' },
        ],
        value: 'B',
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
