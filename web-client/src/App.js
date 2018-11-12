import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

// Views
import Dashboard from './views/Dashboard/Dashboard';
import DeviceManagement from './views/DeviceManagement/DeviceManagement';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" render={() => <Dashboard/>} />
        <Route exact={true} path="/devices" render={() => <DeviceManagement/>} />
      </div>
    );
  }
}

export default App;
