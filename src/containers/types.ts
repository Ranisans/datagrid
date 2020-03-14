import { RowType } from '../types/rowType';

export interface StylesTypes {
  table: string;
  row: string;
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
