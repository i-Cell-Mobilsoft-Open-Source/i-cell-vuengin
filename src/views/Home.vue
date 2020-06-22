<template>
  <section>
    <Box :contents="layout" :root="layout" class="tile is-ancestor is-vertical" />
    <pre>{{ generalData }}</pre>
  </section>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ref } from '@vue/composition-api';

class GeneralData {
  public serviceProviderId: string | null = null;
  public saved: boolean = false;
  public name = 'FE Test E2E';
  public settlementPeriodLength = 3;
  public ifUrl = 'http://eets_service_spmock_serviceprovidermock:10010/mock';
  public regNumber = '11111111111111111';
  public customerTaxNumber = 'HU11111111';
  public iban = 'HU40031551504361750648232185';
  public oversightOrganization = 'ORG';
  public paymentTerm = 1;
  public contractDate? = new Date();

  constructor() {
    // empty
  }
}

export default {
  setup() {
    const generalData: GeneralData = {
      serviceProviderId: null,
      saved: false,
      name: 'FE Test E2E',
      settlementPeriodLength: 3,
      ifUrl: 'http://eets_service_spmock_serviceprovidermock:10010/mock',
      regNumber: '11111111111111111',
      customerTaxNumber: 'HU11111111',
      iban: 'HU40031551504361750648232185',
      oversightOrganization: 'ORG',
      paymentTerm: 10,
      contractDate: new Date()
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
          classes: 'box tile is-parent is-vertical',
          data: [
            {
              type: 'box',
              name: 'title',
              data: [
                {
                  type: 'legend',
                  name: 'test-box'
                }
              ]
            },
            {
              type: 'box',
              name: 'identifier-row',
              classes: 'tile is-child columns',
              data: [
                {
                  name: 'serviceProviderId',
                  type: 'input',
                  subtype: 'text',
                  classes: 'column is-2',
                  disabled: true,
                  data: 'model.generalData.serviceProviderId',
                  hasIconsLeft: 'mdi mdi-identifier'
                },
                {
                  name: 'name',
                  type: 'input',
                  subtype: 'text',
                  classes: 'column is-10',
                  data: 'model.generalData.name',
                  required: true,
                  maxLength: 15,
                  validationPattern: '(?!\\s).{1,15}',
                  hasIconsRight: 'mdi mdi-alpha-a'
                }
              ]
            },
            {
              type: 'box',
              name: 'data-row',
              classes: 'tile is-child columns',
              data: [
                {
                  name: 'contractDate',
                  type: 'input',
                  subtype: 'datetime',
                  classes: 'column is-2',
                  disabled: true,
                  data: 'model.generalData.contractDate',
                  hasIconsRight: 'calendar-month'
                },
                {
                  name: 'name',
                  type: 'input',
                  subtype: 'text',
                  classes: 'column is-10',
                  data: 'model.generalData.name',
                  required: true,
                  maxLength: 15,
                  validationMessage: '',
                  validationPattern: '(?!\\s).{1,15}',
                  hasIconsRight: 'mdi mdi-alpha-a'
                }
              ]
            }
          ]
        },
        {
          name: 'container2',
          type: 'box',
          classes: 'tile is-parent',
          data: [
            {
              name: 'address-postal',
              type: 'box',
              classes: 'box tile is-6 is-vertical',
              data: [
                {
                  type: 'box',
                  name: 'title',
                  data: [
                    {
                      type: 'legend',
                      name: 'test-box'
                    }
                  ]
                },
                {
                  type: 'box',
                  name: 'address-postal-data-row',
                  classes: 'columns',
                  data: [
                    {
                      name: 'email',
                      type: 'input',
                      subtype: 'email',
                      data: 'model.emailData.emails[0]',
                      classes: 'column is-12',
                      hasIconsLeft: 'mdi mdi-email'
                    }
                  ]
                }
              ]
            },
            {
              name: 'address-billing',
              type: 'box',
              classes: 'box tile is-6 is-vertical',
              data: [
                {
                  type: 'box',
                  name: 'title',
                  data: [
                    {
                      type: 'legend',
                      name: 'test-box'
                    }
                  ]
                },
                {
                  type: 'box',
                  name: 'address-billing-data-row',
                  classes: 'columns',
                  data: [
                    {
                      name: 'email',
                      type: 'input',
                      subtype: 'email',
                      data: 'model.emailData.emails[0]',
                      classes: 'column is-12',
                      hasIconsLeft: 'mdi mdi-email'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'container2',
          type: 'box',
          classes: 'box is-parent',
          data: [
            {
              type: 'box',
              name: 'title',
              data: [
                {
                  type: 'legend',
                  name: 'test-box'
                }
              ]
            },
            {
              type: 'box',
              name: 'data-row',
              classes: 'columns',
              data: [
                {
                  name: 'email',
                  type: 'input',
                  subtype: 'email',
                  data: 'model.emailData.emails[0]',
                  classes: 'column is-12',
                  hasIconsLeft: 'mdi mdi-email'
                }
              ]
            }
          ]
        }
        // {
        //   name: 'button',
        //   type: 'button',
        //   subtype: 'button',
        //   data: 'button',
        //   action: () => {
        //     console.log('button');
        //   },
        //   hasIconsLeft: 'mdi mdi-github'
        // },
        // {
        //   name: 'reset',
        //   type: 'button',
        //   subtype: 'reset',
        //   data: 'button',
        //   action: () => {
        //     console.log('reset');
        //   },
        //   hasIconsRight: 'mdi mdi-close'
        // }
      ]
    });
    return { layout, generalData, emailData };
  }
};
</script>
