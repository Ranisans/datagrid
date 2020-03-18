import { SET_TABLE_TYPE, ActionType, TableType } from '../actions/tableTypeAction';

export const initialState: TableType = {
  isVirtual: false,
};

export const changeTableType = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_TABLE_TYPE:
      return {
        isVirtual: action.isVirtual,
      };
    default:
      return state;
  }
};
