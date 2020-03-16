import React from 'react';

import Header from './header';
import { TablePropsType } from './types';
import BodyRow from './bodyRow';


const SimpleTable = ({
  rows, rowHeight, styles, columns,
}: TablePropsType) => (
  <div className={styles.table}>
    <Header columns={columns} classes={styles} rowHeight={rowHeight} />
    {rows.map((rowData, i) => (
      <BodyRow data={rowData} key={i.toString()} classes={styles} rowHeight={rowHeight} />
    ))}
  </div>
);

export default SimpleTable;
