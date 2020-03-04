
export interface BaseCellType {
  value: string;
}

export interface EnumCellType {
  value: any[];
}

export interface NumberCellType {
  value: number;
}

interface ObjectCellValue {
  label: string;
  value: string|number;
}

export interface ObjectCellType {
  value: ObjectCellValue;
}
