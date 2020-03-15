import { combineReducers } from 'redux';

import { sortingReducer } from './sortingReducer';
import { changeTableType } from './tableTypeReducer';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filter: filterReducer,
  tableType: changeTableType,
});

export default rootReducer;
