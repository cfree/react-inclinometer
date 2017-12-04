import React, { Component } from 'react';
import Guage from '../containers/Gauge';
import './PitchGauge.css';

class PitchGuage extends Component {
  render() {
    return (
      <Guage className="pitch-gauge" />
    );
  }
}

export default PitchGuage;
