import {
  CHANGE_COLUMN_SIZE, ActionType, ChangeColumnSizeType,
} from '../actions/sizeAction';

export const initialState: ChangeColumnSizeType = {
  columnSize: 0,
};

export const sizeReducer = (state = initialState, action: ActionType): ChangeColumnSizeType => {
  switch (action.type) {
    case CHANGE_COLUMN_SIZE:
      return {
        columnSize: action.columnSize,
      };
    default:
      return state;
  }
};
