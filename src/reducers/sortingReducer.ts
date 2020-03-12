import { ADD_SORTING, SET_SORTING, ActionType } from '../actions/sortAction';


export interface StateTypes {
  sortingOrder: Set<string>;
  sorting: Map<string, string>;
}

export const initialState: StateTypes = {
  sortingOrder: new Set(),
  sorting: new Map(),
};

export const sortingReducer = (state = initialState, action: ActionType): StateTypes => {
  switch (action.type) {
    case SET_SORTING:
      return {
        sortingOrder: new Set([action.sorting]),
        sorting: new Map().set(action.sorting, action.order),
      };
    case ADD_SORTING:
      return {
        sortingOrder: new Set(state.sortingOrder).add(action.sorting),
        sorting: new Map({ ...state.sorting }).set(action.sorting, action.order),
      };
    default:
      return state;
  }
};
