import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
  }
  render() {
    return (

      <h1>{ counter }</h1>
    );
  }
}

export default App;
