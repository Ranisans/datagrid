import {
  ADD_BOOLEAN_FILTER,
  ADD_ENUM_FILTER,
  ADD_STRING_FILTER,
  RESET_FILTER,
  ActionType,
} from '../actions/filterAction';

export interface StateType {
  stringFilter?: string;
  enumFilter?: string[];
  booleanFilter?: boolean;
}

export const initialState: StateType = {
};

export const filterReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case ADD_BOOLEAN_FILTER:
      return {
        ...state,
        booleanFilter: action.booleanFilter,
      };
    case ADD_ENUM_FILTER:
      return {
        ...state,
        enumFilter: action.enumFilter,
      };
    case ADD_STRING_FILTER:
      return {
        ...state,
        stringFilter: action.stringFilter,
      };
    case RESET_FILTER:
      return initialState;
    default:
      return state;
  }
};
