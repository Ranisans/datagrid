export const SHOW_COLUMN = 'SHOW_COLUMN';
export const HIDE_COLUMN = 'HIDE_COLUMN';

export interface ShowHideColumnType {
  columnPosition: number;
}

export interface ActionType extends ShowHideColumnType {
  type: string;
}

export const showColumn = ({ columnPosition }: ShowHideColumnType): ActionType => (
  {
    type: SHOW_COLUMN,
    columnPosition,
  }
);

export const hideColumn = ({ columnPosition }: ShowHideColumnType): ActionType => (
  {
    type: HIDE_COLUMN,
    columnPosition,
  }
);
