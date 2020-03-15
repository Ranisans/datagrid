import {
  ADD_BOOLEAN_FILTER,
  RESET_BOOLEAN_FILTER,
  ADD_ENUM_FILTER,
  ADD_STRING_FILTER,
  RESET_FILTER,
  ActionType,
} from '../actions/filterAction';

export interface StateType {
  stringFilter: string;
  enumFilter: string[];
  booleanFilter?: boolean;
}

export const initialState: StateType = {
  stringFilter: '',
  enumFilter: [],
};

export const filterReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case ADD_BOOLEAN_FILTER:
      return {
        ...state,
        booleanFilter: action.filter,
      };
    case RESET_BOOLEAN_FILTER: {
      const nextState = { ...state };
      delete nextState.booleanFilter;
      return nextState;
    }
    case ADD_ENUM_FILTER:
      return {
        ...state,
        enumFilter: action.filter,
      };
    case ADD_STRING_FILTER:
      return {
        ...state,
        stringFilter: action.filter,
      };
    case RESET_FILTER:
      return initialState;
    default:
      return state;
  }
};
