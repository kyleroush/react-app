import React, { Component } from 'react';
import Board from './Board.js';
import './index.css';
import { Button, ListItemText, MenuItem, MenuList } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: [...Array(6)].map(e => Array(7).fill(null)),
          xpos: undefined,
          ypos: undefined
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      winner: undefined
    };
  }

  calculateWinner(squares, i, j) {
    const lines = [
      [1,-1],[1,0],[1,1],
      [0,-1],[0,1],
      [-1,1],[-1,0],[-1,-1]];

    if(i === undefined || j === undefined) {
      return false;
    }

    var spot = squares[i][j]

    if(spot === null) {
      return false;
    }

    for (var pair in lines) {
      const [x, y] = lines[pair];
      var matched = true
      for (var v in [0,1,2,3]) {
        var ii = i + (x * v);
        var jj = j + (y * v);
        if (ii<0 || jj<0 || ii>=squares.length||jj>=squares[i].length) {
          matched = false;
          break
        } else if(spot !== squares[ii][jj]) {
          matched = false;
          break;
        }
      }
      if(matched) {
        console.log("loc " + i + ", " + j)
        console.log("dir " + x + ", " + y)
        return true;
      }
    }
    return false;
  }

  handleClick(i, j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));
    if (this.state.winner) {
      return;
    }

    var placed = false;
    [...Array(6).keys()].reverse().forEach((a)=> {
      if(!squares[a][j] && !placed) {
        squares[a][j] = this.state.xIsNext ? "X" : "O";
        placed = true;
        i = a;
      }
    });
    if (!placed) {
      return;
    }

    var winner = this.calculateWinner(squares, i, j)

    this.setState({
      history: history.concat([
        {
          squares: squares,
          xpos: i,
          ypos: j
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winner: winner
    });
  }

  jumpTo(step) {
    this.setState(function (state, props) {
      return {
        stepNumber: step,
        xIsNext: (step % 2) === 0,
        winner: this.calculateWinner(state.history[step].squares, state.history[step].xpos, state.history[step].ypos)
      }
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <MenuItem onClick={() => this.jumpTo(move)} >
          <ListItemText primary={desc} />
        </MenuItem>
      );
    });

    let status;
    if (this.state.winner) {
      status = "Winner: " + (this.state.xIsNext ? "O" : "X");
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <MenuList>{moves}</MenuList>
        </div>
      </div>
    );
  }
}

export default App;
