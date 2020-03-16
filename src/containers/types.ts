import { RowType } from '../types/rowType';

export interface StylesTypes {
  table: string;
  row: string;
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

export interface TablePropsType {
  rows: RowType[];
  rowHeight: number;
  styles: StylesTypes;
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
