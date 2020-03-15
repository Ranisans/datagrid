import React from 'react';
import { useDispatch } from 'react-redux';

import Switcher from '../components/switcher';
import { setTableType } from '../actions/tableTypeAction';
import BooleanFilter from './booleanFilter';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const isVirtualTableCallback = (value: boolean) => {
    dispatch(setTableType({ value }));
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
    </div>
  );
};

export default FilterContainer;
