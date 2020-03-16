import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Switcher from '../components/switcher';
import { setTableType, TableType } from '../actions/tableTypeAction';
import BooleanFilter from './booleanFilter';
import { addStringFilter, resetFilter } from '../actions/filterAction';
import { StateType as FilterType } from '../reducers/filterReducer';
import SelectBlock from '../components/selectBlock';


const FilterContainer = () => {
  const dispatch = useDispatch();

  const [stringFilter, setStringFilter] = useState('');
  const [isVirtualTable, setIsVirtualTable] = useState(false);

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
        <button type="button" onClick={resetFilterHandler}>Clear Filters</button>
      </div>
      <div>
        <SelectBlock />
      </div>
    </div>
  );
};

export default FilterContainer;
