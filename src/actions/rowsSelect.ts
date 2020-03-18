export const SELECT_SINGLE_ROW = 'SELECT_SINGLE_ROW';
export const SELECT_MULTIPLE_ROW = 'SELECT_MULTIPLE_ROW';
export const UNSELECT_ROW = 'UNSELECT_ROW';

export interface SelectUnselectRowType {
  rowNumber: number;
}

export interface ActionType extends SelectUnselectRowType {
  type: string;
}

export const selectSingleRow = ({ rowNumber }: SelectUnselectRowType): ActionType => (
  {
    type: SELECT_SINGLE_ROW,
    rowNumber,
  }
);

export const selectMultipleRow = ({ rowNumber }: SelectUnselectRowType): ActionType => (
  {
    type: SELECT_MULTIPLE_ROW,
    rowNumber,
  }
);

export const unselectRow = ({ rowNumber }: SelectUnselectRowType): ActionType => (
  {
    type: UNSELECT_ROW,
    rowNumber,
  }
);
