import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import generateData from '../logic/dataGenerator';
import VirtualTable from './virtualTable';
import SimpleTable from './simpleTable';


interface StylePropsType {
  gridColumnsSize: string;
}

const rowHeight = 25;

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
    id: 'number',
    label: '№',
    minWidth: 50,
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 120,
  },
  {
    id: 'birth',
    label: 'Day of Birth',
    minWidth: 120,
  },
  {
    id: 'city',
    label: 'City, Zip code',
    minWidth: 120,
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 120,
  },
  {
    id: 'phoneNum',
    label: 'Phone',
    minWidth: 60,
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 60,
  },
  {
    id: 'deposit',
    label: 'Deposit',
    minWidth: 55,
  },
  {
    id: 'loan',
    label: 'Loan',
    minWidth: 55,
  },
  {
    id: 'interestRate',
    label: '%',
    minWidth: 25,
  },
];

const TableContainer = () => {
  const tableData = generateData();
  const gridColumnsSize = columns.reduce((accumulator, column) => `${accumulator} ${column.minWidth}px`, '');
  const classes = useStyles({ gridColumnsSize });

  const isVirtual = false;

  return isVirtual ? (
    <VirtualTable
      rows={tableData}
      rowHeight={rowHeight}
      styles={classes}
      viewportHeight={440}
      columns={columns}
    />
  ) : (
    <SimpleTable
      rows={tableData}
      rowHeight={rowHeight}
      styles={classes}
      columns={columns}
    />
  );
};

export default TableContainer;
