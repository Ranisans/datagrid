export const CHANGE_COLUMN_SIZE = 'CHANGE_COLUMN_SIZE';

export interface ChangeColumnSizeType {
  columnSize: number;
}

export interface ActionType extends ChangeColumnSizeType{
  type: string;
}

export const changeColumnSize = ({ columnSize }: ChangeColumnSizeType): ActionType => (
  {
    type: CHANGE_COLUMN_SIZE,
    columnSize,
  }
);
