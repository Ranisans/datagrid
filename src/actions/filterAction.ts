export const ADD_FILTER = 'ADD_FILTER';
export const SET_FILTER = 'SET_FILTER';

export interface FilterType {
  filter: string;
  order: string;
}

export interface ActionType extends FilterType {
  type: string;
}

export const addFiler = ({ filter, order }: FilterType): ActionType => (
  {
    type: ADD_FILTER,
    filter,
    order,
  }
);

export const setFilter = ({ filter, order }: FilterType): ActionType => (
  {
    type: SET_FILTER,
    filter,
    order,
  }
);
