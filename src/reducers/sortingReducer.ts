import { ADD_SORTING, SET_SORTING, ActionType } from '../actions/sortAction';


export interface StateTypes {
  sorting: Map<string, string>;
}

export const initialState: StateTypes = {
  sorting: new Map(),
};

export const sortingReducer = (state = initialState, action: ActionType): StateTypes => {
  switch (action.type) {
    case SET_SORTING:
      return {
        sorting: new Map().set(action.sorting, action.order),
      };
    case ADD_SORTING:
      return {
        sorting: new Map({ ...state.sorting }).set(action.sorting, action.order),
      };
    default:
      return state;
  }
};
