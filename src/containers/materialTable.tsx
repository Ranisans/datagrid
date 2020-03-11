import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import generateData from '../logic/dataGenerator';
import Header from './header';
import BodyRow from './bodyRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  tableRow: {
    '& > :nth-child(1)': {
      position: 'sticky',
      zIndex: 2,
      left: 0,
    },
    '& > :nth-child(2)': {
      position: 'sticky',
      zIndex: 2,
      left: '81px',
    },
  },
  headerRow: {
    '& > :nth-child(1)': {
      zIndex: 10,
    },
    '& > :nth-child(2)': {
      zIndex: 10,
    },
  },
});

const columns = [
  {
    id: 'position',
    label: '№',
    minWidth: 30,
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
  const classes = useStyles();
  const tableData = generateData();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <Header columns={columns} classes={`${classes.tableRow} ${classes.headerRow}`} />
          <TableBody>
            {tableData.map((rowData, i) => (
              <BodyRow data={rowData} key={i.toString()} classes={classes.tableRow} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AppTable;
