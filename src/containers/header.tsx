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
  rowHeight: number;
}

const Header = ({ columns, classes, rowHeight }: PropsType) => (
  <div style={{
    position: 'sticky', top: '0px', zIndex: 10, height: `${rowHeight}px`,
  }}
  >
    <div style={{ position: 'absolute', top: '0px' }}>
      <div className={classes}>
        {columns.map((column) => (
          <HeaderCell
            key={column.id}
            label={column.label}
            width={column.minWidth}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Header;
