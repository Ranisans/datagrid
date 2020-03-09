import faker from 'faker';

import { RowType, MoneyType } from '../types/rowType';

const generateData = (): RowType[] => {
  const seed = 154311666;
  const recordsCount = 100;
  const datePast = 20;

  const result: RowType[] = [];

  for (let i = 0; i < recordsCount; i += 1) {
    faker.seed(seed + i);
    const record = {} as RowType;
    record.number = i + 1;
    record.name = `${faker.name.prefix()} ${faker.name.firstName()} ${faker.name.lastName()}`;
    record.birth = faker.date.past(datePast).toString();
    record.city = `${faker.address.city()}, ${faker.address.zipCode()}`;
    record.address = faker.address.streetAddress(true);
    record.phoneNum = faker.phone.phoneNumberFormat();
    record.email = faker.internet.email();
    record.deposit = {
      currency: faker.finance.currencySymbol(),
      value: Number.parseInt(faker.finance.account(), 10),
    } as MoneyType;
    record.loan = {
      currency: faker.finance.currencySymbol(),
      value: Number.parseInt(faker.finance.account(), 10),
    } as MoneyType;
    record.interestRate = Number.parseFloat(faker.finance.amount(0.5, 7));

    result.push(record);
  }

  return result;
};

export default generateData;
