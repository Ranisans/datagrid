import { SET_DATA, ActionType } from '../actions/resultAction';
import { RowType } from '../types/rowType';

interface StateTypes {
  data: RowType[];
}

export const initialState: StateTypes = {
  data: [],
};

export const resultReducer = (state = initialState, action: ActionType): StateTypes => {
  switch (action.type) {
    case SET_DATA:
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
