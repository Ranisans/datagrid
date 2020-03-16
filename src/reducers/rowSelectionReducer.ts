import {
  SELECT_MULTIPLE_ROW, SELECT_SINGLE_ROW, UNSELECT_ROW, ActionType,
} from '../actions/rowsSelect';

export interface StateType {
  selectedRows: Set<number>;
}

export const initialState: StateType = {
  selectedRows: new Set(),
};

export const rowSelectionReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case SELECT_SINGLE_ROW:
      return {
        selectedRows: new Set([action.rowNumber]),
      };
    case SELECT_MULTIPLE_ROW:
      return {
        selectedRows: new Set([...state.selectedRows]).add(action.rowNumber),
      };
    case UNSELECT_ROW: {
      const newSelectedRow = new Set([...state.selectedRows]);
      newSelectedRow.delete(action.rowNumber);
      return {
        selectedRows: newSelectedRow,
      };
    }
    default:
      return state;
  }
};
