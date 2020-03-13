import React from 'react';

import BodyRow from './bodyRow';
import { RowType } from '../types/rowType';

interface PropsType {
  tableData: RowType[];
  classes: string;
  rowHeight: number;
}

const BodyContainer = ({ tableData, classes, rowHeight }: PropsType) => (
  <>
    {tableData.map((rowData, i) => (
      <BodyRow data={rowData} key={i.toString()} classes={classes} rowHeight={rowHeight} />
    ))}
  </>
);

export default BodyContainer;
