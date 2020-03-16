import React from 'react';

interface PropsType {
  label: string;
  checkedLabels: string[];
  number: number;
  callback: ({ value, index }: { value: string; index: number }) => void;
}

const Checkbox = ({
  label, checkedLabels, number, callback,
}: PropsType) => (
  <label>
    {`${label}:`}
    <input
      type="checkbox"
      checked={!checkedLabels.includes(label)}
      id={label}
      onChange={() => callback({ value: label, index: number })}
    />
  </label>
);

export default Checkbox;
