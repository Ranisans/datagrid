import React from 'react';

import { StylesTypes } from './types';
import HeaderCell from '../components/Table/headerCell';

interface ColumnType {
  id: string;
  label: string;
  minWidth: number;
}

interface PropsType {
  columns: ColumnType[];
  classes: StylesTypes;
  rowHeight: number;
}

const Header = ({ columns, classes, rowHeight }: PropsType) => {
  const translatedClasses: Record<string, string> = classes as unknown as Record<string, string>;
  return (
    <div style={{
      position: 'sticky', top: '0px', zIndex: 10, height: `${rowHeight}px`,
    }}
    >
      <div style={{ position: 'absolute', top: '0px' }}>
        <div className={classes.row}>
          {columns.map((column) => (
            <HeaderCell
              key={column.id}
              label={column.label}
              width={column.minWidth}
              reduxKey={column.id}
              className={translatedClasses[column.id]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
