import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { enumData } from '../logic/dataGenerator';
import { addEnumFilter } from '../actions/filterAction';

interface OptionType {
  value: string;
  label: string;
}

const animatedComponents = makeAnimated();

const SelectBlock = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState <OptionType[]>([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setOptions(enumData.map((value) => ({ value, label: value })));
  }, []);

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
