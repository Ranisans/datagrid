import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import store from './store';
import TableContainer from './containers/tableContainer';
import FilterContainer from './containers/filterContainer';

const useStyles = makeStyles({
  main: {
    display: 'grid',
    gridTemplateColumns: '500px auto',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className="App">
        <main className={classes.main}>
          <FilterContainer />
          <TableContainer />
        </main>
      </div>
    </Provider>
  );
}

export default App;
