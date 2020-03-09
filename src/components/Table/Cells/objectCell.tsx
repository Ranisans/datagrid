import React from 'react';
import styled from '@emotion/styled';

import Cell from './cell';
import { ObjectCellType } from './types';

const StyledObjectCell = styled(Cell)`
  .flex {
    width: 95%;
    display: inline-flex;
    justify-content: space-between;
  }
`;

const ObjectCell = ({ value }: ObjectCellType) => {
  const newValue = typeof value.meaning === 'number' ? value.meaning.toLocaleString('ru-RU') : value;
  return (
    <StyledObjectCell>
      <div className="flex">
        <div>{newValue}</div>
        <div>{value.label}</div>
      </div>
    </StyledObjectCell>
  );
};

export default ObjectCell;
