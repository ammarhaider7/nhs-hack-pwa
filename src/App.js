import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import DeviceOrientation from 'react-device-orientation';

class App extends Component {

  formatAngleData(val) {
    return Number(val).toFixed(2);
  }

  render() {
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
                  {`Absolute: ${absolute}`}
                </div>
                <div>
                  {`Alpha: ${this.formatAngleData(alpha)}`}
                </div>
                <div>
                  {`Beta: ${this.formatAngleData(beta)}`}
                </div>
                <div>
                  {`Gamma: ${this.formatAngleData(gamma)}`}
                </div>
              </div>
            )}
          </DeviceOrientation>
        </header>
      </div>
    );
  }
}

export default App;
