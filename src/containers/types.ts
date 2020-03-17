import { RowType } from '../types/rowType';

export interface StylesTypes {
  table: string;
  row: string;
  check: string;
  number: string;
  name: string;
  birth: string;
  city: string;
  address: string;
  phoneNum: string;
  email: string;
  do: string;
  bool: string;
  deposit: string;
  loan: string;
  interestRate: string;
}

export interface BodyPropsType {
  rows: RowType[];
  rowHeight: number;
  styles: StylesTypes;
}

export interface TablePropsType extends BodyPropsType{
  columns: HeaderColumnDataType[];
}

export interface VirtualTablePropsType extends TablePropsType {
  viewportHeight: number;
}


interface HeaderColumnDataType {
  id: string;
  label: string;
  minWidth: number;
}
