import React, { Component } from 'react';
import Square from './Square.js';
import { UP, DOWN, LEFT, RIGHT, SPACE } from './Keys.js';

class Board extends Component {
  constructor() {
    super();
    // TODO: add view Size
    // TODO: add sqaure size param

    this.row = [];
    this.rowStyle = {
      height: '20px',
    };
    this.boardStyle = {
      border: '1px solid black',
      display: 'inline-block'
    };
    this.oldmap = [
      [2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,1,0,1,1,0,1,1,0,1,1,0,2],
      [2,2,1,2,1,0,1,1,2,1,1,0,2],
      [2,2,1,2,1,0,1,1,0,1,1,0,2],
      [2,2,1,2,1,0,1,1,0,1,1,0,2],
      [2,2,1,2,1,0,1,1,0,1,1,0,2],
      [2,0,1,2,1,0,1,1,0,1,1,0,2],
      [2,0,1,2,1,0,1,1,0,1,1,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2],
    ];
    const map = [
      [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];
    this.xpos = 0;
    this.ypos = 0;

    this.state = {
      dataMap: this.oldmap,
    };
  }

  render() {
    this.row = this.state.dataMap.map((r, i) => {
      const col = r.map((c, j) => {
        return <Square key={`square-col-${i}-row-${j}`} row={i} col={j} type={c}/>;
      });
      return <div key={`row-${i}`} style={this.rowStyle}> {col} </ div>;
    });

    return <div style={this.boardStyle} > {this.row} </ div>;
  }

  keyDown = e => {
    // Prevent page from scrolling when pressing arrow keys
    if ([UP, DOWN, LEFT, RIGHT, SPACE].indexOf(e.keyCode) !== -1) {
      e.preventDefault();
    }
    var xprev = this.xpos;
    var yprev = this.ypos;
    switch (e.keyCode) {
      case DOWN:
        this.ypos = this.ypos - 1;
        break;
      case UP:
        this.ypos = this.ypos + 1;
        break;
      case LEFT:
        this.xpos = this.xpos - 1;
        break;
      case RIGHT:
        this.xpos = this.xpos + 1;
        break;
      default:
    }

    this.setState((prevState, props) => {
      var newMap = prevState.dataMap.slice();
      newMap[xprev][yprev] = 0;
      newMap[this.xpos][this.ypos] = 2;
      return {dataMap: this.oldmap};
    });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }
}

export default Board;
