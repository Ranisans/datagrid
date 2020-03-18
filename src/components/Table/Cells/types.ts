export interface MainCellType {
  className: string;
}
export interface BaseCellType extends MainCellType{
  value: string;
}

export interface EnumCellType extends MainCellType{
  value: any[];
}

export interface NumberCellType extends MainCellType{
  value: number;
}

export interface BooleanCellType extends MainCellType{
  value: boolean;
}

interface ObjectCellValue{
  label: string;
  meaning: string|number;
}

export interface ObjectCellType extends MainCellType{
  value: ObjectCellValue;
}
