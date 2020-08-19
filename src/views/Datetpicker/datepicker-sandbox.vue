<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <div class="padding-content">
            <div class="title">Date Picker</div>
            <v-icell-date
              :label="'Beteg felvétel dátuma'"
              :placeHolder="'Felvételi dátum'"
              :minDate="formGroup.customMinDate"
              :maxDate="formGroup.customMaxDate"
              v-model="formGroup.patientDate"
              @valueChange="customValueChange($event)"
              @changeMonth="changeMonth($event)"
              @changeYear="changeYear($event)"
            ></v-icell-date>
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
import moment from 'moment';

export default {
  /*
 
  */
  name: 'DateTimePickerDemo',
  setup() {
    const formGroup = reactive({
      patientDate: moment().toDate(), // moment('1981.03.08', 'YYYY.MM.DD').toDate(),
      customMinDate: moment().subtract(5, 'days').toDate(),
      customMaxDate: moment().add(5, 'days').toDate(),
      selectedMonth: 0,
      selectedYear: 0
    });

    console.log(formGroup);

    const formData = computed(() => formGroup);

    const code_SampleA = ref(
      `<v-icell-date
        :label="'Beteg felvétel dátuma'"
        :placeHolder="'Felvételi dátum'"
        :minDate="formGroup.customMinDate"
        :maxDate="formGroup.customMaxDate"
        v-model="formGroup.patientDate"
        @valueChange="customValueChange($event)"
        @changeMonth="changeMonth($event)"
        @changeYear="changeYear($event)"
      ></v-icell-date>`
    );

    const customValueChange = (dateTime: any) => {
      formGroup.patientDate = dateTime;
    };

    const changeMonth = ($month: number) => {
      formGroup.selectedMonth = $month;
    };

    const changeYear = ($year: number) => {
      formGroup.selectedYear = $year;
    };

    return {
      formGroup,
      formData,
      customValueChange,
      changeMonth,
      changeYear,
      code_SampleA
    };
  }
};
</script>
