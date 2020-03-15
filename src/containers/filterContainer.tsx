import React from 'react';
import { useDispatch } from 'react-redux';

import Switcher from '../components/switcher';
import { setTableType } from '../actions/tableTypeAction';
import BooleanFilter from './booleanFilter';
import { addStringFilter } from '../actions/filterAction';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const isVirtualTableCallback = (value: boolean) => {
    dispatch(setTableType({ value }));
  };
  const stringFilterHandler = (value: string) => {
    dispatch(addStringFilter({ filterValue: value }));
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
    </div>
  );
};

export default FilterContainer;
