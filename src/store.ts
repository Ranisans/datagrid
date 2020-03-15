import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
// FIX redux-devtools not working - don't show change state in the browser
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(),
  ),
);

export default store;
