import React from 'react';
import { useDispatch } from 'react-redux';

import Switcher from '../components/switcher';
import { setTableType } from '../actions/tableTypeAction';
import BooleanFilter from './booleanFilter';
import { addStringFilter, resetFilter } from '../actions/filterAction';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const isVirtualTableCallback = (value: boolean) => {
    dispatch(setTableType({ value }));
  };
  const stringFilterHandler = (value: string) => {
    dispatch(addStringFilter({ filterValue: value }));
  };
  const resetFilterHandler = () => {
    dispatch(resetFilter());
  };

  return (
    <div>
      <div>
        <label>
          <Switcher callback={isVirtualTableCallback} />
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
        <input type="text" name="stringFilter" onChange={(e) => stringFilterHandler(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={resetFilterHandler}>Clear Filters</button>
      </div>
    </div>
  );
};

export default FilterContainer;
