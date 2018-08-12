import React, { Component } from 'react';
import Square from './Square.js';

class Board extends React.Component {
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
