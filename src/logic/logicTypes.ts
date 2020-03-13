import { StateTypes as SortingTypes } from '../reducers/sortingReducer';
import { StateType as FilterTypes } from '../reducers/filterReducer';

enum ColumnsEnum {
  stringColumns = 'stringColumns',
  enumColumns = 'enumColumns',
  booleanColumns = 'booleanColumns',
}

interface ColumnsType {
  [ColumnsEnum.stringColumns]: string[];
  [ColumnsEnum.enumColumns]: string[];
  [ColumnsEnum.booleanColumns]: string[];
}

export type RowType = Record<string, any>;

interface PropsDataInterface {
  data: RowType[];
}

export interface SortingPropsType extends SortingTypes, PropsDataInterface {}

export interface FilterPropsType extends PropsDataInterface{
  filters: FilterTypes;
  columns: ColumnsType;
}

export interface MultipleSortingType {
  keys: string[];
  values: string[];
}
