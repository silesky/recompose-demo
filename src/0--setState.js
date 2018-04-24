import React, { Component } from 'react';

/* boring vanilla counter using 'native state' */
export class Counter extends Component {
  state = {
    counter: 0,
  };
  add = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    return (
      <div>
        <h1>counter: {this.state.counter}</h1>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
