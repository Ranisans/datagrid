import { combineReducers } from 'redux';

import { sortingReducer } from './sortingReducer';
import { changeTableType } from './tableTypeReducer';
import { filterReducer } from './filterReducer';
import { columnVisibilityReducer } from './columnVisibilityReducer';
import { rowSelectionReducer } from './rowSelectionReducer';

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filters: filterReducer,
  tableType: changeTableType,
  columnVisibility: columnVisibilityReducer,
  rowSelection: rowSelectionReducer,
});

export default rootReducer;
