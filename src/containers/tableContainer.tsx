import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import generateData from '../logic/dataGenerator';
import VirtualTable from './virtualTable';
import SimpleTable from './simpleTable';
import { RowType } from '../types/rowType';
import filterSortLogic from '../logic/filterSortLogic';
import { ColumnsEnum } from '../logic/logicTypes';
import { StateType as FilterType } from '../reducers/filterReducer';
import { StateTypes as SortingType } from '../reducers/sortingReducer';

interface StylePropsType {
  gridColumnsSize: string;
}

const rowHeight = 25;

enum columnId {
  NUMBER = 'number',
  NAME = 'name',
  BIRTH = 'birth',
  CITY = 'city',
  ADDRESS = 'address',
  PHONE_NUM = 'phoneNum',
  EMAIL = 'email',
  DEPOSIT = 'deposit',
  LOAN = 'loan',
  INTEREST_RATE = 'interestRate'
}

const useStyles = makeStyles({
  table: {
    width: '100%',
    overflow: 'scroll',
    maxHeight: '440px',
    // TODO изменить в мерах высоты
  },
  row: (props: StylePropsType) => ({
    display: 'grid',
    gridTemplateColumns: `${props.gridColumnsSize}`,
    '& > :nth-child(1)': {
      position: 'sticky',
      zIndex: 2,
      left: 0,
    },
    '& > :nth-child(2)': {
      position: 'sticky',
      zIndex: 2,
      left: '50px',
    },
  }),
});

const columns = [
  {
    id: columnId.NUMBER,
    label: '№',
    minWidth: 50,
  },
  {
    id: columnId.NAME,
    label: 'Name',
    minWidth: 120,
  },
  {
    id: columnId.BIRTH,
    label: 'Day of Birth',
    minWidth: 120,
  },
  {
    id: columnId.CITY,
    label: 'City, Zip code',
    minWidth: 120,
  },
  {
    id: columnId.ADDRESS,
    label: 'Address',
    minWidth: 120,
  },
  {
    id: columnId.PHONE_NUM,
    label: 'Phone',
    minWidth: 60,
  },
  {
    id: columnId.EMAIL,
    label: 'Email',
    minWidth: 60,
  },
  {
    id: columnId.DEPOSIT,
    label: 'Deposit',
    minWidth: 55,
  },
  {
    id: columnId.LOAN,
    label: 'Loan',
    minWidth: 55,
  },
  {
    id: columnId.INTEREST_RATE,
    label: '%',
    minWidth: 25,
  },
];

const columnTypes = {
  [ColumnsEnum.stringColumns]: [
    columnId.NAME, columnId.CITY, columnId.ADDRESS, columnId.EMAIL,
  ],
  [ColumnsEnum.enumColumns]: [],
  [ColumnsEnum.booleanColumns]: [],
};

const TableContainer = () => {
  const [rows, setRows] = useState<RowType[]>([]);
  const [initialRow, setInitialRows] = useState<RowType[]>([]);

  const gridColumnsSize = columns.reduce((accumulator, column) => `${accumulator} ${column.minWidth}px`, '');
  const classes = useStyles({ gridColumnsSize });

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

  const isVirtual = false;

  return isVirtual ? (
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
  );
};

export default TableContainer;
