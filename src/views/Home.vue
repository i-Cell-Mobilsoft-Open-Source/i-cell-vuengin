<template>
  <section>
    <Box :contents="layout" :root="layout" class="tile is-ancestor is-vertical" />
    <pre>{{ generalData }}, {{ addressDataPostal }}</pre>
  </section>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { ref } from '@vue/composition-api';
import { entries, groupBy, orderBy } from 'lodash';

enum MetadataKeys {
  VUENGIN = 'vuengin:core',
  VUENGIN_PROP = 'vuengin:prop'
}

function decorateProperty(prop: string, value: any) {
  return (target: any, key: string | symbol) => {
    let meta: any = {};
    if (Reflect.hasMetadata(MetadataKeys.VUENGIN_PROP, target, key)) {
      meta = Reflect.getMetadata(MetadataKeys.VUENGIN_PROP, target, key);
    }
    Reflect.defineMetadata(MetadataKeys.VUENGIN_PROP, Object.assign({}, meta, { [prop]: value, key }), target, key);
  };
}
function multiDecorateProperty(props: string[], values: any[]) {
  return (target: any, key: string | symbol) => {
    for (const idx in props) {
      let meta: any = {};
      if (Reflect.hasMetadata(MetadataKeys.VUENGIN_PROP, target, key)) {
        meta = Reflect.getMetadata(MetadataKeys.VUENGIN_PROP, target, key);
      }
      Reflect.defineMetadata(MetadataKeys.VUENGIN_PROP, Object.assign({}, meta, { [props[idx]]: values[idx], key }), target, key);
    }
  };
}

function Classes(classes: string = 'column'): PropertyDecorator {
  return decorateProperty('classes', classes);
}

function InputType(subtype: string): PropertyDecorator {
  return decorateProperty('subtype', subtype);
}

function Text(): PropertyDecorator {
  return InputType('text');
}

function Numeric(): PropertyDecorator {
  return InputType('number');
}

function Password(): PropertyDecorator {
  return InputType('password');
}

function Checkbox(): PropertyDecorator {
  return InputType('checkbox');
}

function DatePicker(): PropertyDecorator {
  return InputType('date');
}

function DateTimePicker(): PropertyDecorator {
  return InputType('datetime');
}

function Row(rowName: string, rowOrder: number): PropertyDecorator {
  return multiDecorateProperty(['rowName', 'rowOrder'], [rowName, rowOrder]);
}

function Order(order: number): PropertyDecorator {
  return decorateProperty('order', order);
}

function Required(required = true): PropertyDecorator {
  return decorateProperty('required', required);
}

function Disabled(disabled = true): PropertyDecorator {
  return decorateProperty('disabled', disabled);
}

function Legend(legend: string): ClassDecorator {
  return (target: any) => {
    let meta: any = {};
    if (Reflect.hasMetadata(MetadataKeys.VUENGIN, target)) {
      meta = Reflect.getMetadata(MetadataKeys.VUENGIN, target);
    }
    Reflect.defineMetadata(MetadataKeys.VUENGIN, Object.assign({}, meta, { legend }), target);
  };
}

function LayoutModel(name: string, debug = false): ClassDecorator {
  return (target: Function) => {
    const tmpInstance = Reflect.construct(target, []);
    const props: any = {};
    for (const prop of Reflect.ownKeys(tmpInstance)) {
      let type: string = 'text';
      if (tmpInstance?.[prop]) {
        if (typeof tmpInstance?.[prop] === 'object') {
          type = Reflect.getPrototypeOf(tmpInstance?.[prop]).constructor.name;
          if (debug) console.log(prop, type);
        } else {
          type = (typeof tmpInstance?.[prop]).replace(/(.)(.*)/, (m: any, $1: any, $2: any) => `${$1.toUpperCase()}${$2}`);
          if (debug) console.log(prop, type);
        }
      } else {
        if (debug) console.log(prop, null);
      }

      const meta = Reflect.getMetadata(MetadataKeys.VUENGIN_PROP, tmpInstance, prop as string);

      props[prop] = Object.assign({}, meta, { modelType: type });
    }
    let meta;
    if (Reflect.hasMetadata(MetadataKeys.VUENGIN, target)) {
      meta = Reflect.getMetadata(MetadataKeys.VUENGIN, target);
    }
    Reflect.defineMetadata(
      MetadataKeys.VUENGIN,
      Object.assign({}, meta, {
        name,
        props
      }),
      target
    );
  };
}

@LayoutModel('generalData')
@Legend('generalData')
class GeneralData {
  @Row('identifier', 1)
  @Order(1)
  @Text()
  @Disabled()
  @Classes('column is-2')
  public serviceProviderId: string = '';
  @Row('identifier', 1)
  @Order(2)
  @Required()
  @Text()
  @Classes('column is-10')
  public name: string = '';
  @Row('interface', 2)
  @Order(2)
  @Required()
  @Numeric()
  @Classes('column is-2')
  public settlementPeriodLength: number = 0;
  @Row('account', 3)
  @Order(1)
  @Required()
  @Text()
  @Classes('column is-4')
  public regNumber: string = '';
  @Row('account', 3)
  @Order(2)
  @Required()
  @Text()
  @Classes('column is-4')
  public customerTaxNumber: string = '';
  @Row('account', 3)
  @Order(3)
  @Required()
  @Text()
  @Classes('column is-4')
  public iban: string = '';
  @Row('oversight', 4)
  @Order(1)
  @Required()
  @Text()
  @Classes('column is-6')
  public oversightOrganization: string = '';
  @Row('oversight', 4)
  @Order(2)
  @Required()
  @Numeric()
  @Classes('column is-6')
  public paymentTerm: number = 0;
  @Row('interface', 2)
  @Order(1)
  @Required()
  @DateTimePicker()
  @Classes('column is-2')
  public contractDate: Date = new Date();
  @Row('interface', 2)
  @Order(3)
  @Required()
  @Text()
  @Classes('column is-8')
  public ifUrl: string = '';

  public static factory(obj: any) {
    const instance = new GeneralData();

    instance.serviceProviderId = obj.serviceProviderId;
    instance.name = obj.name;
    instance.settlementPeriodLength = obj.settlementPeriodLength;
    instance.ifUrl = obj.ifUrl;
    instance.regNumber = obj.regNumber;
    instance.customerTaxNumber = obj.customerTaxNumber;
    instance.iban = obj.iban;
    instance.oversightOrganization = obj.oversightOrganization;
    instance.paymentTerm = obj.paymentTerm;
    instance.contractDate = obj.contractDate;

    return instance;
  }
}

// TODO
function buildLayout(...models: any[]) {
  const layoutModel: any = {};
  const layoutMeta: any[] = [];
  models.forEach(model => {
    const meta = Reflect.getMetadata(MetadataKeys.VUENGIN, Reflect.getPrototypeOf(model).constructor);
    layoutModel[meta.name] = model;
    const propMetas = entries(groupBy(orderBy(meta.props, ['rowOrder']), 'rowName')).map(entry => {
      const row = entry[0];
      const fieldMetas = orderBy(entry[1], ['order']);
      return {
        type: 'box',
        name: `${meta.name}_${row}`,
        classes: 'tile is-child columns',
        data: fieldMetas.map(field => ({
          ...field,
          name: field.key,
          type: field.type || 'input',
          subtype: field.subtype || field.modelType.toLowerCase() || 'text',
          data: `model.${meta.name}.${field.key}`
        }))
      };
    });
    if (meta.legend)
      propMetas.unshift({
        type: 'box',
        name: 'title',
        classes: 'tile is-child columns',
        data: [
          {
            type: 'legend',
            name: meta.legend,
            classes: 'column is-12'
          }
        ]
      });
    layoutMeta.push({
      name: meta.name,
      type: 'box',
      classes: 'box tile is-parent is-vertical',
      data: propMetas
    });
  });
  return { model: layoutModel, meta: layoutMeta };
}

export default {
  setup() {
    const generalData: GeneralData = GeneralData.factory({
      serviceProviderId: null,
      name: 'FE Test E2E',
      settlementPeriodLength: 3,
      ifUrl: 'http://eets_service_spmock_serviceprovidermock:10010/mock',
      regNumber: '11111111111111111',
      customerTaxNumber: 'HU11111111',
      iban: 'HU40031551504361750648232185',
      oversightOrganization: 'ORG',
      paymentTerm: 10,
      contractDate: new Date()
    });
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
    console.log(buildLayout(generalData));
    const layout = ref(buildLayout(generalData));
    // #region template

    // const layout = ref({
    //   model: {
    //     generalData,
    //     addressDataBilling,
    //     addressDataPostal,
    //     emailData
    //   },
    //   meta: [
    //     {
    //       name: 'general-data',
    //       type: 'box',
    //       classes: 'box tile is-parent is-vertical',
    //       data: [
    //         {
    //           type: 'box',
    //           name: 'title',
    //           classes: 'tile is-child columns',
    //           data: [
    //             {
    //               type: 'legend',
    //               name: 'general-data',
    //               classes: 'column is-12'
    //             }
    //           ]
    //         },
    //         {
    //           type: 'box',
    //           name: 'identifier-row',
    //           classes: 'tile is-child columns',
    //           data: [
    //             {
    //               name: 'serviceProviderId',
    //               type: 'input',
    //               subtype: 'text',
    //               classes: 'column is-2',
    //               disabled: true,
    //               data: 'model.generalData.serviceProviderId',
    //               hasIconsLeft: 'mdi mdi-identifier'
    //             },
    //             {
    //               name: 'name',
    //               type: 'input',
    //               subtype: 'text',
    //               classes: 'column is-10',
    //               data: 'model.generalData.name',
    //               required: true,
    //               maxLength: 15,
    //               validationPattern: '(?!\\s).{1,15}',
    //               hasIconsLeft: 'alpha-a'
    //             }
    //           ]
    //         },
    //         {
    //           type: 'box',
    //           name: 'base-data',
    //           classes: 'tile is-child columns',
    //           data: [
    //             {
    //               name: 'contractDate',
    //               type: 'input',
    //               subtype: 'datetime',
    //               classes: 'column is-2',
    //               disabled: false,
    //               data: 'model.generalData.contractDate',
    //               hasIconsRight: 'calendar-month'
    //             },
    //             {
    //               name: 'settlementPeriodLength',
    //               type: 'input',
    //               subtype: 'number',
    //               classes: 'column is-2',
    //               customClass: 'is-text-right',
    //               min: 0,
    //               max: 100,
    //               data: 'model.generalData.settlementPeriodLength',
    //               hasIconsLeft: 'numeric'
    //             },
    //             {
    //               name: 'ifUrl',
    //               type: 'input',
    //               subtype: 'url',
    //               classes: 'column is-8',
    //               data: 'model.generalData.ifUrl',
    //               required: true,
    //               validationMessage: '',
    //               validationPattern: '(?!\\s)https?://[a-z0-9\\-_\\.]*(:[0-9]+)?(/[\\w\\.?#=\\+]*)*',
    //               hasIconsLeft: 'api'
    //             }
    //           ]
    //         },
    //         {
    //           type: 'box',
    //           name: 'account-data',
    //           classes: 'tile is-child columns',
    //           data: [
    //             {
    //               name: 'regNumber',
    //               type: 'input',
    //               subtype: 'text',
    //               classes: 'column is-4',
    //               disabled: false,
    //               data: 'model.generalData.regNumber',
    //               hasIconsLeft: 'alpha-a'
    //             },
    //             {
    //               name: 'customerTaxNumber',
    //               type: 'input',
    //               subtype: 'text',
    //               classes: 'column is-4',
    //               data: 'model.generalData.customerTaxNumber',
    //               hasIconsLeft: 'alpha-a'
    //             },
    //             {
    //               name: 'iban',
    //               type: 'input',
    //               subtype: 'url',
    //               classes: 'column is-4',
    //               data: 'model.generalData.iban',
    //               required: true,
    //               hasIconsLeft: 'alpha-a'
    //             }
    //           ]
    //         },
    //         {
    //           type: 'box',
    //           name: 'account-data',
    //           classes: 'tile is-child columns',
    //           data: [
    //             {
    //               name: 'oversightOrganization',
    //               type: 'input',
    //               subtype: 'text',
    //               classes: 'column is-6',
    //               disabled: false,
    //               data: 'model.generalData.oversightOrganization',
    //               hasIconsLeft: 'alpha-a'
    //             },
    //             {
    //               name: 'paymentTerm',
    //               type: 'input',
    //               subtype: 'number',
    //               min: 0,
    //               max: 1000,
    //               classes: 'column is-6',
    //               customClass: 'is-text-right',
    //               data: 'model.generalData.paymentTerm',
    //               hasIconsLeft: 'numeric'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: 'address',
    //       type: 'box',
    //       classes: 'tile is-parent',
    //       data: [
    //         {
    //           name: 'address-postal',
    //           type: 'box',
    //           classes: 'box tile is-6 is-vertical',
    //           data: [
    //             {
    //               type: 'box',
    //               name: 'title',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   type: 'legend',
    //                   classes: 'column is-12',
    //                   name: 'address-postal'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-postal-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'nationality',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataPostal.nationality',
    //                   classes: 'column is-2',
    //                   maxLength: 2,
    //                   capitalize: true,
    //                   hasIconsLeft: 'earth'
    //                 },
    //                 {
    //                   name: 'country',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataPostal.country',
    //                   classes: 'column is-10',
    //                   hasIconsLeft: 'earth'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-postal-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'zipCode',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataPostal.zipCode',
    //                   classes: 'column is-2',
    //                   hasIconsLeft: 'map-marker'
    //                 },
    //                 {
    //                   name: 'city',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataPostal.city',
    //                   classes: 'column is-10',
    //                   hasIconsLeft: 'city'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-postal-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'streetName',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataPostal.streetName',
    //                   classes: 'column is-10',
    //                   hasIconsLeft: 'map-marker'
    //                 },
    //                 {
    //                   name: 'houseNumber',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataPostal.houseNumber',
    //                   classes: 'column is-2',
    //                   hasIconsLeft: 'map-marker'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-postal-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'otherAddress',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataPostal.otherAddress',
    //                   classes: 'column is-12',
    //                   hasIconsLeft: 'map-marker'
    //                 }
    //               ]
    //             }
    //           ]
    //         },
    //         {
    //           name: 'address-billing',
    //           type: 'box',
    //           classes: 'box tile is-6 is-vertical',
    //           data: [
    //             {
    //               type: 'box',
    //               name: 'title',
    //               data: [
    //                 {
    //                   type: 'legend',
    //                   name: 'address-billing'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-billing-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'nationality',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataBilling.nationality',
    //                   classes: 'column is-2',
    //                   maxLength: 2,
    //                   capitalize: true,
    //                   hasIconsLeft: 'earth'
    //                 },
    //                 {
    //                   name: 'country',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataBilling.country',
    //                   classes: 'column is-10',
    //                   hasIconsLeft: 'earth'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-billing-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'zipCode',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataBilling.zipCode',
    //                   classes: 'column is-2',
    //                   hasIconsLeft: 'map-marker'
    //                 },
    //                 {
    //                   name: 'city',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataBilling.city',
    //                   classes: 'column is-10',
    //                   hasIconsLeft: 'city'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-billing-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'streetName',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataBilling.streetName',
    //                   classes: 'column is-10',
    //                   hasIconsLeft: 'map-marker'
    //                 },
    //                 {
    //                   name: 'houseNumber',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataBilling.houseNumber',
    //                   classes: 'column is-2',
    //                   hasIconsLeft: 'map-marker'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'address-billing-data-row',
    //               classes: 'columns',
    //               data: [
    //                 {
    //                   name: 'otherAddress',
    //                   type: 'input',
    //                   subtype: 'text',
    //                   data: 'model.addressDataBilling.otherAddress',
    //                   classes: 'column is-12',
    //                   hasIconsLeft: 'map-marker'
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: 'emails',
    //       type: 'box',
    //       classes: 'tile is-parent',
    //       data: [
    //         {
    //           name: 'email-addresses',
    //           type: 'box',
    //           classes: 'box tile is-12 is-vertical',
    //           data: [
    //             {
    //               type: 'box',
    //               name: 'title',
    //               data: [
    //                 {
    //                   type: 'legend',
    //                   name: 'email-addresses'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'box',
    //               name: 'email-addresses-data-row',
    //               classes: 'tile is-vertical',
    //               data: [
    //                 {
    //                   name: 'email',
    //                   type: 'input',
    //                   subtype: 'email',
    //                   data: 'model.emailData.emails[0]',
    //                   classes: 'column is-12',
    //                   hasIconsLeft: 'mdi mdi-email'
    //                 },
    //                 {
    //                   name: 'email',
    //                   type: 'input',
    //                   subtype: 'email',
    //                   data: 'model.emailData.emails[1]',
    //                   classes: 'column is-12',
    //                   hasIconsLeft: 'mdi mdi-email'
    //                 },
    //                 {
    //                   name: 'email',
    //                   type: 'input',
    //                   subtype: 'email',
    //                   data: 'model.emailData.emails[2]',
    //                   classes: 'column is-12',
    //                   hasIconsLeft: 'mdi mdi-email'
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // });

    // #endregion template
    return { layout, generalData, addressDataPostal, addressDataBilling, emailData };
  }
};
</script>
