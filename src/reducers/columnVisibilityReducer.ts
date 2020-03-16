import { HIDE_COLUMN, SHOW_COLUMN, ActionType } from '../actions/columnVisibility';

export interface StateType {
  columnsPosition: number[];
}

export const initialState: StateType = {
  columnsPosition: [],
};

export const columnVisibilityReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case HIDE_COLUMN: {
      const nextColumnsPosition = [...state.columnsPosition];
      nextColumnsPosition.push(action.columnPosition);
      return {
        columnsPosition: nextColumnsPosition,
      };
    }
    case SHOW_COLUMN:
      return {
        columnsPosition: state.columnsPosition.filter((item) => item !== action.columnPosition),
      };
    default:
      return state;
  }
};
