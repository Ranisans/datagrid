import { HIDE_COLUMN, SHOW_COLUMN, ActionType } from '../actions/columnVisibility';

export interface StateType {
  columnsPosition: Set<number>;
}

export const initialState: StateType = {
  columnsPosition: new Set(),
};

export const columnVisibilityReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case HIDE_COLUMN:
      return {
        columnsPosition: new Set([...state.columnsPosition]).add(action.columnPosition),
      };
    case SHOW_COLUMN: {
      const newColumnsPosition = new Set([...state.columnsPosition]);
      newColumnsPosition.delete(action.columnPosition);
      return {
        columnsPosition: newColumnsPosition,
      };
    }
    default:
      return state;
  }
};
