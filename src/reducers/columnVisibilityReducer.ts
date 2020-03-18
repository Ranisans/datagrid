import { HIDE_COLUMN, SHOW_COLUMN, ActionType } from '../actions/columnVisibility';

export interface StateType {
  columnsPosition: Set<number>;
  columnName: Set<string>;
}

export const initialState: StateType = {
  columnsPosition: new Set(),
  columnName: new Set(),
};

export const columnVisibilityReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case HIDE_COLUMN:
      return {
        columnsPosition: new Set([...state.columnsPosition]).add(action.columnPosition),
        columnName: new Set([...state.columnName]).add(action.columnName),
      };
    case SHOW_COLUMN: {
      const newColumnsPosition = new Set([...state.columnsPosition]);
      newColumnsPosition.delete(action.columnPosition);
      const newColumnName = new Set([...state.columnName]);
      newColumnName.delete(action.columnName);
      return {
        columnsPosition: newColumnsPosition,
        columnName: newColumnName,
      };
    }
    default:
      return state;
  }
};
