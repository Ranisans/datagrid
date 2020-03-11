import { RowType } from '../types/rowType';

export const SET_DATA = 'SET_DATA';

export interface ResultDataType {
  data: RowType;
}

export interface ActionType extends ResultDataType {
  type: string;
}

export const setData = ({ data }: ResultDataType) => (
  {
    type: SET_DATA,
    data,
  }
);
