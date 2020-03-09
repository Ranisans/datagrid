import React from 'react';
import styled from '@emotion/styled';


import Cell from './cell';
import { BaseCellType } from './types';

const StyledDateTimeCell = styled(Cell)`
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateTimeCell = ({ value }: BaseCellType) => {
  const dateObj = new Date(value);
  const month = (`0${dateObj.getMonth() + 1}`).slice(-2);
  const day = (`0${dateObj.getDate()}`).slice(-2);
  const year = dateObj.getFullYear();


  return (
    <StyledDateTimeCell>{`${year}-${month}-${day}`}</StyledDateTimeCell>
  );
};

export default DateTimeCell;
