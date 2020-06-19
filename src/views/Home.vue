<template>
  <section>
    <Drawer :content="layout" />
    <pre>{{ generalData }}</pre>
  </section>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const generalData = {
      // await axios.get()
      serviceProviderId: null,
      saved: false,
      name: 'FE Test E2E',
      settlementPeriodLength: 3,
      ifUrl: 'http://eets_service_spmock_serviceprovidermock:10010/mock',
      regNumber: '11111111111111111',
      customerTaxNumber: 'HU11111111',
      iban: 'HU40031551504361750648232185',
      oversightOrganization: 'ORG',
      paymentTerm: 10
    };
    const addressDataBilling = {
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
    };
    const layout = ref({
      model: {
        generalData,
        addressDataBilling,
        addressDataPostal,
        emailData
      },
      meta: [
        {
          name: 'general-data',
          type: 'box',
          classes: 'box',
          data: [
            {
              type: 'legend',
              name: 'test-box'
            },
            {
              name: 'name',
              type: 'input',
              subtype: 'checkbox',
              data: 'model.generalData.saved'
            },
            {
              name: 'name',
              type: 'input',
              subtype: 'text',
              data: 'model.generalData.name',
              hasIconsLeft: 'mdi mdi-account'
            },
            {
              name: 'input-number',
              type: 'input',
              subtype: 'number',
              data: 'model.generalData.settlementPeriodLength',
              hasIconsRight: 'mdi mdi-numeric'
            }
          ]
        },
        {
          name: 'container2',
          type: 'box',
          data: [
            {
              type: 'legend',
              name: 'test-box2'
            },
            {
              name: 'email',
              type: 'input',
              subtype: 'email',
              data: 'model.emailData.emails[0]',
              hasIconsLeft: 'mdi mdi-email'
            }
          ]
        },
        {
          name: 'button',
          type: 'button',
          subtype: 'button',
          data: 'button',
          action: () => {
            console.log('button');
          },
          hasIconsLeft: 'mdi mdi-github'
        },
        {
          name: 'reset',
          type: 'button',
          subtype: 'reset',
          data: 'button',
          action: () => {
            console.log('reset');
          },
          hasIconsRight: 'mdi mdi-close'
        }
      ]
    });
    return { layout, generalData, emailData };
  }
};
</script>
