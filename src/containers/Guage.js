import React, { Component } from 'react';
import './Guage.css';

class Guage extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.getType.bind(this);
  // }

  render() {
    return (
      <div className="gauge">
        {this.props.children}
      </div>
    );
  }
}

export default Guage;
