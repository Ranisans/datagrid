import React from 'react';
import styled from '@material-ui/core/styles/styled';

import Cell from './cell';
import { BooleanCellType } from './types';

const StyledBooleanCell = styled(Cell)({
  paddingTop: '0.25em',
});

const fillColor = '#2698da';

const BooleanCell = ({ value }: BooleanCellType) => (
  <StyledBooleanCell>
    <svg viewBox="0 0 100 100" width="1em" height="1em" fill={`${fillColor}${value ? '' : '00'}`}>
      <circle cx="50" cy="50" r="40" />
    </svg>
  </StyledBooleanCell>
);

export default BooleanCell;
