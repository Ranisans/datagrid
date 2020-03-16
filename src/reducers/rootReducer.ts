import { combineReducers } from 'redux';

import { sortingReducer } from './sortingReducer';
import { changeTableType } from './tableTypeReducer';
import { filterReducer } from './filterReducer';
import { columnVisibilityReducer } from './columnVisibilityReducer';

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filters: filterReducer,
  tableType: changeTableType,
  columnVisibility: columnVisibilityReducer,
});

export default rootReducer;
