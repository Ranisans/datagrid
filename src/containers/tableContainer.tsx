import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import generateData from '../logic/dataGenerator';
import VirtualTable from './virtualTable';
import SimpleTable from './simpleTable';
import { RowType } from '../types/rowType';
import filterSortLogic from '../logic/filterSortLogic';
import { StateType as FilterType } from '../reducers/filterReducer';
import { StateTypes as SortingType } from '../reducers/sortingReducer';
import {
  rowHeight, useStyles, columns, columnTypes,
} from './tableContainerValues';
import { TableType } from '../actions/tableTypeAction';
import { StateType as ColumnType } from '../reducers/columnVisibilityReducer';


const TableContainer = () => {
  const [rows, setRows] = useState<RowType[]>([]);
  const [initialRow, setInitialRows] = useState<RowType[]>([]);
  const [visibleTable, setVisibleTable] = useState((<div />));
  const [hiddenColumn, setHiddenColumn] = useState<Set<number>>(new Set());
  const [gridColumnsSize, setGridColumnsSize] = useState<string>('');
  const columnState = useSelector(
    (state: {columnVisibility: ColumnType}) => state.columnVisibility,
  );

  useEffect(() => {
    if (columnState.columnsPosition !== hiddenColumn) {
      setHiddenColumn(columnState.columnsPosition);
    }
  }, [columnState, hiddenColumn]);

  useEffect(() => {
    const columnsSize = columns
      .filter((_, index) => !columnState.columnsPosition.has(index))
      .reduce((accumulator, column) => `${accumulator} ${column.minWidth}px`, '');
    setGridColumnsSize(columnsSize);
  }, [columnState]);

  const classes = useStyles({ gridColumnsSize, hiddenColumn });

  useEffect(() => {
    const tableData = generateData();
    setInitialRows(tableData);
    setRows(tableData);
  }, []);

  const filterState = useSelector((state: {filters: FilterType}) => state.filters);
  const { sorting: sortingState } = useSelector((state: {sorting: SortingType}) => state.sorting);

  useEffect(() => {
    const resultRows = filterSortLogic({
      filters: filterState, sorting: sortingState, columns: columnTypes, data: initialRow,
    });
    const convertedRow = resultRows as RowType[];
    setRows(convertedRow);
  }, [filterState, sortingState, initialRow]);

  const { isVirtual } = useSelector((state: {tableType: TableType}) => state.tableType);

  useEffect(() => {
    setVisibleTable(isVirtual ? (
      <VirtualTable
        rows={rows}
        rowHeight={rowHeight}
        styles={classes}
        viewportHeight={440}
        columns={columns}
      />
    ) : (
      <SimpleTable
        rows={rows}
        rowHeight={rowHeight}
        styles={classes}
        columns={columns}
      />
    ));
  }, [isVirtual, classes, rows]);
  return visibleTable;
};

export default TableContainer;
