import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BodyRow from './bodyRow';
import { BodyPropsType, CheckboxCallbackType } from './types';
import { unselectRow, selectMultipleRow, selectSingleRow } from '../actions/rowsSelect';
import { StateType as SelectedRowType } from '../reducers/rowSelectionReducer';

interface StateType {
  rowSelection: SelectedRowType;
}

const BodyContainer = ({ rows, rowHeight, styles }: BodyPropsType) => {
  const dispatch = useDispatch();

  const selectedRowsState = useSelector((state: StateType) => state.rowSelection);


  const checkboxCallback = ({ position, isShift }: CheckboxCallbackType) => {
    if (selectedRowsState.selectedRows.has(position)) {
      dispatch(unselectRow({ rowNumber: position }));
    } else if (isShift) {
      dispatch(selectMultipleRow({ rowNumber: position }));
    } else {
      dispatch(selectSingleRow({ rowNumber: position }));
    }
  };

  const visibleRows = useMemo(
    () => (
      <>
        {rows.map((rowData, i) => (
          <BodyRow
            data={rowData}
            key={i.toString()}
            classes={styles}
            rowHeight={rowHeight}
            checkboxCallback={checkboxCallback}
          />
        ))}
      </ >
    ),
    [rows, rowHeight, styles],
  );

  return (
    <>
      { visibleRows }
    </ >
  );
};

export default BodyContainer;
