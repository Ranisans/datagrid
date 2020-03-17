import React from 'react';

import Cell from './cell';
import { MainCellType } from './types';

const CheckboxCell = ({ className }: MainCellType) => (
  <Cell className={className}>
    <input type="checkbox" />
  </Cell>
);

export default CheckboxCell;
