import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import generateData from '../logic/dataGenerator';
import Header from './header';
import BodyContainer from './bodyContainer';

interface StylePropsType {
  gridColumnsSize: string;
}

const rowHeight = 25;

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'scroll',
    maxHeight: '440px',
    // TODO изменить в мерах высоты
  },
  tableRow: (props: StylePropsType) => ({
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
    id: 'position',
    label: '№',
    minWidth: 50,
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 120,
  },
  {
    id: 'birthday',
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
    id: 'phone',
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
    id: 'rate',
    label: '%',
    minWidth: 25,
  },
];

const AppTable = () => {
  const tableData = generateData();
  const gridColumnsSize = columns.reduce((accumulator, column) => `${accumulator} ${column.minWidth}px`, '');
  const classes = useStyles({ gridColumnsSize });

  return (
    <div className={classes.root}>
      <Header columns={columns} classes={classes.tableRow} rowHeight={rowHeight} />
      <BodyContainer tableData={tableData} classes={classes.tableRow} rowHeight={rowHeight} />
    </div>
  );
};

export default AppTable;
