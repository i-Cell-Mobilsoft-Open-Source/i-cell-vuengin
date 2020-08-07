<template>
  <section class="notification">
    <div class="box">
      <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
        <Box :contents="layout" :root="layout" class="" />
        <div class="submit-content">
          <b-button tag="input" native-type="submit" :disabled="!formValidate.valid">Submit</b-button>
        </div>
      </ValidationObserver>
    </div>
    <!--<pre>{{ generalData }}</pre>-->
  </section>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { buildLayout } from '@/core/service/layout.service';
import { BoxTypeModel } from '@/components/box/model/box-type.model';
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const generalData: BoxTypeModel = BoxTypeModel.factory({
      name: 'FE Test E2E',
      serviceProviderId: null,
      settlementPeriodLength: 2,
      contractDate: new Date(),
      ifUrl: 'http://eets_service_spmock_serviceprovidermock:10010/mock',
      regNumber: '',
      customerTaxNumber: 'HU11111111',
      iban: 'HU40031551504361750648232185',
      oversightOrganization: '',
      paymentTerm: 10
    });
    /*const addressDataBilling = {
      nationality: 'HU',
      country: 'Magyarország',
      zipCode: '1142',
      city: 'Budapest',
      streetName: 'Gizella út',
      houseNumber: '51',
      otherAddress: '1. épület'
    };
    const addressDataPostal = {
      nationality: 'HU',
      country: 'Magyarország',
      zipCode: '1142',
      city: 'Budapest',
      streetName: 'Gizella út',
      houseNumber: '51',
      otherAddress: '1. épület'
    };
    const emailData = {
      emails: ['test-tsp.icell@example.com', 'test-tsp2.icell@example.com', 'test-tsp3.icell@example.com']
    };*/
    const layout = ref(buildLayout(generalData));
    return {
      layout,
      generalData
      // addressDataPostal,
      // addressDataBilling,
      // emailData
    };
  }
};
</script>
