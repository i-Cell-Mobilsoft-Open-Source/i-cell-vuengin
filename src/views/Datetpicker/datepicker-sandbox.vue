<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <div class="padding-content">
            <div class="title">Date Picker</div>
            <v-icell-date
              :label="'Beteg felvétel dátuma dátuma'"
              :placeHolder="'Felvételi dátum'"
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
      selectedMonth: 0,
      selectedYear: 0
    });

    const formData = computed(() => formGroup);

    const code_SampleA = ref(
      '<template>\n' +
        '  <v-icell-input\n' +
        '    :type="text"\n' +
        '    :label="Falhasználó neve"\n' +
        '    :name="userName"\n' +
        '    :placeHolder="Felhasználó neve">\n' +
        '    :value="formGroup.name"\n' +
        '  </v-icell-input>\n' +
        '</template>'
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
