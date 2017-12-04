import React, { Component } from 'react';
import './Gauge.css';

class Guage extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.getType.bind(this);
  // }

  render() {
    return (
      <div className={this.props.className.concat(' gauge')}>
        {this.props.children}
      </div>
    );
  }
}

export default Guage;
