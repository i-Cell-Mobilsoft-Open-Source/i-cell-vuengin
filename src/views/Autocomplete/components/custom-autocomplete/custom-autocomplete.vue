<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Auto Complete</div>
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
        <v-icell-autocomplete
          :value="state.value"
          :options="state.data"
          :placeholder="'Names'"
          @input="onInput"
          @selected="onSelected"
        ></v-icell-autocomplete>
      </div>

      <!-- Settins -->
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
  import { ref, reactive, computed } from '@vue/composition-api';
  import { templateCode } from './template-code';

  export default {
    props: {},
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
        data: [
          'Abigail',
          'Addison',
          'Amelia',
          'Aria',
          'Aubrey',
          'Aurora ',
          'Ava',
          'Avery',
          'Camila',
          'Charlotte',
          'Chloe',
          'Eleanor',
          'Elizabeth',
          'Ella',
          'Ellie',
          'Emily',
          'Emma',
          'Evelyn',
          'Grace',
          'Hannah',
          'Harper',
          'Hazel',
          'Isabella',
          'Layla',
          'Leah',
          'Lillian',
          'Lily',
          'Luna',
          'Madison',
          'Mia',
          'Mila',
          'Natalie',
          'Nora',
          'Olivia',
          'Penelope',
          'Riley',
          'Scarlett',
          'Sofia',
          'Sophia',
          'Stella',
          'Victoria',
          'Violet',
          'Zoe',
          'Zoey',
        ],
        name: '',
        selected: '',
        value: '',
      });

      const onInput = (value: any) => {
        state.value = value;
      };

      const onSelected = (value: any) => {
        state.selected = value;
      };

      return {
        code,
        state,
        onInput,
        onSelected,
      };
    },
  };
</script>
<style scoped></style>
