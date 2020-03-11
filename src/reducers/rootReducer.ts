import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { resultReducer } from './resultReducer';
import { sizeReducer } from './sizeReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  result: resultReducer,
  size: sizeReducer,
});

export default rootReducer;
