import React from 'react';
import logo from './logo.svg';
import './App.scss';
import DeviceOrientation from 'react-device-orientation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DeviceOrientation>
          {({ absolute, alpha, beta, gamma }) => (
            <div>
              <div>
                {`Absolute: ${absolute.toFixed(2)}`}
              </div>
              <div>
                {`Alpha: ${alpha.toFixed(2)}`}
              </div>
              <div>
                {`Beta: ${beta.toFixed(2)}`}
              </div>
              <div>
                {`Gamma: ${gamma.toFixed(2)}`}
              </div>
            </div>
          )}
        </DeviceOrientation>
      </header>
    </div>
  );
}

export default App;
