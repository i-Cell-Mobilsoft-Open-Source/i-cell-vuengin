<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <div class="padding-content">
            <div class="title">Select</div>
            <v-icell-select
              :name="'wifeChooser'"
              :expanded="true"
              :label="'Tessék választani'"
              :option="formGroup.option"
              :placeholder="'képzeletbeli feleség neve'"
              :required="true"
              @valueChange="customValueChangeWife($event)"
            ></v-icell-select>
          </div>
          <v-collapse
            class="collapse-container"
            :classes="'is-small is-light'"
            :label="'show code'"
            :hideLabel="'hide source'"
            :contentId="'basic-table'"
            :content="code_SampleA"
          ></v-collapse>
        </div>

        <div class="box">
          <div class="padding-content">
            <div class="title">Multi Select</div>
            <v-icell-select
              :name="'stafirungList'"
              :expanded="true"
              :label="'Stafírung'"
              :option="formGroup.stafirunglist"
              :placeholder="'hozzáadott érték'"
              :required="true"
              :multiple="true"
              @valueChange="customValueChangeStafirung($event)"
            ></v-icell-select>
          </div>
          <v-collapse
            class="collapse-container"
            :classes="'is-small is-light'"
            :label="'show code'"
            :hideLabel="'hide source'"
            :contentId="'basic-table'"
            :content="code_SampleA"
          ></v-collapse>
        </div>
      </div>
    </div>
    {{ formGroup }}
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed } from '@vue/composition-api';

export default {
  name: 'SelectComomentDemo',
  setup() {
    const formGroup = reactive({
      option: ['Palvin Barbi', 'Mihalik Enikő', 'Ördög Nóra', 'Szabó Erika'],
      stafirunglist: ['Budai villa', 'SLK merci', 'Spanyol nyaraló', '250 milliós megtakarítás'],
      value: '',
      selectedstafirung: []
    });

    const formData = computed(() => formGroup);

    const customValueChangeWife = (selected: any) => {
      formGroup.value = selected;
    };

    const customValueChangeStafirung = (selected: any) => {
      formGroup.selectedstafirung = selected;
    };

    const code_SampleA = ref(
      `<v-icell-select
        :name="'wifechooser'"
        :label="'Tessék választani'"
        :option="formGroup.option"
        :placeholder="'képzeletbeli feleség neve'"
        :required="formGroup.value"
        @valueChange="customValueChange($event)"
></v-icell-select>`
    );

    return {
      formGroup,
      formData,
      customValueChangeWife,
      customValueChangeStafirung,

      code_SampleA
    };
  }
};
</script>
