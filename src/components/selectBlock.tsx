import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { enumData } from '../logic/dataGenerator';
import { addEnumFilter } from '../actions/filterAction';
import { StateType as FilterType } from '../reducers/filterReducer';

interface OptionType {
  value: string;
  label: string;
}

const animatedComponents = makeAnimated();

const SelectBlock = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<OptionType[]>([]);
  const options = enumData.map((value) => ({ value, label: value }));

  const filterState = useSelector((state: {filters: FilterType}) => state.filters);

  useEffect(() => {
    const stateValue = filterState.enumFilter.map((value) => ({ value, label: value }));
    if (JSON.stringify(selected) !== JSON.stringify(stateValue)) {
      setSelected(stateValue);
    }
  }, [filterState, selected]);

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    const enumFilters = selectedOptions.map((option: OptionType) => option.value);
    dispatch(addEnumFilter({ filterValue: enumFilters }));
  };

  return (
    <Select
      options={options}
      value={selected}
      components={animatedComponents}
      onChange={onChange}
      isMulti
    />
  );
};

export default SelectBlock;
