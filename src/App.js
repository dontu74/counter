import React, {Component} from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state={
      count: 0,
      doubleCount: false,
    }
}

// This where methods live
// no need to assign variable cuz in a class
increment = () => {
  if (this.state.count < 20)  {
    this.setState ({ /*create a condition for the increment that does not pass 20 */
      count: this.state.count + 1,
    })
  }
  if (this.state.doubleCount && this.state.count < 19) {
    this.setState({
      count: this.state.count+2,
    })
  }
}

decrement = () => {
  if (this.state.count > 0) {
    this.setState ({
      count: this.state.count - 1,
    })
  }
  if (this.state.doubleCount) {
      if (this.state.count > 1) {
        this.setState({
          count: this.state.count - 2,
        })
      }
    }
}
reset = () => {
  this.setState ({
    count: this.state.count=0,
  })
}

double = () => {
    if (this.state.doubleCount) {
      this.setState({
        doubleCount: false,
      })
    } else {
      this.setState({
        doubleCount: true,
      })
    }
  }


  render(){
    return (
      <div className="container">
      <div className="navbar">Counter</div>
      <div className="counter">
        <h1>{this.state.count}</h1> {/*anytime the count changes, it appears here  */}
        <button type="button" onClick={this.increment}>Increment</button>
        <button type="button" onClick={this.decrement}>Decrement</button>
        <button type="button" onClick={this.reset}>Restart</button>
        <button type="button" onClick={this.double}>{this.state.doubleCount ? 'Double Count' : 'Single Count'}</button>
        {/*iterary statement. conditional rendering: teranry statement */}
        </div>
      </div>
    )
  }
};

export default Counter;
