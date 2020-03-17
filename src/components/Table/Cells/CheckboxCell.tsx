import React from 'react';

import Cell from './cell';
import { BooleanCellType } from './types';

const CheckboxCell = ({ value, className }: BooleanCellType) => (
  <Cell className={className}>
    <input type="checkbox" checked={value} />
  </Cell>
);

export default CheckboxCell;
