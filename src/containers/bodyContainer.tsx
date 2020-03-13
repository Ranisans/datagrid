import React from 'react';

import BodyRow from './bodyRow';
import { RowType } from '../types/rowType';

interface PropsType {
  tableData: RowType[];
  classes: string;
}

const BodyContainer = ({ tableData, classes }: PropsType) => (
  <>
    {tableData.map((rowData, i) => (
      <BodyRow data={rowData} key={i.toString()} classes={classes} />
    ))}
  </>
);

export default BodyContainer;
