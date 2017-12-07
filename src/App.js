import React, { Component } from 'react';
// import logo from './logo.svg';
import Compass from './components/Compass';
import Guage from './containers/Gauge';
import Altimeter from './components/Altimeter';
import './App.css';

class App extends Component {

  state = {
    orientation: {
      alpha: 0,
      beta: 0,
      gamma: 0
    },
    geolocationAvail: true,
    warning: {
      roll: 'ok',
      pitch: 'ok'
    }
  };

  handleOrientation = (event) => {
    this.setState({orientation: event})

    let pitch = 'ok'

    if (event.beta <= -60 || event.beta >= 65) {
      pitch = 'alarm'
    } else if (event.beta <= -40 || (event.beta >= 50 && event.beta < 65)) {
      pitch = 'warning'
    } else if (event.beta > -40 && event.beta < 50) {
      pitch = 'ok'
    }

    if (this.state.warning.pitch !== pitch) {
      const warning = this.state.warning;
      warning.pitch = pitch

      this.setState({
          warning,
      });
    }

    let roll = 'ok'

    if (event.gamma <= -45 || event.gamma >= 45) {
      roll = 'alarm'
    } else if (event.gamma <= -30 || (event.gamma >= 30 && event.gamma < 45)) {
      roll = 'warning'
    } else if (event.gamma > -30 || event.gamma < 30) {
      roll = 'ok'
    }

    if (this.state.warning.roll !== roll) {
      const warning = this.state.warning;
      warning.roll = roll

      this.setState({
          warning,
      });
    }
  }

  componentWillMount = () => {
    if ('geolocation' in navigator){
      window.addEventListener('deviceorientation', this.handleOrientation);
    } else {
      this.setState({geolocationAvail: false})
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('deviceorientation', this.handleOrientation);
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <Guage className="roll-gauge" transform={this.state.orientation.gamma} warning={this.state.warning.roll}/>
          <Guage className="pitch-gauge" transform={this.state.orientation.beta} warning={this.state.warning.pitch}/>
        </div>
      </div>
    );
  }
}

export default App;
