import React from 'react';
import styled from '@emotion/styled';

import Cell from './cell';
import { BaseCellType } from './types';

const StyledStringCell = styled(Cell)`
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StringCell = ({ size, value }: BaseCellType) => (
  <StyledStringCell size={size}>{value}</StyledStringCell>
);
export default StringCell;
