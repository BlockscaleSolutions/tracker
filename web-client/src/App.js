import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

// Views
import Dashboard from './views/Dashboard';
import Register from './views/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" render={() => <Dashboard/>} />
        <Route exact={true} path="/register" render={() => <Register/>} />
      </div>
    );
  }
}

export default App;
