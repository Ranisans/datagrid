import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux-devtools not work with Set and Map
(Set.prototype as any).toJSON = function setProt() {
  return Array.from(this);
};
(Map.prototype as any).toJSON = function mapProt() {
  return JSON.parse(JSON.stringify([...this]));
};

ReactDOM.render(<App />, document.getElementById('root'));
