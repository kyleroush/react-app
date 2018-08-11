import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);

    this.updateType = this.updateType.bind(this);


    this.state = {
      type: props.type
    }
  }

  updateType(type) {
    this.setState((prevState, props) => ({
      type: type
    }));
  }

  render() {
    var squareStyle = {
      border: '1px solid black',
      width: '20px',
      height: '20px',
      display: 'inline-block'
    };
    if (this.state.type === 1) {
      squareStyle['backgroundColor']= 'coral';
    } else if (this.state.type === 2) {
      squareStyle['backgroundColor']= 'black';
    }
    return (
      <div style={squareStyle}/>
    );
  }
}

export default Square;
