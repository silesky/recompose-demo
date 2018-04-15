import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
const AppHoc = ({ counter, add, name }) => (
  <div>
    <h2>{name}</h2>
    <h1>counter: {counter}</h1>
    <button onClick={add}>+</button>
  </div>
);
/*
higher order component example
*/
const withCounterState = (MyComponent) => {
  return class Wrapped extends Component {
    state = {
      counter: 0,
    };
    add = () => this.setState(state => ({ counter: state.counter + 1 }));
    render() {
      return (
        <MyComponent
          counter={this.state.counter}
          add={this.add}
          {...this.props}
        />
      );
    }
  };
};

const NewApp = withCounterState(AppHoc);
const AppWithProps = () => <NewApp name="seth" />;
export default AppWithProps;
