import { DateTimePicker, Disabled, Numeric, Classes, LayoutModel, Legend, Order, Required, Row, Text, UI } from '@/core/decorators';

@LayoutModel('GeneralData')
@Legend('GeneralData')
export class BoxBuefyTypeModel {
  // identifier ----------------------------------------------------------------
  /**
   * serviceProviderId
   */
  @Row('identifier', 1)
  @Order(1)
  @Text()
  @Disabled()
  @Classes('column is-4')
  public serviceProviderId = '';
  /**
   * name
   */
  @Row('identifier', 1)
  @Order(2)
  @Required()
  @Text()
  @Classes('column is-8')
  public name = '';

  // interface ------------------------------------------------
  /**
   * settlementPeriodLength
   */
  @Row('interface', 2)
  @Order(2)
  @Required()
  @Numeric()
  @Classes('column is-2')
  public settlementPeriodLength = 0;

  /**
   * contractDate
   */
  @Row('interface', 2)
  @Order(1)
  @DateTimePicker()
  // @DatePicker()
  @Classes('column is-2')
  public contractDate: Date = new Date();

  /**
   * ifUrl
   */
  @Row('interface', 2)
  @Order(3)
  @Required()
  @Text()
  @Classes('column is-8')
  public ifUrl = '';

  // account ----------------------------------------------------------------
  /**
   * regNumber
   */
  @Row('account', 3)
  @Order(1)
  @Required()
  @Text()
  @Classes('column is-4')
  public regNumber = '';

  /**
   * customerTaxNumber
   */
  @Row('account', 3)
  @Order(2)
  @Required()
  @Text()
  @Classes('column is-4')
  public customerTaxNumber = '';

  /**
   * iban
   */
  @Row('account', 3)
  @Order(3)
  @Required()
  @Text()
  @Classes('column is-4')
  public iban = '';

  // oversight ----------------------------------------------------------------
  /**
   * oversightOrganization
   */
  @Row('oversight', 4)
  @Order(1)
  @Required()
  @Text()
  @Classes('column is-6')
  public oversightOrganization = '';

  /**
   * paymentTerm
   */
  @Row('oversight', 4)
  @Order(2)
  @Required()
  @Numeric()
  @Classes('column is-6')
  public paymentTerm = 0;

  public static factory(obj: any) {
    const instance = new BoxBuefyTypeModel();
    instance.name = obj.name;
    instance.serviceProviderId = obj.serviceProviderId;
    instance.settlementPeriodLength = obj.settlementPeriodLength;
    instance.contractDate = obj.contractDate;
    instance.ifUrl = obj.ifUrl;
    instance.regNumber = obj.regNumber;
    instance.customerTaxNumber = obj.customerTaxNumber;
    instance.iban = obj.iban;
    instance.oversightOrganization = obj.oversightOrganization;
    instance.paymentTerm = obj.paymentTerm;
    return instance;
  }
}
