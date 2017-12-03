import React, { Component } from 'react';
import Guage from '../containers/Guage';
// import './PitchGuage.css';

class PitchGuage extends Component {
  render() {
    return (
      <Guage className="pitch-gauge">
        Pitch
      </Guage>
    );
  }
}

export default PitchGuage;
