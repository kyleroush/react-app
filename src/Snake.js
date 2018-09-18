import React, { Component } from 'react';
import Board from './Board.js';
import './index.css';

class Snake extends Component {
  constructor(props) {
    super(props);
    this.timmer;
    this.state = {
        squares: [...Array(15)].map(e => Array(15).fill(null)),
        lost: false,
        dir: undefined,
        head: {
            xpos: 5,
            ypos: 5
        },
        food: {
            xpos: 5,
            ypos: 5
        },
        tail: [
            {
                xpos: 5,
                ypos: 5
            }
        ]
    };
  }

  start() {
    this.timmer = setInterval(() => this.move(), 3000);
    var squares = [...Array(15)].map(e => Array(15).fill(null))
    squares[5][5] = 'H';
    this.setState({
        squares: squares,
        lost: false,
        dir: 'left',
        head: {
            xpos: 5,
            ypos: 5
        },
        food: {
            xpos: 1,
            ypos: 1
        },
        tail: [
            {
                xpos: 5,
                ypos: 5
            }
        ]
    });
  }

  changeDir(button) {
    var dir;
    if(button === 37) {
        dir='left';
    } else if(button === 39) {
        dir='right';
    } else if(button === 38) {
        dir='up';
    } else if(button === 40) {
        dir='down';
    } else {
        return;
    }

    this.state.setState({
        dir: dir
    });
  }

  getRandom(max) {
      return  Math.floor(Math.random() * max); 
  }

  consume(xsize, ysize, squares) {
    let i = this.getRandom(xsize), j  = this.getRandom(ysize)
    for (; squares[i][j] != undefined; i = this.getRandom(xsize), j  = this.getRandom(ysize));
    return({
        xpos: i,
        ypos: j
    });
  }

  move() {
    if(this.state.lost === true) {
        return;
    }

    var oldHead = Object.assign({}, this.state.head);
    var newHead = Object.assign({}, this.state.head);
    var squares = Object.assign([], this.state.squares);
    var food    = Object.assign({}, this.state.food);

    var dir = this.state.dir;
    if(dir === 'left' ) {
        newHead.xpos--;
    } else if(dir === 'right' ) {
        newHead.xpos++;
    } else if(dir === 'up' ) {
        newHead.ypos--;
    } else if(dir === 'down' ) {
        newHead.ypos++;
    } else {
        return;
    }

    // check to see if the head collided with any walls or its tail
    if(Board.isOutOfBounds(squares, newHead.xpos,newHead.ypos) || 
            squares[newHead.xpos][newHead.ypos] === 'T' || 
            squares[newHead.xpos][newHead.ypos] === 'H') {
        this.setState({
            lost: true
        });
        clearInterval(this.timmer);
        return;
    }

    //move the head
    var butt = this.state.tail[0];
    var newTail = this.state.tail.slice(1);
    newTail.push(newHead);

    //is food eaten if so get foods new location
    if(food.xpos === newHead.xpos && food.pos === newHead.ypos) {
        food = this.consume(squares.length, squares[0].length, squares);
    }

    squares[butt.xpos][butt.ypos] = undefined; // remove the end of the tail
    squares[oldHead.xpos][oldHead.ypos] = 'T'; // make the old head part of the tail 
    squares[newHead.xpos][newHead.ypos] = 'H'; //render the head of the snake
    squares[food.xpos][food.ypos] = 'F'; //render the food

    // update the state
    this.setState({
        squares: squares,
        head: newHead, 
        tail: newTail,
        food: food
    });
  }

  render() {
    var squares = this.state.squares;

    var score = this.state.tail.length;
    var toStart = <button onClick={() => this.start()}>start</button>
    // need to render the board
    return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={squares} 
                onClick={(i, j) => console.log(i, j)}
                />
          </div>
        
          <div className="game-info">
            <div>{score}</div>
            <div>{toStart}</div>
          </div>
        </div>
      );
  }
}

export default Snake;
