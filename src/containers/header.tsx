import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';
import HeaderCell from '../components/MaterialTable/headerCell';

interface ColumnType {
  id: string;
  label: string;
  minWidth: number;
}

interface PropsType {
  columns: ColumnType[];
  classes: string;
}

const Header = ({ columns, classes }: PropsType) => (
  <TableHead>
    <TableRow className={classes}>
      {columns.map((column) => (
        <HeaderCell
          key={column.id}
          label={column.label}
          minWidth={column.minWidth}
        />
      ))}
    </TableRow>
  </TableHead>
);

export default Header;
