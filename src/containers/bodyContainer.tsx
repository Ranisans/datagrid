import React from 'react';
import { TableBody } from '@material-ui/core';

import BodyRow from './bodyRow';
import { RowType } from '../types/rowType';

interface PropsType {
  tableData: RowType[];
  classes: string;
}

const BodyContainer = ({ tableData, classes }: PropsType) => (
  <TableBody>
    {tableData.map((rowData, i) => (
      <BodyRow data={rowData} key={i.toString()} classes={classes} />
    ))}
  </TableBody>
);

export default BodyContainer;
