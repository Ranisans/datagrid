import { ADD_FILTER, SET_FILTER, ActionType } from '../actions/filterAction';


interface StateTypes {
  filterOrder: Set<string>;
  filter: Map<string, string>;
}

export const initialState: StateTypes = {
  filterOrder: new Set(),
  filter: new Map(),
};

export const filterReducer = (state = initialState, action: ActionType): StateTypes => {
  switch (action.type) {
    case SET_FILTER:
      return {
        filterOrder: new Set([action.filter]),
        filter: new Map().set(action.filter, action.order),
      };
    case ADD_FILTER:
      return {
        filterOrder: new Set(state.filterOrder).add(action.filter),
        filter: new Map({ ...state.filter }).set(action.filter, action.order),
      };
    default:
      return state;
  }
};
