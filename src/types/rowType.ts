export interface MoneyType{
  currency: string;
  value: number;
}

export interface RowType {
  number: number;
  name: string;
  birth: string;
  city: string;
  address: string;
  phoneNum: string;
  email: string;
  deposit: MoneyType;
  loan: MoneyType;
  interestRate: number;
}
