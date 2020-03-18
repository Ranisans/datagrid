export const SHOW_COLUMN = 'SHOW_COLUMN';
export const HIDE_COLUMN = 'HIDE_COLUMN';

export interface ShowHideColumnType {
  columnPosition: number;
  columnName: string;
}

export interface ActionType extends ShowHideColumnType {
  type: string;
}

export const showColumn = ({ columnPosition, columnName }: ShowHideColumnType): ActionType => (
  {
    type: SHOW_COLUMN,
    columnPosition,
    columnName,
  }
);

export const hideColumn = ({ columnPosition, columnName }: ShowHideColumnType): ActionType => (
  {
    type: HIDE_COLUMN,
    columnPosition,
    columnName,
  }
);
