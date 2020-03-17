import React from 'react';

import { RowType } from '../types/rowType';
import NumberCell from '../components/Table/Cells/numberCell';
import StringCell from '../components/Table/Cells/stringCell';
import DateTimeCell from '../components/Table/Cells/dateTimeCell';
import ObjectCell from '../components/Table/Cells/objectCell';
import BooleanCell from '../components/Table/Cells/booleanCell';
import EnumCell from '../components/Table/Cells/enumCell';
import { StylesTypes, CheckboxCallbackType } from './types';
import CheckboxCell from '../components/Table/Cells/CheckboxCell';

interface PropsType {
  data: RowType;
  classes: StylesTypes;
  rowHeight: number;
  checkboxCallback: ({ position, isShift }: CheckboxCallbackType) => void;
}

const BodyRow = ({
  data, classes, rowHeight, checkboxCallback,
}: PropsType) => {
  const clickHandler = (e: any) => {
    checkboxCallback({ position: data.number, isShift: e.shiftKey });
  };
  return (
    <div
      role="button"
      style={{ position: 'relative', height: `${rowHeight}px`, userSelect: 'none' }}
      onClick={clickHandler}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onKeyDown={() => {}}
      tabIndex={-1}
    >
      <div style={{ position: 'absolute' }}>
        <div className={classes.row}>
          <CheckboxCell className={classes.check} />
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
};

export default BodyRow;
