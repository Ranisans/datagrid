import React from 'react';

import Header from './header';
import BodyContainer from './bodyContainer';
import { TablePropsType } from './types';


const SimpleTable = ({
  rows, rowHeight, styles, columns,
}: TablePropsType) => (
  <div className={styles.table}>
    <Header columns={columns} classes={styles.row} rowHeight={rowHeight} />
    <BodyContainer tableData={rows} classes={styles.row} rowHeight={rowHeight} />
  </div>
);

export default SimpleTable;
