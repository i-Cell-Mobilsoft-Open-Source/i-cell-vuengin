<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Checkbox</div>
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
        <v-icell-checkbox
          v-model="state.large"
          name="chechbox_large"
          :size="'is-large'"
          :label="'Large'"
          :trueValue="'Is Large'"
          :falseValue="'Is not Large'"
          :type="'is-info'"
          @input="onInput"
        ></v-icell-checkbox>

        <v-icell-checkbox
          v-model="state.medium"
          name="chechbox_medium"
          :size="'is-medium'"
          :label="'Medium'"
          :trueValue="'Is Medium'"
          :falseValue="'Is not Medium'"
          :type="'is-info'"
          @input="onInput"
        ></v-icell-checkbox>

        <v-icell-checkbox
          v-model="state.default"
          name="chechbox_default"
          :size="'is-default'"
          :label="'Default'"
          :trueValue="'Is Default'"
          :falseValue="'Is not Default'"
          :type="'is-info'"
          @input="onInput"
        ></v-icell-checkbox>

        <v-icell-checkbox
          v-model="state.value"
          name="chechbox_large"
          :size="'is-small'"
          :label="'Small'"
          :type="'is-info'"
          @input="onInput"
        ></v-icell-checkbox>
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
        value: '',
        large: 'Is Large',
        medium: 'Is Medium',
        default: 'Is not Default',
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
