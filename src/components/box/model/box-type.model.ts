import { Classes, DateTimePicker, Disabled, LayoutModel, Legend, Numeric, Order, Required, Row, Text } from '@/core/decorators';

@LayoutModel('generalData')
@Legend('generalData')
export class BoxTypeModel {
  @Row('identifier', 1)
  @Order(1)
  @Text()
  @Disabled()
  @Classes('column is-2')
  public serviceProviderId = '';
  @Row('identifier', 1)
  @Order(2)
  @Required()
  @Text()
  @Classes('column is-10')
  public name = '';
  @Row('interface', 2)
  @Order(2)
  @Required()
  @Numeric()
  @Classes('column is-2')
  public settlementPeriodLength = 0;
  @Row('account', 3)
  @Order(1)
  @Required()
  @Text()
  @Classes('column is-4')
  public regNumber = '';
  @Row('account', 3)
  @Order(2)
  @Required()
  @Text()
  @Classes('column is-4')
  public customerTaxNumber = '';
  @Row('account', 3)
  @Order(3)
  @Required()
  @Text()
  @Classes('column is-4')
  public iban = '';
  @Row('oversight', 4)
  @Order(1)
  @Required()
  @Text()
  @Classes('column is-6')
  public oversightOrganization = '';
  @Row('oversight', 4)
  @Order(2)
  @Required()
  @Numeric()
  @Classes('column is-6')
  public paymentTerm = 0;
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
  public ifUrl = '';

  public static factory(obj: any) {
    const instance = new BoxTypeModel();
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
