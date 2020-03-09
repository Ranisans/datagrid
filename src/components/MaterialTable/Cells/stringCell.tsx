import React from 'react';
import styled from '@material-ui/core/styles/styled';

import Cell from './cell';
import { BaseCellType } from './types';

const StyledStringCell = styled(Cell)({
  color: 'gray',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const StringCell = ({ value }: BaseCellType) => (
  <StyledStringCell>{value}</StyledStringCell>
);
export default StringCell;
