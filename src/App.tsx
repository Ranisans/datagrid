import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Table from './containers/materialTable';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit
            {' '}
            <code>src/App.tsx</code>
            {' '}
            and save to reload.
          </p>
        </header>
        <main>
          <Table />
        </main>
      </div>
    </Provider>
  );
}

export default App;
