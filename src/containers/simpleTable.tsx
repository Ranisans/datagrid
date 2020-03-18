import React from 'react';

import Header from './header';
import { TablePropsType } from './types';
import BodyContainer from './bodyContainer';


const SimpleTable = ({
  rows, rowHeight, styles, columns,
}: TablePropsType) => (
  <div className={styles.table}>
    <Header columns={columns} classes={styles} rowHeight={rowHeight} />
    <BodyContainer rows={rows} rowHeight={rowHeight} styles={styles} />
  </div>
);

export default SimpleTable;
