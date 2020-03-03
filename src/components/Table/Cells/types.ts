export interface CellType {
  size: number;
}

export interface BaseCellType extends CellType {
  value: string;
}

export interface EnumCellType extends CellType {
  value: any[];
}

export interface NumberCellType extends CellType {
  value: number;
}

interface ObjectCellValue {
  label: string;
  value: string|number;
}

export interface ObjectCellType extends CellType {
  value: ObjectCellValue;
}
