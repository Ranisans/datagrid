import { FilterSortType, RowType } from './logicTypes';
import filtering from './filterLogic';
import sorting from './sortLogic';

const filterSortLogic = ({
  filters, sorting: sortingRules, columns, data,
}: FilterSortType): RowType[] => {
  let result = filtering({ filters, columns, data });
  result = sorting({ sorting: sortingRules, data: result });
  return result;
};

export default filterSortLogic;
