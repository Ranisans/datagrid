import React from 'react';
import styled from '@emotion/styled';

import Cell from './cell';
import { ObjectCellType } from './types';

const StyledObjectCell = styled(Cell)`
  display: flex;
  align-content: space-around;
`;

const ObjectCell = ({ value }: ObjectCellType) => (
  <StyledObjectCell>
    <span>{value.value}</span>
    <span>{value.label}</span>
  </StyledObjectCell>
);

export default ObjectCell;
