import React from 'react';
import { withReducer, compose } from 'recompose';

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const CounterStateless = ({ add, counter }) => (
  <div>
    <h1>counter: {counter}</h1>
    <button onClick={add}>+</button>
  </div>
);

const withCounterReducer = withReducer('state', 'dispatch', reducer);
const withMappedProps = (({ state, dispatch }) => ({
  add: () => dispatch({ type: 'ADD' }),
  counter: state.counter,
}));

const withLogic = compose(withCounterReducer, withMappedProps);

export default withLogic(CounterStateless);
