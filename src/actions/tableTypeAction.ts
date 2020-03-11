export const SET_TABLE_TYPE = 'SET_TABLE_TYPE';

export interface TableType {
  isVirtual: boolean;
}

export interface ActionType extends TableType{
  type: string;
}

export const setVirtualTable = (): ActionType => (
  {
    type: SET_TABLE_TYPE,
    isVirtual: true,
  }
);

export const setSimpleTable = (): ActionType => (
  {
    type: SET_TABLE_TYPE,
    isVirtual: false,
  }
);
