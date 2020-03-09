import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


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
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AppTable;
