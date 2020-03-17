import React from 'react';

import Cell from './cell';
import { BooleanCellType } from './types';

const CheckboxCell = ({ value }: BooleanCellType) => (
  <Cell>
    <input type="checkbox" checked={value} />
  </Cell>
);

export default CheckboxCell;
