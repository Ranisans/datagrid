import React from 'react';

import { RowType } from '../types/rowType';
import NumberCell from '../components/Table/Cells/numberCell';
import StringCell from '../components/Table/Cells/stringCell';
import DateTimeCell from '../components/Table/Cells/dateTimeCell';
import ObjectCell from '../components/Table/Cells/objectCell';
import BooleanCell from '../components/Table/Cells/booleanCell';
import EnumCell from '../components/Table/Cells/enumCell';
import { StylesTypes } from './types';
import CheckboxCell from '../components/Table/Cells/CheckboxCell';

interface PropsType {
  data: RowType;
  classes: StylesTypes;
  rowHeight: number;
}

const BodyRow = ({ data, classes, rowHeight }: PropsType) => (
  <div style={{ position: 'relative', height: `${rowHeight}px` }}>
    <div style={{ position: 'absolute' }}>
      <div className={classes.row}>
        <CheckboxCell value={false} className={classes.check} />
        <NumberCell value={data.number} className={classes.number} />
        <StringCell value={data.name} className={classes.name} />
        <DateTimeCell value={data.birth} className={classes.birth} />
        <StringCell value={data.city} className={classes.city} />
        <StringCell value={data.address} className={classes.address} />
        <StringCell value={data.phoneNum} className={classes.phoneNum} />
        <StringCell value={data.email} className={classes.email} />
        <EnumCell value={data.do} className={classes.do} />
        <BooleanCell value={data.bool} className={classes.bool} />
        <ObjectCell
          value={{ label: data.deposit.currency, meaning: data.deposit.value }}
          className={classes.deposit}
        />
        <ObjectCell
          value={{ label: data.loan.currency, meaning: data.loan.value }}
          className={classes.loan}
        />
        <NumberCell value={data.interestRate} className={classes.interestRate} />
      </div>
    </div>
  </div>
);

export default BodyRow;
