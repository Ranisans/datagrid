import React from 'react';

interface PropsType {
  label: string;
  checkedLabels: string[];
  callback: (value: string) => void;
}

const Checkbox = ({ label, checkedLabels, callback }: PropsType) => (
  <label>
    {`${label}:`}
    <input
      type="checkbox"
      checked={checkedLabels.includes(label)}
      id={label}
      onChange={() => callback(label)}
    />
  </label>
);

export default Checkbox;
