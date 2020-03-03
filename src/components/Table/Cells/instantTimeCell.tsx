import React from 'react';
import styled from '@emotion/styled';

import Cell from './cell';
import { BaseCellType } from './types';

const StyledInstanceDateCell = styled(Cell)`
  color: blueviolet;
`;

const InstanceDateCell = ({ size, value }: BaseCellType) => {
  const dateValue = new Date(value).getTime();
  return (
    <StyledInstanceDateCell size={size}>{dateValue}</StyledInstanceDateCell>
  );
};

export default InstanceDateCell;
