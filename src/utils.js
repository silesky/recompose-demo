import { withStateHandlers } from 'recompose';

const pipe = arr => arg => arr.reduce((accum, fn) => fn(accum), arg);

export const withCounterState = withStateHandlers(
  { counter: 0 },
  {
    add: state => () => ({ counter: state.counter + 1 }),
  },
);

export const fetchDataFromApi = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3]);
  }, 500);
});
