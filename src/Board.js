import React, { Component } from 'react';
import Square from './Square.js';

// Uplift to take in a map of squares and a render function
// The render function take in the value of the square an the x and y and returns a value
// Have the ability to override the loop function to loop and render the squares
class Board extends Component {
  renderSquare(i, j) {
    return (
      <Square key={i+","+j}
        value={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i, j)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">

          {this.props.squares.map((col, i)=>{
            let c = col.map((val, j) => {
              return (this.renderSquare(i, j))
            })
            return <div key={"row" + i} className="board-row">{c}</div>;
          })}
        </div>
      </div>
    );
  }
}


export default Board;
