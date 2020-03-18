export const SET_TABLE_TYPE = 'SET_TABLE_TYPE';

export interface TableType {
  isVirtual: boolean;
}

export interface ActionType extends TableType{
  type: string;
}

export const setTableType = ({ value }: {value: boolean}): ActionType => (
  {
    type: SET_TABLE_TYPE,
    isVirtual: value,
  }
);
