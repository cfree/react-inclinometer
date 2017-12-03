import React, { Component } from 'react';
// import logo from './logo.svg';
import Compass from './components/Compass';
import RollGuage from './components/RollGuage';
import PitchGuage from './components/PitchGuage';
import Altimeter from './components/Altimeter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Settings</button>

        <Compass />

        <RollGuage />

        <PitchGuage />

        <Altimeter />
      </div>
    );
  }
}

export default App;
