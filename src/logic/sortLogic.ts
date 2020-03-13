import { SortingPropsType, RowType, MultipleSortingType } from './logicTypes';

const sorting = ({ sorting: sortingRules, data }: SortingPropsType) => {
  function dynamicSort(property: string) {
    return function sort(obj1: RowType, obj2: RowType) {
      let result;
      if (obj1[property] > obj2[property]) {
        result = 1;
      } else if (obj1[property] < obj2[property]) {
        result = -1;
      } else {
        result = 0;
      }
      return result;
    };
  }

  function multipleSorting({ keys, values }: MultipleSortingType) {
    return function sort(obj1: RowType, obj2: RowType) {
      let i = 0;
      let result = 0;
      const propsCount = keys.length;
      while (result === 0 && i < propsCount) {
        if (values[i] === 'up') {
          result = dynamicSort(keys[i])(obj1, obj2);
        } else if (values[i] === 'down') {
          result = dynamicSort(keys[i])(obj2, obj1);
        }
        i += 1;
      }
      return result;
    };
  }

  const keys = [...sortingRules.keys()];
  const values = [...sortingRules.values()];
  const sortedData = [...data];
  sortedData.sort(multipleSorting({ keys, values }));
  return sortedData;
};

export default sorting;
