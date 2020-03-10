import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

import HeaderCell from '../components/MaterialTable/headerCell';
import generateData from '../logic/dataGenerator';
import BodyRow from './bodyRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
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
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <HeaderCell
                  key={column.id}
                  label={column.label}
                  minWidth={column.minWidth}
                />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((rowData, i) => (
              <BodyRow data={rowData} key={i.toString()} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AppTable;
