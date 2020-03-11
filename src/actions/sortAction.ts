export const ADD_SORTING = 'ADD_SORTING';
export const SET_SORTING = 'SET_SORTING';

export interface SortingType {
  sorting: string;
  order: string;
}

export interface ActionType extends SortingType {
  type: string;
}

export const addSorting = ({ sorting, order }: SortingType): ActionType => (
  {
    type: ADD_SORTING,
    sorting,
    order,
  }
);

export const setSorting = ({ sorting, order }: SortingType): ActionType => (
  {
    type: SET_SORTING,
    sorting,
    order,
  }
);
