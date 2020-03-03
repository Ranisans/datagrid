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

const DateTimeCell = ({ size, value }: BaseCellType) => (
  <StyledDateTimeCell size={size}>{value}</StyledDateTimeCell>
);

export default DateTimeCell;
