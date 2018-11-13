import React, { Component } from 'react';

class DisplayTotal extends Component {
  render() {
    return (
      <div id='total'>Current Total = {this.props.total}</div>
    );
  }
}
export default DisplayTotal;
