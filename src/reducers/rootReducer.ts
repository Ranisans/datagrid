import { combineReducers } from 'redux';

import { filterReducer } from './sortingReducer';
import { sizeReducer } from './sizeReducer';
import { changeTableType } from './tableTypeReducer';

const rootReducer = combineReducers({
  sorting: filterReducer,
  size: sizeReducer,
  tableType: changeTableType,
});

export default rootReducer;
