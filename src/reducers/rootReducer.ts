import { combineReducers } from 'redux';

import { filterReducer } from './sortingReducer';
import { resultReducer } from './resultReducer';
import { sizeReducer } from './sizeReducer';
import { changeTableType } from './tableTypeReducer';

const rootReducer = combineReducers({
  sorting: filterReducer,
  result: resultReducer,
  size: sizeReducer,
  tableType: changeTableType,
});

export default rootReducer;
