import React from 'react';

import BodyRow from './bodyRow';
import { BodyPropsType } from './types';


const BodyContainer = ({ rows, rowHeight, styles }: BodyPropsType) => (
  <>
    {rows.map((rowData, i) => (
      <BodyRow data={rowData} key={i.toString()} classes={styles} rowHeight={rowHeight} />
    ))}
  </ >
);

export default BodyContainer;
