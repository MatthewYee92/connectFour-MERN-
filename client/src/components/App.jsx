import React, { Component } from "react";
// import our game board 
import Board from './Board.jsx'
class App extends Component {

    constructor() {
        super()


        this.state = {

        }
    }




  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;
