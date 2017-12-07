import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Gauge.css';

class Guage extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    transform: PropTypes.number.isRequired,
    warning: PropTypes.string.isRequired
  }

  render() {

    let warningIndicator = 'green';

    switch(this.props.warning) {
      case 'warning':
        warningIndicator = 'yellow';
        break;
      case 'alarm':
        warningIndicator = 'red';
        break;
      default:
        warningIndicator = 'green';
    }

    return (
      <div className={this.props.className}>
        <div className={'gauge'} style={{transform: `rotate(${this.props.transform}deg)`, borderColor: warningIndicator}}>
          {this.props.children}
        </div>
        <div className={'earth'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Guage;
