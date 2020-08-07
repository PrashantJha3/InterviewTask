import React, { Component } from 'react';
 
class Parameter extends Component {
  render() {
    return (
      <div>
        Parameter:
        <button onClick={() => this.props.update('Parameter')}>
          Parameter
        </button>
      </div>
    );
  }
}
 
export default Parameter;