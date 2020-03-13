import React from 'react';


import HeaderCell from '../components/Table/headerCell';

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
  <div className={classes}>
    {columns.map((column) => (
      <HeaderCell
        key={column.id}
        label={column.label}
        width={column.minWidth}
      />
    ))}
  </div>
);

export default Header;
