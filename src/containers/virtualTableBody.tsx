import React from 'react';
import { RowType } from '../types/rowType';
import BodyContainer from './bodyContainer';

interface PropsType {
  rows: RowType[];
  rowsCount: number;
  scrollTop: number;
  rowsOnPage: number;
  classes: string;
}

const VirtualTableBody = ({
  rows, rowsCount, scrollTop, rowsOnPage, classes,
}: PropsType) => {
  const showedRowsCount = Math.min(rowsCount - scrollTop, rowsOnPage);
  const showedRows = new Array(showedRowsCount)
    .fill(null)
    .map((_, i) => rows[scrollTop + i]);

  return (
    <BodyContainer tableData={showedRows} classes={classes} />
  );
};

export default VirtualTableBody;
