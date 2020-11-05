<template>
  <div>
    <section class="hero buefy-content">
      <div class="hero-head">
        <div class="container">
          <div class="box padding-content">
            <div class="title">Buefy</div>
            <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
              <Box :contents="layoutBuefy" :root="layoutBuefy" class="" />
              <div class="submit-content">
                <v-icell-button :type="'submit'" :label="'Submit'" :disabled="!formValidate.valid"></v-icell-button>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<!--<pre>{{ generalData }}</pre>-->

<script lang="ts">
  /* eslint-disable @typescript-eslint/no-inferrable-types */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import 'reflect-metadata';
  import { buildLayout } from '@i-cell/vuengin';
  import { BoxBuefyTypeModel } from '@/model/box-buefy-type.model';
  import { ref } from '@vue/composition-api';

  export default {
    setup() {
      const generalBuefyData: BoxBuefyTypeModel = BoxBuefyTypeModel.factory({
        name: 'Example Customer',
        customerId: null,
        settlementPeriodLength: 2,
        contractDate: new Date(),
        ifUrl: 'http://example.com/customer',
        regNumber: '',
        customerTaxNumber: '',
        iban: '',
        oversightOrganization: '',
        paymentTerm: 10,
      });
      const layoutBuefy = ref(buildLayout(generalBuefyData));

      return {
        layoutBuefy,
        generalBuefyData,
      };
    },
  };
</script>
