import React from 'react';

import { RowType } from '../types/rowType';
import NumberCell from '../components/MaterialTable/Cells/numberCell';
import StringCell from '../components/MaterialTable/Cells/stringCell';
import DateTimeCell from '../components/MaterialTable/Cells/dateTimeCell';
import ObjectCell from '../components/MaterialTable/Cells/objectCell';

interface PropsType {
  data: RowType;
  classes: string;
}

const BodyRow = ({ data, classes }: PropsType) => (
  <div className={classes}>
    <NumberCell value={data.number} />
    <StringCell value={data.name} />
    <DateTimeCell value={data.birth} />
    <StringCell value={data.city} />
    <StringCell value={data.address} />
    <StringCell value={data.phoneNum} />
    <StringCell value={data.email} />
    <ObjectCell value={{ label: data.deposit.currency, meaning: data.deposit.value }} />
    <ObjectCell value={{ label: data.loan.currency, meaning: data.loan.value }} />
    <NumberCell value={data.interestRate} />
  </div>
);

export default BodyRow;
