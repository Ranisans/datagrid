import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Switcher from '../components/switcher';
import { setTableType, TableType } from '../actions/tableTypeAction';
import BooleanFilter from './booleanFilter';
import { addStringFilter, resetFilter } from '../actions/filterAction';
import { StateType as FilterType } from '../reducers/filterReducer';
import SelectBlock from '../components/selectBlock';
import { columns } from './tableContainerValues';
import Checkbox from '../components/checkbox';
import { hideColumn, showColumn } from '../actions/columnVisibility';


const FilterContainer = () => {
  const dispatch = useDispatch();

  const [stringFilter, setStringFilter] = useState('');
  const [isVirtualTable, setIsVirtualTable] = useState(false);
  const [checkedColumns, setCheckedColumns] = useState<string[]>([]);

  const filterState = useSelector((state: {filters: FilterType}) => state.filters);
  const tableTypeState = useSelector((state: {tableType: TableType}) => state.tableType);

  useEffect(() => {
    if (stringFilter !== filterState.stringFilter) {
      setStringFilter(filterState.stringFilter);
    }
  }, [filterState, stringFilter]);
  useEffect(() => {
    if (isVirtualTable !== tableTypeState.isVirtual) {
      setIsVirtualTable(tableTypeState.isVirtual);
    }
  }, [tableTypeState, isVirtualTable]);


  const isVirtualTableCallback = (value: boolean) => {
    setIsVirtualTable(value);
    dispatch(setTableType({ value }));
  };
  const stringFilterHandler = (value: string) => {
    setStringFilter(value);
    dispatch(addStringFilter({ filterValue: value }));
  };
  const resetFilterHandler = () => {
    dispatch(resetFilter());
  };
  const checkboxCallback = ({ value, index }: { value: string; index: number }) => {
    let newCheckedColumnsState = [...checkedColumns];
    if (!newCheckedColumnsState.includes(value)) {
      newCheckedColumnsState.push(value);
      dispatch(hideColumn({ columnPosition: index, columnName: value }));
    } else {
      newCheckedColumnsState = checkedColumns.filter((item) => item !== value);
      dispatch(showColumn({ columnPosition: index, columnName: value }));
    }
    setCheckedColumns(newCheckedColumnsState);
  };


  return (
    <div>
      <div>
        <label>
          <Switcher callback={isVirtualTableCallback} isChecked={isVirtualTable} />
          {' Is Virtual Table?'}
        </label>
      </div>
      <div>
        <label>
          Boolean Filter
          <BooleanFilter />
        </label>
      </div>
      <div>
        String Filter
        <input type="text" name="stringFilter" value={stringFilter} onChange={(e) => stringFilterHandler(e.target.value)} />
      </div>
      <div>
        <SelectBlock />
      </div>
      <div>
        <button type="button" onClick={resetFilterHandler}>Clear Filters</button>
      </div>
      <div>
        {columns.map((column, index) => (
          <Checkbox
            key={column.id}
            label={column.id}
            checkedLabels={checkedColumns}
            number={index}
            callback={checkboxCallback}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterContainer;
