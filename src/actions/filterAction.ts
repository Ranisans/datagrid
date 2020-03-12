export const ADD_STRING_FILTER = 'ADD_STRING_FILTER';
export const ADD_ENUM_FILTER = 'ADD_ENUM_FILTER';
export const ADD_BOOLEAN_FILTER = 'ADD_BOOLEAN_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export interface StringFilterType {
  filterValue: string;
}

export interface EnumFilterType {
  filterValue: string[];
}

export interface BooleanFilterType {
  filterValue: boolean;
}

export interface ActionType {
  type: string;
  stringFilter?: string;
  enumFilter?: string[];
  booleanFilter?: boolean;
}

export const addStringFilter = ({ filterValue }: StringFilterType): ActionType => (
  {
    type: ADD_STRING_FILTER,
    stringFilter: filterValue,
  }
);

export const addEnumFilter = ({ filterValue }: EnumFilterType): ActionType => (
  {
    type: ADD_STRING_FILTER,
    enumFilter: filterValue,
  }
);

export const addBooleanFilter = ({ filterValue }: BooleanFilterType): ActionType => (
  {
    type: ADD_STRING_FILTER,
    booleanFilter: filterValue,
  }
);

export const resetFilter = (): ActionType => (
  {
    type: RESET_FILTER,
  }
);
