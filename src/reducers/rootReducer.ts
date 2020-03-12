import { combineReducers } from 'redux';

import { sortingReducer } from './sortingReducer';
import { sizeReducer } from './sizeReducer';
import { changeTableType } from './tableTypeReducer';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filter: filterReducer,
  size: sizeReducer,
  tableType: changeTableType,
});

export default rootReducer;
