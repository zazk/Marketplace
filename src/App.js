import React from 'react';
import logo from './logo.svg';
import './App.css';
export const apiUrl: string =
  process.env.MARKETPLACE_API_URL || 'http://staging.marketplace-api.marketplace.pachama.com/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edited <code>src/App.js</code> and {apiUrl} re-save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
