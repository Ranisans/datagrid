import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType as FilterType } from '../reducers/filterReducer';

import RadioButton from '../components/radiobutton';
import { removeBooleanFilter, addBooleanFilter } from '../actions/filterAction';

const BooleanFilter = () => {
  enum radioStates {
    NONE = 'none',
    TRUE = 'true',
    FALSE = 'false',
  }

  const dispatch = useDispatch();

  const radioCallback = (id: string) => {
    if (id === radioStates.NONE) {
      dispatch(removeBooleanFilter());
    } else if (id === radioStates.TRUE) {
      dispatch(addBooleanFilter({ filterValue: true }));
    } else {
      dispatch(addBooleanFilter({ filterValue: false }));
    }
  };

  const { booleanFilter: booleanFilterState } = useSelector(
    (state: {filters: FilterType}) => state.filters,
  );

  const [filterChecked, setFilterChecked] = useState(radioStates.NONE);

  useEffect(() => {
    if (booleanFilterState === undefined) {
      setFilterChecked(radioStates.NONE);
    } else if (booleanFilterState) {
      setFilterChecked(radioStates.TRUE);
    } else {
      setFilterChecked(radioStates.FALSE);
    }
  }, [booleanFilterState, radioStates]);

  return (
    <>
      <RadioButton label="Reset" id={radioStates.NONE} isChecked={filterChecked} callback={radioCallback} />
      <RadioButton label="True" id={radioStates.TRUE} isChecked={filterChecked} callback={radioCallback} />
      <RadioButton label="False" id={radioStates.FALSE} isChecked={filterChecked} callback={radioCallback} />
    </>
  );
};

export default BooleanFilter;
