<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Radio Button</div>
        <div class="tags-content">
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
        <v-icell-radiobutton
          v-model="state.large.value"
          :elements="state.large.elements"
          :size="state.large.size"
          :type="state.large.type"
          :name="state.large.name"
          @input="onInput"
        ></v-icell-radiobutton>

        <v-icell-radiobutton
          v-model="state.medium.value"
          :elements="state.medium.elements"
          :size="state.medium.size"
          :type="state.medium.type"
          :name="state.medium.name"
          @input="onInput"
        ></v-icell-radiobutton>

        <v-icell-radiobutton
          v-model="state.default.value"
          :elements="state.default.elements"
          :name="state.default.name"
          @input="onInput"
        ></v-icell-radiobutton>

        <v-icell-radiobutton
          v-model="state.small.value"
          :elements="state.small.elements"
          :size="state.small.size"
          :type="state.small.type"
          :name="state.small.name"
          @input="onInput"
        ></v-icell-radiobutton>
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
        large: {
          elements: [
            { i: 1, value: 'Large-A', descreption: 'Alpha' },
            { i: 2, value: 'Large-B', descreption: 'Beta' },
            { i: 3, value: 'Large-G', descreption: 'Gamma' },
          ],
          value: 'Large-A',
          size: 'is-large',
          type: 'is-danger',
          name: 'large',
        },
        medium: {
          elements: [
            { i: 1, value: 'Medium-A', descreption: 'Alpha' },
            { i: 2, value: 'Medium-B', descreption: 'Beta' },
            { i: 3, value: 'Medium-G', descreption: 'Gamma' },
          ],
          value: 'Medium-B',
          size: 'is-medium',
          type: 'is-warning',
          name: 'medium',
        },
        default: {
          elements: [
            { i: 1, value: 'Default-A', descreption: 'Alpha' },
            { i: 2, value: 'Default-B', descreption: 'Beta' },
            { i: 3, value: 'Default-G', descreption: 'Gamma' },
          ],
          name: 'default',
          value: 'Default-G',
        },
        small: {
          elements: [
            { i: 1, value: 'Small-A', descreption: 'Alpha' },
            { i: 2, value: 'Small-B', descreption: 'Beta' },
            { i: 3, value: 'Small-G', descreption: 'Gamma' },
          ],
          name: 'small',
          type: 'is-info',
          size: 'is-small',
        },
        value: '',
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
