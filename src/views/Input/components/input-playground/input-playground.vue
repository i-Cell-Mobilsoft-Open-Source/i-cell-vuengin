<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Input - playground</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>
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
        <v-icell-input
          :label="label"
          :place-holder="placeHolder"
          :rounded="state.rounded"
          :size="state.size"
          :disabled="state.disabled"
          :loading="state.loading"
          :field-type="state.fieldType"
          :value="state.value"
          @onInput="onInput"
        ></v-icell-input>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.label" :size="'is-small'">Label</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.rounded" :size="'is-small'">Rounded</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.placeHolder" :size="'is-small'">Placeholder</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.disabled" :size="'is-small'">Disabled</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.loading" :size="'is-small'">Loading</b-switch>
            </div>
            <div class="settings-item">
              <b-select v-model="state.fieldType" :size="'is-small'">
                <option value="">Field type: Default</option>
                <option value="is-success">Field type: Success</option>
                <option value="is-info">Field type: Info</option>
                <option value="is-warning">Field type: Warning</option>
                <option value="is-danger">Field type: Error</option>
              </b-select>
            </div>
            <div class="settings-item">
              <b-select v-model="state.size" :size="'is-small'">
                <option value="">Size: Default</option>
                <option value="is-small">Size: Small</option>
                <option value="is-medium">Size: Medium</option>
                <option value="is-large">Size: Large</option>
              </b-select>
            </div>
          </b-field>
        </div>
      </b-collapse>
    </div>

    <!-- Data -->
    <div class="data-content">
      <div class="code-content">
        <b-collapse :open="isOpenData">
          <div class="collapse-container">
            <pre>value: {{ state.value }}</pre>
          </div>
        </b-collapse>
      </div>
    </div>

    <!-- Code -->
    <div class="code-content">
      <b-collapse :open="isOpenCode">
        <div class="collapse-container">
          <pre>{{ code }}</pre>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive } from '@vue/composition-api';
import { templateCode } from './template-code';

export default {
  data() {
    return {
      isOpenSetting: false,
      isOpenCode: false,
      isOpenData: false
    };
  },
  setup() {
    const code = ref(templateCode);
    const state = reactive({
      rounded: false,
      disabled: false,
      loading: false,
      label: false,
      placeHolder: true,
      size: '',
      value: '',
      fieldType: ''
    });
    const label = computed(() => (state.label ? 'Label' : ''));
    const placeHolder = computed(() => (state.placeHolder ? 'Placeholder' : ''));
    const onInput = (ev: InputEvent, value: any) => {
      state.value = value;
    };
    return {
      code,
      state,
      label,
      placeHolder,
      onInput
    };
  }
};
</script>
<style scoped></style>