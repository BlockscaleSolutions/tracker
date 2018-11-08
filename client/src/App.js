import React, { Component } from 'react';

// Views
import Dashboard from './views/Dashboard';
import './App.css';

// import {createContext, CryptoFactory} from 'sawtooth-sdk/signing'

// const context = createContext('secp256k1')
// const privateKey = context.newRandomPrivateKey()
// const signer = new CryptoFactory(context).newSigner(privateKey)
// console.log(signer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
