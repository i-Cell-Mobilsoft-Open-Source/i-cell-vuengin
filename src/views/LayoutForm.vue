<template>
  <div>
    <section class="hero buefy-content">
      <div class="hero-head">
        <div class="container">
          <div class="box">
            <div class="title">Buefy</div>
            <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
              <Box :contents="layoutBuefy" :root="layoutBuefy" class="" />
              <div class="submit-content">
                <v-icell-button :type="'submit'" :label="'Submit'" :disabled="!formValidate.valid"> </v-icell-button>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>

    <section class="hero vuetify-content">
      <div class="hero-head">
        <div class="container">
          <div class="box">
            <div class="title">Vuetify</div>
            <ValidationObserver ref="observer" rules="required" v-slot="formValidate">
              <Box :contents="layoutVuetify" :root="layoutVuetify" class="" />
              <div class="submit-content">
                <v-icell-button :ui="'material'" :type="'submit'" :label="'Submit'" :disabled="!formValidate.valid"> </v-icell-button>
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
import { buildLayout } from '@/core/service/layout.service';
import { BoxBuefyTypeModel } from '@/components/box/model/box-buefy-type.model';
import { BoxVuetifyTypeModel } from '@/components/box/model/box-vuetify-type.model';
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const generalBuefyData: BoxBuefyTypeModel = BoxBuefyTypeModel.factory({
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
    const generalVuetifyData: BoxVuetifyTypeModel = BoxVuetifyTypeModel.factory({
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
    const layoutBuefy = ref(buildLayout(generalBuefyData));
    const layoutVuetify = ref(buildLayout(generalVuetifyData));
    return {
      layoutBuefy,
      layoutVuetify,
      generalBuefyData,
      generalVuetifyData
    };
  }
};
</script>
