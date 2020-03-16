import { FilterPropsType, RowType } from './logicTypes';

const filtering = ({ filters, columns, data }: FilterPropsType) => {
  let { stringFilter } = filters;
  const { enumFilter } = filters;
  const { booleanFilter } = filters;

  const { stringColumns } = columns;
  const { enumColumns } = columns;
  const { booleanColumns } = columns;

  const filterByString = (row: RowType) => {
    let result = false;
    for (let i = 0; i < stringColumns.length; i += 1) {
      const column = stringColumns[i];
      if ((row[column].toLowerCase()).includes(stringFilter)) {
        result = true;
        break;
      }
    }
    return result;
  };

  const filterByEnum = (row: RowType) => {
    let result = false;
    for (let i = 0; i < enumColumns.length; i += 1) {
      if (result) {
        break;
      }
      const column = enumColumns[i];
      const columnValue = row[column];
      for (let j = 0; j < enumFilter.length; j += 1) {
        if (columnValue.includes(enumFilter[j])) {
          result = true;
          break;
        }
      }
    }
    return result;
  };

  const filterByBoolean = (row: RowType) => {
    let result = false;
    for (let i = 0; i < booleanColumns.length; i += 1) {
      const column = booleanColumns[i];
      const columnValue = row[column];
      if (columnValue === booleanFilter) {
        result = true;
        break;
      }
    }
    return result;
  };

  let result = [...data];
  if (stringColumns.length > 0 && stringFilter) {
    stringFilter = stringFilter.toLowerCase();
    result = result.filter(filterByString);
  }
  if (enumColumns.length > 0 && enumFilter.length > 0) {
    result = result.filter(filterByEnum);
  }
  if (booleanColumns.length > 0 && booleanFilter !== undefined) {
    result = result.filter(filterByBoolean);
  }
  return result;
};

export default filtering;
