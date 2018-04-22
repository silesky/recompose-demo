import React from 'react';
import { withStateHandlers } from 'recompose';

const withCounter = withStateHandlers(
  ({ initialState = 0 }) => ({
    counter: initialState,
  }),
  {
    increment: ({ counter }) => () => ({ counter: counter + 1 }),
  },
);

const Counter = withCounter(({ counter, add }) => {
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={add}>+</button>
    </div>
  );
});

export default Counter;
