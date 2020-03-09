
export interface BaseCellType {
  value: string;
}

export interface EnumCellType {
  value: any[];
}

export interface NumberCellType {
  value: number;
}

export interface BooleanCellType {
  value: boolean;
}

interface ObjectCellValue {
  label: string;
  meaning: string|number;
}

export interface ObjectCellType {
  value: ObjectCellValue;
}
