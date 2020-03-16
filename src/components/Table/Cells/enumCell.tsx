import React from 'react';
import styled from '@material-ui/core/styles/styled';

import Cell from './cell';

import { EnumCellType } from './types';

const StyledEnumCell = styled(Cell)({
  color: 'red',
});

const EnumCell = ({ value, className }: EnumCellType) => {
  const maxEnumValues = 4;
  const newValue = value.slice(0, maxEnumValues).join(', ');
  return (
    <StyledEnumCell className={className}>{newValue}</StyledEnumCell>
  );
};

export default EnumCell;
