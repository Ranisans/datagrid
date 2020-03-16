import React from 'react';

interface PropsType {
  label: string;
  id: string;
  isChecked: string;
  callback: (value: string) => void;
}

const RadioButton = ({
  label, id, isChecked, callback,
}: PropsType) => (
  <label>
    <input type="radio" value="option1" checked={isChecked === id} onChange={() => callback(id)} />
    {label}
  </label>
);

export default RadioButton;
