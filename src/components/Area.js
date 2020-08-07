import React, { Component } from 'react';
 
class Area extends Component {
  render() {
    return (
      <div>
        Area:
        <button onClick={() => this.props.update('Area')}>
          Area
        </button>
      </div>
    );
  }
}
 
export default Area;