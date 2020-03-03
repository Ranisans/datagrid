import React from 'react';
import styled from '@emotion/styled';

import Cell from './cell';
import { EnumCellType } from './types';

const StyledEnumCell = styled(Cell)`
  color: red;
`;

const EnumCell = ({ size, value }: EnumCellType) => {
  const maxEnumValues = 4;
  const newValue = value.slice(0, maxEnumValues).join(', ');
  return (
    <StyledEnumCell size={size}>{newValue}</StyledEnumCell>
  );
};

export default EnumCell;
