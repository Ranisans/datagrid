import React from 'react';
import './App.css';
import Th from './components/Table/th';

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
        <table style={{ margin: '1.2rem' }}>
          <colgroup>
            <col style={{ width: '200px' }} />
          </colgroup>
          <thead>
            <tr>
              <Th name="Something" />
            </tr>
          </thead>
        </table>
      </header>
    </div>
  );
}

export default App;
