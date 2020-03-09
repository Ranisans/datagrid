import React from 'react';
import './App.css';
import Table from './containers/materialTable';

function App() {
  return (
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
  );
}

export default App;
