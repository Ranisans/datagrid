import { combineReducers } from 'redux';

import { filterReducer } from './sortingReducer';
import { resultReducer } from './resultReducer';
import { sizeReducer } from './sizeReducer';

const rootReducer = combineReducers({
  sorting: filterReducer,
  result: resultReducer,
  size: sizeReducer,
});

export default rootReducer;
