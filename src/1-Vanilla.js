import React, { Component } from 'react';


/*
abstracting out the state handling logic and turnning it into an HOC
*/
const withCounterState = (MyComponent) => {
  return class extends Component {
    state = {
      counter: 0,
    };
    add = () => this.setState(state => ({ counter: state.counter + 1 }));
    render() {
      return (
        <MyComponent
          {...this.props}
          counter={this.state.counter}
          add={this.add}
        />
      );
    }
  };
};

// Counter as stateless component.

export const CounterStateless = ({ counter, add }) => (
  <div>
    <h1>counter: {counter}</h1>
    <button onClick={add}>+</button>
  </div>
);

// use withCounterState to inject our state handling stuff into our stateless component

export const EnhancedCounter = withCounterState(CounterStateless);
export default EnhancedCounter;
