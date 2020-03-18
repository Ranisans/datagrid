import React from 'react';

import Cell from './cell';
import { BaseCellType } from './types';

const DateTimeCell = ({ value, className }: BaseCellType) => {
  const dateObj = new Date(value);
  const month = (`0${dateObj.getMonth() + 1}`).slice(-2);
  const day = (`0${dateObj.getDate()}`).slice(-2);
  const year = dateObj.getFullYear();


  return (
    <Cell className={className}>{`${year}-${month}-${day}`}</Cell>
  );
};

export default DateTimeCell;
