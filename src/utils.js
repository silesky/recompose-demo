import { withStateHandlers } from 'recompose';
import React from 'react';
import { PacmanLoader } from 'react-spinners';

const pipe = arr => arg => arr.reduce((accum, fn) => fn(accum), arg);

export const withCounterState = withStateHandlers(
  { counter: 0 },
  {
    add: state => () => ({ counter: state.counter + 1 }),
  },
);

export const fetchDataFromApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 1500);
  });

export const Spinner = () => (
  <div className="spinner">
    <PacmanLoader />
  </div>
);
