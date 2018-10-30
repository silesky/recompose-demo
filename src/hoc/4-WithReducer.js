import React from 'react';
import { withReducer, compose, mapProps } from 'recompose';

const CounterStateless = ({ add, counter }) => (
  <div>
    <h1>counter: {counter}</h1>
    <button onClick={add}>+</button>
  </div>
);

export const withLogic = compose(
  withReducer(
    'state',
    'dispatch',
    (state = { counter: 0 }, action) => {
      switch (action.type) {
        case 'ADD':
          return { ...state, counter: state.counter + 1 };
        default:
          return state;
      }
    },
  ),
  mapProps(({ state, dispatch }) => ({
    add: () => dispatch({ type: 'ADD' }),
    counter: state.counter,
  })),
);

export default withLogic(CounterStateless);
