import React from 'react';
import styled from '@material-ui/core/styles/styled';

import Cell from './cell';
import { NumberCellType } from './types';

const StyledNumberCell = styled(Cell)({
  textAlign: 'right',
});

const NumberCell = ({ value }: NumberCellType) => {
  // TODO get locale value from redux
  const newValue = value.toLocaleString('ru-RU');
  return (
    <StyledNumberCell>{newValue}</StyledNumberCell>
  );
};

export default NumberCell;
