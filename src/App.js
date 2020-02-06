import React, {Component} from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state={
      count: 0,
    }
}

// This where methods live
// no need to assign variable cuz in a class
increment = () => {
  this.setState ({
    count: this.state.count + 1,
  })
}

decrement = () => {
  this.setState ({
    count: this.state.count - 1,
  })
}


  render(){
    return (
      <div className="container">
      <div className="navbar">Counter</div>
      <div className="counter">
        <h1>{this.state.count}</h1> {/*anytime the count changes, it appears here  */}
        <button type="button" onClick={this.increment}>Increment</button>
        <button type="button" onClick={this.decrement}>Decrement</button>
        {/*<button type="button" onClick={this.decrement}>Restart</button> */}
        </div>
      </div>
    )
  }
};

export default Counter;
